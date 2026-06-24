import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Blog from '@/components/sections/Blog';
import FacebookSection from '@/components/sections/FacebookSection';

// Video data for SEO schema
const educationalVideos = [
  {
    id: 'OM31KyiG3V8',
    title: 'Video Educativo #1',
    description: 'Contenido educativo sobre fisioterapia, rehabilitación y bienestar físico.',
  },
  {
    id: 'YvhJGLEjQik',
    title: 'Video Educativo #2',
    description: 'Consejos y recomendaciones para mejorar la salud física y prevenir lesiones.',
  },
  {
    id: '86KSlYxNkZk',
    title: 'Video Educativo #3',
    description: 'Información profesional para pacientes en proceso de recuperación.',
  },
  {
    id: 'KfsL2UCPwP0',
    title: 'Video Educativo #4',
    description: 'Explicaciones prácticas sobre ejercicios terapéuticos y movilidad.',
  },
  {
    id: 'SB0nNJc5EWM',
    title: 'Video Educativo #5',
    description: 'Recomendaciones para mejorar calidad de vida y rendimiento físico.',
  },
  {
    id: 'pSSy13tjrU4',
    title: 'Video Educativo #6',
    description: 'Contenido especializado desarrollado por profesionales de fisioterapia.',
  },
];

export const metadata: Metadata = {
  title: 'Blog y Videos Educativos',
  description:
    'Artículos, recursos y videos educativos sobre fisioterapia, rehabilitación deportiva y bienestar físico. Consejos de expertos para su recuperación.',
  keywords: [
    'blog fisioterapia',
    'videos educativos fisioterapia',
    'rehabilitación',
    'ejercicios terapéuticos',
    'bienestar físico',
    'consejos salud',
    'prevención lesiones',
  ],
  openGraph: {
    title: 'Blog y Videos Educativos | Physical Care Fisioterapia',
    description:
      'Artículos, recursos y videos educativos sobre fisioterapia, rehabilitación y bienestar físico.',
    type: 'website',
    images: [
      {
        url: `https://img.youtube.com/vi/${educationalVideos[0].id}/maxresdefault.jpg`,
        width: 1280,
        height: 720,
        alt: 'Videos educativos de Physical Care Fisioterapia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog y Videos Educativos | Physical Care Fisioterapia',
    description:
      'Artículos y videos educativos sobre fisioterapia y rehabilitación.',
    images: [`https://img.youtube.com/vi/${educationalVideos[0].id}/maxresdefault.jpg`],
  },
};

// VideoObject schema for SEO
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: educationalVideos.map((video, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'VideoObject',
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
      uploadDate: '2024-01-01',
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      publisher: {
        '@type': 'Organization',
        name: 'Physical Care Fisioterapia',
        logo: {
          '@type': 'ImageObject',
          url: 'https://physicalcarefisioterapia.com/images/logo/logo-removedbg.png',
        },
      },
    },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Header />
      <main className="pt-20">
        <Blog />
        <FacebookSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
