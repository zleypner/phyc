import Script from 'next/script';

interface WebsiteSchemaProps {
  id?: string;
}

/**
 * WebsiteSchema Component - AEO Optimized
 * Generates structured data for:
 * - Sitelinks Search Box in Google
 * - Organization knowledge panel
 * - Voice search optimization
 */
export default function WebsiteSchema({ id = 'website-schema' }: WebsiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // WebSite schema with SearchAction (for Sitelinks Searchbox)
      {
        '@type': 'WebSite',
        '@id': 'https://physicalcarefisioterapia.com/#website',
        url: 'https://physicalcarefisioterapia.com',
        name: 'Physical Care Fisioterapia',
        description: 'Centro líder de terapia física y fisioterapia en Costa Rica',
        publisher: {
          '@id': 'https://physicalcarefisioterapia.com/#organization',
        },
        inLanguage: 'es-CR',
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://physicalcarefisioterapia.com/?s={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        ],
      },
      // Organization schema
      {
        '@type': 'Organization',
        '@id': 'https://physicalcarefisioterapia.com/#organization',
        name: 'Physical Care Fisioterapia',
        alternateName: ['Physical Care', 'PC Fisioterapia', 'Terapia Física Physical Care'],
        url: 'https://physicalcarefisioterapia.com',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://physicalcarefisioterapia.com/#logo',
          url: 'https://physicalcarefisioterapia.com/images/logo/favicon.png',
          contentUrl: 'https://physicalcarefisioterapia.com/images/logo/favicon.png',
          width: 512,
          height: 512,
          caption: 'Physical Care Fisioterapia Logo',
        },
        image: {
          '@id': 'https://physicalcarefisioterapia.com/#logo',
        },
        sameAs: [
          'https://www.instagram.com/physicalcarefisioterapia',
          'https://www.facebook.com/physicalcarefisioterapia',
          'https://wa.me/50687337942',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+506 8733-7942',
          contactType: 'customer service',
          email: 'gerencia@physicalcarefisioterapia.com',
          availableLanguage: ['Spanish', 'English'],
          areaServed: {
            '@type': 'Country',
            name: 'Costa Rica',
          },
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'San Pedro de Montes de Oca',
          addressLocality: 'San José',
          addressCountry: 'CR',
        },
        founder: {
          '@type': 'Person',
          name: 'MSc. Enmanuel Li Torres',
          jobTitle: 'Fisioterapeuta Director',
          url: 'https://physicalcarefisioterapia.com/enmanuel-li',
        },
        // Speakable for voice search (AEO)
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.speakable', '[data-speakable="true"]'],
        },
      },
      // WebPage schema for homepage
      {
        '@type': 'WebPage',
        '@id': 'https://physicalcarefisioterapia.com/#webpage',
        url: 'https://physicalcarefisioterapia.com',
        name: 'Terapia Física en Costa Rica | Physical Care Fisioterapia San Pedro',
        isPartOf: {
          '@id': 'https://physicalcarefisioterapia.com/#website',
        },
        about: {
          '@id': 'https://physicalcarefisioterapia.com/#organization',
        },
        description: 'Centro de terapia física y fisioterapia en San Pedro, Costa Rica. Especialistas en rehabilitación deportiva, ondas de choque, tecarterapia y tratamiento del dolor.',
        breadcrumb: {
          '@id': 'https://physicalcarefisioterapia.com/#breadcrumb',
        },
        inLanguage: 'es-CR',
        potentialAction: [
          {
            '@type': 'ReadAction',
            target: ['https://physicalcarefisioterapia.com'],
          },
        ],
      },
    ],
  };

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
