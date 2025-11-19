"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/**
 * 18歳以上確認ページ（エントランス）
 *
 * UX心理学の原則を適用:
 * - 視覚的階層: 重要な警告を大きく表示
 * - 損失回避: 18歳未満の場合のリスクを明示
 * - ナッジ効果: 明確なボタンで行動を誘導
 * - 美的ユーザビリティ効果: 洗練されたデザインで信頼感を構築
 */
export default function AgeVerificationPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center px-4">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl w-full"
        >
          {/* メインカード */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100">
            {/* ヘッダー - ピンクのグラデーション */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-12 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3 tracking-wide">
                  アイブランド帯広
                </h1>
                <p className="text-pink-100 text-lg font-light tracking-widest">
                  I-BRAND OBIHIRO
                </p>
              </motion.div>
            </div>

            {/* コンテンツエリア */}
            <div className="px-8 py-8 md:px-12 md:py-10">
              {/* 警告アイコンと見出し */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mb-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-3">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
                  年齢確認
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  このサイトには成人向けコンテンツが含まれています
                </p>
              </motion.div>

              {/* 警告テキスト */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-pink-50 border-l-4 border-primary-500 p-6 mb-10 rounded-r-lg"
              >
                <p className="text-gray-700 leading-relaxed">
                  当サイトのコンテンツは
                  <strong className="text-primary-700 font-bold">18歳以上の方のみ</strong>
                  閲覧可能です。
                  <br />
                  18歳未満の方のアクセスは法律で禁止されており、
                  <strong className="text-primary-700 font-bold">違反した場合は法的責任を問われる可能性があります</strong>
                  。
                </p>
              </motion.div>

              {/* 18ng.png 画像 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center mb-6"
              >
                <div className="relative w-24 mx-auto">
                  <Image
                    src="/images/18ng.png"
                    alt="18歳未満禁止"
                    width={96}
                    height={48}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* 質問 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mb-8"
              >
                <p className="text-2xl font-body font-semibold text-gray-900">
                  あなたは18歳以上ですか?
                </p>
              </motion.div>

              {/* ボタングループ */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* 「はい」ボタン - 視覚的に強調 */}
                <Link href="/starter/home">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      はい、18歳以上です
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </Link>

                {/* 「いいえ」ボタン - 控えめなデザイン */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.location.href = "https://www.google.com";
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-5 px-4 rounded-xl border-2 border-gray-300 transition-all duration-200 text-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    いいえ、18歳未満です
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>

              {/* フッター注意書き */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center text-sm text-gray-500 mt-8 leading-relaxed"
              >
                このサイトに入ることで、あなたは18歳以上であることを確認し、
                <br className="hidden md:block" />
                当サイトの利用規約およびプライバシーポリシーに同意したものとみなされます。
              </motion.p>
            </div>
          </div>

          {/* フッターロゴ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 text-sm font-light tracking-wider">
              © 2024 アイブランド帯広. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
