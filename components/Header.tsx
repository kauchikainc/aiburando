"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/**
 * サイトヘッダーコンポーネント
 *
 * 白背景にピンクのアクセントカラーを使用
 * モバイル対応のハンバーガーメニュー実装
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/home", label: "ホーム" },
    { href: "/cast", label: "キャスト" },
    { href: "/info", label: "店舗情報" },
    { href: "/system", label: "料金システム" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/home" className="flex items-center space-x-3 group">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                アイブランド帯広
              </h1>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Cityheavenへのリンク */}
            <a
              href="https://www.cityheaven.net"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              出勤予定
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>

          {/* モバイルハンバーガーメニュー */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-primary-600 font-medium rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://www.cityheaven.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-full text-center shadow-md flex items-center justify-center gap-2"
                >
                  出勤予定
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
