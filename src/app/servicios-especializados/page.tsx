import type { Metadata } from 'next';
import ServiciosEspecializadosPage from '@/components/pages/ServiciosEspecializadosPage';
import { BreadcrumbSchema, FAQSchema, HowToSchema } from '@/components/seo';

const breadcrumbItems = [
  { name: 'Inicio', url: 'https://physicalcarefisioterapia.com' },
  { name: 'Servicios Especializados', url: 'https://physicalcarefisioterapia.com/servicios-especializados' },
];

// Service schema for rich snippets
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Atención Especializada del Adulto Mayor',
        alternateName: 'Fisioterapia Geriátrica',
        description: 'Programa especializado para adultos mayores enfocado en prevención de caídas, mejora del equilibrio, fortalecimiento muscular e independencia funcional.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#adulto-mayor',
        relevantSpecialty: 'Fisioterapia Geriátrica',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Terapia de Ondas de Choque',
        alternateName: 'Shockwave Therapy',
        description: 'Tratamiento avanzado con ondas de choque para fascitis plantar, tendinitis, epicondilitis y lesiones crónicas musculoesqueléticas.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#ondas-de-choque',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Plantillas Ortopédicas Personalizadas',
        description: 'Diseño personalizado de plantillas ortopédicas para corrección postural, alivio del dolor de pies y mejora de la alineación corporal.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#plantillas-ortopedicas',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Rehabilitación Deportiva Avanzada',
        alternateName: 'Sports Rehabilitation',
        description: 'Programas especializados de recuperación para atletas, con enfoque en retorno seguro al deporte y prevención de recaídas.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#rehabilitacion-deportiva',
        relevantSpecialty: 'Medicina Deportiva',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Terapia Manual Ortopédica',
        description: 'Técnicas manuales especializadas para dolor de espalda, rigidez articular y problemas musculoesqueléticos.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#terapia-manual',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Tecarterapia',
        alternateName: 'TECAR Therapy',
        description: 'Tecnología de radiofrecuencia terapéutica para acelerar la recuperación muscular, reducir inflamación y mejorar la circulación.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#tecarterapia',
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Masajes Terapéuticos',
        description: 'Masajes profesionales para alivio de tensión muscular, mejora de la circulación y recuperación física.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#masajes-terapeuticos',
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'MedicalTherapy',
        name: 'Rehabilitación Pre y Post Cirugía',
        description: 'Preparación quirúrgica y recuperación guiada después de cirugías ortopédicas para mejores resultados.',
        url: 'https://physicalcarefisioterapia.com/servicios-especializados#rehabilitacion-cirugia',
      },
    },
  ],
};

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

// FAQ data for AEO (Answer Engine Optimization)
const serviciosFAQs = [
  {
    question: '¿Qué es la fisioterapia geriátrica y para quién es ideal?',
    answer: 'La fisioterapia geriátrica es una especialidad enfocada en adultos mayores de 60 años. Ayuda a prevenir caídas, mejorar el equilibrio, fortalecer músculos y mantener la independencia funcional. Es ideal para personas con artritis, osteoporosis, después de cirugías o que quieren envejecer activamente.',
  },
  {
    question: '¿Cómo funcionan las ondas de choque y qué condiciones tratan?',
    answer: 'Las ondas de choque son pulsos acústicos de alta energía que estimulan la regeneración tisular y reducen el dolor. Son muy efectivas para fascitis plantar, tendinitis, epicondilitis (codo de tenista), calcificaciones y lesiones crónicas que no responden a tratamientos convencionales.',
  },
  {
    question: '¿Cuántas sesiones de fisioterapia necesito para ver resultados?',
    answer: 'El número de sesiones varía según la condición. Generalmente, los pacientes notan mejoras en 3-5 sesiones para condiciones agudas. Condiciones crónicas pueden requerir 8-12 sesiones. Durante la evaluación inicial, establecemos un plan personalizado con objetivos claros.',
  },
  {
    question: '¿Qué diferencia hay entre tecarterapia y ondas de choque?',
    answer: 'La tecarterapia usa radiofrecuencia para calentar tejidos profundos, acelerando la circulación y recuperación muscular. Las ondas de choque usan energía mecánica para estimular regeneración en tendones y huesos. Ambas son complementarias y se eligen según el tipo de lesión.',
  },
  {
    question: '¿Puedo recibir fisioterapia después de una cirugía de rodilla o cadera?',
    answer: 'Sí, la rehabilitación post-quirúrgica es fundamental para una recuperación exitosa. Iniciamos con ejercicios suaves para recuperar movilidad, progresando hacia fortalecimiento y retorno a actividades normales. El protocolo se adapta al tipo de cirugía y las indicaciones del cirujano.',
  },
  {
    question: '¿Aceptan seguros médicos o cómo funciona el pago?',
    answer: 'Aceptamos pago en efectivo, tarjetas de crédito/débito, SINPE Móvil y transferencias bancarias en colones o dólares. Para seguros médicos, proporcionamos facturas electrónicas para que tramites el reembolso con tu aseguradora.',
  },
];

// HowTo schema for appointment booking (AEO)
const howToBookAppointment = {
  name: 'Cómo agendar una cita de fisioterapia en Physical Care',
  description: 'Guía paso a paso para agendar tu primera consulta de fisioterapia en Physical Care Fisioterapia, San Pedro, Costa Rica.',
  steps: [
    {
      name: 'Contactar por WhatsApp',
      text: 'Envía un mensaje de WhatsApp al +506 8733-7942 indicando tu nombre y el tipo de consulta que necesitas (evaluación inicial, seguimiento, tratamiento específico).',
      url: 'https://wa.me/50687337942',
    },
    {
      name: 'Describir tu condición',
      text: 'Cuéntanos brevemente qué molestias tienes, cuánto tiempo llevas con el problema y si tienes algún diagnóstico médico previo.',
    },
    {
      name: 'Seleccionar fecha y hora',
      text: 'Te ofreceremos las opciones disponibles de lunes a viernes de 8am a 8pm y sábados de 9am a 2pm. Elige la que mejor se ajuste a tu horario.',
    },
    {
      name: 'Confirmar la cita',
      text: 'Recibirás una confirmación con la dirección exacta en San Pedro de Montes de Oca y recomendaciones para tu primera visita (ropa cómoda, estudios previos si los tienes).',
    },
  ],
  totalTime: 'PT5M',
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <FAQSchema faqs={serviciosFAQs} id="servicios-faq-schema" />
      <HowToSchema
        name={howToBookAppointment.name}
        description={howToBookAppointment.description}
        steps={howToBookAppointment.steps}
        totalTime={howToBookAppointment.totalTime}
        id="booking-howto-schema"
      />
      <ServiciosEspecializadosPage />
    </>
  );
}
