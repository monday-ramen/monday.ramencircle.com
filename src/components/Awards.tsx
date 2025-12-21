"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function Awards() {
  const awards = [
    { year: "2023", title: "優秀賞", isGrand: false },
    { year: "2024", title: "最優秀賞（グランプリ）", isGrand: true },
    { year: "2025", title: "優秀賞", isGrand: false },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black via-[#0A0A0A]/95 to-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl p-8 md:p-10 border border-white/10"
        >
          {/* タイトル */}
          <div className="text-center mb-8">
            <p className="text-sm md:text-base text-gray-400 mb-3 tracking-wide" style={{ lineHeight: '1.4' }}>
              地域に愛された味
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#E4B83A' }} />
              <h2 className="text-2xl md:text-3xl text-white" style={{ lineHeight: '1.35' }}>
                NODA産FOODフェスタ 受賞歴
              </h2>
              <Trophy className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#E4B83A' }} />
            </div>
          </div>

          {/* 受賞リスト（横並び） */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.year}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl p-6 text-center transition-all duration-300 ${award.isGrand
                    ? "bg-gradient-to-br from-[#FFCC4D]/20 via-[#E4B83A]/10 to-[#8F6A17]/20 border-2 transform md:scale-[1.12]"
                    : "bg-white/5 border border-white/20 hover:bg-white/10"
                  }`}
                style={
                  award.isGrand
                    ? {
                      borderColor: 'rgba(228, 184, 58, 0.5)',
                      boxShadow: '0 0 60px rgba(255, 184, 0, 0.15), -8px -8px 35px rgba(228, 184, 58, 0.25), 0 0 10px rgba(228, 184, 58, 0.35)',
                      borderRadius: award.year === '2024' ? '1rem' : '0.75rem',
                      marginTop: index === 0 ? '2px' : index === 2 ? '3px' : '0',
                    }
                    : {
                      marginTop: index === 0 ? '2px' : index === 2 ? '3px' : '0',
                    }
                }
              >
                {/* グランプリの特別マーク */}
                {award.isGrand && (
                  <div
                    className="absolute -top-3 -right-3 text-black text-xs px-3 py-1 rounded-full transform rotate-12 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #FFCC4D 0%, #E4B83A 50%, #8F6A17 100%)',
                    }}
                  >
                    グランプリ
                  </div>
                )}

                {/* 年号 */}
                <div
                  className={`mb-3 ${award.isGrand ? "" : "text-[#C62A2A]"
                    }`}
                  style={{
                    fontSize: award.isGrand ? '3.5rem' : '3rem',
                    lineHeight: '1',
                    color: award.isGrand
                      ? '#FFCC4D'
                      : award.year === '2023'
                        ? '#B52525'  // 明度-8（暗め）
                        : award.year === '2025'
                          ? '#D13030'  // 明度+8（明るめ）
                          : undefined,
                    textShadow: award.isGrand ? '0 0 20px rgba(255, 204, 77, 0.3)' : undefined,
                  }}
                >
                  {award.year}
                </div>

                {/* トロフィーアイコン */}
                <div
                  className="flex justify-center mb-2"
                  style={{
                    marginTop: award.year === '2023' ? '1px' : award.year === '2025' ? '-2px' : '0',
                  }}
                >
                  <Trophy
                    className={`w-8 h-8 ${award.isGrand ? "" : "text-white/60"
                      }`}
                    style={{
                      color: award.isGrand ? '#E4B83A' : undefined,
                      strokeWidth: award.year === '2023'
                        ? '1.8'
                        : award.year === '2024'
                          ? '2.2'
                          : '2.0',
                    }}
                  />
                </div>

                {/* 受賞名 */}
                <p
                  className={`text-sm md:text-base ${award.isGrand ? "" : "text-gray-300"
                    }`}
                  style={{
                    color: award.isGrand ? '#FFCC4D' : undefined,
                  }}
                >
                  {award.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 補足テキスト */}
          <div className="text-center text-sm md:text-base text-gray-400 leading-relaxed space-y-1">
            <p>地元の皆さまに選ばれ続け、3年連続受賞。</p>
            <p className="text-gray-500">これからも、月曜に一番の一杯を届けます。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}