import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的サイトとして出力する設定
  output: "export",
  
  // XREAなど画像最適化サーバーが使えない環境用の設定
  images: {
    unoptimized: true,
  },

  // リンクの挙動を安定させる（/about/index.html のように出力する）
  trailingSlash: true,
};

export default nextConfig;