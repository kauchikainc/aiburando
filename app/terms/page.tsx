"use client";

import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * 利用規約ページ
 */
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main>
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
                利用規約
              </h1>

              <div className="space-y-4 md:space-y-6">
                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-pink-900/30">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-pink-400 mb-4">
                    第1条(適用)
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    本規約は、アイブランド帯広(以下「当店」)が提供するサービス(以下「本サービス」)の利用に関する条件を定めるものです。利用者の皆様(以下「利用者」)には、本規約に従って本サービスをご利用いただきます。
                  </p>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-pink-900/30">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-pink-400 mb-4">
                    第2条(利用資格)
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">
                    本サービスは、以下の条件を満たす方のみご利用いただけます。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-sm md:text-base">
                    <li>18歳以上の方</li>
                    <li>本規約に同意いただける方</li>
                    <li>反社会的勢力に属していない方</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-pink-900/30">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-pink-400 mb-4">
                    第3条(禁止事項)
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">
                    利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-sm md:text-base">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>キャストに対する暴力行為、暴言、ハラスメント行為</li>
                    <li>本番行為の強要</li>
                    <li>盗撮、録音、録画行為</li>
                    <li>キャストの個人情報を不正に取得する行為</li>
                    <li>ストーカー行為</li>
                    <li>料金の不払い</li>
                    <li>当店の業務を妨害する行為</li>
                    <li>その他、当店が不適切と判断する行為</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-pink-900/30">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-pink-400 mb-4">
                    第4条(料金および支払い)
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">
                    利用者は、当店が定める料金を、当店が指定する方法により支払うものとします。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-sm md:text-base">
                    <li>料金は、サービス開始前にお支払いいただきます</li>
                    <li>お支払い方法は、現金またはクレジットカードとなります</li>
                    <li>一度お支払いいただいた料金の返金はいたしかねます</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-pink-900/30">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-pink-400 mb-4">
                    第5条(キャンセルポリシー)
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">
                    予約のキャンセルは、以下の通りとします。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-sm md:text-base">
                    <li>予約時間の1時間前まで: キャンセル料なし</li>
                    <li>予約時間の1時間前〜30分前: 50%のキャンセル料</li>
                    <li>予約時間の30分前以降: 100%のキャンセル料</li>
                    <li>無断キャンセル: 100%のキャンセル料 + 今後のご利用をお断りする場合があります</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-pink-900/30">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-pink-400 mb-4">
                    第6条(免責事項)
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base">
                    当店は、以下の事項について一切の責任を負いません。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-sm md:text-base">
                    <li>天災、事故、その他やむを得ない事由によりサービスを提供できない場合</li>
                    <li>利用者の故意または過失により生じた損害</li>
                    <li>利用者と第三者との間で生じたトラブル</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-pink-900/30">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-pink-400 mb-4">
                    第7条(規約の変更)
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    当店は、利用者の承諾を得ることなく、本規約を変更することができるものとします。変更後の規約は、当店ウェブサイトに掲載した時点より効力を生じるものとします。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
