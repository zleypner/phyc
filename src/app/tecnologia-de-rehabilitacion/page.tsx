import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import TechnologyPage from '@/components/pages/TechnologyPage';

export const metadata: Metadata = {
  title: 'Tecnología de Rehabilitación Avanzada | Physical Care Costa Rica',
  description:
    'Descubra nuestra tecnología de rehabilitación de última generación: Magnetolith, Ondas de Choque STORZ Medical y Tracción Vertebral. Equipamiento utilizado por centros de medicina deportiva de élite.',
  keywords: [
    'tecnología rehabilitación',
    'magnetolith costa rica',
    'ondas de choque',
    'STORZ Medical',
    'tracción vertebral',
    'fisioterapia avanzada',
    'rehabilitación deportiva',
    'equipamiento fisioterapia',
  ],
  openGraph: {
    title: 'Tecnología de Rehabilitación Avanzada | Physical Care',
    description:
      'La recuperación más avanzada comienza con la mejor tecnología. Equipamiento de última generación para acelerar su recuperación.',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <TechnologyPage />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
