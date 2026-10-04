import type { Metadata } from "next";
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
  metadataBase: new URL("https://sre2lab.org.tr"),
  title: {
    default: "SRE² Lab - Sustainability & Renewable Energy Research Laboratory",
    template: "%s | SRE² Lab",
  },
  description:
    "Sustainability & Renewable Energy Research Laboratory (SRE² Lab) at Sivas University of Science and Technology (SBTÜ). Developing advanced energy harvesting, self-powered systems, supercapacitors, and flexible electronics.",
  keywords: [
    "SRE² Lab",
    "Sustainability and Renewable Energy Research Laboratory",
    "SBTÜ",
    "Sivas University of Science and Technology",
    "Dr. Qazi Muhammad Saqib",
    "Energy Harvesting",
    "Self-Powered Systems",
    "Triboelectric Nanogenerators",
    "TENG",
    "Piezoelectric Nanogenerators",
    "PENG",
    "Supercapacitors",
    "Flexible Electronics",
    "Electronic Skin",
    "Autonomous Sensors",
  ],
  authors: [
    { name: "Dr. Qazi Muhammad Saqib", url: "https://sre2lab.org.tr/pi" },
    { name: "SRE² Lab", url: "https://sre2lab.org.tr" },
  ],
  creator: "SRE² Lab - Sivas University of Science and Technology",
  publisher: "SRE² Lab",
  alternates: {
    canonical: "https://sre2lab.org.tr",
  },

  /* ---- FAVICON & TOUCH ICONS ---- */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Logo/SRE2_Logo_Icon.svg", type: "image/svg+xml" },
      { url: "/Logo/SRE2_Logo_Icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/Logo/SRE2_Logo_Icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  /* ---- Open Graph / Twitter ---- */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sre2lab.org.tr",
    siteName: "SRE² Lab",
    title: "SRE² Lab - Sustainability & Renewable Energy Research Laboratory",
    description:
      "SRE² Lab develops advanced technologies for harvesting, storing, sensing and intelligently managing energy through sustainable materials, flexible electronics and autonomous self-powered systems.",
    images: [
      {
        url: "https://sre2lab.org.tr/Logo/SRE2_Logo_Primary.png",
        width: 1774,
        height: 561,
        alt: "SRE² Lab Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRE² Lab - Sustainability & Renewable Energy Research Laboratory",
    description:
      "SRE² Lab develops advanced technologies for harvesting, storing, sensing and intelligently managing energy through sustainable materials, flexible electronics and autonomous self-powered systems.",
    images: ["https://sre2lab.org.tr/Logo/SRE2_Logo_Primary.png"],
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
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sre2lab.org.tr/#website",
      "url": "https://sre2lab.org.tr",
      "name": "Sustainability & Renewable Energy Research Laboratory",
      "alternateName": [
        "SRE² Lab",
        "SRE2 Lab",
        "SRE² Lab SBTÜ",
        "Sustainability & Renewable Energy Research Laboratory (SRE² Lab)"
      ],
      "description":
        "Sustainability & Renewable Energy Research Laboratory (SRE² Lab) at Sivas University of Science and Technology (SBTÜ). Developing advanced energy harvesting, self-powered systems, supercapacitors, and flexible electronics.",
      "inLanguage": "en",
      "publisher": {
        "@id": "https://sre2lab.org.tr/#organization"
      }
    },
    {
      "@type": "ResearchOrganization",
      "@id": "https://sre2lab.org.tr/#organization",
      "name": "Sustainability & Renewable Energy Research Laboratory",
      "alternateName": "SRE² Lab",
      "url": "https://sre2lab.org.tr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sre2lab.org.tr/Logo/SRE2_Logo_Primary.png",
        "width": "1774",
        "height": "561"
      },
      "image": "https://sre2lab.org.tr/hero/sre-lab-interior.jpg",
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": "Sivas University of Science and Technology",
        "alternateName": ["Sivas Bilim ve Teknoloji Üniversitesi", "SBTÜ"],
        "url": "https://www.sbtu.edu.tr"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Department of Electrical & Electronics Engineering, Sivas University of Science and Technology",
        "addressLocality": "Sivas",
        "addressCountry": "TR"
      },
      "sameAs": [
        "https://www.linkedin.com/company/sre2-lab-sbtu/"
      ]
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
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
