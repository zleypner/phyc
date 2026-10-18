import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactoPage from '@/components/sections/ContactoPage';
import InstagramSection from '@/components/sections/InstagramSection';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo';

const breadcrumbItems = [
  { name: 'Inicio', url: 'https://physicalcarefisioterapia.com' },
  { name: 'Contacto', url: 'https://physicalcarefisioterapia.com/contacto' },
];

// ContactPage schema for local SEO (GEO)
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://physicalcarefisioterapia.com/contacto#webpage',
  name: 'Contacto - Physical Care Fisioterapia',
  description: 'Página de contacto de Physical Care Fisioterapia. Agenda tu cita de terapia física en San Pedro, Costa Rica.',
  url: 'https://physicalcarefisioterapia.com/contacto',
  mainEntity: {
    '@type': 'MedicalClinic',
    '@id': 'https://physicalcarefisioterapia.com/#clinic',
    name: 'Physical Care Fisioterapia',
    telephone: '+506 8733-7942',
    email: 'gerencia@physicalcarefisioterapia.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'San Pedro de Montes de Oca, 200m sur de la Iglesia',
      addressLocality: 'San Pedro',
      addressRegion: 'San José',
      postalCode: '11501',
      addressCountry: 'CR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9400154,
      longitude: -84.0341901,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    hasMap: 'https://maps.google.com/?q=9.9400154,-84.0341901',
  },
};

// FAQ for contact page (AEO)
const contactFAQs = [
  {
    question: '¿Cuál es el horario de atención de Physical Care Fisioterapia?',
    answer: 'Atendemos de lunes a viernes de 8:00 AM a 8:00 PM y sábados de 9:00 AM a 2:00 PM. Los domingos y feriados no hay atención.',
  },
  {
    question: '¿Dónde está ubicada la clínica Physical Care en San Pedro?',
    answer: 'Estamos ubicados en San Pedro de Montes de Oca, San José, Costa Rica. A 200 metros sur de la Iglesia de San Pedro. Tenemos estacionamiento disponible para pacientes.',
  },
  {
    question: '¿Cómo puedo agendar una cita de fisioterapia?',
    answer: 'Puedes agendar tu cita por WhatsApp al +506 8733-7942 (la forma más rápida), por correo electrónico a gerencia@physicalcarefisioterapia.com, o a través del formulario de contacto en esta página.',
  },
  {
    question: '¿Necesito referencia médica para una cita de fisioterapia?',
    answer: 'No es obligatorio tener referencia médica para tu primera consulta. Sin embargo, si tienes estudios previos (radiografías, resonancias, ultrasonidos) te recomendamos traerlos para una evaluación más completa.',
  },
];

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
      <BreadcrumbSchema items={breadcrumbItems} />
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        strategy="afterInteractive"
      />
      <FAQSchema faqs={contactFAQs} id="contact-faq-schema" />
      <Header />
      <main>
        <ContactoPage />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
