import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

// 👇 ここからSEO設定
export const metadata: Metadata = {
  // 1. タイトル（ブラウザのタブや検索結果のタイトル）
  title: {
    default: "RAMEN MONDAY | 東京理科大生が作る月曜限定ラーメン (千葉県野田市)",
    template: "%s | RAMEN MONDAY",
  },

  // 2. 説明文（検索結果の下に表示される文章）
  // 重要なキーワードを自然な文章の中に盛り込んでいます
  description: "千葉県野田市で月曜限定営業するラーメン店。東京理科大のラーメンサークル所属の学生が本気で作る「濃厚鶏ラーメン」「塩だれとんづけ」を提供。二代目麺屋こうじにて週1日のみの限定営業。学生起業・学生プロジェクトとして挑戦中。",

  // 3. キーワードタグ（指定されたすべてのタグを設定）
  keywords: [
    // 理科大・学生SEO
    "東京理科大 ラーメン", "理科大 ラーメンサークル", "理科大生 ラーメン",
    "理科大 起業 学生", "理科大 野田 ランチ", "野田キャンパス ラーメン",
    "学生が作るラーメン", "学生経営 ラーメン屋", "学生プロジェクト ラーメン",
    "学生主体 ラーメン", "学生 チャレンジ ラーメン",
    "ラーメンサークル ラーメン屋", "学生ラーメンサークル",
    // メインSEO
    "ラーメン", "野田市 ラーメン", "月曜限定 ラーメン", "学生 ラーメン屋",
    "RAMEN MONDAY", "二代目麺屋こうじ", "濃厚鶏ラーメン", "塩だれ とんづけ",
    // 地域SEO
    "野田市 ランチ", "野田市 ディナー", "野田市 グルメ", "野田市 ラーメン 人気",
    // 差別化SEO
    "限定営業 ラーメン", "手作りスープ ラーメン", "週替わり ラーメン",
    // SNS強化
    "Instagram ラーメン", "X ラーメン", "SNS映え ラーメン"
  ],

  // 4. SNS強化（Instagram, X, LINEなどでシェアされた時の見え方）
  openGraph: {
    title: "RAMEN MONDAY | 月曜しか会えない、学生の本気ラーメン",
    description: "東京理科大生が運営する月曜限定のラーメン店。野田市「二代目麺屋こうじ」にて営業中。",
    url: "https://monday.ramencircle.com", // あなたのサイトURL
    siteName: "RAMEN MONDAY",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.png", // 手順1で配置した画像
        width: 1200,
        height: 630,
        alt: "RAMEN MONDAY 店内の様子とラーメン",
      },
    ],
  },

  // 5. X（旧Twitter）用カード設定
  twitter: {
    card: "summary_large_image", // 大きな画像で表示
    title: "RAMEN MONDAY | 月曜しか会えない学生ラーメン",
    description: "東京理科大生が作る、週1日の本気の一杯。千葉県野田市で営業中。",
    images: ["/ogp.png"], // 手順1で配置した画像
  },

  // 基本設定（サイトのベースURL）
  metadataBase: new URL("https://monday.ramencircle.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}