import { Metadata } from 'next';
import Script from 'next/script';

const baseUrl = 'https://www.physicalcarefisioterapia.com';
const articleUrl = `${baseUrl}/blog/physical-care-argentina-capacitacion-instituciones-deportivas`;
const heroImage = '/images/emma-personalbrand/argentina/1.jpeg';
const publishDate = '2026-11-13';

export const metadata: Metadata = {
  title: 'Fisioterapeuta Costarricense Capacita a River Plate y San Lorenzo en Argentina | Physical Care',
  description:
    'El MSc. Enmanuel Li Torres fue invitado como capacitador experto a Argentina para instruir a instituciones deportivas de élite: River Plate, San Lorenzo y el Comité Olímpico Argentino. Terapia física de nivel internacional en Costa Rica.',
  keywords: [
    // Primary - Terapia Física Costa Rica
    'terapia fisica costa rica',
    'terapia fisica san jose',
    'terapia fisica san pedro',
    'fisioterapia costa rica',
    'fisioterapeuta costa rica',
    'centro de terapia fisica costa rica',
    // Rehabilitación deportiva
    'rehabilitacion deportiva costa rica',
    'fisioterapia deportiva costa rica',
    'fisioterapia deportiva san jose',
    'tratamiento lesiones deportivas costa rica',
    'recuperacion deportiva costa rica',
    // Alto rendimiento
    'fisioterapia alto rendimiento',
    'medicina deportiva costa rica',
    'rehabilitacion atletas costa rica',
    'fisioterapeuta deportivo costa rica',
    // Capacitación internacional
    'capacitacion fisioterapia internacional',
    'fisioterapeuta certificado costa rica',
    'especialista rehabilitacion deportiva',
    // NEUROLITH / Tecnología
    'neurolith costa rica',
    'storz medical costa rica',
    'tecnologia rehabilitacion costa rica',
    'innovacion fisioterapia',
    // Profesional
    'enmanuel li torres fisioterapeuta',
    'physical care fisioterapia',
    'mejor fisioterapeuta costa rica',
    'clinica fisioterapia san pedro',
    // Capacitación internacional
    'fisioterapeuta capacitador internacional',
    'capacitacion fisioterapia argentina',
    'capacitacion fisioterapia colombia',
    'fisioterapeuta river plate',
    'fisioterapeuta san lorenzo',
    'comite olimpico argentino fisioterapia',
    // Ubicaciones internacionales
    'fisioterapia buenos aires',
    'fisioterapia bogota colombia',
    'capacitador latinoamericano fisioterapia',
    // English keywords
    'physical therapy costa rica',
    'sports rehabilitation costa rica',
    'sports physiotherapy san jose',
    'physical therapist costa rica',
    'international physical therapy trainer',
    'elite sports rehabilitation',
  ],
  authors: [
    {
      name: 'MSc. Enmanuel Li Torres',
      url: `${baseUrl}/enmanuel-li`,
    },
  ],
  alternates: {
    canonical: articleUrl,
    languages: {
      'es-CR': articleUrl,
      'es': articleUrl,
    },
  },
  openGraph: {
    title: 'Fisioterapeuta Costarricense Capacita a Instituciones Deportivas de Élite en Argentina',
    description:
      'El MSc. Enmanuel Li Torres fue invitado como instructor experto a River Plate, San Lorenzo y el Comité Olímpico Argentino. El mismo expertise disponible en Physical Care Costa Rica.',
    url: articleUrl,
    siteName: 'Physical Care Fisioterapia',
    locale: 'es_CR',
    type: 'article',
    publishedTime: publishDate,
    authors: ['MSc. Enmanuel Li Torres'],
    section: 'Terapia Física',
    tags: ['terapia física', 'fisioterapia', 'rehabilitación deportiva', 'Costa Rica', 'Argentina'],
    images: [
      {
        url: `${baseUrl}${heroImage}`,
        width: 1200,
        height: 630,
        alt: 'MSc. Enmanuel Li Torres - Fisioterapeuta de Costa Rica en capacitación internacional en Argentina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terapia Física Costa Rica: Capacitación en Instituciones Deportivas de Argentina',
    description:
      'Physical Care trae experiencia internacional de River Plate, San Lorenzo y el Comité Olímpico Argentino a la rehabilitación deportiva en Costa Rica.',
    images: [`${baseUrl}${heroImage}`],
    creator: '@physicalcarecr',
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
  category: 'Healthcare',
  classification: 'Physical Therapy',
};

// Structured data schemas optimized for SEO, GEO, and AEO
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
      name: 'Terapia Física Costa Rica: Capacitación en Argentina',
      item: articleUrl,
    },
  ],
};

// Person schema for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${baseUrl}/enmanuel-li#person`,
  name: 'MSc. Enmanuel Li Torres',
  givenName: 'Enmanuel',
  familyName: 'Li Torres',
  honorificPrefix: 'MSc.',
  jobTitle: 'Director Clínico y Fisioterapeuta Especialista',
  description: 'Fisioterapeuta especialista en rehabilitación deportiva con más de 12 años de experiencia clínica. Director clínico de Physical Care Fisioterapia en Costa Rica. Capacitador internacional en Buenos Aires, Argentina y Bogotá, Colombia.',
  worksFor: {
    '@type': 'MedicalClinic',
    name: 'Physical Care Fisioterapia',
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Pedro',
      addressRegion: 'San José',
      addressCountry: 'Costa Rica',
    },
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Universidad de Costa Rica',
  },
  knowsAbout: [
    'Terapia Física',
    'Fisioterapia',
    'Rehabilitación Deportiva',
    'Ondas de Choque',
    'EMTT',
    'Magnetolith',
    'Medicina Deportiva',
    'Physical Therapy',
    'Sports Rehabilitation',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Maestría en Ciencias',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Fisioterapeuta Licenciado',
    },
  ],
  url: `${baseUrl}/enmanuel-li`,
  sameAs: [
    'https://www.instagram.com/physicalcarefisioterapia',
    'https://www.linkedin.com/in/enmanuel-li-torres',
  ],
};

// Organization schema for the clinic
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${baseUrl}/#clinic`,
  name: 'Physical Care Fisioterapia',
  alternateName: ['Physical Care', 'Terapia Física Physical Care', 'Fisioterapia San Pedro Costa Rica'],
  url: baseUrl,
  logo: `${baseUrl}/images/logo/logo-removedbg.png`,
  image: `${baseUrl}/images/sesion1/Physical Care Fisioterapia-1.webp`,
  description:
    'Centro líder de terapia física y fisioterapia en Costa Rica. Especialistas en rehabilitación deportiva, ondas de choque, Magnetolith EMTT, tecarterapia y tratamiento de lesiones deportivas en San Pedro de Montes de Oca, San José.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '150m norte de Perimercados Vargas Araya',
    addressLocality: 'San Pedro de Montes de Oca',
    addressRegion: 'San José',
    postalCode: '11501',
    addressCountry: 'CR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.9400154,
    longitude: -84.0341901,
  },
  telephone: '+506 8733-7942',
  email: 'gerencia@physicalcarefisioterapia.com',
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
  areaServed: [
    { '@type': 'Country', name: 'Costa Rica' },
    { '@type': 'City', name: 'San José' },
    { '@type': 'City', name: 'San Pedro' },
    { '@type': 'City', name: 'Montes de Oca' },
    { '@type': 'City', name: 'Curridabat' },
    { '@type': 'City', name: 'Heredia' },
    { '@type': 'City', name: 'Cartago' },
  ],
  medicalSpecialty: [
    'PhysicalTherapy',
    'Rehabilitation',
    'SportsTherapy',
    'Orthopedics',
  ],
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Rehabilitación Deportiva',
      alternateName: 'Sports Rehabilitation',
      description: 'Tratamiento especializado para lesiones deportivas y recuperación de atletas.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Terapia Física',
      alternateName: 'Physical Therapy',
      description: 'Programas personalizados de terapia física para recuperación del movimiento.',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Ondas de Choque',
      alternateName: 'Shockwave Therapy',
      description: 'Tratamiento con ondas de choque para tendinopatías y dolor crónico.',
    },
  ],
};

// Article schema optimized for AEO
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${articleUrl}#article`,
  headline: 'Physical Care en Argentina: capacitación, innovación y experiencia en instituciones deportivas de alto rendimiento',
  alternativeHeadline: 'Terapia Física Costa Rica: Experiencia Internacional en Rehabilitación Deportiva',
  description:
    'El MSc. Enmanuel Li Torres, fisioterapeuta director de Physical Care Fisioterapia en Costa Rica, realizó una visita profesional a Argentina para capacitación en medicina deportiva y rehabilitación de alto rendimiento.',
  image: {
    '@type': 'ImageObject',
    url: `${baseUrl}${heroImage}`,
    width: 1200,
    height: 630,
    caption: 'MSc. Enmanuel Li Torres durante su visita profesional a Argentina',
  },
  author: personSchema,
  publisher: organizationSchema,
  datePublished: publishDate,
  dateModified: publishDate,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': articleUrl,
  },
  inLanguage: 'es-CR',
  articleSection: 'Terapia Física y Capacitación Profesional',
  wordCount: 1200,
  keywords: [
    'terapia física costa rica',
    'fisioterapia costa rica',
    'rehabilitación deportiva',
    'fisioterapia deportiva',
    'River Plate',
    'San Lorenzo',
    'Comité Olímpico Argentino',
    'NEUROLITH',
    'capacitación internacional',
    'physical therapy costa rica',
  ],
  about: [
    {
      '@type': 'Thing',
      name: 'Terapia Física',
      alternateName: 'Physical Therapy',
      description: 'Tratamiento de rehabilitación para mejorar el movimiento y la función física.',
    },
    {
      '@type': 'Thing',
      name: 'Rehabilitación Deportiva',
      alternateName: 'Sports Rehabilitation',
      description: 'Recuperación especializada de lesiones deportivas.',
    },
    {
      '@type': 'Event',
      name: 'Visita profesional a instituciones deportivas de Argentina',
      description: 'Capacitación y actualización profesional en medicina deportiva y rehabilitación de alto rendimiento.',
      location: {
        '@type': 'Country',
        name: 'Argentina',
      },
      organizer: {
        '@type': 'Organization',
        name: 'STORZ MEDICAL',
      },
    },
    {
      '@type': 'MedicalDevice',
      name: 'NEUROLITH',
      manufacturer: {
        '@type': 'Organization',
        name: 'STORZ MEDICAL',
      },
      description: 'Tecnología de estimulación transcraneal por pulsos acústicos para investigación neurológica.',
    },
  ],
  mentions: [
    {
      '@type': 'SportsOrganization',
      name: 'Club Atlético River Plate',
      sport: 'Football',
      location: {
        '@type': 'City',
        name: 'Buenos Aires',
        containedInPlace: {
          '@type': 'Country',
          name: 'Argentina',
        },
      },
    },
    {
      '@type': 'SportsOrganization',
      name: 'Club Atlético San Lorenzo de Almagro',
      sport: 'Football',
      location: {
        '@type': 'City',
        name: 'Buenos Aires',
        containedInPlace: {
          '@type': 'Country',
          name: 'Argentina',
        },
      },
    },
    {
      '@type': 'Organization',
      name: 'Comité Olímpico Argentino',
      description: 'Organización vinculada con el desarrollo del deporte olímpico en Argentina.',
      location: {
        '@type': 'Country',
        name: 'Argentina',
      },
    },
    {
      '@type': 'City',
      name: 'Bogotá',
      containedInPlace: {
        '@type': 'Country',
        name: 'Colombia',
      },
      description: 'Ciudad donde el MSc. Enmanuel Li Torres también ha impartido capacitaciones internacionales en fisioterapia.',
    },
  ],
  citation: [
    {
      '@type': 'Organization',
      name: 'STORZ MEDICAL',
      url: 'https://www.storzmedical.com',
    },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['article h1', 'article h2', 'article p:first-of-type'],
  },
};

// FAQ schema for AEO (Answer Engine Optimization)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${articleUrl}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Dónde encontrar terapia física de calidad en Costa Rica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physical Care Fisioterapia, ubicada en San Pedro de Montes de Oca, San José, es un centro especializado en terapia física con más de 12 años de experiencia. El equipo está liderado por el MSc. Enmanuel Li Torres, quien cuenta con capacitación internacional en instituciones deportivas de élite como River Plate, San Lorenzo y el Comité Olímpico Argentino.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué instituciones visitó el director clínico de Physical Care en Argentina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El MSc. Enmanuel Li Torres visitó el Club Atlético River Plate, el Club Atlético San Lorenzo de Almagro, el Comité Olímpico Argentino y diversas clínicas especializadas en medicina deportiva y rehabilitación en Buenos Aires, Argentina.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué otros países ha dado capacitaciones el MSc. Enmanuel Li Torres?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Además de Buenos Aires, Argentina, el MSc. Enmanuel Li Torres también ha impartido capacitaciones en Bogotá, Colombia, consolidando su rol como capacitador internacional en fisioterapia y rehabilitación deportiva en Latinoamérica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué es importante la capacitación internacional en fisioterapia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La capacitación internacional permite conocer nuevas investigaciones, tecnologías y enfoques profesionales que pueden contribuir a la actualización del conocimiento clínico. Esto se traduce en mejores tratamientos de terapia física para los pacientes en Costa Rica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Physical Care ofrece rehabilitación deportiva en Costa Rica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Physical Care Fisioterapia cuenta con servicios especializados de rehabilitación deportiva, ondas de choque, Magnetolith EMTT y programas de fisioterapia orientados a la recuperación funcional y al regreso progresivo a las actividades físicas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo puedo agendar una cita de terapia física en Physical Care Costa Rica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes agendar tu cita de terapia física contactando a Physical Care Fisioterapia por WhatsApp al +506 8733-7942 o visitando su sitio web physicalcarefisioterapia.com. La clínica está ubicada en San Pedro de Montes de Oca, San José, Costa Rica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el mejor centro de terapia física en San José, Costa Rica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physical Care Fisioterapia es reconocido como uno de los mejores centros de terapia física en San José, Costa Rica. Con más de 450 pacientes satisfechos, calificación de 4.9/5 estrellas, y un equipo liderado por profesionales con capacitación internacional, ofrece tratamientos especializados en rehabilitación deportiva, ondas de choque, tecarterapia y fisioterapia geriátrica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién es Enmanuel Li Torres y cuál es su experiencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El MSc. Enmanuel Li Torres es el director clínico de Physical Care Fisioterapia en Costa Rica. Con más de 12 años de experiencia clínica, es fisioterapeuta especialista en rehabilitación deportiva y capacitador internacional certificado por STORZ MEDICAL. Ha impartido capacitaciones en instituciones deportivas de élite en Argentina (River Plate, San Lorenzo, Comité Olímpico Argentino) y Colombia (Bogotá).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tecnologías de rehabilitación utiliza Physical Care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physical Care Fisioterapia utiliza tecnologías avanzadas de rehabilitación incluyendo ondas de choque focales y radiales, Magnetolith EMTT (magnetotransducción), tecarterapia, y protocolos basados en evidencia científica. El equipo está certificado por STORZ MEDICAL en el uso de estas tecnologías.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Physical Care atiende a deportistas profesionales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Physical Care Fisioterapia aplica los mismos protocolos y metodologías utilizados para capacitar a instituciones deportivas de alto rendimiento como River Plate y San Lorenzo. Cada paciente, sea deportista profesional, atleta amateur o persona con dolor crónico, recibe atención de nivel internacional.',
      },
    },
  ],
};

// Medical Webpage schema for healthcare content
const medicalWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${articleUrl}#webpage`,
  url: articleUrl,
  name: 'Physical Care en Argentina: Capacitación Internacional en Terapia Física',
  description: 'Artículo sobre la capacitación internacional del equipo de Physical Care Fisioterapia Costa Rica en instituciones deportivas de Argentina.',
  inLanguage: 'es-CR',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Physical Care Fisioterapia',
    url: baseUrl,
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${baseUrl}${heroImage}`,
  },
  datePublished: publishDate,
  dateModified: publishDate,
  author: personSchema,
  specialty: {
    '@type': 'MedicalSpecialty',
    name: 'Physical Therapy and Rehabilitation Medicine',
  },
  audience: {
    '@type': 'MedicalAudience',
    audienceType: 'Patient',
    healthCondition: [
      {
        '@type': 'MedicalCondition',
        name: 'Sports Injuries',
        alternateName: 'Lesiones Deportivas',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Musculoskeletal Disorders',
        alternateName: 'Trastornos Musculoesqueléticos',
      },
    ],
  },
  mainContentOfPage: {
    '@type': 'WebPageElement',
    cssSelector: 'article',
  },
  relatedLink: [
    `${baseUrl}/servicios-especializados`,
    `${baseUrl}/tecnologia-de-rehabilitacion`,
    `${baseUrl}/enmanuel-li`,
  ],
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data - SEO, GEO, AEO Optimized */}
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="medical-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
