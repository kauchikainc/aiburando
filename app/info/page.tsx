"use client";

import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * 店舗情報ページ
 * PC版とモバイル版でレイアウトを分離
 */
export default function InfoPage() {
  const steps = [
    { step: "01", title: "お電話", description: "24時間対応のお電話でご予約" },
    { step: "02", title: "ご案内", description: "キャスト・料金をご案内" },
    { step: "03", title: "ご予約確定", description: "ご希望の日時・場所で確定" },
    { step: "04", title: "キャスト到着", description: "ご指定の場所へお伺い" },
  ];

  const areas = ["帯広市中心部", "帯広駅周辺", "西帯広", "稲田", "大通", "その他エリア"];

  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      {/* ===== PC版メインコンテンツ ===== */}
      <main className="hidden md:block">
        {/* ヘッダーセクション */}
        <section className="relative py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold text-white mb-2">
              <span className="text-pink-400">店舗</span>情報
            </h1>
            <p className="text-gray-400">安心してご利用いただくための詳細情報</p>
          </div>
        </section>

        {/* 基本情報 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 gap-8">
              {/* 左カラム: 基本情報 */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">基本情報</h2>
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <div className="p-4 border-b border-gray-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">店舗名</p>
                      <p className="text-white text-xl font-bold">アイブランド帯広</p>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">営業時間</p>
                      <p className="text-pink-400 text-xl font-bold">10:00〜翌5:00</p>
                      <p className="text-gray-500 text-xs">年中無休</p>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-800 flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">お電話でのご予約</p>
                      <a href="tel:0120-XXX-XXX" className="text-white text-xl font-bold hover:text-pink-400">0120-XXX-XXX</a>
                      <p className="text-gray-500 text-xs">通話料無料</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">お支払い方法</p>
                      <div className="flex gap-2 mt-1">
                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">現金</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右カラム: 対応エリア */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">対応エリア</h2>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg mb-1">帯広市全域</p>
                      <p className="text-gray-400 text-sm">出張対応いたします</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {areas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs mt-4">※その他エリアもご相談ください</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ご利用の流れ */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">ご利用の流れ</h2>
            <div className="grid grid-cols-4 gap-6">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 注意事項 */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">ご利用にあたって</h2>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <ul className="space-y-4">
                {[
                  "18歳未満の方のご利用は固くお断りしております",
                  "キャストへの暴言・暴力・ストーカー行為は厳禁です",
                  "本番行為・盗撮・録音等の禁止行為は一切お断りします",
                  "お客様の個人情報は厳重に管理し、第三者に開示することはございません",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 電話CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">ご不明な点はお気軽にお問い合わせください</h2>
            <p className="text-pink-200 mb-6">経験豊富なスタッフが丁寧にご対応いたします</p>
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
            <span className="text-pink-400">店舗</span>情報
          </h1>
          <p className="text-xs text-gray-400">安心してご利用いただくための詳細情報</p>
        </section>

        {/* 基本情報 */}
        <section className="bg-gray-900 py-4 px-3">
          <h2 className="text-white font-bold text-sm mb-3">基本情報</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-3 border-b border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-[10px]">店舗名</p>
                <p className="text-white font-bold">アイブランド帯広</p>
              </div>
            </div>
            <div className="p-3 border-b border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-[10px]">営業時間</p>
                <p className="text-pink-400 font-bold">10:00〜翌5:00</p>
              </div>
            </div>
            <div className="p-3 border-b border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-[10px]">対応エリア</p>
                <p className="text-white font-bold">帯広市全域</p>
              </div>
            </div>
            <div className="p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-[10px]">お支払い</p>
                <p className="text-white font-bold text-sm">現金</p>
              </div>
            </div>
          </div>
        </section>

        {/* ご利用の流れ */}
        <section className="bg-gray-800 py-4 px-3">
          <h2 className="text-white font-bold text-sm mb-3">ご利用の流れ</h2>
          <div className="space-y-3">
            {steps.map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-gray-400 text-[10px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意事項 */}
        <section className="bg-gray-900 py-4 px-3">
          <h2 className="text-white font-bold text-sm mb-3">ご利用にあたって</h2>
          <div className="bg-gray-800 rounded-lg p-3">
            <ul className="space-y-2">
              {[
                "18歳未満の方のご利用はお断り",
                "暴言・暴力・ストーカー行為は厳禁",
                "本番行為・盗撮・録音等は禁止",
                "個人情報は厳重に管理",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                  <svg className="w-4 h-4 text-pink-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 電話CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 p-4">
          <div className="text-center text-white">
            <p className="text-xs mb-2">ご不明な点はお気軽に</p>
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
