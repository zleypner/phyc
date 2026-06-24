import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import TiendaPage from '@/components/pages/TiendaPage';

export const metadata: Metadata = {
  title: 'Plantillas Ortopedicas Costa Rica | Tienda Physical Care',
  description:
    'Plantillas ortopedicas personalizadas y pre-fabricadas en Costa Rica. Correccion postural, alivio del dolor de pies, rodillas y espalda. Evaluacion profesional incluida.',
  keywords: [
    'plantillas ortopedicas costa rica',
    'plantillas personalizadas',
    'plantillas para pies planos',
    'ortesis plantares',
    'plantillas deportivas',
    'plantillas para fascitis plantar',
    'plantillas adulto mayor',
    'corrector de pisada',
    'soporte de arco',
    'plantillas a medida costa rica',
    'fisioterapia plantillas',
    'dolor de pies tratamiento',
  ],
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com/tienda',
  },
  openGraph: {
    title: 'Plantillas Ortopedicas Costa Rica | Physical Care',
    description:
      'Plantillas ortopedicas personalizadas y pre-fabricadas. Evaluacion biomecanica profesional incluida. Alivia el dolor de pies, rodillas y espalda.',
    url: 'https://physicalcarefisioterapia.com/tienda',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <TiendaPage />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
