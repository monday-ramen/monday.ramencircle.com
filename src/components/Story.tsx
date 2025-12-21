"use client";

import { motion } from "framer-motion";
import React from "react";
import img2022 from "@/assets/f11dcc26051b1eee1910bff26606051b62d412ec.png";
import img2023 from "@/assets/e5a5c46aed2d6bbdd39d64ea4c6a90a4bf56df9f.png";
import img2024 from "@/assets/dcfc18b6194c46fc3117fbd93b6ca877d26dd0da.png";
import img2025 from "@/assets/b7a0e16bf21266c7ddb8514f4ecb00afd7dd0873.png";
import imgShikomi from "@/assets/b1be7d6ac2587b3c72347cf7838c3cdaa69cd3d5.png";
import imgRamen from "@/assets/f73be0b4590fe864d582c931ffac2914f826bf91.png";

const timeline = [
  {
    title: "ラーメンに出会う",
    description: "深夜のキッチンで初めて炊いたスープが、少しだけ美味しくて嬉しかった。",
    year: "2022",
    image: img2022,
    award: null,
  },
  {
    title: "学園祭で初優勝",
    description: "仲間と試作を重ねて迎えた学園祭。全員でつかんだ初優勝は、今でも僕らの原点。",
    year: "2023",
    image: img2023,
    award: "優秀賞",
  },
  {
    title: "こうじさんとの出会い",
    description: "プロから技術と姿勢を教わり、「本気でやるなら、味にも覚悟を」の言葉が胸に刺さった。プロの教えを胸に味を磨き、NODA産FOODフェスタで最優秀賞（グランプリ）を受賞。",
    year: "2024",
    image: img2024,
    award: "最優秀賞（グランプリ）",
  },
  {
    title: "月曜だけ営業開始",
    description: "日曜の夜から仕込み、朝日が出るころ一杯が完成する。「学生の挑戦を応援したい」そんな声が、僕らの背中を押し続けている。学生営業として挑戦しながらも、NODA産FOODフェスタで優秀賞を獲得。",
    year: "2025",
    image: img2025,
    award: "優秀賞",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 px-4 bg-gradient-to-b from-black to-[#1a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">RAMEN MONDAY とは</h2>
          <div className="w-24 h-1 bg-[#C62A2A] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            なぜ月曜だけなのか。その答えは、学生たちが積み重ねてきた挑戦の物語にありました。
          </p>
        </motion.div>

        {/* タイムライン - 画像ベース（ドキュメンタリー風） */}
        <div className="space-y-16 md:space-y-24">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
            >
              {/* 写真セクション */}
              <div className="w-full md:w-1/2 relative group">
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    style={
                      item.year === "2022"
                        ? {
                          filter: "saturate(0.85) contrast(1.15) brightness(0.95)",
                        }
                        : item.year === "2023"
                          ? {
                            filter: "brightness(0.9) contrast(1.05)",
                          }
                          : undefined
                    }
                  />
                  {/* 年号オーバーレイ（写真の上） */}
                  <div className="absolute top-6 left-6">
                    <span className="text-6xl md:text-7xl text-white/20 font-black">
                      {item.year}
                    </span>
                  </div>
                  {/* グラデーション（写真の魅力を最大化） */}
                  <div
                    className={`absolute inset-0 ${item.year === "2022"
                      ? "bg-gradient-to-t from-black/70 via-black/20 to-black/30"
                      : item.year === "2023"
                        ? "bg-gradient-to-t from-black/40 via-transparent to-black/20"
                        : "bg-gradient-to-t from-black/60 via-transparent to-black/20"
                      }`}
                  />
                </div>
              </div>

              {/* テキストセクション */}
              <div className="w-full md:w-1/2 space-y-4">
                {/* 受賞バッジ */}
                {item.award && (
                  <div className="flex flex-wrap gap-2">
                    <div
                      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm ${item.award === "最優秀賞（グランプリ）"
                        ? "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/50 text-yellow-400"
                        : "bg-white/10 border border-white/30 text-white"
                        }`}
                    >
                      <span>🏆</span>
                      <span>{item.award}</span>
                    </div>
                  </div>
                )}

                {/* 年号（モバイル用） */}
                <div className="text-4xl text-[#C62A2A] font-black md:hidden">
                  {item.year}
                </div>

                {/* タイトル */}
                <h3 className="text-3xl md:text-4xl">{item.title}</h3>

                {/* ストーリー */}
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-story">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 画像セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* 仕込みの様子 */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden group">
            <img
              src={imgShikomi}
              alt="仕込みの様子"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* 心理学的に最適化したグラデーション（暗め＋下から） */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* 二段構成テキスト（左下配置） */}
            <div className="absolute bottom-0 left-0 p-6 space-y-2">
              <h3 className="text-2xl md:text-3xl">仕込みの様子</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md">
                月曜の一杯のために、学生が毎週コツコツ準備しています。<br />
                あなたの一杯が、僕らの挑戦を支えています。
              </p>
            </div>
          </div>

          {/* 僕らの自信作 */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden group">
            <img
              src={imgRamen}
              alt="完成したラーメン"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* 心理学的に最適化したグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* 二段構成テキスト（左下配置） */}
            <div className="absolute bottom-0 left-0 p-6 space-y-2">
              <h3 className="text-2xl md:text-3xl">僕らの自信作</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md">
                失敗しながら、工夫しながら。<br />
                今日も美味しい一杯を目指しています。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}