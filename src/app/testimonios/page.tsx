import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonios y Casos de Éxito | Physical Care Fisioterapia',
  description:
    'Lee testimonios reales y casos de éxito de nuestros pacientes rehabilitados en Montes de Oca, Costa Rica. Descubre cómo ayudamos a personas a recuperar su movimiento.',
  keywords: [
    'testimonios fisioterapia',
    'casos de exito fisioterapia',
    'opiniones physical care',
    'fisioterapia san pedro opiniones',
  ],
  openGraph: {
    title: 'Testimonios y Casos de Éxito | Physical Care Fisioterapia',
    description:
      'Lee historias de recuperación de pacientes reales atendidos en nuestra clínica de fisioterapia.',
    url: 'https://physicalcarefisioterapia.com/testimonios',
    type: 'website',
  },
};

export default function TestimoniosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
