"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * サイト共通フッターコンポーネント
 * PC版とモバイル版でレイアウトを分離
 */
export default function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      {/* PC版フッター */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="bg-white p-2 rounded">
              <Image src="/images/logo.png" alt="アイブランド帯広" width={150} height={45} />
            </div>
            <nav className="flex gap-6 text-sm text-gray-400">
              <Link href="/home" className="hover:text-white">TOP</Link>
              <Link href="/cast" className="hover:text-white">キャスト</Link>
              <Link href="/system" className="hover:text-white">料金</Link>
              <Link href="/info" className="hover:text-white">店舗情報</Link>
              <Link href="/terms" className="hover:text-white">利用規約</Link>
              <Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link>
            </nav>
          </div>
          <Image src="/images/18ng.png" alt="18歳未満禁止" width={50} height={50} />
        </div>
        <p className="text-center text-xs text-gray-600 mt-6">© 2024 アイブランド帯広. All rights reserved.</p>
      </div>

      {/* モバイル版フッター */}
      <div className="md:hidden p-4">
        <div className="text-center space-y-3">
          <div className="bg-white p-2 rounded inline-block">
            <Image src="/images/logo.png" alt="アイブランド帯広" width={120} height={36} />
          </div>
          <nav className="flex justify-center gap-4 text-[10px] text-gray-400">
            <Link href="/home" className="hover:text-white">TOP</Link>
            <Link href="/cast" className="hover:text-white">キャスト</Link>
            <Link href="/system" className="hover:text-white">料金</Link>
            <Link href="/info" className="hover:text-white">店舗情報</Link>
          </nav>
          <div className="flex justify-center gap-3 text-[10px] text-gray-500">
            <Link href="/terms" className="hover:text-gray-300">利用規約</Link>
            <Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link>
          </div>
          <p className="text-[9px] text-gray-600">© 2024 アイブランド帯広. All rights reserved.</p>
          <div className="flex justify-center">
            <Image src="/images/18ng.png" alt="18歳未満禁止" width={40} height={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}
