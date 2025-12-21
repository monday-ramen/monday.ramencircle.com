"use client";

import { motion } from "motion/react";
import React from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/c2e8793095e2dc851257f0457e94cde615331069.png";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="麺上げの瞬間"
          className="w-full h-full object-cover"
          style={{
            filter: "saturate(0.9) contrast(1.1)",
          }}
        />
        {/* 心理学的グラデーション：上から60%、中央40% */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
            月曜しか会えないラーメン、あります。
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            学生が本気で作る、週1日の挑戦
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12"
        >
          <button
            onClick={scrollToStory}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C62A2A] hover:bg-[#A02222] transition-colors rounded"
          >
            ストーリーを見る
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* スクロール促進アニメーション */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}