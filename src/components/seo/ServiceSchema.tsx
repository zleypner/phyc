import Script from 'next/script';

interface ServiceSchemaProps {
  name: string;
  description: string;
  image?: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
  provider?: {
    name: string;
    url: string;
  };
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
  id?: string;
}

/**
 * ServiceSchema Component - SEO Optimized
 * Generates structured data for medical services to improve:
 * - Service rich results in Google
 * - Local service pack visibility
 * - Voice search answers
 */
export default function ServiceSchema({
  name,
  description,
  image,
  url,
  serviceType,
  areaServed = ['San José', 'Costa Rica'],
  provider = {
    name: 'Physical Care Fisioterapia',
    url: 'https://physicalcarefisioterapia.com',
  },
  offers,
  id = 'service-schema',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    description,
    ...(image && { image }),
    url,
    medicineSystem: 'WesternConventional',
    serviceType,

    // Provider
    provider: {
      '@type': 'MedicalClinic',
      name: provider.name,
      url: provider.url,
      '@id': 'https://physicalcarefisioterapia.com/#clinic',
    },

    // Service area
    areaServed: areaServed.map((area) => ({
      '@type': area === 'Costa Rica' ? 'Country' : 'City',
      name: area,
    })),

    // Availability
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://physicalcarefisioterapia.com/contacto',
      servicePhone: '+506 8733-7942',
      availableLanguage: ['Spanish', 'English'],
    },

    // Offers (if provided)
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...(offers.price && { price: offers.price }),
        ...(offers.priceCurrency && { priceCurrency: offers.priceCurrency }),
        ...(offers.availability && { availability: `https://schema.org/${offers.availability}` }),
        seller: {
          '@type': 'MedicalClinic',
          name: provider.name,
        },
      },
    }),

    // Audience
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    },

    // Geographic focus
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: serviceType,
    },
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
