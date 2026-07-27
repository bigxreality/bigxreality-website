import type { Metadata } from "next";
import { Noto_Sans_TC, PT_Mono } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const ptMono = PT_Mono({
  variable: "--font-pt-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bigxreality.com"),
  title: {
    default: "Big x Reality",
    template: "%s | Big x Reality",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSansTC.variable} ${ptMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg">{children}</body>
    </html>
  );
}
