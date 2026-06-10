import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

// Wellness-focused typography pairing (recommended by UI/UX Pro Max)
// Lora: Elegant serif for headings - calm, health, wellness mood
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Raleway: Clean sans-serif for body - modern, professional, readable
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://physicalcarefisioterapia.com'),
  title: {
    default: 'Physical Care Fisioterapia | Premier Physiotherapy & Sports Rehabilitation in Costa Rica',
    template: '%s | Physical Care Fisioterapia',
  },
  description:
    'Costa Rica\'s leading physiotherapy and rehabilitation center. Specialized in sports rehabilitation, shockwave therapy, TECAR therapy, and evidence-based treatments. 9+ years of experience helping patients recover movement and eliminate pain.',
  keywords: [
    'physiotherapy Costa Rica',
    'sports rehabilitation Costa Rica',
    'physical therapy San Pedro',
    'shockwave therapy Costa Rica',
    'sports injury recovery Costa Rica',
    'physiotherapy clinic Costa Rica',
    'TECAR therapy',
    'orthopedic rehabilitation',
    'post-surgery recovery',
    'chronic pain treatment',
    'fisioterapia Costa Rica',
    'rehabilitación deportiva',
  ],
  authors: [{ name: 'Physical Care Fisioterapia' }],
  creator: 'Physical Care Fisioterapia',
  publisher: 'Physical Care Fisioterapia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_CR',
    url: 'https://physicalcarefisioterapia.com',
    siteName: 'Physical Care Fisioterapia',
    title: 'Physical Care Fisioterapia | Premier Physiotherapy & Sports Rehabilitation',
    description:
      'Recover your movement. Recover your life. Costa Rica\'s leading physiotherapy center offering personalized rehabilitation, sports recovery, and advanced treatments.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Physical Care Fisioterapia - Premier Physiotherapy in Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physical Care Fisioterapia | Premier Physiotherapy in Costa Rica',
    description:
      'Recover your movement. Recover your life. Personalized physiotherapy, sports rehabilitation, and evidence-based treatments.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
  category: 'Healthcare',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Physical Care Fisioterapia',
    description:
      'Costa Rica\'s leading physiotherapy and rehabilitation center specializing in sports rehabilitation, shockwave therapy, and evidence-based treatments.',
    url: 'https://physicalcarefisioterapia.com',
    telephone: '+50689680947',
    email: 'gerencia@physicalcarefisioterapia.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San Pedro de Montes de Oca',
      addressLocality: 'San José',
      addressCountry: 'CR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9318015,
      longitude: -84.05436545,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    medicalSpecialty: [
      'Physical Therapy',
      'Sports Medicine',
      'Rehabilitation',
    ],
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Sports Rehabilitation',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Shockwave Therapy',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'TECAR Therapy',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Physical Rehabilitation',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '450',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
    currenciesAccepted: 'CRC, USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  };

  return (
    <html
      lang="es"
      className={`${lora.variable} ${raleway.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E88A8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F4F7F8] text-[#111827] antialiased">
        {children}
      </body>
    </html>
  );
}
