"use client";

import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  representative?: string;
}

// 協賛者データ
const platinumSponsors: Sponsor[] = [
  {
    name: "株式会社 岩井流通サービス",
    representative: "富岡 豊",
  },
];

const goldSponsors: Sponsor[] = [
  {
    name: "株式会社 鴻狩商店",
    representative: "鴻狩 真義",
  },
];

const silverSponsors: Sponsor[] = [
  {
    name: "有限会社 宮崎商店",
    representative: "宮崎 崇之",
  },
  {
    name: "株式会社 虹建",
    representative: "江田 和輝",
  },
  {
    name: "理科大ラーメンサークル",
    representative: "上野 雄佑",
  },
  {
    name: "孝和商事株式会社",
    representative: "染谷 義孝",
  },
  {
    name: "窪田味噌醤油株式会社",
  },
  {
    name: "NPO法人 Earth as Mother千葉",
    representative: "浅野 泰泉",
  },
  {
    name: "NPO法人 Earth as Mother千葉",
    representative: "侍山 弘",
  },
  {
    name: "有限会社 コスモス環境サービス",
    representative: "永見 久雄",
  },
  {
    name: "上原人形店",
    representative: "上原 雄一郎",
  },
  {
    name: "株式会社 エイ・エフロジテム",
    representative: "戸邉 安徳",
  },
  {
    name: "株式会社 寿工業",
    representative: "保延 和",
  },
  {
    name: "CAMPFIRE",
    representative: "Michi",
  },
  {
    name: "CAMPFIRE",
    representative: "カズキタ",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 px-4 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">協賛企業・協賛者様</h2>
          <div className="w-24 h-1 bg-[#C62A2A] mx-auto mb-6" />
          <p className="text-white/80 text-lg" style={{ lineHeight: '1.5' }}>
            私たち学生の挑戦は、多くの皆さまのご支援に支えられています。
          </p>
        </motion.div>

        {/* Platinum スポンサー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3
            className="text-center mb-12"
            style={{ fontSize: '24px', color: '#D7C38A', lineHeight: '1.5' }}
          >
            Platinum
          </h3>
          <div className="text-center space-y-3">
            {platinumSponsors.map((sponsor, index) => (
              <div key={index}>
                <p
                  className="text-white/90"
                  style={{ fontSize: '32px', lineHeight: '1.5' }}
                >
                  {sponsor.name}
                </p>
                {sponsor.representative && (
                  <p
                    className="text-white/85"
                    style={{ fontSize: '28px', lineHeight: '1.5' }}
                  >
                    {sponsor.representative} 様
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gold スポンサー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h3
            className="text-center mb-10"
            style={{ fontSize: '22px', color: '#E0C777', lineHeight: '1.5' }}
          >
            Gold
          </h3>
          <div className="text-center space-y-2">
            {goldSponsors.map((sponsor, index) => (
              <div key={index}>
                <p
                  className="text-white/90"
                  style={{ fontSize: '26px', lineHeight: '1.5' }}
                >
                  {sponsor.name}
                </p>
                {sponsor.representative && (
                  <p
                    className="text-white/85"
                    style={{ fontSize: '22px', lineHeight: '1.5' }}
                  >
                    {sponsor.representative} 様
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Silver スポンサー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3
            className="text-center mb-8"
            style={{ fontSize: '20px', color: '#C0C0C0', lineHeight: '1.5' }}
          >
            Silver
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {silverSponsors.map((sponsor, index) => (
              <p
                key={index}
                className="text-white/90"
                style={{ fontSize: '18px', lineHeight: '1.5' }}
              >
                {sponsor.name}　{sponsor.representative && `${sponsor.representative} 様`}
              </p>
            ))}
          </div>
        </motion.div>

        {/* 感謝メッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white/70 text-lg" style={{ lineHeight: '1.5' }}>
            皆さまからのご支援が、学生たちの挑戦を前へ進めています。<br />
            心より感謝申し上げます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}