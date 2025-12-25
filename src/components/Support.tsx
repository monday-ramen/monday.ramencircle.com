"use client";

import { motion } from "framer-motion";
import { Quote, Heart, Instagram } from "lucide-react";
import XLogo from "./icons/XLogo";

const testimonials = [
  {
    id: 1,
    text: "今日も学生さんが丁寧に作っていました。\n気持ちが伝わる味で、つい応援したくなります。",
    author: "30代 会社員",
    date: "2025年11月",
  },
  {
    id: 2,
    text: "前に来た時より味がまとまっていて驚きました。\n一杯ごとに成長しているのが分かるお店です。",
    author: "20代 学生",
    date: "2025年10月",
  },
  {
    id: 3,
    text: "月曜が楽しみになりました。\n続けていく姿が頼もしくて、これからも応援したい気持ちになります。",
    author: "40代 主婦",
    date: "2025年11月",
  },
];

export default function Support() {
  return (
    <section id="support" className="py-24 px-4 bg-gradient-to-b from-black to-[#1a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">応援の声</h2>
          <div className="w-24 h-1 bg-[#C62A2A] mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            あなたの一杯が、学生の挑戦を支えています。
          </p>
        </motion.div>

        {/* 口コミカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C62A2A] opacity-20" />
              <p
                className="text-gray-300 mb-4 whitespace-pre-line"
                style={{ lineHeight: '1.5' }}
              >
                {testimonial.text}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{testimonial.author}</span>
                <span>{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SNSセクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#C62A2A]/10 border border-[#C62A2A]/30 rounded-lg p-8 text-center"
        >
          <Heart className="w-12 h-12 text-[#C62A2A] mx-auto mb-4" />
          <h3 className="text-2xl mb-3">学生の挑戦を応援しませんか？</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            SNSでのシェアや、お店での応援、すべてが僕らの励みになります。
            月曜日、お待ちしています。
          </p>

          {/* SNSボタン */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://x.com/ramen_monday_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 transition-colors rounded border border-white/20"
            >
              <XLogo className="w-5 h-5" />
              X でフォロー
            </a>
            <a
              href="https://www.instagram.com/ramen_monday_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors rounded"
            >
              <Instagram className="w-5 h-5" />
              Instagram でフォロー
            </a>
          </div>
        </motion.div>

        {/* ハッシュタグ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center text-gray-500"
        >
          <p className="text-lg">#RAMENMONDAY #月曜ラーメン #学生の挑戦</p>
        </motion.div>
      </div>
    </section>
  );
}