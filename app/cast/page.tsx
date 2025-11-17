"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { castMembers, categories } from "@/data/cast";

/**
 * キャスト一覧ページ
 *
 * UX心理学の原則を適用:
 * - フィルタリング機能で段階的開示
 * - カテゴリー別に整理された視覚的階層
 * - ホバー効果で美的ユーザビリティ効果を向上
 * - 豊富な写真でアンカー効果を活用
 */
export default function CastPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [hoveredCast, setHoveredCast] = useState<number | null>(null);

  // フィルタリングされたキャスト
  const filteredCasts =
    selectedCategory === "すべて"
      ? castMembers
      : castMembers.filter((cast) => cast.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
                妖艶な女性たち
              </h1>
              <p className="text-lg text-gray-600">
                {filteredCasts.length}名の魅惑的な女性があなたを待っています
              </p>
            </motion.div>
          </div>
        </section>

        {/* フィルターセクション */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* キャストグリッド */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCasts.map((cast, index) => (
                  <motion.div
                    key={cast.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCast(cast.id)}
                    onHoverEnd={() => setHoveredCast(null)}
                    className="group"
                  >
                    {/* 画像カード - Cityheavenへのリンク */}
                    <a
                      href="https://www.cityheaven.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                    >
                      <Image
                        src={cast.image}
                        alt={cast.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* オーバーレイ */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                          hoveredCast === cast.id ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {/* カテゴリーバッジ */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {cast.category.map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full shadow-md"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* ホバー時の詳細情報 */}
                      <div
                        className={`absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-300 ${
                          hoveredCast === cast.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        <p className="text-sm font-light mb-2 leading-relaxed">
                          {cast.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                            <p className="text-xs text-gray-300">身長</p>
                            <p className="font-bold">{cast.height}cm</p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                            <p className="text-xs text-gray-300">スリーサイズ</p>
                            <p className="font-bold text-xs">
                              {cast.bust}-{cast.waist}-{cast.hip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>

                    {/* キャスト情報 */}
                    <div className="px-2">
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                        {cast.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{cast.age}歳</span>
                        <span>T.{cast.height}</span>
                        <span>
                          B.{cast.bust}({cast.cup})
                        </span>
                        <span>W.{cast.waist}</span>
                        <span>H.{cast.hip}</span>
                      </div>
                      <p className="text-sm text-primary-600 font-medium mt-2">
                        {cast.bodyType}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* 結果が0件の場合 */}
            {filteredCasts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-500 text-lg">
                  該当するキャストが見つかりませんでした
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                運命の女性を見つけたら
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                あなたを虜にする彼女と、今すぐ甘い時間を
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0120-XXX-XXX">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg flex items-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0120-XXX-XXX
                  </motion.button>
                </a>
                <a
                  href="https://www.cityheaven.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white hover:bg-gray-50 text-primary-600 font-bold rounded-full border-2 border-primary-500 shadow-lg hover:shadow-xl transition-all duration-200 text-lg flex items-center gap-2"
                  >
                    出勤予定を見る
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
