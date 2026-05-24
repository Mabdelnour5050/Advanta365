import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Spline_Sans, Spline_Sans_Mono } from "next/font/google";
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

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spline = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
  display: "swap",
  weight: ["400", "500"],
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
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3efe7",
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
      className={`${bricolage.variable} ${spline.variable} ${splineMono.variable}`}
      suppressHydrationWarning
    >
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
