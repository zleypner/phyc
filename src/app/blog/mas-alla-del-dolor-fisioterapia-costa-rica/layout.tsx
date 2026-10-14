import { Metadata } from 'next';
import Script from 'next/script';

const baseUrl = 'https://www.physicalcarefisioterapia.com';
const articleUrl = `${baseUrl}/blog/mas-alla-del-dolor-fisioterapia-costa-rica`;
const heroImage = '/images/emma-personalbrand/collombia/WhatsApp Image 2026-09-14 at 16.55.52 (3).jpeg';
const publishDate = '2026-10-14';

export const metadata: Metadata = {
  title: 'Fisioterapia Avanzada en Costa Rica | EMTT y Ondas de Choque',
  description:
    'Conozca cómo Physical Care combina Magnetolith, ondas de choque y ejercicio terapéutico para abordar dolor de hombro y lesiones persistentes en Costa Rica.',
  keywords: [
    'fisioterapia avanzada Costa Rica',
    'fisioterapia San Pedro Costa Rica',
    'fisioterapia Montes de Oca',
    'ondas de choque Costa Rica',
    'Magnetolith Costa Rica',
    'magnetotransducción EMTT',
    'tratamiento manguito rotador Costa Rica',
    'rehabilitación de hombro',
    'tratamiento tendinitis Costa Rica',
    'fisioterapia deportiva Costa Rica',
    'dolor de hombro tratamiento',
    'rehabilitación musculoesquelética',
    'fisioterapia para dolor persistente',
    'dónde tratar lesión manguito rotador Costa Rica',
    'qué es Magnetolith',
    'fisioterapia dolor hombro que no desaparece',
    'ondas de choque San José Costa Rica',
  ],
  authors: [
    {
      name: 'Lic. Enmanuel Li Torres',
      url: `${baseUrl}/enmanuel-li`,
    },
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: 'Más allá del dolor: innovación en fisioterapia en Costa Rica',
    description:
      'Conozca el enfoque de rehabilitación presentado por Physical Care en un congreso internacional de fisioterapia en Colombia.',
    url: articleUrl,
    siteName: 'Physical Care Fisioterapia',
    locale: 'es_CR',
    type: 'article',
    publishedTime: publishDate,
    authors: ['Lic. Enmanuel Li Torres'],
    images: [
      {
        url: `${baseUrl}${heroImage}`,
        width: 1200,
        height: 630,
        alt: 'Lic. Enmanuel Li Torres presentando en el congreso ISMST-OCC 2026 sobre fisioterapia avanzada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fisioterapia Avanzada en Costa Rica | Physical Care',
    description:
      'Conozca cómo Physical Care combina Magnetolith, ondas de choque y ejercicio terapéutico para abordar lesiones persistentes.',
    images: [`${baseUrl}${heroImage}`],
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
};

// Structured data schemas
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: baseUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${baseUrl}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Fisioterapia avanzada Costa Rica',
      item: articleUrl,
    },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lic. Enmanuel Li Torres',
  jobTitle: 'Director Clínico y General',
  worksFor: {
    '@type': 'MedicalClinic',
    name: 'Physical Care Fisioterapia',
    url: baseUrl,
  },
  url: `${baseUrl}/enmanuel-li`,
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Physical Care Fisioterapia',
  url: baseUrl,
  logo: `${baseUrl}/images/logo/logo-removedbg.png`,
  image: `${baseUrl}/images/sesion1/Physical Care Fisioterapia-1.webp`,
  description:
    'Clínica de fisioterapia especializada en rehabilitación musculoesquelética, ondas de choque, Magnetolith EMTT y tratamiento de lesiones deportivas en San Pedro de Montes de Oca, Costa Rica.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '150m norte de Perimercados Vargas Araya',
    addressLocality: 'San Pedro de Montes de Oca',
    addressRegion: 'San José',
    addressCountry: 'CR',
  },
  telephone: '+506 8733-7942',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  medicalSpecialty: [
    'PhysicalTherapy',
    'Rehabilitation',
    'SportsTherapy',
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Más allá del dolor: fisioterapia avanzada, Magnetolith y ondas de choque en Costa Rica',
  description:
    'El Lic. Enmanuel Li Torres presentó en un congreso internacional en Colombia un enfoque de rehabilitación que integra magnetotransducción EMTT, ondas de choque y ejercicio terapéutico.',
  image: `${baseUrl}${heroImage}`,
  author: personSchema,
  publisher: organizationSchema,
  datePublished: publishDate,
  dateModified: publishDate,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': articleUrl,
  },
  inLanguage: 'es-CR',
  articleSection: 'Innovación en Fisioterapia',
  keywords: [
    'fisioterapia avanzada',
    'EMTT',
    'Magnetolith',
    'ondas de choque',
    'manguito rotador',
    'rehabilitación',
    'Costa Rica',
  ],
  about: [
    {
      '@type': 'MedicalTherapy',
      name: 'Magnetotransducción extracorpórea (EMTT)',
      description: 'Tecnología que utiliza campos electromagnéticos variables de alta intensidad para inducir estímulos bioeléctricos en los tejidos.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Ondas de choque extracorpóreas',
      description: 'Impulsos acústicos utilizados en el tratamiento de condiciones musculoesqueléticas como tendinopatías.',
    },
  ],
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
