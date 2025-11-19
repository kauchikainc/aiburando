import Link from "next/link";

/**
 * サイトフッターコンポーネント
 */
export default function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ブランド情報 */}
          <div>
            <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-4">
              アイブランド帯広
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              帯広エリアで最高級のおもてなしと
              <br />
              刺激的なひとときをご提供するデリバリーヘルスです。
            </p>
          </div>

          {/* クイックリンク */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-300">クイックリンク</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`${basePath}/home`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  ホーム
                </Link>
              </li>
              {basePath !== "/starter" && (
                <>
                  <li>
                    <Link href={`${basePath}/cast`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                      キャスト一覧
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/info`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                      店舗情報
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/system`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                      料金システム
                    </Link>
                  </li>
                </>
              )}
              <li>
                <a href="https://www.cityheaven.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  出勤予定
                </a>
              </li>
            </ul>
          </div>

          {/* 連絡先 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-300">お問い合わせ</h4>
            <div className="space-y-3">
              <a
                href="tel:0120-XXX-XXX"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
              >
                <svg className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-bold text-lg">0120-XXX-XXX</span>
              </a>
              <p className="text-sm text-gray-500 pl-7">
                受付時間: 24時間対応
              </p>
            </div>
          </div>
        </div>

        {/* ボーダー */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 アイブランド帯広. All rights reserved.
            </p>
            {basePath !== "/starter" && (
              <div className="flex gap-6 text-sm text-gray-500">
                <Link href={`${basePath}/privacy`} className="hover:text-primary-400 transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href={`${basePath}/terms`} className="hover:text-primary-400 transition-colors">
                  利用規約
                </Link>
              </div>
            )}
          </div>

          {/* 18歳未満警告 */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              当サイトは18歳未満の方の閲覧を固くお断りしています。
              <br className="md:hidden" />
              風俗営業法を遵守し、健全な運営を行っております。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
