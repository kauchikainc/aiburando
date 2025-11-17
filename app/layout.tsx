import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// フォント設定 - Inter, Roboto, Open Sansを避け、編集的なタイポグラフィを使用
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "アイブランド帯広 - デリバリーヘルス",
  description: "帯広の高級デリバリーヘルスサービス",
  robots: "noindex, nofollow", // 検索エンジンからの除外
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSansJP.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
