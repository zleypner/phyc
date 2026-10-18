import Script from 'next/script';

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  estimatedCost?: {
    currency: string;
    value: string;
  };
  image?: string;
  id?: string;
}

/**
 * HowToSchema Component - AEO Optimized
 * Generates structured data for step-by-step guides to improve visibility in:
 * - Google Search How-To Rich Results
 * - Google Assistant / Voice Search
 * - Featured Snippets
 */
export default function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  image,
  id = 'howto-schema',
}: HowToSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  if (estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }

  if (image) {
    schema.image = image;
  }

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
