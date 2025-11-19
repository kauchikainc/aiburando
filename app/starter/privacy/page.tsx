"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * プライバシーポリシーページ
 */
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header basePath="/starter" />

      <main>
        <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
                プライバシーポリシー
              </h1>

              <div className="prose prose-pink max-w-none">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    個人情報の取り扱いについて
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    アイブランド帯広(以下「当店」)は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律(以下「個人情報保護法」)を遵守すると共に、以下のプライバシーポリシー(以下「本ポリシー」)に従い、適切な取扱い及び保護に努めます。
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    1. 個人情報の定義
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、電話番号その他の記述等により特定の個人を識別することができるもの(他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます)を指します。
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    2. 個人情報の収集方法
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    当店は、お客様からのお問い合わせ、ご予約の際に、氏名、電話番号、メールアドレス等の個人情報をご提供いただく場合があります。
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    3. 個人情報の利用目的
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    当店は、お客様からご提供いただいた個人情報を以下の目的で利用いたします。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>サービスのご提供のため</li>
                    <li>お客様からのお問い合わせに対応するため</li>
                    <li>当店のサービスに関するご案内のため</li>
                    <li>サービスの品質向上のため</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    4. 個人情報の第三者提供
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    当店は、お客様の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-pink-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    5. 個人情報の管理
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    当店は、お客様の個人情報を正確かつ最新の内容に保つよう努め、不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため、必要かつ適切な安全管理措置を実施いたします。
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    6. お問い合わせ窓口
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。
                  </p>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <p className="text-gray-900 font-bold">電話番号: 0120-XXX-XXX</p>
                    <p className="text-gray-600 text-sm mt-1">受付時間: 24時間対応</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer basePath="/starter" />
    </div>
  );
}
