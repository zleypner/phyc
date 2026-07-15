import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-1GYGWHL5JV";

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
    default: 'Terapia Física en Costa Rica | Physical Care Fisioterapia San Pedro',
    template: '%s | Physical Care Fisioterapia',
  },
  description:
    'Centro de terapia física y fisioterapia en San Pedro, Costa Rica. Especialistas en rehabilitación deportiva, ondas de choque, tecarterapia y tratamiento del dolor. +9 años de experiencia. Agenda tu cita hoy.',
  keywords: [
    // Primary Spanish keywords (high priority)
    'terapia fisica',
    'terapia fisica costa rica',
    'terapia fisica san jose',
    'terapia fisica san pedro',
    'fisioterapia costa rica',
    'fisioterapia san jose',
    'fisioterapeuta costa rica',
    'clinica de fisioterapia',
    // Adultos mayores / Geriatric keywords (high priority)
    'terapia fisica adultos mayores',
    'fisioterapia adultos mayores',
    'fisioterapia geriatrica',
    'fisioterapia geriatrica costa rica',
    'rehabilitacion adultos mayores',
    'terapia fisica tercera edad',
    'fisioterapia tercera edad',
    'ejercicios para adultos mayores',
    'prevencion de caidas adultos mayores',
    'equilibrio adultos mayores',
    'movilidad adultos mayores',
    'fisioterapia para personas mayores',
    'atencion adulto mayor costa rica',
    'rehabilitacion geriatrica',
    'envejecimiento activo',
    'envejecimiento saludable',
    // Treatment-specific keywords
    'rehabilitacion deportiva',
    'rehabilitacion deportiva costa rica',
    'ondas de choque costa rica',
    'tecarterapia costa rica',
    'terapia manual ortopedica',
    // Pain/condition keywords
    'dolor de espalda tratamiento',
    'dolor de rodilla fisioterapia',
    'dolor cervical tratamiento',
    'lesiones deportivas tratamiento',
    'rehabilitacion post cirugia',
    'artritis tratamiento fisioterapia',
    'artrosis fisioterapia',
    'osteoporosis ejercicios',
    // Location-specific
    'fisioterapia cerca de mi',
    'terapia fisica montes de oca',
    // English keywords (secondary)
    'physical therapy costa rica',
    'physiotherapy san jose',
    'sports rehabilitation costa rica',
    'shockwave therapy costa rica',
    'geriatric physical therapy costa rica',
    'elderly physical therapy',
    'senior rehabilitation',
  ],
  authors: [{ name: 'Physical Care Fisioterapia' }],
  creator: 'Physical Care Fisioterapia',
  publisher: 'Physical Care Fisioterapia',
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com',
    languages: {
      'es-CR': 'https://physicalcarefisioterapia.com',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    alternateLocale: 'en_US',
    url: 'https://physicalcarefisioterapia.com',
    siteName: 'Physical Care Fisioterapia',
    title: 'Terapia Física y Fisioterapia en Costa Rica | Physical Care',
    description:
      'Recupera tu movimiento. Recupera tu vida. Centro líder de terapia física en Costa Rica con tratamientos especializados en rehabilitación deportiva, ondas de choque y tecarterapia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Physical Care Fisioterapia - Centro de Terapia Física en Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terapia Física en Costa Rica | Physical Care Fisioterapia',
    description:
      'Recupera tu movimiento. Fisioterapia especializada, rehabilitación deportiva y tratamientos basados en evidencia en San Pedro, Costa Rica.',
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
    '@id': 'https://physicalcarefisioterapia.com/#clinic',
    name: 'Physical Care Fisioterapia',
    alternateName: ['Terapia Física Physical Care', 'Fisioterapia Physical Care', 'Physical Care Costa Rica'],
    description:
      'Centro líder de terapia física y fisioterapia en Costa Rica. Especialistas en rehabilitación deportiva, ondas de choque, tecarterapia y tratamientos basados en evidencia.',
    url: 'https://physicalcarefisioterapia.com',
    telephone: '+50689680947',
    email: 'gerencia@physicalcarefisioterapia.com',
    image: 'https://physicalcarefisioterapia.com/og-image.jpg',
    logo: 'https://physicalcarefisioterapia.com/images/logo/favicon.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San Pedro de Montes de Oca',
      addressLocality: 'San José',
      addressRegion: 'San José',
      postalCode: '11501',
      addressCountry: 'CR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9400154,
      longitude: -84.0341901,
    },
    areaServed: [
      { '@type': 'City', name: 'San José' },
      { '@type': 'City', name: 'San Pedro' },
      { '@type': 'City', name: 'Montes de Oca' },
      { '@type': 'Country', name: 'Costa Rica' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    medicalSpecialty: [
      'Terapia Física',
      'Fisioterapia',
      'Rehabilitación Deportiva',
      'Medicina Deportiva',
      'Rehabilitación Ortopédica',
      'Fisioterapia Geriátrica',
      'Rehabilitación Geriátrica',
    ],
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Terapia Física',
        alternateName: 'Physical Therapy',
        description: 'Tratamientos especializados de terapia física para recuperación del movimiento',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Rehabilitación Deportiva',
        alternateName: 'Sports Rehabilitation',
        description: 'Recuperación de lesiones deportivas con técnicas avanzadas',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Ondas de Choque',
        alternateName: 'Shockwave Therapy',
        description: 'Terapia de ondas de choque para tratamiento del dolor crónico',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Tecarterapia',
        alternateName: 'TECAR Therapy',
        description: 'Tecnología avanzada de radiofrecuencia para acelerar la recuperación',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Terapia Manual Ortopédica',
        description: 'Técnicas manuales especializadas para problemas musculoesqueléticos',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Rehabilitación Post-Quirúrgica',
        description: 'Recuperación guiada después de cirugías ortopédicas',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Fisioterapia Geriátrica',
        alternateName: ['Terapia Física para Adultos Mayores', 'Geriatric Physical Therapy'],
        description: 'Atención especializada para adultos mayores enfocada en prevención de caídas, mejora del equilibrio, fortalecimiento muscular e independencia funcional para un envejecimiento saludable y activo',
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
    sameAs: [
      'https://www.instagram.com/physicalcarefisioterapia',
      'https://www.facebook.com/physicalcarefisioterapia',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Terapia Física',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Evaluación de Fisioterapia',
            description: 'Evaluación inicial completa con diagnóstico y plan de tratamiento personalizado',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sesión de Terapia Física',
            description: 'Sesión de tratamiento de fisioterapia de 45-60 minutos',
          },
        },
      ],
    },
  };

  return (
    <html
      lang="es"
      className={`${lora.variable} ${raleway.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/images/logo/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E88A8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-[#F4F7F8] text-[#111827] antialiased">
        {children}
      </body>
    </html>
  );
}
