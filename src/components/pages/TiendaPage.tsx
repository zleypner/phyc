'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  Footprints,
  Shield,
  Heart,
  Zap,
  CheckCircle,
  ArrowRight,
  UserCheck,
  ClipboardCheck,
  Package,
  Activity,
  Users,
  Target,
  Gift,
} from 'lucide-react';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Benefits data
const benefits = [
  {
    icon: Shield,
    title: 'Corrección postural',
    description:
      'Mejoran la alineación de pies, rodillas, caderas y columna para una mejor postura.',
  },
  {
    icon: Heart,
    title: 'Alivio del dolor',
    description:
      'Reducen el dolor en pies, rodillas, caderas y espalda baja distribuyendo mejor la presión.',
  },
  {
    icon: Zap,
    title: 'Mayor rendimiento',
    description:
      'Optimizan la biomecánica del pie para mejorar el rendimiento en actividades deportivas.',
  },
  {
    icon: Footprints,
    title: 'Prevención de lesiones',
    description:
      'Protegen contra fascitis plantar, espolones, tendinitis y otras lesiones comunes.',
  },
];

// Products data
const products = [
  {
    id: 'uso-diario',
    name: 'Plantilla Uso Diario',
    type: 'Personalizada',
    description:
      'Disenada a medida con examen computarizado para obtener una imagen 100% real de tus pies. Ideal para ninos y adultos con pie plano, cavo o lesiones.',
    features: [
      'Examen computarizado incluido',
      'Para ninos y adultos',
      'Correccion de pie plano o cavo',
      'Maxima comodidad diaria',
    ],
    icon: Users,
    image: '/images/technology/plantilla1.jpeg',
    highlighted: true,
    whatsappMessage:
      'Hola!%20Estoy%20interesado(a)%20en%20plantillas%20personalizadas%20para%20uso%20diario.%20Quisiera%20agendar%20una%20evaluacion.',
  },
  {
    id: 'deportiva',
    name: 'Plantilla Deportiva',
    type: 'Personalizada',
    description:
      'Disenada para deportistas con examen computarizado. Previene lesiones y mejora el gesto deportivo, brindando bienestar y mayor rendimiento.',
    features: [
      'Examen computarizado incluido',
      'Prevencion de lesiones',
      'Mejora el rendimiento deportivo',
      'Absorcion de impacto optimizada',
    ],
    icon: Activity,
    image: '/images/technology/plantilla4.jpeg',
    highlighted: true,
    whatsappMessage:
      'Hola!%20Me%20interesan%20las%20plantillas%20deportivas%20personalizadas.%20Quisiera%20agendar%20una%20evaluacion.',
  },
  {
    id: 'gift-card',
    name: 'Gift Card de Sesiones',
    type: 'Regalo perfecto',
    description:
      'Regala bienestar y salud. El regalo ideal para tu abuela, padres o cualquier ser querido que merezca sentirse mejor.',
    features: [
      'Sesiones de terapia fisica',
      'Atencion personalizada',
      'Sin fecha de vencimiento',
      'Incluye evaluacion inicial',
    ],
    icon: Gift,
    highlighted: true,
    isGiftCard: true,
    whatsappMessage:
      'Hola!%20Quiero%20regalar%20sesiones%20de%20terapia%20fisica.%20Quisiera%20información%20sobre%20la%20Gift%20Card.',
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: 'Contacto',
    description: 'Escríbenos por WhatsApp o agenda una cita para iniciar tu evaluación.',
    icon: UserCheck,
  },
  {
    step: 2,
    title: 'Evaluación',
    description:
      'Realizamos un análisis biomecánico completo para determinar tus necesidades específicas.',
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: 'Entrega',
    description:
      'Recibe tus plantillas con instrucciones de uso y seguimiento personalizado.',
    icon: Package,
  },
];

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
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
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#06B8BF]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#8DC741]/15 rounded-full blur-[120px]" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] text-[#06B8BF] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <Footprints size={14} />
                Plantillas Ortopedicas
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6"
            >
              Camina sin dolor con{' '}
              <span className="bg-gradient-to-r from-[#06B8BF] via-[#67E8F9] to-[#06B8BF] bg-clip-text text-transparent">
                plantillas ortopedicas
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-8 sm:mb-10 mx-auto lg:mx-0"
            >
              Plantillas 100% personalizadas con examen computarizado. Obtenemos una imagen real de
              tus pies para corregir pie plano, cavo y prevenir lesiones.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/50689680947?text=Hola!%20Quiero%20información%20sobre%20plantillas%20ortopédicas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-[#25D366] text-white rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Consultar por WhatsApp
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-white/[0.1] backdrop-blur-sm border border-white/[0.2] text-white rounded-full font-semibold text-sm sm:text-base hover:bg-white/[0.15] transition-all duration-300"
              >
                Ver Productos
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-[#8DC741]/30 rounded-full blur-[80px] scale-75" />

              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/technology/plantilla2.jpeg"
                  alt="Plantillas ortopedicas personalizadas"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#8DC741]/20 flex items-center justify-center">
                    <CheckCircle size={24} className="text-[#8DC741]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1F2937]">Variedad de colores</p>
                    <p className="text-xs text-[#64748B]">Para cada estilo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// BENEFITS SECTION
// ============================================
function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#06B8BF]/10 text-[#06B8BF] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Heart size={14} className="sm:w-4 sm:h-4" />
            Beneficios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-[1.15] tracking-[-0.02em] mb-4 sm:mb-6">
            ¿Por qué usar{' '}
            <span className="bg-gradient-to-r from-[#06B8BF] to-[#06B8BF] bg-clip-text text-transparent">
              plantillas ortopedicas?
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Las plantillas ortopedicas son una solucion efectiva para multiples problemas del pie y
            del sistema musculoesqueletico.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group bg-[#F8FBFC] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-xl hover:shadow-[#06B8BF]/5 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-[#06B8BF]/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-[#06B8BF]/20 transition-colors duration-300">
                  <IconComponent size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#06B8BF]" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#1F2937] mb-1.5 sm:mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PRODUCTS SECTION
// ============================================
function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Filter out gift card from regular products
  const regularProducts = products.filter((p) => !('isGiftCard' in p));

  return (
    <section
      id="productos"
      ref={ref}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#F8FBFC] to-white"
    >
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#06B8BF]/10 text-[#06B8BF] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Footprints size={14} className="sm:w-4 sm:h-4" />
            Nuestros Productos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-[1.15] tracking-[-0.02em] mb-4 sm:mb-6">
            Plantillas{' '}
            <span className="bg-gradient-to-r from-[#06B8BF] to-[#06B8BF] bg-clip-text text-transparent">
              100% personalizadas
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Con examen computarizado obtenemos una imagen 100% real de tus pies para determinar el
            tipo de pie y posibles lesiones. Plantillas para ninos, adultos y deportistas.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          {regularProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                  product.highlighted
                    ? 'border-[#06B8BF] shadow-lg shadow-[#06B8BF]/10'
                    : 'border-gray-100 hover:border-[#06B8BF]/30'
                }`}
              >
                {/* Highlighted badge */}
                {product.highlighted && (
                  <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#8DC741] text-white text-[10px] sm:text-xs font-bold">
                      Recomendado
                    </span>
                  </div>
                )}

                {/* Product Image */}
                {'image' in product && product.image && (
                  <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-gradient-to-br from-[#F8FBFC] to-[#E2E8F0]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                )}

                {/* Type badge */}
                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F8FBFC] text-[#64748B] text-[10px] sm:text-xs font-medium mb-2 sm:mb-3">
                  {product.type}
                </span>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-2 sm:mb-3">{product.name}</h3>

                {/* Description */}
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{product.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                      <CheckCircle size={12} className="sm:w-3.5 sm:h-3.5 text-[#8DC741] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/50689680947?text=${product.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                    product.highlighted
                      ? 'bg-[#25D366] text-white hover:bg-[#20BA5C]'
                      : 'bg-[#F8FBFC] text-[#1F2937] hover:bg-[#25D366] hover:text-white'
                  }`}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Consultar
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// GIFT CARD SECTION
// ============================================
function GiftCardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-[#8DC741] via-[#7AB534] to-[#6B9930] p-5 sm:p-8 md:p-12 lg:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Gift size={14} className="sm:w-4 sm:h-4" />
                Regalo Perfecto
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-3 sm:mb-4">
                Regala salud y bienestar a quien mas quieres
              </h2>

              <p className="text-base sm:text-xl md:text-2xl text-white/90 font-medium mb-3 sm:mb-4">
                Regala a tu abuela sesiones de terapia fisica
              </p>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-8">
                Regálale a tu abuela, a tus padres o a cualquier ser querido algo que realmente marque la diferencia: sesiones de fisioterapia profesional para aliviar el dolor, recuperar la movilidad y mejorar su calidad de vida.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-8 text-left">
                {[
                  'Sesiones de terapia fisica',
                  'Atencion personalizada',
                  'Sin fecha de vencimiento',
                  'Evaluacion inicial incluida',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-white/90 text-xs sm:text-sm md:text-base">
                    <CheckCircle size={14} className="sm:w-[18px] sm:h-[18px] text-white flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/50689680947?text=Hola!%20Quiero%20regalar%20sesiones%20de%20terapia%20fisica%20a%20un%20ser%20querido.%20Quisiera%20información%20sobre%20la%20Gift%20Card."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 h-11 sm:h-14 px-6 sm:px-8 bg-white text-[#6B9930] rounded-full font-bold text-sm sm:text-base shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Regalar Ahora
              </a>
            </div>

            {/* Visual - Hidden on mobile, simplified on tablet */}
            <motion.div
              className="relative hidden sm:flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl scale-110 animate-pulse" />

                {/* Gift card visual */}
                <motion.div
                  className="relative w-56 h-36 sm:w-72 sm:h-44 md:w-80 md:h-48 bg-gradient-to-br from-white via-white to-gray-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 overflow-hidden"
                  animate={{
                    rotate: [3, -1, 3],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8DC741] to-[#6B9930] flex items-center justify-center shadow-lg shadow-[#8DC741]/30"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Gift size={16} className="sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                      <span className="text-[10px] sm:text-xs font-bold text-[#8DC741] uppercase tracking-wider">Gift Card</span>
                    </div>
                    <p className="text-[#1F2937] font-bold text-sm sm:text-lg mb-0.5 sm:mb-1">Physical Care</p>
                    <p className="text-[#64748B] text-xs sm:text-sm mb-2 sm:mb-4">Sesiones de Terapia Fisica</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-[#64748B]">Para: Tu ser querido</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Heart size={12} className="sm:w-4 sm:h-4 text-[#8DC741]" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative floating hearts - hidden on small screens */}
                <motion.div
                  className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/25 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart size={20} className="sm:w-6 sm:h-6 text-white drop-shadow-md" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/25 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, -10, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Heart size={14} className="sm:w-[18px] sm:h-[18px] text-white drop-shadow-md" />
                </motion.div>

                {/* Extra floating heart - hidden on smaller screens */}
                <motion.div
                  className="absolute top-1/2 -left-10 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full hidden lg:flex items-center justify-center"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Heart size={14} className="text-white/80" />
                </motion.div>

                {/* Sparkle effects - hidden on smaller screens */}
                <motion.div
                  className="absolute -top-2 left-1/4 w-2 h-2 bg-white rounded-full hidden md:block"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="absolute bottom-4 -right-2 w-1.5 h-1.5 bg-white rounded-full hidden md:block"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                />
                <motion.div
                  className="absolute top-1/3 -right-6 w-2 h-2 bg-white rounded-full hidden md:block"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// PROCESS SECTION
// ============================================
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#06B8BF]/10 text-[#06B8BF] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <ClipboardCheck size={14} className="sm:w-4 sm:h-4" />
            Proceso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-[1.15] tracking-[-0.02em] mb-4 sm:mb-6">
            ¿Cómo obtener{' '}
            <span className="bg-gradient-to-r from-[#06B8BF] to-[#06B8BF] bg-clip-text text-transparent">
              tus plantillas?
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Un proceso simple y profesional para que obtengas las plantillas perfectas para tus
            necesidades.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line - hidden on mobile */}
                {index < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-8 sm:top-10 left-[calc(50%+32px)] sm:left-[calc(50%+40px)] w-[calc(100%-64px)] sm:w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-[#06B8BF] to-[#06B8BF]/30" />
                )}

                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#06B8BF] to-[#06B8BF]/80 text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 shadow-lg shadow-[#06B8BF]/25">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#06B8BF]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent size={20} className="sm:w-6 sm:h-6 text-[#06B8BF]" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
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
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0A1E24] via-[#0E3A4A] to-[#0A1E24] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#06B8BF]/15 rounded-full blur-[100px] sm:blur-[150px] md:blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-5 sm:mb-6 md:mb-8">
            <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#25D366]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6">
            ¿Listo para caminar{' '}
            <span className="bg-gradient-to-r from-[#06B8BF] to-[#67E8F9] bg-clip-text text-transparent">
              sin dolor?
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Contáctanos por WhatsApp para agendar tu evaluación y encontrar la plantilla perfecta
            para ti.
          </p>

          <a
            href="https://wa.me/50689680947?text=Hola!%20Quiero%20información%20sobre%20plantillas%20ortopédicas%20y%20agendar%20una%20evaluación."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 bg-[#25D366] text-white rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function TiendaPage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <GiftCardSection />
      <ProcessSection />
      <FinalCTASection />
    </main>
  );
}
