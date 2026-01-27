"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { castMembers, categories } from "@/data/cast";

/**
 * キャスト一覧ページ
 * PC版とモバイル版でレイアウトを分離
 * 白基調デザイン
 */
export default function CastPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  // フィルタリングされたキャスト
  const filteredCasts =
    selectedCategory === "すべて"
      ? castMembers
      : castMembers.filter((cast) => cast.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      {/* ===== PC版メインコンテンツ ===== */}
      <main className="hidden md:block">
        {/* ヘッダーセクション */}
        <section className="relative py-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold text-gray-800 mb-2">
              <span className="text-pink-500">妖艶な</span>女性たち
            </h1>
            <p className="text-gray-500">
              {filteredCasts.length}名の魅惑的な女性があなたを待っています
            </p>
          </div>
        </section>

        {/* フィルターセクション */}
        <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* キャストグリッド */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredCasts.map((cast, index) => (
                  <motion.div
                    key={cast.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href="https://www.cityheaven.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 shadow-md">
                        <Image
                          src={cast.image}
                          alt={cast.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* バッジ */}
                        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                          {cast.category.includes("新人") && (
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded font-bold">NEW</span>
                          )}
                          {cast.category.includes("人気") && !cast.category.includes("新人") && (
                            <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded font-bold">人気</span>
                          )}
                        </div>

                        {/* 情報オーバーレイ */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-xl font-bold mb-1">{cast.name}</h3>
                          <p className="text-sm text-gray-300">
                            {cast.age}歳 / T{cast.height} / {cast.cup}カップ
                          </p>
                          <p className="text-xs text-pink-300 mt-1">
                            B{cast.bust} W{cast.waist} H{cast.hip}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 px-1">{cast.description}</p>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredCasts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400">該当するキャストが見つかりませんでした</p>
              </div>
            )}
          </div>
        </section>

        {/* 電話CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">運命の女性を見つけたら</h2>
            <p className="text-pink-200 mb-6">今すぐお電話でご予約ください</p>
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
        <section className="bg-gradient-to-b from-pink-50 to-white py-6 px-4 text-center">
          <h1 className="text-2xl font-heading font-bold text-gray-800 mb-1">
            <span className="text-pink-500">妖艶な</span>女性たち
          </h1>
          <p className="text-xs text-gray-500">
            {filteredCasts.length}名の魅惑的な女性があなたを待っています
          </p>
        </section>

        {/* フィルター */}
        <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-3 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full font-medium transition-all duration-200 text-xs whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* キャストグリッド */}
        <section className="p-3 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              {filteredCasts.map((cast, index) => (
                <motion.div
                  key={cast.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <a
                    href="https://www.cityheaven.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2 shadow-md">
                      <Image
                        src={cast.image}
                        alt={cast.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* バッジ */}
                      {cast.category.includes("新人") && (
                        <div className="absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">NEW</div>
                      )}
                      {cast.category.includes("人気") && !cast.category.includes("新人") && (
                        <div className="absolute top-1 left-1 bg-yellow-500 text-black text-[8px] px-1.5 py-0.5 rounded font-bold">人気</div>
                      )}

                      {/* 情報 */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                        <h3 className="text-base font-bold">{cast.name}</h3>
                        <p className="text-[10px] text-gray-300">
                          {cast.age}歳 T{cast.height} {cast.cup}カップ
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCasts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-sm">該当するキャストが見つかりませんでした</p>
            </div>
          )}
        </section>

        {/* 電話CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 p-4">
          <div className="text-center text-white">
            <p className="text-xs mb-2">運命の女性を見つけたら</p>
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
