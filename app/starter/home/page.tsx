"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * ホームページ
 *
 * UX心理学の原則を適用:
 * - 視覚的階層: ヒーローセクション→キャスト紹介→システム説明の流れ
 * - 美的ユーザビリティ効果: 洗練されたデザインで信頼感を構築
 * - アンカー効果: トップキャストを最初に提示
 * - ナッジ効果: CTAボタンで行動を促進
 * - 段階的開示: 必要な情報を段階的に表示
 */
export default function HomePage() {
  // アニメーション設定
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header basePath="/starter" />

      <main>
        {/* ヒーローセクション */}
        <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
          {/* 背景画像 - 右側に女性が配置された画像 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/hero.jpg"
              alt="美しいキャスト"
              fill
              className="object-cover object-right"
              priority
            />
            {/* グラデーションオーバーレイ - 左側を暗く、右側は透明に */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            {/* ピンクのアクセント */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-transparent" />
          </div>

          {/* コンテンツ - 左側にテキストをオーバーレイ */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-white bg-clip-text text-transparent">
                    甘く危険な
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg">禁断の夜を</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 leading-relaxed text-gray-100 drop-shadow-md">
                  帯広で最も刺激的な女性たちが
                  <br />
                  あなたを夢中にさせる至福の時間へ誘います
                </p>

                {/* CTAボタン */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="https://www.cityheaven.net" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 text-lg"
                    >
                      キャストを見る
                    </motion.button>
                  </a>
                  <a href="tel:0120-XXX-XXX">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-200 text-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        お電話で予約
                      </span>
                    </motion.button>
                  </a>
                </div>

                {/* 追加情報 */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-medium">深夜も対応</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white font-medium">秘密厳守</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span className="text-white font-medium">厳選美女</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* スクロールインジケーター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/70"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* 特徴セクション */}
        <section className="py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                アイブランド帯広の魅力
              </h2>
              <p className="text-lg text-gray-600">
                あなたの欲望を満たす、極上のサービス
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 特徴1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  妖艶な美女たち
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  艶やかな肌、魅惑的な曲線美、そして男を虜にする甘い囁き。厳選された女性たちが、あなただけの特別な時間を演出します。
                </p>
              </motion.div>

              {/* 特徴2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  深夜も対応
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  眠れない夜、欲望が抑えきれない瞬間。深夜のひとときも、あなたの秘密の時間を最高のものにします。
                </p>
              </motion.div>

              {/* 特徴3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  秘密厳守
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  誰にも言えない秘密の時間を、完全プライバシー保護で。二人だけの密室で、思う存分甘い快楽に溺れてください。
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* CTAセクション */}
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                今すぐ、甘い夜を
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8 text-pink-100">
                深夜も対応 | あなたの欲望を今すぐ満たします
              </p>
              <a href="tel:0120-XXX-XXX">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-12 py-6 bg-white text-primary-600 font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 text-2xl"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
