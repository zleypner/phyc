import Script from 'next/script';

interface Review {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
}

interface LocalBusinessSchemaProps {
  reviews?: Review[];
  id?: string;
}

/**
 * LocalBusinessSchema Component - GEO Optimized
 * Enhanced schema for local SEO with:
 * - Detailed NAP (Name, Address, Phone)
 * - GeoCircle for service area radius
 * - Individual reviews for rich results
 * - Multiple contact points
 */
export default function LocalBusinessSchema({
  reviews = [],
  id = 'local-business-schema'
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PhysicalTherapyClinic',
    '@id': 'https://physicalcarefisioterapia.com/#local-business',
    name: 'Physical Care Fisioterapia',
    alternateName: [
      'Physical Care',
      'Terapia Física Physical Care',
      'Fisioterapia San Pedro',
      'Physical Care Costa Rica',
    ],
    description: 'Centro líder de terapia física y fisioterapia en San Pedro, Costa Rica. Especialistas en rehabilitación deportiva, fisioterapia geriátrica, ondas de choque y tecarterapia. Más de 9 años de experiencia y 450+ pacientes satisfechos.',
    url: 'https://physicalcarefisioterapia.com',
    telephone: '+506 8733-7942',
    email: 'gerencia@physicalcarefisioterapia.com',

    // Enhanced Address (NAP consistency)
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San Pedro de Montes de Oca, 200m sur de la Iglesia',
      addressLocality: 'San Pedro',
      addressRegion: 'San José',
      postalCode: '11501',
      addressCountry: 'CR',
    },

    // Precise geo coordinates
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9400154,
      longitude: -84.0341901,
    },

    // Service area with radius (GEO optimization)
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 9.9400154,
          longitude: -84.0341901,
        },
        geoRadius: '15000', // 15km radius
      },
      { '@type': 'City', name: 'San Pedro', containedInPlace: { '@type': 'AdministrativeArea', name: 'San José' } },
      { '@type': 'City', name: 'San José' },
      { '@type': 'City', name: 'Montes de Oca' },
      { '@type': 'City', name: 'Curridabat' },
      { '@type': 'City', name: 'Zapote' },
      { '@type': 'City', name: 'Tres Ríos' },
      { '@type': 'City', name: 'Cartago' },
      { '@type': 'City', name: 'Heredia' },
      { '@type': 'City', name: 'Escazú' },
      { '@type': 'City', name: 'Santa Ana' },
      { '@type': 'Country', name: 'Costa Rica' },
    ],

    // Contact points
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+506 8733-7942',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'English'],
        areaServed: 'CR',
      },
      {
        '@type': 'ContactPoint',
        email: 'gerencia@physicalcarefisioterapia.com',
        contactType: 'reservations',
        availableLanguage: ['Spanish', 'English'],
      },
    ],

    // Operating hours
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],

    // Images
    image: [
      'https://physicalcarefisioterapia.com/og-image.jpg',
      'https://physicalcarefisioterapia.com/images/logo/favicon.png',
    ],
    logo: 'https://physicalcarefisioterapia.com/images/logo/favicon.png',

    // Ratings
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '450',
      bestRating: '5',
      worstRating: '1',
    },

    // Individual reviews
    ...(reviews.length > 0 && {
      review: reviews.map((review) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author,
        },
        reviewBody: review.reviewBody,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.reviewRating,
          bestRating: 5,
          worstRating: 1,
        },
        datePublished: review.datePublished,
      })),
    }),

    // Business details
    priceRange: '$$',
    currenciesAccepted: 'CRC, USD',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'SINPE Móvil', 'Bank Transfer'],

    // Social profiles
    sameAs: [
      'https://www.instagram.com/physicalcarefisioterapia',
      'https://www.facebook.com/physicalcarefisioterapia',
      'https://wa.me/50687337942',
      'https://maps.google.com/?cid=YOUR_GOOGLE_MAPS_CID',
    ],

    // Potential actions (for Google)
    potentialAction: [
      {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/50687337942?text=Hola,%20quiero%20agendar%20una%20cita',
          inLanguage: 'es',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Cita de Fisioterapia',
        },
      },
    ],

    // Accessibility
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking Available', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    ],

    // Founded info
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      name: 'MSc. Enmanuel Li Torres',
      jobTitle: 'Fisioterapeuta Director',
    },

    // Keywords for local search
    keywords: [
      'terapia fisica san pedro',
      'fisioterapia costa rica',
      'rehabilitacion deportiva san jose',
      'ondas de choque costa rica',
      'fisioterapia geriatrica',
      'terapia fisica adultos mayores',
    ],

    // Knows about (expertise)
    knowsAbout: [
      'Physical Therapy',
      'Sports Rehabilitation',
      'Shockwave Therapy',
      'TECAR Therapy',
      'Geriatric Physical Therapy',
      'Orthopedic Manual Therapy',
      'Post-surgical Rehabilitation',
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
