import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";

/* ---------- local fonts ---------- */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/* ---------- site-wide <head> metadata ---------- */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sre2-lab.vercel.app"),
  title: "SRE² Lab - Sustainability & Renewable Energy Research Laboratory",
  description:
    "SRE² Lab develops advanced technologies for harvesting, storing, sensing and intelligently managing energy through sustainable materials, flexible electronics and autonomous self-powered systems.",

  /* ---- FAVICON & TOUCH ICONS ---- */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/sre-icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  /* ---- Open Graph / Twitter ---- */
  openGraph: {
    type: "website",
    url: "https://sre2-lab.vercel.app/",
    siteName: "SRE² Lab",
    title: "SRE² Lab - Sustainability & Renewable Energy Research Laboratory",
    description:
      "SRE² Lab develops advanced technologies for harvesting, storing, sensing and intelligently managing energy through sustainable materials, flexible electronics and autonomous self-powered systems.",
    images: [
      {
        url: "/sre-logo.png",
        width: 512,
        height: 512,
        alt: "SRE² Lab Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SRE_Lab",
    images: ["/sre-logo.png"],
  },

  robots: { "max-image-preview": "large" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ---- Structured-data ---- */}
        <Script
          id="website-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://sre-lab.github.io/",
              name: "Sustainability & Renewable Energy Research Laboratory",
              alternateName: "SRE² Lab",
              logo: "https://sre-lab.github.io/sre-logo.png",
            }),
          }}
        />
      </head>

      <body
        className={`${outfit.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
