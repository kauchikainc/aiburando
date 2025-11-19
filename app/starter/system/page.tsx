"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * 料金システムページ
 *
 * UX心理学の原則を適用:
 * - 価格アンカー効果: お得感を演出
 * - 視覚的階層: 料金表を見やすく配置
 * - フレーミング効果: ポジティブな表現で価値を強調
 */
export default function SystemPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const pricingData = [
    { time: "60分", price: "18,000円", popular: false },
    { time: "90分", price: "25,000円", popular: true },
    { time: "120分", price: "32,000円", popular: false },
    { time: "150分", price: "38,000円", popular: false },
    { time: "180分", price: "44,000円", popular: false },
  ];

  const optionData = [
    { name: "指名料", price: "2,000円" },
    { name: "交通費", price: "3,000円〜", note: "エリアにより変動" },
    { name: "ホテル代", price: "実費", note: "お客様負担" },
    { name: "延長30分", price: "8,000円" },
  ];

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
                料金システム
              </h1>
              <p className="text-lg text-gray-600">
                明朗会計で安心してご利用いただけます
              </p>
            </motion.div>
          </div>
        </section>

        {/* 基本料金セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                基本料金
              </h2>
              <p className="text-lg text-gray-600">
                すべて込みの料金です
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {pricingData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-full"
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        人気No.1
                      </span>
                    </div>
                  )}
                  <div
                    className={`bg-gradient-to-br rounded-2xl p-6 md:p-8 text-center transition-all duration-300 h-full flex flex-col justify-center ${
                      item.popular
                        ? "from-primary-500 to-primary-600 text-white shadow-2xl border-4 border-yellow-400"
                        : "from-white to-pink-50 text-gray-900 shadow-lg hover:shadow-xl border-2 border-pink-100"
                    }`}
                  >
                    <p
                      className={`text-sm font-bold mb-2 ${
                        item.popular ? "text-pink-100" : "text-primary-600"
                      }`}
                    >
                      {item.time}コース
                    </p>
                    <p
                      className={`text-4xl font-bold mb-1 ${
                        item.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.price}
                    </p>
                    <p
                      className={`text-xs ${
                        item.popular ? "text-pink-100" : "text-gray-600"
                      }`}
                    >
                      (税込)
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600">
                ※上記料金には、サービス料・指名料・ホテル代は含まれておりません
              </p>
            </motion.div>
          </div>
        </section>

        {/* オプション料金セクション */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                オプション料金
              </h2>
              <p className="text-lg text-gray-600">
                必要に応じてお選びください
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100">
              <div className="divide-y divide-pink-100">
                {optionData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 hover:bg-pink-50/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        {item.note && (
                          <p className="text-sm text-gray-600">{item.note}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-heading font-bold text-primary-600">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* サービス内容セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                サービス内容
              </h2>
              <p className="text-lg text-gray-600">
                充実のサービスでおもてなし
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "基本サービス",
                  items: [
                    "キス",
                    "ディープキス",
                    "全身リップ",
                    "ボディマッサージ",
                    "フェラチオ",
                    "素股",
                  ],
                  color: "from-primary-500 to-primary-600",
                },
                {
                  title: "無料オプション",
                  items: [
                    "ローション",
                    "コスプレ",
                    "電マ",
                    "バイブ",
                    "聖水",
                    "即尺",
                  ],
                  color: "from-pink-500 to-pink-600",
                },
              ].map((service, sIndex) => (
                <motion.div
                  key={sIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIndex * 0.2 }}
                  className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl border border-pink-100"
                >
                  <div
                    className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full font-bold mb-6 shadow-lg`}
                  >
                    {service.title}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {service.items.map((item, iIndex) => (
                      <div
                        key={iIndex}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-primary-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
            >
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-yellow-800">※ご注意:</strong>{" "}
                本番行為は法律で禁止されております。当店では一切行っておりません。
                <br />
                キャストによって対応できるプレイ内容が異なる場合がございます。詳しくはお問い合わせください。
              </p>
            </motion.div>
          </div>
        </section>

        {/* 割引制度セクション */}
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-pink-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                お得な割引制度
              </h2>
              <p className="text-lg text-pink-100">
                お客様に嬉しい特典をご用意
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "初回限定割引",
                  discount: "3,000円OFF",
                  description: "初めてのご利用で基本料金から3,000円割引",
                },
                {
                  title: "平日割引",
                  discount: "2,000円OFF",
                  description: "平日10:00〜17:00のご利用で2,000円割引",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-2xl"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-5xl font-heading font-bold text-primary-600 mb-4">
                      {item.discount}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-pink-100 mt-8 text-sm"
            >
              ※割引の併用はできません。予告なく変更・終了する場合がございます。
            </motion.p>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                ご予約はお電話で
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                料金やサービス内容についてもお気軽にお問い合わせください
              </p>
              <a href="tel:0120-XXX-XXX">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 text-xl"
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
