import type { Metadata } from 'next';
import ServiciosEspecializadosPage from '@/components/pages/ServiciosEspecializadosPage';

export const metadata: Metadata = {
  title: 'Servicios de Terapia Física y Fisioterapia para Adultos Mayores | Physical Care Costa Rica',
  description:
    'Servicios especializados de terapia física en Costa Rica: atención especializada para adultos mayores, prevención de caídas, rehabilitación geriátrica, ondas de choque, rehabilitación deportiva y tecarterapia. Fisioterapeutas certificados en San Pedro con experiencia en tercera edad.',
  keywords: [
    // Primary service keywords
    'servicios de terapia fisica',
    'terapia fisica costa rica',
    'fisioterapia especializada',
    'tratamientos de fisioterapia',
    // Adultos mayores / Geriatric keywords (priority)
    'terapia fisica adultos mayores',
    'fisioterapia adultos mayores',
    'fisioterapia geriatrica',
    'fisioterapia geriatrica costa rica',
    'atencion adulto mayor',
    'atencion adulto mayor costa rica',
    'rehabilitacion adultos mayores',
    'terapia fisica tercera edad',
    'fisioterapia tercera edad',
    'prevencion de caidas adultos mayores',
    'ejercicios adultos mayores',
    'equilibrio adultos mayores',
    'movilidad adultos mayores',
    'envejecimiento activo',
    'envejecimiento saludable',
    'independencia funcional adultos mayores',
    'fortalecimiento muscular tercera edad',
    // Specific treatments
    'ondas de choque costa rica',
    'tecarterapia costa rica',
    'rehabilitación deportiva costa rica',
    'terapia manual ortopédica',
    // Pain treatments
    'tratamiento dolor de espalda',
    'tratamiento dolor de rodilla',
    'tratamiento dolor cervical',
    'tratamiento tendinitis',
    'tratamiento fascitis plantar',
    'artritis tratamiento',
    'artrosis fisioterapia',
    'osteoporosis ejercicios',
    // Recovery services
    'rehabilitación post cirugía',
    'rehabilitación pre cirugía',
    'recuperación de lesiones deportivas',
    // Additional services
    'plantillas ortopédicas',
    'masajes terapéuticos costa rica',
    // Location
    'fisioterapia san pedro',
    'fisioterapia san jose',
  ],
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com/servicios-especializados',
  },
  openGraph: {
    title: 'Servicios de Terapia Física para Adultos Mayores | Physical Care Costa Rica',
    description:
      'Atención especializada para adultos mayores: prevención de caídas, rehabilitación geriátrica, mejora del equilibrio y movilidad. Ondas de choque, tecarterapia y rehabilitación deportiva con fisioterapeutas certificados.',
    url: 'https://physicalcarefisioterapia.com/servicios-especializados',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function Page() {
  return <ServiciosEspecializadosPage />;
}
