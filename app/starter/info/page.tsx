"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * 店舗情報ページ
 *
 * UX心理学の原則を適用:
 * - 視覚的階層で重要情報を強調
 * - アイコンで情報の理解を促進
 * - 信頼感を構築する明確な情報提示
 */
export default function InfoPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header basePath="/starter" />

      <main>
        {/* ヘッダーセクション */}
        <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-4">
                店舗情報
              </h1>
              <p className="text-lg text-gray-600">
                安心してご利用いただくための詳細情報
              </p>
            </motion.div>
          </div>
        </section>

        {/* 基本情報セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
                基本情報
              </h2>

              <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
                <div className="divide-y divide-pink-100">
                  {/* 店舗名 */}
                  <div className="p-6 hover:bg-pink-50/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-700 mb-1">店舗名</h3>
                        <p className="text-2xl font-heading font-bold text-gray-900">アイブランド帯広</p>
                      </div>
                    </div>
                  </div>

                  {/* 営業時間 */}
                  <div className="p-6 hover:bg-pink-50/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-700 mb-1">営業時間</h3>
                        <p className="text-xl font-bold text-primary-600">24時間営業</p>
                        <p className="text-sm text-gray-600 mt-1">年中無休でご利用いただけます</p>
                      </div>
                    </div>
                  </div>

                  {/* 電話番号 */}
                  <div className="p-6 hover:bg-pink-50/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-700 mb-1">お電話でのご予約</h3>
                        <a
                          href="tel:0120-XXX-XXX"
                          className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          0120-XXX-XXX
                        </a>
                        <p className="text-sm text-gray-600 mt-1">通話料無料 | 24時間受付</p>
                      </div>
                    </div>
                  </div>

                  {/* 対応エリア */}
                  <div className="p-6 hover:bg-pink-50/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-700 mb-2">対応エリア</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            <span>東京23区全域</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            <span>渋谷区</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            <span>新宿区</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            <span>港区</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            <span>品川区</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            <span>目黒区</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          ※その他エリアもご相談ください
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 支払い方法 */}
                  <div className="p-6 hover:bg-pink-50/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-700 mb-2">お支払い方法</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium text-sm">
                            現金
                          </span>
                          <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium text-sm">
                            クレジットカード
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          VISA / MasterCard / JCB / AMEX 対応
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ご利用の流れ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
                ご利用の流れ
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "お電話",
                    description: "24時間対応のお電話でご予約ください",
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  },
                  {
                    step: "02",
                    title: "ご案内",
                    description: "キャスト・料金・サービス内容をご案内",
                    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
                  },
                  {
                    step: "03",
                    title: "ご予約確定",
                    description: "ご希望の日時・場所で予約完了",
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                  {
                    step: "04",
                    title: "キャスト到着",
                    description: "ご指定の場所へキャストがお伺いします",
                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100 h-full">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4 mx-auto">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-primary-600 mb-2">STEP {item.step}</p>
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {/* 矢印 */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <svg className="w-6 h-6 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 注意事項 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
                ご利用にあたって
              </h2>

              <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl p-8 border border-pink-100">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>18歳未満の方のご利用は固くお断りしております</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>キャストへの暴言・暴力・ストーカー行為は厳禁です</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>本番行為・盗撮・録音等の禁止行為は一切お断りします</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>お客様の個人情報は厳重に管理し、第三者に開示することはございません</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                ご不明な点はお気軽にお問い合わせください
              </h2>
              <p className="text-lg mb-8 text-pink-100">
                経験豊富なスタッフが丁寧にご対応いたします
              </p>
              <a href="tel:0120-XXX-XXX">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-600 font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 text-xl"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0120-XXX-XXX
                </motion.div>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer basePath="/starter" />
    </div>
  );
}
