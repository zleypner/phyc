import type { Metadata } from 'next';
import ServiciosEspecializadosPage from '@/components/pages/ServiciosEspecializadosPage';

export const metadata: Metadata = {
  title: 'Servicios Especializados de Fisioterapia | Physical Care',
  description:
    'Conozca nuestros servicios especializados de fisioterapia: ondas de choque, rehabilitación deportiva, terapia manual, tecarterapia, plantillas ortopédicas, atención del adulto mayor y más.',
  keywords: [
    'fisioterapia especializada',
    'ondas de choque',
    'rehabilitación deportiva',
    'terapia manual ortopédica',
    'tecarterapia',
    'plantillas ortopédicas',
    'atención adulto mayor',
    'masajes terapéuticos',
    'rehabilitación pre cirugía',
    'rehabilitación post cirugía',
    'Physical Care',
    'Costa Rica',
  ],
  openGraph: {
    title: 'Servicios Especializados de Fisioterapia | Physical Care',
    description:
      'Conozca nuestros servicios especializados de fisioterapia: ondas de choque, rehabilitación deportiva, terapia manual, tecarterapia, plantillas ortopédicas, atención del adulto mayor y más.',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function Page() {
  return <ServiciosEspecializadosPage />;
}
