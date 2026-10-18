import { Metadata } from 'next';
import { PersonSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'MSc. Enmanuel Li Torres | Fisioterapeuta Especialista en Ondas de Choque Costa Rica',
  description:
    'Conozca a MSc. Enmanuel Li Torres, fisioterapeuta líder en Costa Rica. Experto en ondas de choque, Magnetolith EMTT, rehabilitación deportiva y fisioterapia geriátrica. Ponente internacional ISMST y referente STORZ MEDICAL Latinoamérica.',
  keywords: [
    'enmanuel li torres',
    'fisioterapeuta costa rica',
    'ondas de choque costa rica',
    'magnetolith costa rica',
    'emtt costa rica',
    'rehabilitacion deportiva costa rica',
    'fisioterapia geriatrica costa rica',
    'storz medical costa rica',
    'ismst',
    'ponente fisioterapia',
    'experto ondas de choque',
    'mejor fisioterapeuta costa rica',
  ],
  authors: [{ name: 'MSc. Enmanuel Li Torres' }],
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com/enmanuel-li',
  },
  openGraph: {
    type: 'profile',
    locale: 'es_CR',
    url: 'https://physicalcarefisioterapia.com/enmanuel-li',
    title: 'MSc. Enmanuel Li Torres | Fisioterapeuta Especialista Costa Rica',
    description:
      'Fisioterapeuta líder en Costa Rica. Experto en ondas de choque, Magnetolith y rehabilitación deportiva. Ponente internacional ISMST.',
    images: [
      {
        url: '/images/emma-personalbrand/collombia/emma-colombia-1.webp',
        width: 1200,
        height: 630,
        alt: 'MSc. Enmanuel Li Torres - Fisioterapeuta Especialista en Ondas de Choque',
      },
    ],
    firstName: 'Enmanuel',
    lastName: 'Li Torres',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSc. Enmanuel Li Torres | Fisioterapeuta Costa Rica',
    description: 'Experto en ondas de choque, Magnetolith y rehabilitación deportiva. Ponente internacional ISMST.',
    images: ['/images/emma-personalbrand/collombia/emma-colombia-1.webp'],
  },
};

export default function EnmanuelLiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <PersonSchema
        name="MSc. Enmanuel Li Torres"
        jobTitle="Fisioterapeuta Director"
        description="Fisioterapeuta líder en Costa Rica con más de 14 años de experiencia. Especialista en ondas de choque, Magnetolith EMTT, rehabilitación deportiva y fisioterapia geriátrica. Ponente internacional del ISMST (International Society for Medical Shockwave Treatment) y referente de STORZ MEDICAL para Latinoamérica."
        image="https://physicalcarefisioterapia.com/images/emma-personalbrand/collombia/emma-colombia-1.webp"
        url="https://physicalcarefisioterapia.com/enmanuel-li"
        email="gerencia@physicalcarefisioterapia.com"
        telephone="+506 8733-7942"
        credentials={[
          {
            name: 'Máster en Rehabilitación Deportiva',
            issuedBy: 'Universidad de Costa Rica',
          },
          {
            name: 'Certificación STORZ MEDICAL',
            issuedBy: 'STORZ MEDICAL AG',
            dateIssued: '2020',
          },
          {
            name: 'Licenciatura en Terapia Física',
            issuedBy: 'Universidad de Costa Rica',
          },
          {
            name: 'Certificación Magnetolith EMTT',
            issuedBy: 'STORZ MEDICAL AG',
            dateIssued: '2024',
          },
        ]}
        alumniOf={[
          'Universidad de Costa Rica',
          'STORZ MEDICAL Academy',
        ]}
        knowsAbout={[
          'Ondas de Choque',
          'Shockwave Therapy',
          'Magnetolith EMTT',
          'Rehabilitación Deportiva',
          'Fisioterapia Geriátrica',
          'Terapia Manual Ortopédica',
          'Tecarterapia',
          'Mecanotransducción',
          'Tratamiento del Dolor Crónico',
        ]}
        memberOf={[
          'ISMST - International Society for Medical Shockwave Treatment',
          'Colegio de Terapeutas de Costa Rica',
          'STORZ MEDICAL Referentes Latinoamérica',
        ]}
        awards={[
          'Ponente Internacional ISMST-OCC 2026 Barranquilla, Colombia',
          'Referente STORZ MEDICAL Latinoamérica',
        ]}
        sameAs={[
          'https://www.instagram.com/physicalcarefisioterapia',
          'https://www.facebook.com/physicalcarefisioterapia',
          'https://physicalcarefisioterapia.com',
        ]}
      />
    </>
  );
}
