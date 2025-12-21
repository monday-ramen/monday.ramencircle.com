"use client";

import { Heart, Instagram } from "lucide-react";
import XLogo from "./icons/XLogo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* メインコンテンツ */}
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4">RAMEN MONDAY</h2>
          <p className="text-gray-400 mb-6">
            学生が本気で作る、週1日の挑戦。
          </p>

          {/* SNSアイコン */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://x.com/ramen_monday_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
              aria-label="X"
            >
              <XLogo className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/ramen_monday_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* ナビゲーション */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <a href="#story" className="hover:text-[#C62A2A] transition-colors">
              ストーリー
            </a>
            <a href="#menu" className="hover:text-[#C62A2A] transition-colors">
              メニュー
            </a>
            <a href="#support" className="hover:text-[#C62A2A] transition-colors">
              応援の声
            </a>
            <a href="#sponsors" className="hover:text-[#C62A2A] transition-colors">
              協賛企業
            </a>
            <a href="#access" className="hover:text-[#C62A2A] transition-colors">
              アクセス
            </a>
          </nav>
        </div>

        {/* メッセージ */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 mb-2 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#C62A2A]" /> by RAMEN MONDAY Team
          </p>
          <p className="text-sm text-gray-500">
            © 2024 RAMEN MONDAY. All rights reserved.
          </p>
        </div>

        {/* 最後のメッセージ */}
        <div className="mt-8 text-center">
          <p className="text-[#C62A2A] text-lg">
            月曜日、お待ちしています。
          </p>
        </div>
      </div>
    </footer>
  );
}