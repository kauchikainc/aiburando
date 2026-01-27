"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { castMembers } from "@/data/cast";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * ホームページ
 * 白基調デザイン
 * PC版とモバイル版でレイアウトを分離
 */
export default function HomePage() {
  // 新人キャスト
  const newCasts = castMembers.filter((c) => c.category.includes("新人"));
  // 人気キャスト
  const popularCasts = castMembers.filter((c) => c.category.includes("人気"));
  // 本日の出勤（モック：全員出勤）
  const todayCasts = castMembers.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      {/* 流れるテロップ（共通） */}
      <div className="bg-pink-500 text-white py-1 overflow-hidden">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-xs font-bold"
        >
          【新人入店】まいちゃん(21)Eカップ入店しました!! ★本日限定★ 新規様3,000円OFF!! ★深夜割★ 24時以降2,000円OFF!! ★フリー割★ 指名なしで1,000円OFF!!
        </motion.div>
      </div>

      {/* ===== PC版メインコンテンツ ===== */}
      <main className="hidden md:block">
        {/* ヒーローセクション */}
        <section className="relative h-[500px]">
          <Image
            src="/images/hero/hero.jpg"
            alt="アイブランド帯広"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl text-white"
              >
                <h1 className="text-5xl font-heading font-bold mb-4 leading-tight">
                  <span className="text-pink-400">甘く危険な</span>
                  <br />
                  禁断の夜を
                </h1>
                <p className="text-xl text-gray-200 mb-6">
                  帯広で最も刺激的な女性たちが<br />
                  あなたを夢中にさせる至福の時間へ誘います
                </p>
                <div className="flex gap-4">
                  <Link href="/cast">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg"
                    >
                      キャストを見る
                    </motion.button>
                  </Link>
                  <a href="tel:0120-XXX-XXX">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-full font-bold text-lg"
                    >
                      電話予約
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* イベント情報 */}
        <section className="bg-gradient-to-r from-pink-500 to-pink-600 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-8">
              <div className="bg-yellow-400 text-black rounded-lg px-6 py-3 font-bold">
                【新規様限定】3,000円OFF!!
              </div>
              <div className="bg-white text-pink-600 rounded-lg px-6 py-3 font-bold">
                【深夜割】24時以降 2,000円OFF!!
              </div>
              <div className="bg-purple-500 text-white rounded-lg px-6 py-3 font-bold">
                【フリー割】指名なしで1,000円OFF!!
              </div>
            </div>
          </div>
        </section>

        {/* メインコンテンツエリア */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex gap-8">
            {/* 左カラム（メインコンテンツ） */}
            <div className="flex-1">
              {/* 本日の出勤 */}
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-800 text-2xl font-bold flex items-center gap-2">
                    <span className="text-pink-500">●</span> 本日の出勤
                  </h2>
                  <Link href="/cast" className="text-pink-500 hover:underline">
                    すべて見る →
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {todayCasts.map((cast) => (
                    <motion.div
                      key={cast.id}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-white rounded-lg overflow-hidden shadow-md"
                    >
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={cast.image}
                          alt={cast.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        {cast.category.includes("新人") && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                            NEW
                          </div>
                        )}
                        {cast.category.includes("人気") && !cast.category.includes("新人") && (
                          <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                            人気
                          </div>
                        )}
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
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 新人紹介 */}
              <section className="mb-12">
                <h2 className="text-gray-800 text-2xl font-bold flex items-center gap-2 mb-6">
                  <span className="text-red-500 animate-pulse">★</span> 新人入店情報
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {newCasts.slice(0, 4).map((cast) => (
                    <motion.div
                      key={cast.id}
                      whileHover={{ scale: 1.01 }}
                      className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 flex gap-4 border border-pink-200"
                    >
                      <div className="relative w-28 aspect-[3/4] rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={cast.image}
                          alt={cast.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 font-bold">
                          NEW
                        </div>
                      </div>
                      <div className="flex-1 text-gray-800">
                        <h3 className="font-bold text-xl mb-2">{cast.name} <span className="text-sm text-gray-500">({cast.age})</span></h3>
                        <p className="text-sm text-pink-500 mb-3">
                          T{cast.height} / B{cast.bust}({cast.cup}) / W{cast.waist} / H{cast.hip}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {cast.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* 右サイドバー */}
            <div className="w-80 flex-shrink-0 space-y-6">
              {/* 電話予約 */}
              <div className="bg-gradient-to-b from-pink-600 to-red-600 rounded-lg p-6 text-center text-white">
                <p className="text-sm mb-3">ご予約・お問い合わせ</p>
                <a href="tel:0120-XXX-XXX">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-pink-600 px-6 py-4 rounded-full font-bold text-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    0120-XXX-XXX
                  </motion.div>
                </a>
                <p className="text-xs text-pink-200 mt-3">受付 10:00〜翌5:00</p>
              </div>

              {/* 人気ランキング */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <h3 className="text-gray-800 font-bold mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">★</span> 人気ランキング
                </h3>
                <div className="space-y-3">
                  {popularCasts.slice(0, 5).map((cast, index) => (
                    <div key={cast.id} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        index === 0 ? "bg-yellow-500 text-black" :
                        index === 1 ? "bg-gray-400 text-black" :
                        index === 2 ? "bg-orange-700 text-white" :
                        "bg-gray-300 text-gray-700"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={cast.image} alt={cast.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 text-gray-800">
                        <p className="font-bold text-sm">{cast.name}</p>
                        <p className="text-xs text-gray-500">{cast.age}歳 {cast.cup}カップ</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 料金システム */}
              <Link href="/system">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 text-center border border-pink-200"
                >
                  <h3 className="text-gray-800 font-bold text-lg mb-2">料金システム</h3>
                  <p className="text-gray-500 text-sm mb-4">お得なコース多数ご用意</p>
                  <div className="inline-flex items-center gap-1 text-white text-sm font-bold bg-pink-500 px-4 py-2 rounded-full">
                    詳しく見る →
                  </div>
                </motion.div>
              </Link>

              {/* 店舗情報 */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <h3 className="text-gray-800 font-bold mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  店舗情報
                </h3>
                <div className="text-gray-700 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">店名</span>
                    <span>アイブランド帯広</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">業種</span>
                    <span>デリバリーヘルス</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">営業時間</span>
                    <span className="text-pink-500 font-bold">10:00〜翌5:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">エリア</span>
                    <span>帯広市全域</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ===== モバイル版メインコンテンツ ===== */}
      <main className="md:hidden">
        {/* メインビジュアル */}
        <div className="relative">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/hero/hero.jpg"
              alt="アイブランド帯広"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h1 className="text-2xl font-heading font-bold mb-1 drop-shadow-lg">
                <span className="text-pink-300">甘く危険な</span>禁断の夜
              </h1>
              <p className="text-xs text-gray-200 drop-shadow">
                帯広で最も刺激的な女性たちがあなたを虜に
              </p>
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-[10px] font-bold rounded animate-pulse">
            本日限定EVENT
          </div>
        </div>

        {/* 割引・イベント情報 */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-3">
          <div className="bg-white/10 backdrop-blur rounded-lg p-3">
            <h2 className="text-white font-bold text-sm mb-2 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              本日のイベント
            </h2>
            <div className="space-y-2">
              <div className="bg-yellow-400 text-black rounded px-2 py-1.5 text-xs font-bold">
                【新規様限定】3,000円OFF!!
              </div>
              <div className="bg-white text-pink-600 rounded px-2 py-1.5 text-xs font-bold">
                【深夜割】24時以降 2,000円OFF!!
              </div>
              <div className="bg-purple-500 text-white rounded px-2 py-1.5 text-xs font-bold">
                【フリー割】指名なしで1,000円OFF!!
              </div>
            </div>
          </div>
        </div>

        {/* 本日の出勤キャスト */}
        <section className="bg-white py-4">
          <div className="px-3 mb-3 flex items-center justify-between">
            <h2 className="text-gray-800 font-bold text-sm flex items-center gap-1">
              <span className="text-pink-500">●</span> 本日の出勤
            </h2>
            <Link href="/cast" className="text-pink-500 text-xs hover:underline">
              もっと見る →
            </Link>
          </div>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-2 px-3" style={{ width: "max-content" }}>
              {todayCasts.map((cast) => (
                <motion.div
                  key={cast.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative w-28 flex-shrink-0"
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                    <Image src={cast.image} alt={cast.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    {cast.category.includes("新人") && (
                      <div className="absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">NEW</div>
                    )}
                    {cast.category.includes("人気") && !cast.category.includes("新人") && (
                      <div className="absolute top-1 left-1 bg-yellow-500 text-black text-[8px] px-1.5 py-0.5 rounded font-bold">人気</div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-1.5 text-white">
                      <p className="font-bold text-sm">{cast.name}</p>
                      <p className="text-[9px] text-gray-300">{cast.age}歳 T{cast.height} {cast.cup}カップ</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 新人紹介 */}
        <section className="bg-gradient-to-b from-pink-50 to-white py-4">
          <div className="px-3 mb-3">
            <h2 className="text-gray-800 font-bold text-sm flex items-center gap-1">
              <span className="text-red-500 animate-pulse">★</span> 新人入店情報
            </h2>
          </div>
          <div className="px-3 space-y-3">
            {newCasts.slice(0, 2).map((cast) => (
              <motion.div
                key={cast.id}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-lg p-3 flex gap-3 border border-pink-200 shadow-sm"
              >
                <div className="relative w-20 aspect-[3/4] rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={cast.image} alt={cast.name} fill className="object-cover" />
                  <div className="absolute top-0 left-0 bg-red-500 text-white text-[8px] px-1 py-0.5 font-bold">NEW</div>
                </div>
                <div className="flex-1 text-gray-800">
                  <h3 className="font-bold text-base mb-1">{cast.name} <span className="text-xs text-gray-500">({cast.age})</span></h3>
                  <p className="text-[10px] text-pink-500 mb-2">T{cast.height} / B{cast.bust}({cast.cup}) / W{cast.waist} / H{cast.hip}</p>
                  <p className="text-[10px] text-gray-600 leading-relaxed line-clamp-2">{cast.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 人気ランキング */}
        <section className="bg-white py-4">
          <div className="px-3 mb-3">
            <h2 className="text-gray-800 font-bold text-sm flex items-center gap-1">
              <span className="text-yellow-500">★</span> 人気ランキング
            </h2>
          </div>
          <div className="px-3 space-y-2">
            {popularCasts.slice(0, 3).map((cast, index) => (
              <motion.div
                key={cast.id}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-50 rounded-lg p-2 flex items-center gap-3 border border-gray-200"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  index === 0 ? "bg-yellow-500 text-black" :
                  index === 1 ? "bg-gray-400 text-black" :
                  "bg-orange-700 text-white"
                }`}>
                  {index + 1}
                </div>
                <div className="relative w-12 aspect-square rounded-full overflow-hidden flex-shrink-0">
                  <Image src={cast.image} alt={cast.name} fill className="object-cover" />
                </div>
                <div className="flex-1 text-gray-800">
                  <p className="font-bold text-sm">{cast.name} <span className="text-xs text-gray-500">({cast.age})</span></p>
                  <p className="text-[9px] text-gray-500">T{cast.height} {cast.cup}カップ {cast.bodyType}</p>
                </div>
                <Link href="/cast" className="text-pink-500 text-xs">詳細</Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 料金システムへのリンク */}
        <section className="bg-gradient-to-r from-pink-50 to-purple-50 p-4">
          <Link href="/system">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-pink-200 rounded-lg p-4 text-center shadow-sm">
              <h2 className="text-gray-800 font-bold text-lg mb-1">料金システム</h2>
              <p className="text-gray-500 text-xs mb-3">お得なコース多数ご用意</p>
              <div className="inline-flex items-center gap-1 text-white text-sm font-bold bg-pink-500 px-4 py-2 rounded-full">
                詳しく見る
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </section>

        {/* 店舗情報 */}
        <section className="bg-white p-4">
          <h2 className="text-gray-800 font-bold text-sm mb-3 flex items-center gap-1">
            <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            店舗情報
          </h2>
          <div className="bg-gray-50 rounded-lg p-3 text-gray-700 text-xs space-y-2 border border-gray-200">
            <div className="flex justify-between"><span className="text-gray-500">店名</span><span>アイブランド帯広</span></div>
            <div className="flex justify-between"><span className="text-gray-500">業種</span><span>デリバリーヘルス</span></div>
            <div className="flex justify-between"><span className="text-gray-500">営業時間</span><span className="text-pink-500 font-bold">10:00〜翌5:00</span></div>
            <div className="flex justify-between"><span className="text-gray-500">エリア</span><span>帯広市全域</span></div>
          </div>
        </section>

        {/* 電話CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 p-4">
          <div className="text-center text-white">
            <p className="text-xs mb-2">ご予約・お問い合わせはこちら</p>
            <a href="tel:0120-XXX-XXX">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                0120-XXX-XXX
              </motion.div>
            </a>
            <p className="text-[10px] text-pink-200 mt-2">受付時間 10:00〜翌5:00</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
