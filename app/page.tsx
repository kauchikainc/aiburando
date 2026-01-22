"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/**
 * 18歳以上確認ページ（エントランス）
 * sample.jpg に近いスマホファーストデザインで実装
 * PC版でも縦長レイアウトを維持
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
    // PC版でも中央にスマホサイズのコンテナを表示
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-white flex items-center justify-center">
      {/* スマホサイズのコンテナ（PC版でも最大幅を制限） */}
      <div className="w-full max-w-md min-h-screen md:min-h-0 md:my-8 bg-gradient-to-b from-pink-100 via-white to-pink-50 md:rounded-3xl md:shadow-2xl overflow-hidden">
        <AnimatePresence>
          {/* ヘッダーロゴ */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-4 px-4 text-center bg-white"
          >
            <Image
              src="/images/logo.png"
              alt="アイブランド帯広"
              width={180}
              height={54}
              className="h-auto mx-auto"
            />
          </motion.header>

          {/* メインビジュアル - 縦長画像を活かす */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* 縦長画像をそのまま表示 */}
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/images/nenkaku.jpg"
                alt="アイブランド帯広"
                fill
                className="object-cover object-top"
                priority
              />
              {/* 上下のグラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-b from-pink-100/40 via-transparent to-white/80" />

              {/* ロゴテキスト（画像下部にオーバーレイ） */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-4 left-0 right-0 text-center"
              >
                <h1 className="text-3xl font-heading font-bold text-gray-800 drop-shadow-lg tracking-wide">
                  アイブランド帯広
                </h1>
                <p className="text-pink-600 text-sm font-light tracking-widest mt-1">
                  I-BRAND OBIHIRO
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* 年齢確認セクション */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white py-6 px-4"
          >
            {/* ボタンと18禁マーク */}
            <div className="flex items-center justify-center gap-3 mb-5">
              {/* ENTER ボタン */}
              <Link href="/home">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center"
                >
                  <span className="text-lg font-bold tracking-wider">ENTER</span>
                  <span className="text-[10px] mt-0.5">18歳以上の方</span>
                </motion.button>
              </Link>

              {/* 18禁マーク */}
              <div className="flex flex-col items-center px-2">
                <Image
                  src="/images/18ng.png"
                  alt="18歳未満禁止"
                  width={64}
                  height={64}
                  className="w-14 h-14"
                />
              </div>

              {/* LEAVE ボタン */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = "https://www.google.com";
                }}
                className="w-24 h-24 rounded-full bg-white border-4 border-pink-500 text-pink-600 font-bold shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center"
              >
                <span className="text-lg font-bold tracking-wider">LEAVE</span>
                <span className="text-[10px] mt-0.5">18歳未満の方</span>
              </motion.button>
            </div>

            {/* 注意書き */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <p className="text-gray-700 text-xs leading-relaxed">
                当サイトは風俗コンテンツを含んでいます。
                <br />
                18歳未満または高校生のご利用はお断りいたします。
              </p>
            </motion.div>
          </motion.div>

          {/* フッター */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-pink-50 py-3 text-center"
          >
            <p className="text-gray-400 text-[10px]">
              © 2024 アイブランド帯広. All rights reserved.
            </p>
          </motion.footer>
        </AnimatePresence>
      </div>
    </div>
  );
}
