import type { Metadata, Viewport } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { AdsConversionTracker } from "@/components/AdsConversionTracker";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Nhà Xe Vũ Phú | Xe ghép Thái Bình Hà Nội, Nội Bài, Hải Phòng, Cát Bà",
    template: "%s | Nhà Xe Vũ Phú",
  },
  description:
    "Nhà Xe Vũ Phú chuyên xe ghép, xe tiện chuyến. Đón tận nơi, trả tận nơi các tuyến Thái Bình - Hà Nội, Nội Bài, Hải Phòng, Cát Bà. Gọi đặt xe 0963 467 577.",
  openGraph: {
    title: "Nhà Xe Vũ Phú",
    description: "Xe ghép, xe tiện chuyến Thái Bình - Hà Nội, Nội Bài, Hải Phòng, Cát Bà.",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nhà Xe Vũ Phú",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_ADS_ID;

  return (
    <html lang="vi">
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col overflow-x-hidden">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {adsId && <GoogleAnalytics gaId={adsId} />}
        <AdsConversionTracker />
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
