"use client";

import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * 料金システムページ
 * PC版とモバイル版でレイアウトを分離
 */
export default function SystemPage() {
  const pricingData = [
    { time: "60分", price: "18,000円", popular: false },
    { time: "90分", price: "25,000円", popular: true },
    { time: "120分", price: "32,000円", popular: false },
    { time: "150分", price: "38,000円", popular: false },
    { time: "180分", price: "44,000円", popular: false },
  ];

  const optionData = [
    { name: "指名料", price: "2,000円" },
    { name: "交通費", price: "実費", note: "お客様負担" },
    { name: "延長30分", price: "8,000円" },
  ];

  const discounts = [
    { title: "新規様限定", discount: "3,000円OFF", description: "初めてのご利用で基本料金から割引" },
    { title: "深夜割", discount: "2,000円OFF", description: "24時以降のご利用で割引" },
    { title: "フリー割", discount: "1,000円OFF", description: "指名なしで割引" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      {/* ===== PC版メインコンテンツ ===== */}
      <main className="hidden md:block">
        {/* ヘッダーセクション */}
        <section className="relative py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold text-white mb-2">
              <span className="text-pink-400">料金</span>システム
            </h1>
            <p className="text-gray-400">明朗会計で安心してご利用いただけます</p>
          </div>
        </section>

        {/* 基本料金 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">基本料金</h2>
            <div className="grid grid-cols-5 gap-4">
              {pricingData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        人気No.1
                      </span>
                    </div>
                  )}
                  <div className={`rounded-xl p-6 text-center h-full ${
                    item.popular
                      ? "bg-gradient-to-b from-pink-500 to-pink-600 text-white border-2 border-yellow-400"
                      : "bg-gray-900 text-white border border-gray-800"
                  }`}>
                    <p className={`text-sm font-bold mb-2 ${item.popular ? "text-pink-100" : "text-pink-400"}`}>
                      {item.time}コース
                    </p>
                    <p className="text-3xl font-bold mb-1">{item.price}</p>
                    <p className={`text-xs ${item.popular ? "text-pink-100" : "text-gray-500"}`}>(税込)</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              ※上記料金には、指名料・交通費は含まれておりません
            </p>
          </div>
        </section>

        {/* 2カラムレイアウト: オプション + 割引 */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 gap-8">
              {/* オプション料金 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">オプション料金</h2>
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  {optionData.map((item, index) => (
                    <div key={index} className={`p-4 flex items-center justify-between ${index !== optionData.length - 1 ? "border-b border-gray-800" : ""}`}>
                      <div>
                        <h3 className="text-white font-bold">{item.name}</h3>
                        {item.note && <p className="text-xs text-gray-500">{item.note}</p>}
                      </div>
                      <p className="text-xl font-bold text-pink-400">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 割引制度 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">お得な割引制度</h2>
                <div className="space-y-4">
                  {discounts.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-xl p-4 border border-pink-500/30"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold">{item.title}</h3>
                          <p className="text-xs text-gray-400">{item.description}</p>
                        </div>
                        <p className="text-2xl font-bold text-yellow-400">{item.discount}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* サービス内容 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">サービス内容</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1 rounded-full font-bold text-sm mb-4">
                  基本サービス
                </div>
                <div className="grid grid-cols-2 gap-3 text-gray-300">
                  {["キス", "ディープキス", "全身リップ", "ボディマッサージ", "フェラチオ", "素股"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-200 text-sm">
                <strong>※ご注意:</strong> 本番行為は法律で禁止されております。キャストによって対応できるプレイ内容が異なる場合がございます。
              </p>
            </div>
          </div>
        </section>

        {/* 電話CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">ご予約はお電話で</h2>
            <p className="text-pink-200 mb-6">料金やサービス内容についてもお気軽にお問い合わせください</p>
            <a href="tel:0120-XXX-XXX">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                0120-XXX-XXX
              </motion.div>
            </a>
          </div>
        </section>
      </main>

      {/* ===== モバイル版メインコンテンツ ===== */}
      <main className="md:hidden">
        {/* ヘッダー */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-6 px-4 text-center">
          <h1 className="text-2xl font-heading font-bold text-white mb-1">
            <span className="text-pink-400">料金</span>システム
          </h1>
          <p className="text-xs text-gray-400">明朗会計で安心してご利用いただけます</p>
        </section>

        {/* 基本料金 */}
        <section className="bg-gray-900 py-4 px-3">
          <h2 className="text-white font-bold text-sm mb-3">基本料金</h2>
          <div className="space-y-2">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-3 flex items-center justify-between ${
                  item.popular
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 border-2 border-yellow-400"
                    : "bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.popular && (
                    <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] font-bold">人気</span>
                  )}
                  <span className={`font-bold ${item.popular ? "text-white" : "text-pink-400"}`}>{item.time}</span>
                </div>
                <span className="text-white font-bold text-lg">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-[10px] mt-2 text-center">
            ※指名料・交通費は別途
          </p>
        </section>

        {/* 割引制度 */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 p-3">
          <h2 className="text-white font-bold text-sm mb-3">お得な割引</h2>
          <div className="space-y-2">
            {discounts.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-3 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-pink-200 text-[10px]">{item.description}</p>
                </div>
                <p className="text-yellow-400 font-bold">{item.discount}</p>
              </div>
            ))}
          </div>
        </section>

        {/* オプション料金 */}
        <section className="bg-gray-900 py-4 px-3">
          <h2 className="text-white font-bold text-sm mb-3">オプション料金</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {optionData.map((item, index) => (
              <div key={index} className={`p-3 flex items-center justify-between ${index !== optionData.length - 1 ? "border-b border-gray-700" : ""}`}>
                <div>
                  <p className="text-white font-bold text-sm">{item.name}</p>
                  {item.note && <p className="text-gray-500 text-[10px]">{item.note}</p>}
                </div>
                <p className="text-pink-400 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* サービス内容 */}
        <section className="bg-gray-800 py-4 px-3">
          <h2 className="text-white font-bold text-sm mb-3">サービス内容</h2>
          <div className="space-y-3">
            <div className="bg-gray-900 rounded-lg p-3">
              <p className="text-pink-400 font-bold text-xs mb-2">基本サービス</p>
              <div className="flex flex-wrap gap-2">
                {["キス", "ディープキス", "全身リップ", "マッサージ", "フェラチオ", "素股"].map((item, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-[10px]">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 電話CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 p-4">
          <div className="text-center text-white">
            <p className="text-xs mb-2">ご予約・お問い合わせ</p>
            <a href="tel:0120-XXX-XXX">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                0120-XXX-XXX
              </motion.div>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
