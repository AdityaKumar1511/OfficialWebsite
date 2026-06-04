import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import LenisProvider from "@/components/layout/LenisProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codingclub.nitp.ac.in"),
  title: {
    default: "Web & Coding Club | NIT Patna",
    template: "%s | WnCC NIT Patna",
  },
  description:
    "A thriving community of builders, coders, and developers at NIT Patna. Explore our teams, events, and projects across Web Dev, Blockchain, Gen AI, Machine Learning, and more.",
  keywords: [
    "WnCC",
    "NIT Patna",
    "Web and Coding Club",
    "coding club",
    "tech community",
    "hackathon",
    "web development",
    "blockchain",
    "AI",
    "machine learning",
  ],
  authors: [{ name: "Web & Coding Club, NIT Patna" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web & Coding Club | NIT Patna",
    description:
      "A thriving community of builders, coders, and developers at NIT Patna.",
    url: "https://codingclub.nitp.ac.in",
    type: "website",
    locale: "en_IN",
    siteName: "WnCC NIT Patna",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WnCC NIT Patna Open Graph Image",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Coding Club | NIT Patna",
    description:
      "A thriving community of builders, coders, and developers at NIT Patna.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TAG",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Web & Coding Club, NIT Patna",
  url: "https://codingclub.nitp.ac.in",
  logo: "https://codingclub.nitp.ac.in/images/logo.png",
  description: "The official Web and Coding Club of National Institute of Technology, Patna.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ashok Rajpath",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800005",
    addressCountry: "IN"
  },
  sameAs: [
    "https://github.com/wncc-nitp",
    "https://www.linkedin.com/company/wncc-nitp/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sora antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
