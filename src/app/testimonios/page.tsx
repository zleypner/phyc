import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/sections/Testimonials';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const breadcrumbItems = [
  { name: 'Inicio', url: 'https://physicalcarefisioterapia.com' },
  { name: 'Testimonios', url: 'https://physicalcarefisioterapia.com/testimonios' },
];

export const metadata: Metadata = {
  title: 'Testimonios y Casos de Éxito | Physical Care Fisioterapia',
  description:
    'Lee testimonios reales y casos de éxito de nuestros pacientes rehabilitados en Montes de Oca, Costa Rica. Descubre cómo ayudamos a personas a recuperar su movimiento.',
  keywords: [
    'testimonios fisioterapia',
    'casos de exito fisioterapia',
    'opiniones physical care',
    'fisioterapia san pedro opiniones',
    'resenas terapia fisica costa rica',
    'pacientes recuperados fisioterapia',
  ],
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com/testimonios',
  },
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
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
