import type { Metadata } from "next";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { WhyXr } from "@/components/home/WhyXr";
import { Solutions } from "@/components/home/Solutions";
import { Packages } from "@/components/home/Packages";
import { CaseStudies } from "@/components/home/CaseStudies";
import { News } from "@/components/home/News";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ContactCta } from "@/components/home/ContactCta";
import { Footer } from "@/components/home/Footer";

const title = "Big x Reality｜全球動力科技 XR 模擬訓練解決方案";
const description =
  "全球動力科技 Big x Reality 提供虛實整合 XR 模擬訓練解決方案，為軍警、消防與智慧城市單位打造高擬真訓練環境，涵蓋警勤、軍事、智慧城市與消防防救災訓練。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/tw/home",
  },
  openGraph: {
    title,
    description,
    url: "/tw/home",
    siteName: "Big x Reality",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/images/home/home-hero-main-desktop.webp",
        width: 2560,
        height: 1440,
        alt: "Big x Reality XR 模擬訓練情境",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/home/home-hero-main-desktop.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "全球動力科技股份有限公司",
  alternateName: "Big x Reality",
  url: "https://www.bigxreality.com/tw/home",
  email: "service@gptt.com.tw",
  address: {
    "@type": "PostalAddress",
    streetAddress: "復興南路一段 368 號 5 樓",
    addressLocality: "大安區",
    addressRegion: "台北市",
    addressCountry: "TW",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyXr />
        <Solutions />
        <Packages />
        <CaseStudies />
        <News />
        <TrustedBy />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
