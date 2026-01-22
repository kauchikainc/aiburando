"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * サイト共通ヘッダーコンポーネント
 * PC版とモバイル版でレイアウトを分離
 */
export default function SiteHeader() {
  return (
    <>
      {/* PC版ヘッダー（md以上で表示） */}
      <header className="hidden md:block bg-black border-b border-pink-900/50">
        {/* トップバー */}
        <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 py-1">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white text-xs">
            <span>営業時間 10:00〜翌5:00 | 帯広市全域対応</span>
            <a href="tel:0120-XXX-XXX" className="flex items-center gap-1 font-bold hover:text-pink-200">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              0120-XXX-XXX
            </a>
          </div>
        </div>

        {/* メインヘッダー */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/home">
            <div className="bg-white p-2 rounded">
              <Image
                src="/images/logo.png"
                alt="アイブランド帯広"
                width={200}
                height={60}
                className="h-auto"
              />
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/home" className="text-white hover:text-pink-400">TOP</Link>
            <Link href="/cast" className="text-white hover:text-pink-400">キャスト</Link>
            <Link href="/system" className="text-white hover:text-pink-400">料金システム</Link>
            <Link href="/info" className="text-white hover:text-pink-400">店舗情報</Link>
            <a
              href="https://www.cityheaven.net"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full font-bold hover:from-pink-600 hover:to-pink-700"
            >
              出勤表
            </a>
          </nav>
        </div>
      </header>

      {/* モバイル版ヘッダー（md未満で表示） */}
      <header className="md:hidden bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 text-white">
        <div className="flex items-center justify-between px-3 py-2 bg-white">
          <Link href="/home">
            <Image
              src="/images/logo.png"
              alt="アイブランド帯広"
              width={140}
              height={42}
              className="h-auto"
            />
          </Link>
          <a
            href="tel:0120-XXX-XXX"
            className="flex items-center gap-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            電話予約
          </a>
        </div>
        <nav className="flex justify-around text-xs py-2 bg-black/20">
          <Link href="/home" className="hover:text-pink-200">TOP</Link>
          <Link href="/cast" className="hover:text-pink-200">キャスト</Link>
          <Link href="/system" className="hover:text-pink-200">料金</Link>
          <Link href="/info" className="hover:text-pink-200">店舗情報</Link>
          <a href="https://www.cityheaven.net" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">出勤表</a>
        </nav>
      </header>
    </>
  );
}
