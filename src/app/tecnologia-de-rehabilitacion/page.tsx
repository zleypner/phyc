import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import TechnologyPage from '@/components/pages/TechnologyPage';

export const metadata: Metadata = {
  title: 'Tecnología Avanzada de Terapia Física | Equipos Fisioterapia Costa Rica',
  description:
    'Tecnología de terapia física de última generación en Costa Rica: Magnetolith, Ondas de Choque, Tecarterapia y Tracción Vertebral. Equipamiento de élite para rehabilitación deportiva y tratamiento del dolor.',
  keywords: [
    'tecnologia terapia fisica',
    'equipos fisioterapia costa rica',
    'magnetolith costa rica',
    'ondas de choque costa rica',
    'tecarterapia',
    'traccion vertebral',
    'fisioterapia avanzada costa rica',
    'rehabilitacion deportiva tecnologia',
    'equipamiento rehabilitacion',
    'tratamiento dolor tecnologia',
  ],
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com/tecnologia-de-rehabilitacion',
  },
  openGraph: {
    title: 'Tecnología de Terapia Física Avanzada | Physical Care Costa Rica',
    description:
      'Equipamiento de terapia física de última generación: Magnetolith, Ondas de Choque, Tecarterapia. Tecnología utilizada por centros de medicina deportiva de élite.',
    url: 'https://physicalcarefisioterapia.com/tecnologia-de-rehabilitacion',
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
