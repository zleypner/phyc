'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  Zap,
  Target,
  Waves,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Activity,
  Users,
  Award,
} from 'lucide-react';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Technology data
const technologies = [
  {
    id: 'magnetolith',
    name: 'Magnetolith®',
    subtitle: 'Estimulación electromagnética de alta intensidad',
    badge: 'NUEVA TECNOLOGÍA EN COSTA RICA',
    description:
      'Magnetolith® representa una de las tecnologías más innovadoras dentro de la fisioterapia moderna. Utiliza campos electromagnéticos de alta intensidad para estimular músculos, nervios y tejidos profundos sin necesidad de contacto directo. Permite alcanzar estructuras que muchas terapias convencionales no logran estimular eficazmente.',
    benefit: 'Estimulación profunda no invasiva para acelerar la recuperación.',
    indications: [
      'Dolor lumbar',
      'Tendinopatías',
      'Lesiones musculares',
      'Debilidad muscular',
      'Rehabilitación deportiva',
      'Recuperación funcional',
    ],
    icon: Zap,
    image: '/images/technology/magnetolin.jpeg',
  },
  {
    id: 'ondas-focales',
    name: 'Ondas de Choque Focales STORZ Medical®',
    subtitle: 'Precisión para lesiones crónicas',
    description:
      'Las ondas de choque focales concentran energía terapéutica directamente sobre el tejido lesionado. Son ampliamente utilizadas en medicina deportiva, ortopedia y rehabilitación avanzada para estimular procesos naturales de reparación.',
    benefit: 'Estimula la regeneración natural de tejidos.',
    indications: [
      'Fascitis plantar',
      'Epicondilitis',
      'Tendinitis',
      'Lesiones deportivas',
      'Calcificaciones',
    ],
    icon: Target,
    image: null,
  },
  {
    id: 'ondas-radiales',
    name: 'Ondas de Choque Radiales STORZ Medical®',
    subtitle: 'Tratamiento avanzado para dolor muscular y tendinoso',
    description:
      'Las ondas radiales permiten tratar áreas más amplias del sistema musculoesquelético, ayudando a disminuir dolor, mejorar circulación y acelerar procesos de recuperación.',
    benefit: 'Alivio del dolor y mejora funcional.',
    indications: [
      'Contracturas musculares',
      'Dolor miofascial',
      'Puntos gatillo',
      'Recuperación deportiva',
    ],
    icon: Waves,
    image: null,
  },
  {
    id: 'traccion-vertebral',
    name: 'Camilla de Tracción Vertebral',
    subtitle: 'Descompresión controlada de la columna',
    description:
      'Sistema especializado diseñado para aplicar fuerzas de tracción controladas sobre la columna cervical y lumbar. Ayuda a disminuir presión sobre discos intervertebrales y estructuras nerviosas.',
    benefit: 'Alternativa conservadora y no invasiva para patologías de columna.',
    indications: [
      'Hernias discales',
      'Ciática',
      'Dolor lumbar',
      'Dolor cervical',
      'Compresión nerviosa',
    ],
    icon: Activity,
    image: '/images/technology/camilla.jpeg',
  },
];

// Differentiator items
const differentiatorItems = [
  'Valoración profesional',
  'Diagnóstico funcional',
  'Terapia manual especializada',
  'Ejercicio terapéutico',
  'Equipamiento avanzado',
  'Seguimiento personalizado',
];

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E24] via-[#0E3A4A] to-[#0A1E24]" />
        {/* Overlay pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#1E88A8]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#5EEAD4]/10 rounded-full blur-[120px]" />
        {/* Bottom gradient (placed inside background to render behind content) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] text-[#5EEAD4] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles size={14} />
              Tecnología de Rehabilitación Avanzada
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6"
          >
            La recuperación más avanzada comienza con la{' '}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#67E8F9] to-[#5EEAD4] bg-clip-text text-transparent">
              mejor tecnología
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
          >
            En Physical Care combinamos experiencia clínica, terapia manual especializada y
            equipamiento de última generación para acelerar la recuperación, disminuir el dolor y
            optimizar los resultados de nuestros pacientes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/50689680947?text=Hola,%20me%20gustaría%20agendar%20una%20valoración"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] text-white rounded-full font-semibold text-base shadow-lg shadow-[#1E88A8]/25 hover:shadow-xl hover:shadow-[#1E88A8]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar Valoración
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/50689680947"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#25D366] text-white rounded-full font-semibold text-base shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// INTRODUCTION SECTION
// ============================================
function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    'Reducir dolor',
    'Acelerar recuperación',
    'Mejorar movilidad',
    'Optimizar función muscular',
    'Complementar tratamientos personalizados',
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold mb-6">
              <Award size={16} />
              Liderazgo Tecnológico
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-6">
              Uno de los centros de fisioterapia{' '}
              <span className="bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] bg-clip-text text-transparent">
                mejor equipados
              </span>{' '}
              de Costa Rica
            </h2>

            <div className="space-y-4 text-[#64748B] text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Creemos que una recuperación efectiva requiere más que experiencia clínica.
              </p>
              <p>
                Por eso invertimos constantemente en tecnologías utilizadas por centros
                especializados, medicina deportiva y programas avanzados de rehabilitación
                alrededor del mundo.
              </p>
              <p className="font-medium text-[#0E3A4A]">
                Cada equipo que incorporamos tiene un propósito específico:
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-[#0E3A4A] font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-[#5EEAD4]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-[#1E88A8]" />
                  </div>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] shadow-2xl">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={40} className="text-[#5EEAD4]" />
                  </div>
                  <p className="text-white/60 text-sm">Imagen de tecnología</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#5EEAD4]/20 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1E88A8]/30 rounded-full blur-2xl" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TECHNOLOGY CARD COMPONENT
// ============================================
function TechnologyCard({
  technology,
  index,
  isReversed,
}: {
  technology: (typeof technologies)[0];
  index: number;
  isReversed: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const IconComponent = technology.icon;

  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 ${index % 2 === 0 ? 'bg-[#F8FBFC]' : 'bg-white'}`}
    >
      <div className="container">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReversed ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isReversed ? 'lg:col-start-2' : ''}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] shadow-2xl group">
              {technology.image ? (
                <Image
                  src={technology.image}
                  alt={technology.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <IconComponent size={48} className="text-[#5EEAD4]" />
                    </div>
                    <p className="text-white/60 text-sm">Imagen de {technology.name}</p>
                  </div>
                </div>
              )}
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A4A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#5EEAD4]/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            {/* Badge */}
            {technology.badge && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-600 text-xs font-bold tracking-wide mb-4">
                <Sparkles size={12} />
                {technology.badge}
              </span>
            )}

            {/* Name */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E3A4A] leading-tight mb-3">
              {technology.name}
            </h3>

            {/* Subtitle */}
            <p className="text-lg text-[#1E88A8] font-medium mb-6">{technology.subtitle}</p>

            {/* Description */}
            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed mb-8">
              {technology.description}
            </p>

            {/* Benefit highlight */}
            <div className="bg-gradient-to-r from-[#1E88A8]/10 to-[#5EEAD4]/10 rounded-2xl p-5 mb-8 border border-[#1E88A8]/10">
              <p className="text-[#0E3A4A] font-semibold flex items-start gap-3">
                <CheckCircle size={20} className="text-[#1E88A8] flex-shrink-0 mt-0.5" />
                {technology.benefit}
              </p>
            </div>

            {/* Indications */}
            <div>
              <p className="text-sm font-semibold text-[#0E3A4A] uppercase tracking-wider mb-4">
                Indicaciones
              </p>
              <div className="flex flex-wrap gap-2">
                {technology.indications.map((indication) => (
                  <span
                    key={indication}
                    className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#64748B] text-sm font-medium shadow-sm hover:border-[#1E88A8]/30 hover:text-[#1E88A8] transition-colors duration-300"
                  >
                    {indication}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// TECHNOLOGIES SECTION
// ============================================
function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative">
      {/* Section header */}
      <div className="bg-gradient-to-b from-white to-[#F8FBFC] pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold mb-6">
              <Zap size={16} />
              Nuestro Equipamiento
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-6">
              Tecnología de{' '}
              <span className="bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] bg-clip-text text-transparent">
                clase mundial
              </span>
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Cada tecnología ha sido seleccionada por su efectividad comprobada en centros de
              rehabilitación de élite alrededor del mundo.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technology cards */}
      {technologies.map((tech, index) => (
        <TechnologyCard
          key={tech.id}
          technology={tech}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}
    </section>
  );
}

// ============================================
// DIFFERENTIATOR SECTION
// ============================================
function DifferentiatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0E3A4A] via-[#155E75] to-[#0E3A4A] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#5EEAD4]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1E88A8]/20 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.1] text-[#5EEAD4] text-sm font-semibold mb-6">
              <Users size={16} />
              Nuestro Enfoque
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-[-0.02em] mb-6">
              Tecnología +{' '}
              <span className="bg-gradient-to-r from-[#5EEAD4] to-[#67E8F9] bg-clip-text text-transparent">
                Experiencia Clínica
              </span>
            </h2>

            <p className="text-xl text-white/70 leading-relaxed mb-12">
              La tecnología por sí sola no genera resultados.
              <br />
              <span className="text-white font-medium">
                Los mejores resultados aparecen cuando se combina:
              </span>
            </p>
          </motion.div>

          {/* Items grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {differentiatorItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-5 md:p-6 hover:bg-white/[0.1] hover:border-[#5EEAD4]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#5EEAD4]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5EEAD4]/30 transition-colors duration-300">
                    <CheckCircle size={16} className="text-[#5EEAD4]" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FINAL CTA SECTION
// ============================================
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0A1E24] via-[#0E3A4A] to-[#0A1E24] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E88A8]/15 rounded-full blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
            Recupere su movilidad con tecnología de{' '}
            <span className="bg-gradient-to-r from-[#5EEAD4] to-[#67E8F9] bg-clip-text text-transparent">
              clase mundial
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Nuestro compromiso es ofrecer tratamientos respaldados por experiencia clínica y
            tecnología avanzada para ayudarle a recuperar su calidad de vida de forma segura y
            efectiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50689680947?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-10 bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] text-white rounded-full font-semibold text-base shadow-lg shadow-[#1E88A8]/25 hover:shadow-xl hover:shadow-[#1E88A8]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar Cita
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/50689680947"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-10 bg-[#25D366] text-white rounded-full font-semibold text-base shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function TechnologyPage() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <TechnologiesSection />
      <DifferentiatorSection />
      <FinalCTASection />
    </main>
  );
}
