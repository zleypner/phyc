import Script from 'next/script';

interface Credential {
  name: string;
  issuedBy: string;
  dateIssued?: string;
}

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  url: string;
  email?: string;
  telephone?: string;
  credentials?: Credential[];
  alumniOf?: string[];
  knowsAbout?: string[];
  memberOf?: string[];
  awards?: string[];
  sameAs?: string[];
  id?: string;
}

/**
 * PersonSchema Component - E-E-A-T Optimized
 * Generates structured data for professionals to establish:
 * - Expertise, Experience, Authoritativeness, Trustworthiness
 * - Author credibility for blog posts
 * - Professional credentials visibility
 */
export default function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  url,
  email,
  telephone,
  credentials = [],
  alumniOf = [],
  knowsAbout = [],
  memberOf = [],
  awards = [],
  sameAs = [],
  id = 'person-schema',
}: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${url}#person`,
    name,
    jobTitle,
    description,
    image,
    url,
    ...(email && { email }),
    ...(telephone && { telephone }),

    // Work affiliation
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': 'https://physicalcarefisioterapia.com/#clinic',
      name: 'Physical Care Fisioterapia',
      url: 'https://physicalcarefisioterapia.com',
    },

    // Credentials (important for E-E-A-T)
    ...(credentials.length > 0 && {
      hasCredential: credentials.map((cred) => ({
        '@type': 'EducationalOccupationalCredential',
        name: cred.name,
        credentialCategory: 'Professional Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: cred.issuedBy,
        },
        ...(cred.dateIssued && { dateCreated: cred.dateIssued }),
      })),
    }),

    // Education
    ...(alumniOf.length > 0 && {
      alumniOf: alumniOf.map((school) => ({
        '@type': 'EducationalOrganization',
        name: school,
      })),
    }),

    // Expertise
    ...(knowsAbout.length > 0 && { knowsAbout }),

    // Professional memberships
    ...(memberOf.length > 0 && {
      memberOf: memberOf.map((org) => ({
        '@type': 'Organization',
        name: org,
      })),
    }),

    // Awards and honors
    ...(awards.length > 0 && { award: awards }),

    // Social profiles
    ...(sameAs.length > 0 && { sameAs }),

    // Nationality
    nationality: {
      '@type': 'Country',
      name: 'Costa Rica',
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
