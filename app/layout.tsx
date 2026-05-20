import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";
import {
  BASE_KEYWORDS,
  OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  jsonLd,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ROOT_DESCRIPTION =
  "ADVANTA365 is the enterprise Microsoft 365 framework that combines governance, adoption, change management, and structured rollouts into one repeatable operating model for SharePoint Online, Teams, and OneDrive — built for large, complex, regulated organizations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: ROOT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  keywords: BASE_KEYWORDS,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Enterprise Microsoft 365 Framework`,
    description: ROOT_DESCRIPTION,
    locale: SITE_LOCALE,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Enterprise Microsoft 365 Framework`,
    description:
      "Enterprise-grade Microsoft 365 adoption, governance, implementation, and enablement framework.",
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-VjzaoUzzqBZw6AXtUMMWaR.webp",
        type: "image/webp",
        sizes: "32x32",
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-H7Z8tUbL6UHeFwN2z6g6tN.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/favicon-H7Z8tUbL6UHeFwN2z6g6tN.png",
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/* Root-level JSON-LD: Organization + WebSite (linked by @id) */
const rootGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema(), websiteSchema()],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://d2xsxph8kpxj0f.cloudfront.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://d2xsxph8kpxj0f.cloudfront.net" />
      </head>
      <body className="font-sans antialiased" style={{ margin: 0, padding: 0 }}>
        <Providers>{children}</Providers>
        <Script
          id="ld-root"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: jsonLd(rootGraph) }}
        />
      </body>
    </html>
  );
}
