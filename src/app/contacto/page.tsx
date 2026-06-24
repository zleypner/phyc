import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ContactoPage from '@/components/sections/ContactoPage';
import InstagramSection from '@/components/sections/InstagramSection';

export const metadata: Metadata = {
  title: 'Contacto Terapia Física San Pedro | Agendar Cita Fisioterapia',
  description:
    'Agenda tu cita de terapia física en San Pedro de Montes de Oca, Costa Rica. Contacto directo por WhatsApp, teléfono o correo. Atención de lunes a viernes. Indicaciones con Waze y Google Maps.',
  keywords: [
    'contacto terapia fisica',
    'agendar cita fisioterapia',
    'cita terapia fisica costa rica',
    'fisioterapia san pedro',
    'fisioterapia montes de oca',
    'consulta fisioterapia san jose',
    'telefono fisioterapia costa rica',
    'whatsapp fisioterapia',
    'direccion physical care',
    'como llegar fisioterapia',
  ],
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com/contacto',
  },
  openGraph: {
    title: 'Contacto | Terapia Física en San Pedro Costa Rica',
    description:
      'Agenda tu cita de terapia física. Physical Care Fisioterapia en San Pedro de Montes de Oca. WhatsApp, teléfono y correo disponible.',
    url: 'https://physicalcarefisioterapia.com/contacto',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function Contacto() {
  return (
    <>
      <Header />
      <main>
        <ContactoPage />
        <InstagramSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
