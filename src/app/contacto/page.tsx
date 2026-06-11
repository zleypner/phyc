import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ContactoPage from '@/components/sections/ContactoPage';

export const metadata: Metadata = {
  title: 'Contacto y Ubicación | Physical Care Fisioterapia',
  description:
    'Contacta con Physical Care Fisioterapia en San Pedro de Montes de Oca. Encuentra nuestra dirección, teléfono, WhatsApp, correo electrónico e indicaciones de Waze y Google Maps.',
  keywords: [
    'contacto physical care',
    'fisioterapia san pedro',
    'fisioterapia costa rica',
    'dirección physical care',
    'teléfono physical care',
    'waze physical care',
    'mapa physical care',
  ],
  openGraph: {
    title: 'Contacto y Ubicación | Physical Care Fisioterapia',
    description:
      'Contacta con Physical Care Fisioterapia en San Pedro de Montes de Oca. Encuentra nuestra dirección, teléfono, WhatsApp e indicaciones de navegación.',
    url: 'https://physicalcarefisioterapia.com/contacto',
    type: 'website',
  },
};

export default function Contacto() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactoPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
