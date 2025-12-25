param(
    [switch]$RunBuild,  # -RunBuild を指定するとスクリプトの先頭で `npm run build` を実行します。
    [switch]$Strict,    # -Strict を指定すると out 以外のすべてを削除（保持対象を out のみにする）します。
    [switch]$Force      # -Force を指定すると確認プロンプトをスキップして強制実行します（危険）。
)

<#
        flatten-out.ps1

        使い方（プロジェクトルートから PowerShell で実行）:
            # ビルドを実行してからプロンプト表示、デフォルトで .git/.gitignore を保持
            .\scripts\flatten-out.ps1 -RunBuild

            # ビルドを実行し、out のみ保持して他を削除（確認あり）
            .\scripts\flatten-out.ps1 -RunBuild -Strict

            # 非対話で強制実行（危険）
            .\scripts\flatten-out.ps1 -RunBuild -Strict -Force

        動作概要:
            - -RunBuild を指定すると最初に `npm run build` を実行します。
            - デフォルトでは以下を保持します: out, .git, .gitignore, .env.local.example, README.md
            - -Strict を指定すると out のみを保持し、それ以外は削除します。
            - -Force を付けない場合は削除前に確認プロンプトが表示されます。
            - 削除の後、out/* の中身をプロジェクトルートへ移動し、空になった out フォルダを削除します。

        注意: このスクリプトはファイルを完全に削除します。-Force は注意して使用してください。
#>

function Abort([string]$msg) {
    # エラー発生時にメッセージを表示してスクリプトを終了するヘルパー関数
    Write-Error $msg
    exit 1
}

# スクリプトファイルの親ディレクトリ（= プロジェクトルート）へ移動する
Push-Location $PSScriptRoot\.. | Out-Null
# 現在の作業ディレクトリを取得（このスクリプトではプロジェクトルートになる）
$projectRoot = Get-Location

# ルートを表示
Write-Host "Project root: $projectRoot"

if ($RunBuild) {
    # -RunBuild が指定されている場合は npm run build を実行する
    Write-Host "Running: npm run build"
    $build = Start-Process -FilePath "npm" -ArgumentList "run","build" -NoNewWindow -Wait -PassThru
    # ビルドの終了コードをチェックし、失敗なら中断する
    if ($build.ExitCode -ne 0) {
        Abort "npm run build failed with exit code $($build.ExitCode). Aborting."
    }
}

# ここは PowerShell のコメントではない — 修正: use # instead
# 出力先の out ディレクトリのパスを組み立てる
$outPath = Join-Path $projectRoot 'out'
# out が存在しない場合は中断する（ビルドが正しく行われていない可能性がある）
if (-not (Test-Path $outPath)) {
    Abort "Directory 'out' not found in project root. Make sure you ran 'npm run build' that produces an 'out' folder."
}

if ($Strict) {
    # -Strict のときは out のみを保持（配列に 'out' のみを入れる）
    $preserve = @('out')
} else {
    # デフォルトで保持するファイル/ディレクトリ（out と git 関連、サンプル env、README）
    $preserve = @('out', '.git', '.gitignore', '.env.local.example', 'README.md')
}

# 実際に保持するリストを表示
Write-Host "Will preserve: $($preserve -join ', ')"

 # 削除対象: プロジェクト直下にあるアイテムのうち、保持リストに含まれないものを取得
$items = Get-ChildItem -Force | Where-Object { $preserve -notcontains $_.Name }

if ($items.Count -eq 0) {
    # 削除対象がない場合は単に移動処理へ移る
    Write-Host "No files to remove. Proceeding to move contents of 'out' to project root."
} else {
    # 削除対象がある場合は一覧を表示
    Write-Host "The following items will be REMOVED:" -ForegroundColor Yellow
    $items | ForEach-Object { Write-Host "  - " $_.Name }

    # -Force が指定されていない場合はユーザーに確認を求める
    if (-not $Force) {
        $resp = Read-Host "Proceed and delete the above items? Type 'yes' to continue"
        if ($resp -ne 'yes') {
            Abort "Aborted by user. No files were changed."
        }
    }

    # 削除のループ: ファイルかディレクトリかを判定して適切に削除する
    foreach ($it in $items) {
        try {
            if ($it.PSIsContainer) {
                # ディレクトリなら再帰的に削除
                Remove-Item -LiteralPath $it.FullName -Recurse -Force -ErrorAction Stop
            } else {
                # ファイルなら単純に削除
                Remove-Item -LiteralPath $it.FullName -Force -ErrorAction Stop
            }
            Write-Host "Removed: $($it.Name)"
        } catch {
            # 削除失敗時は警告を出すが処理は継続する
            Write-Warning "Failed to remove $($it.Name): $_"
        }
    }
}

# out の中身をプロジェクトルートへ移動する処理
Write-Host "Moving contents of 'out' to project root..."
$outItems = Get-ChildItem -LiteralPath $outPath -Force
foreach ($oi in $outItems) {
    # 移動先のパスを作る（ルート直下に同名で配置）
    $dest = Join-Path $projectRoot $oi.Name
    try {
        if (Test-Path $dest) {
            # 既に移動先に存在する場合は上書きのために先に削除する
            Remove-Item -LiteralPath $dest -Recurse -Force -ErrorAction SilentlyContinue
        }
        # 実際に移動する
        Move-Item -LiteralPath $oi.FullName -Destination $projectRoot -Force
        Write-Host "Moved: $($oi.Name)"
    } catch {
        # 移動に失敗しても処理を続ける
        Write-Warning "Failed to move $($oi.Name): $_"
    }
}

# 空になった out ディレクトリを削除する（存在しなくてもエラーにならない）
try {
    Remove-Item -LiteralPath $outPath -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Removed empty 'out' directory."
} catch {
    Write-Warning "Failed to remove 'out' directory: $_"
}

Write-Host "Done. Project root now contains files from former out directory."

# 元の作業ディレクトリへ戻る
Pop-Location | Out-Null
