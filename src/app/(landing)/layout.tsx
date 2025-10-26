import { Metadata } from "next";
import { PropsWithChildren } from "react";
import LandingHeader from "@/components/layout/LandingHeader";
import LandingFooter from "@/components/layout/LandingFooter";

export const metadata: Metadata = {
  title: "vvellflo - 건강한 삶을 위한 헬스케어 콘텐츠",
  description:
    "건강, 운동, 영양, 웰빙에 관한 전문적이고 신뢰할 수 있는 콘텐츠를 제공하는 헬스케어 블로그 플랫폼입니다.",
  keywords: [
    "건강",
    "헬스케어",
    "운동",
    "영양",
    "웰빙",
    "건강 정보",
    "건강 블로그",
    "vvellflo",
  ],
  authors: [{ name: "vvellflo" }],
  creator: "vvellflo",
  publisher: "vvellflo",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://vvellflo.com",
    siteName: "vvellflo",
    title: "vvellflo - 건강한 삶을 위한 헬스케어 콘텐츠",
    description:
      "건강, 운동, 영양, 웰빙에 관한 전문적이고 신뢰할 수 있는 콘텐츠를 제공하는 헬스케어 블로그 플랫폼입니다.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "vvellflo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vvellflo - 건강한 삶을 위한 헬스케어 콘텐츠",
    description:
      "건강, 운동, 영양, 웰빙에 관한 전문적이고 신뢰할 수 있는 콘텐츠를 제공하는 헬스케어 블로그 플랫폼입니다.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    // 실제 배포 시 Google Search Console에서 받은 코드로 교체
  },
};

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* JSON-LD 구조화된 데이터 for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "vvellflo",
            description:
              "건강한 삶을 위한 헬스케어 콘텐츠를 제공하는 블로그 플랫폼",
            url: "https://vvellflo.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://vvellflo.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "vvellflo",
              logo: {
                "@type": "ImageObject",
                url: "https://vvellflo.com/logo.png",
              },
            },
          }),
        }}
      />

      <LandingHeader />

      {/* Main Content with proper spacing for fixed header */}
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Max width container for landing content */}
        <div className="w-full">{children}</div>
      </main>

      <LandingFooter />
    </>
  );
}
