import { motion } from "motion/react";
import { Flame, Star, Sparkles } from "lucide-react";
import imgTonzuke from "figma:asset/f73be0b4590fe864d582c931ffac2914f826bf91.png";
import imgToriRamen from "figma:asset/14205b5bc9c78d1a7fecc75cd0233a3ce953d3b0.png";

const menuItems = [
  {
    id: 1,
    name: "塩だれ とんづけ",
    description: "10時間かけて旨みを引き出した濃厚スープです。\n豚の甘みと塩だれのすっきりした味わいがあとを引きます。\n煮込んだチャーシューの旨みがスープに溶け、\n麺を持ち上げるたびに香りが立ちます。\n学生が自信を持って届ける一杯です。",
    price: "¥950",
    image: imgTonzuke,
    badge: "学生1番の自信作",
    spicy: false,
  },
  {
    id: 2,
    name: "濃厚鶏らーめん",
    description: "ひと口すすると鶏の旨みが広がります。\n濃厚でありながら後味は軽く、食べ進めるほどに香りが重なります。\n丁寧に炊き上げた鶏白湯と香味油がよく絡み、\n麺との相性も抜群です。\n少し贅沢したい日に選ばれる一杯です。",
    price: "¥1030",
    image: imgToriRamen,
    badge: null,
    spicy: false,
  },
  {
    id: 3,
    name: "週替わりメニュー",
    description: "週ごとに新しい味が登場します。\n学生チームが試作を重ねながら仕上げる限定の一杯です。\n来るたびに違った楽しさがあり、\nRAMEN MONDAYならではの特別なメニューです。",
    price: null,
    image: "https://images.unsplash.com/photo-1655416393940-75094038c737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwc3RlYW0lMjBzaWxob3VldHRlfGVufDF8fHx8MTc2NTA0NjQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "週替わりの限定メニュー",
    spicy: false,
    isWeekly: true,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">MENU</h2>
          <div className="w-24 h-1 bg-[#C62A2A] mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            学生が本気で向き合った、3つの味。
          </p>
        </motion.div>

        {/* メニューアイテム */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C62A2A] transition-all duration-300 shadow-lg shadow-black/15"
            >
              {/* バッジ */}
              {item.badge && (
                <div 
                  className={`absolute top-4 left-4 z-10 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    item.isWeekly ? 'bg-[#D32F2F] font-bold' : 'bg-[#C62A2A]'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  {item.badge}
                </div>
              )}

              {/* 週替わりアイコン */}
              {item.isWeekly && (
                <div className="absolute top-4 right-4 z-10 bg-[#E53935] text-white p-2 rounded-full">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}

              {/* 辛さアイコン */}
              {item.spicy && (
                <div className="absolute top-4 right-4 z-10 bg-orange-600 text-white p-2 rounded-full">
                  <Flame className="w-4 h-4" />
                </div>
              )}

              {/* 画像 */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ${
                    item.isWeekly ? 'opacity-30' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* 週替わりメニュー専用の視覚的演出 */}
                {item.isWeekly && (
                  <>
                    {/* 器のシルエット（薄く光る縁） */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-48 h-32 rounded-full border-2 border-white/15 opacity-40"
                        style={{
                          boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
                        }}
                      />
                    </div>
                    {/* 期待感を高めるテキストオーバーレイ */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p 
                        className="text-white/40 text-sm tracking-widest"
                        style={{ 
                          textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                          letterSpacing: '0.3em',
                        }}
                      >
                        COMING SOON
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl">{item.name}</h3>
                  {item.price && (
                    <span className="text-xl text-[#C62A2A]">{item.price}</span>
                  )}
                </div>
                <p 
                  className="text-gray-400 whitespace-pre-line"
                  style={{
                    lineHeight: '1.5',
                    color: item.isWeekly ? '#CCCCCC' : undefined,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* トッピング情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>各種トッピング（+¥100〜¥200）もご用意しています</p>
        </motion.div>
      </div>
    </section>
  );
}