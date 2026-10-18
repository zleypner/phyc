import Script from 'next/script';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  id?: string;
}

/**
 * FAQSchema Component - AEO Optimized
 * Generates structured data for FAQ sections to improve visibility in:
 * - Google Search FAQ Rich Results
 * - Google Assistant / Voice Search
 * - AI Answer Engines (ChatGPT, Perplexity, etc.)
 */
export default function FAQSchema({ faqs, id = 'faq-schema' }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
