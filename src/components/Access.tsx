import { motion } from "motion/react";
import { MapPin, Clock, Calendar, Train, Instagram } from "lucide-react";

export default function Access() {
  return (
    <section id="access" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">営業情報 & アクセス</h2>
          <div className="w-24 h-1 bg-[#C62A2A] mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            月曜日、お待ちしています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 営業情報 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* 営業日時 */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C62A2A] rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">営業日</h3>
                  <p className="text-3xl text-[#C62A2A] mb-1">毎週月曜日のみ</p>
                </div>
              </div>
            </div>

            {/* 営業時間 */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C62A2A] rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">営業時間</h3>
                  <p className="text-xl text-white mb-1" style={{ lineHeight: '1.5' }}>
                    11:00 - 15:00（L.O 14:30）<br />
                    18:00 - 22:00（L.O 21:30）
                  </p>
                </div>
              </div>
            </div>

            {/* アクセス */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C62A2A] rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">住所</h3>
                  <p className="text-white mb-1" style={{ lineHeight: '1.5' }}>
                    〒278-0031<br />
                    千葉県野田市中根6-9<br />
                    麺屋こうじ 野田店（RAMEN MONDAY営業地）
                  </p>
                </div>
              </div>
            </div>

            {/* 最寄り駅 */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C62A2A] rounded-lg">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">最寄り駅</h3>
                  <p className="text-white mb-1" style={{ lineHeight: '1.5' }}>
                    東武アーバンパークライン<br />
                    野田市駅 徒歩15分
                  </p>
                </div>
              </div>
            </div>

            {/* お問い合わせ */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C62A2A] rounded-lg">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">お問い合わせ</h3>
                  <p className="text-white mb-1">Instagram DM にて対応しています</p>
                  <a 
                    href="https://www.instagram.com/ramen_monday_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[#C62A2A] transition-colors"
                  >
                    @ramen_monday_
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 地図 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-[600px]"
          >
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 h-full">
              <div className="w-full h-full bg-gray-800 rounded flex items-center justify-center relative overflow-hidden">
                {/* Google Maps埋め込み - 二代目 麺屋こうじ（千葉県野田市中根6-9）*/}
                <iframe
                  src="https://maps.google.com/maps?q=35.9492476,139.8774476&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                  title="二代目 麺屋こうじ 地図"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 注意事項 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-[#C62A2A]/10 border border-[#C62A2A]/30 rounded-lg p-6 text-center"
        >
          <p className="text-gray-300">
            ⚠️ スープがなくなり次第終了となります。確実にご来店されたい方は、お早めのご来店をおすすめします。
          </p>
        </motion.div>
      </div>
    </section>
  );
}