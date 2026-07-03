import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { siteConfig } from "@/lib/data";

// Font files di-bundle ke dalam project (public/fonts/) sehingga build
// tidak memerlukan koneksi internet ke Google Fonts — bebas error di
// Vercel, Netlify, maupun environment build manapun.

const fraunces = localFont({
  src: [
    {
      path: "../public/fonts/fraunces-latin-wght-normal.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../public/fonts/fraunces-latin-wght-italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = localFont({
  src: [
    { path: "../public/fonts/plus-jakarta-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/plus-jakarta-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../public/fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Sewa Alat Pancing Jakarta Timur | Fintastic Fishing Kramat Jati",
  description:
    "Fintastic Fishing menyediakan sewa alat pancing di Kramat Jati, Jakarta Timur. Booking mudah via WhatsApp, lokasi strategis, perlengkapan pancing siap pakai.",
  keywords: [
    "sewa alat pancing Jakarta Timur",
    "rental alat pancing Jakarta",
    "sewa joran pancing Kramat Jati",
    "sewa alat pancing Kramat Jati",
    "Fintastic Fishing",
    "rental perlengkapan mancing Jakarta Timur",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: "Sewa Alat Pancing Jakarta Timur | Fintastic Fishing Kramat Jati",
    description:
      "Sewa alat pancing siap pakai di Kramat Jati, Jakarta Timur. Booking praktis lewat WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fintastic Fishing - Sewa Alat Pancing Jakarta Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewa Alat Pancing Jakarta Timur | Fintastic Fishing Kramat Jati",
    description:
      "Sewa alat pancing siap pakai di Kramat Jati, Jakarta Timur. Booking praktis lewat WhatsApp.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.storeName,
  image: `${siteConfig.url}/og-image.png`,
  url: siteConfig.url,
  telephone: siteConfig.phoneIntl,
  priceRange: "Hubungi WhatsApp",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: ["Jakarta Timur", "Kramat Jati"],
  sameAs: [siteConfig.googleMapsUrl],
  openingHoursSpecification: siteConfig.openingHoursSchema.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${jakarta.variable} ${plexMono.variable}`}
    >
      <body className="font-body">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
