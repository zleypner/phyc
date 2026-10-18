import { MetadataRoute } from 'next';

/**
 * Enhanced Sitemap with images for better SEO indexing
 * Includes all pages, blog articles, and service sections
 * Images help Google understand page content for image search
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://physicalcarefisioterapia.com';
  const lastModified = new Date();

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${baseUrl}/og-image.jpg`],
    },
    // Services page - high priority for conversions
    {
      url: `${baseUrl}/servicios-especializados`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [`${baseUrl}/og-image.jpg`],
    },
    // Technology page
    {
      url: `${baseUrl}/tecnologia-de-rehabilitacion`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [`${baseUrl}/og-image.jpg`],
    },
    // Store/Shop page
    {
      url: `${baseUrl}/tienda`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Contact page - important for local SEO
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Testimonials - social proof
    {
      url: `${baseUrl}/testimonios`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Personal brand page - E-E-A-T
    {
      url: `${baseUrl}/enmanuel-li`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [
        `${baseUrl}/images/emma-personalbrand/collombia/emma-colombia-1.webp`,
        `${baseUrl}/images/emma-personalbrand/collombia/emma-colombia-2.webp`,
      ],
    },
    // Blog articles
    {
      url: `${baseUrl}/blog/mas-alla-del-dolor-fisioterapia-costa-rica`,
      lastModified: new Date('2026-10-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/emma-personalbrand/collombia/emma-colombia-1.webp`,
        `${baseUrl}/images/emma-personalbrand/collombia/emma-colombia-2.webp`,
        `${baseUrl}/images/emma-personalbrand/collombia/emma-colombia-3.webp`,
      ],
    },
    // Service section anchors - for comprehensive indexing
    {
      url: `${baseUrl}/servicios-especializados#adulto-mayor`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios-especializados#ondas-de-choque`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios-especializados#rehabilitacion-deportiva`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios-especializados#terapia-manual`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/servicios-especializados#tecarterapia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // Homepage sections
    {
      url: `${baseUrl}/#servicios`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#especialistas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
