import image_5cb6fa8e8afaa654e9340d3432b6a715f7bdf1df from '@/assets/5cb6fa8e8afaa654e9340d3432b6a715f7bdf1df.png';
import image_a6a19dfc227523e05970a799c83a77279a777793 from '@/assets/a6a19dfc227523e05970a799c83a77279a777793.png';
import { motion } from "motion/react";
import { Newspaper, Radio, MessageCircle } from "lucide-react";
import radioImage from "@/assets/9f4ebce60440ba5d80877da3f97af5d96bc51d85.png";
import gogaiNetImage from "@/assets/72b7618f36abca1adf83316d6c81e511b645ba7a.png";

const mediaFeatures = [
  {
    type: "news",
    title: "理科大生が運営する月曜日限定のラーメン屋さんがついにオープン",
    source: "号外NET 野田市",
    date: "2024.10",
    image: gogaiNetImage,
    icon: Newspaper,
    link: "https://nagareyama-noda.goguynet.jp/2025/10/13/rikadaiseiramen-2/",
  },
  {
    type: "news",
    title: "東京理科大生が野田でラーメン店　サークルメンバーら、好きが高じて週1で営業",
    source: "朝日れすかPLUS",
    date: "2025.10.06",
    image: image_a6a19dfc227523e05970a799c83a77279a777793,
    icon: Newspaper,
    link: "https://resuka.co.jp/townnews/2025/10/3793/",
  },
  {
    type: "radio",
    title: "学生ラーメン店の挑戦が全国ラジオで紹介",
    source: "ニッポン放送 ZOOM",
    date: "2025.10",
    image: radioImage,
    icon: Radio,
    link: "https://www.1242.com/zoom/zoom_blog/blog20251020-348555/",
  },
  {
    type: "social",
    title: "「月曜だけなのにこんなに並ぶなんて」",
    source: "SNS・口コミより",
    date: "2025",
    image: image_5cb6fa8e8afaa654e9340d3432b6a715f7bdf1df,
    icon: MessageCircle,
    link: undefined,
  },
];

export default function SeenOn() {
  return (
    <section className="relative bg-black">
      {/* ヒーローセクション：行列の写真 + キャッチコピー */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src={image_5cb6fa8e8afaa654e9340d3432b6a715f7bdf1df}
            alt="行列の様子"
            className="w-full h-full object-cover"
          />
          {/* グラデーションオーバーレイ（上から40%） */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        {/* キャッチコピー */}
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center max-w-4xl"
          >
            {/* メインコピー */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              気づけば、月曜が
              <br />
              <span className="text-[#C62A2A]">行列の理由</span>
              になりました。
            </h2>

            {/* サブコピー */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              学生の挑戦を、待ってくれる人がいる。
              <br />
              多くの人に応援されながら、月曜だけの挑戦は続いています。
            </p>
          </motion.div>
        </div>
      </div>

      {/* メディア掲載セクション */}
      <div className="py-24 px-4 bg-gradient-to-b from-black to-[#1a0a0a]">
        <div className="max-w-6xl mx-auto">
          {/* セクションヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* 赤ライン */}
            <div className="w-24 h-0.5 bg-[#C62A2A] mx-auto mb-6" />

            <h3 className="text-4xl md:text-5xl mb-3 tracking-wide">In the Media</h3>

            <p className="text-[#BDBDBD] text-lg max-w-2xl mx-auto leading-relaxed">
              メディアにも多数取り上げられ、注目が高まっています。
            </p>
          </motion.div>

          {/* メディアカードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {mediaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const CardContent = (
                <>
                  {/* 画像セクション */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* アイコンバッジ */}
                    <div className="absolute top-4 right-4 bg-[#C62A2A] p-2.5 rounded-full">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* テキストセクション */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* タイプタグ */}
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 mb-3 self-start">
                      {feature.source}
                    </div>

                    {/* タイトル */}
                    <h4 className="text-lg md:text-xl mb-3 leading-snug flex-1">
                      {feature.title}
                    </h4>

                    {/* 日付 */}
                    <p className="text-sm text-gray-500">{feature.date}</p>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  {/* カード */}
                  {feature.link ? (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C62A2A]/40 transition-all duration-300 h-full flex flex-col block cursor-pointer"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C62A2A]/40 transition-all duration-300 h-full flex flex-col">
                      {CardContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ボトムメッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-6 py-3 bg-[#C62A2A]/10 border border-[#C62A2A]/30 rounded-full">
              <p className="text-[#C62A2A] text-sm md:text-base">
                「気づけば並んでいた」と言われる店になりました。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}