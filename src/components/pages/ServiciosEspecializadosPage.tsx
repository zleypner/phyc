'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Service data with images from the home page
const services = [
  {
    id: 'adulto-mayor',
    title: 'Atención Especializada del Adulto Mayor',
    image: '/images/services/adultomayor.webp',
    description: [
      'Después de más de 40 años observando la evolución de miles de pacientes, hemos comprobado que el envejecimiento saludable depende en gran medida de mantenerse activo, fuerte y funcional.',
      'Nuestro programa de atención para adultos mayores está diseñado para preservar la independencia física, mejorar el equilibrio y prevenir complicaciones asociadas al envejecimiento.',
      'Trabajamos de forma personalizada para ayudar a nuestros pacientes a mantenerse activos, seguros y con una mejor calidad de vida.',
    ],
    benefits: [
      'Prevención de caídas',
      'Mejora del equilibrio y coordinación',
      'Incremento de fuerza muscular',
      'Mayor independencia funcional',
      'Mejor movilidad articular',
      'Mejor calidad de vida',
    ],
  },
  {
    id: 'ondas-de-choque',
    title: 'Terapia de Ondas de Choque',
    image: '/images/technology/Ondas de Choque Focales STORZ Medical.png',
    description: [
      'La terapia por ondas de choque representa uno de los avances más importantes en el tratamiento de lesiones musculoesqueléticas crónicas.',
      'Esta tecnología utiliza impulsos mecánicos de alta energía para estimular los procesos naturales de reparación del cuerpo, favoreciendo la regeneración de tejidos y disminuyendo el dolor.',
      'Es especialmente efectiva en pacientes que han probado múltiples tratamientos sin obtener resultados satisfactorios.',
    ],
    indications: [
      'Fascitis plantar',
      'Tendinitis del hombro',
      'Epicondilitis',
      'Tendinopatía Aquilea',
      'Dolor crónico',
      'Calcificaciones',
    ],
    benefits: [
      'Disminución del dolor',
      'Recuperación acelerada',
      'Menor necesidad de medicamentos',
      'Tratamiento no invasivo',
    ],
  },
  {
    id: 'plantillas-ortopedicas',
    title: 'Plantillas Ortopédicas Personalizadas',
    image: '/images/services/plantillas-ort.webp',
    description: [
      'La forma en que sus pies interactúan con el suelo influye directamente en tobillos, rodillas, caderas y columna vertebral.',
      'Nuestras plantillas ortopédicas son diseñadas para corregir alteraciones biomecánicas, mejorar la distribución de cargas y optimizar la alineación corporal.',
    ],
    benefits: [
      'Mejor alineación corporal',
      'Menor sobrecarga articular',
      'Reducción del dolor lumbar',
      'Mayor comodidad al caminar',
      'Prevención de lesiones',
    ],
  },
  {
    id: 'rehabilitacion-deportiva',
    title: 'Rehabilitación Deportiva Avanzada',
    image: '/images/services/deportivo.jpg',
    description: [
      'Recuperarse de una lesión no significa únicamente eliminar el dolor.',
      'Nuestro objetivo es que cada atleta vuelva a competir con seguridad, confianza y el máximo rendimiento posible.',
      'Desarrollamos programas específicos según el deporte, nivel competitivo y objetivos del paciente.',
    ],
    benefits: [
      'Recuperación funcional completa',
      'Prevención de recaídas',
      'Retorno seguro al deporte',
      'Mejora del rendimiento físico',
      'Fortalecimiento específico',
    ],
  },
  {
    id: 'terapia-manual',
    title: 'Terapia Manual Ortopédica',
    image: '/images/services/manual-ortopedica.jpg',
    description: [
      'La terapia manual sigue siendo una de las herramientas más efectivas para restaurar movimiento y disminuir dolor.',
      'A través de técnicas especializadas realizamos movilizaciones articulares, liberación de tejidos blandos y corrección de restricciones biomecánicas.',
    ],
    benefits: [
      'Reducción del dolor',
      'Mayor movilidad articular',
      'Menor rigidez',
      'Recuperación funcional acelerada',
      'Mejora del movimiento natural',
    ],
  },
  {
    id: 'tecarterapia',
    title: 'Tecarterapia',
    image: '/images/services/tecar.jpg',
    description: [
      'La Tecarterapia utiliza radiofrecuencia terapéutica para estimular los mecanismos naturales de reparación de los tejidos.',
      'Esta tecnología favorece la circulación sanguínea, acelera procesos de recuperación y reduce significativamente la inflamación.',
    ],
    benefits: [
      'Menor inflamación',
      'Recuperación más rápida',
      'Mejor circulación',
      'Disminución del dolor',
      'Mejora de tejidos profundos',
    ],
  },
  {
    id: 'masajes-terapeuticos',
    title: 'Masajes Terapéuticos',
    image: '/images/services/masajes-terapeuticos.jpg',
    description: [
      'Los masajes terapéuticos son una herramienta clínica para disminuir tensiones musculares, mejorar la circulación y favorecer la recuperación física.',
      'Cada tratamiento es adaptado a las necesidades específicas de cada paciente.',
    ],
    benefits: [
      'Relajación muscular',
      'Disminución del estrés físico',
      'Mejor circulación',
      'Menor dolor muscular',
      'Recuperación más eficiente',
    ],
  },
  {
    id: 'rehabilitacion-cirugia',
    title: 'Rehabilitación Pre y Post Cirugía',
    image: '/images/services/pre-post.jpg',
    description: [
      'Una recuperación exitosa comienza incluso antes de la cirugía.',
      'La preparación adecuada puede mejorar significativamente los resultados quirúrgicos y acelerar el proceso de recuperación posterior.',
      'Nuestro enfoque busca que cada paciente recupere movilidad, fuerza y funcionalidad de la manera más eficiente posible.',
    ],
    benefits: [
      'Mejor preparación quirúrgica',
      'Menor pérdida de fuerza',
      'Recuperación acelerada',
      'Menor dolor postoperatorio',
      'Retorno más rápido a actividades',
    ],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E38] via-[#0E3D4A] to-[#156378]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(53, 183, 200, 0.15) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 30% at 30% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-[#35B7C8]/10 blur-[100px] z-10"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[30%] left-[5%] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#5EEAD4]/8 blur-[80px] z-10"
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#5EEAD4] animate-pulse" />
              Tratamientos Especializados
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-8"
          >
            Servicios Especializados{' '}
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#67E8F9] to-[#5EEAD4] bg-clip-text text-transparent">
              de Fisioterapia
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Más de una década ayudando a nuestros pacientes a recuperar movilidad, reducir dolor y
            mejorar su calidad de vida mediante tratamientos especializados respaldados por
            evidencia científica y tecnología avanzada.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20cita.%0AParte%20del%20cuerpo%20que%20me%20duele:"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-8 lg:px-10 bg-[#1E88A8] text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-xl shadow-[#1E88A8]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1E88A8]/30 hover:bg-[#35B7C8]"
            >
              Agendar Valoración
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5"
              />
            </a>
            <a
              href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20cita.%0AParte%20del%20cuerpo%20que%20me%20duele:"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-8 lg:px-10 bg-[#25D366] text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:bg-[#20BA5C]"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

// Introduction Section Component
function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold mb-8"
          >
            Nuestra Filosofía
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-8 max-w-4xl"
          >
            Tratamientos diseñados para resultados reales
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-6 text-lg text-[#64748B] leading-relaxed text-center max-w-3xl">
            <p>
              En Physical Care creemos que cada paciente merece un tratamiento personalizado. Por
              eso hemos desarrollado una oferta integral de servicios especializados que combinan
              experiencia clínica, tecnología moderna y un enfoque centrado en la recuperación
              funcional.
            </p>
            <p>
              Nuestro objetivo no es únicamente disminuir el dolor, sino ayudarle a recuperar
              movimiento, independencia, confianza y calidad de vida.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Service Section Component
function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 === 1;

  return (
    <section
      ref={ref}
      id={service.id}
      className={`py-16 md:py-24 lg:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F4F7F8]'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center"
        >
          {/* Image */}
          <motion.div
            variants={fadeInUp}
            className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl shadow-[#0E3A4A]/10 lg:min-h-[400px] xl:min-h-[500px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A4A]/30 via-transparent to-transparent" />
            </div>
            {/* Decorative element - hidden on mobile to prevent overflow */}
            <div
              className={`hidden md:block absolute -z-10 w-full h-full rounded-3xl bg-gradient-to-br from-[#1E88A8]/20 to-[#5EEAD4]/10 ${
                isReversed
                  ? '-top-4 -left-4 lg:-top-6 lg:-left-6'
                  : '-top-4 -right-4 lg:-top-6 lg:-right-6'
              }`}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-6 lg:mb-8"
            >
              {service.title}
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8 lg:mb-10">
              {service.description.map((paragraph, i) => (
                <p key={i} className="text-base lg:text-lg text-[#64748B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Indications (if exists) */}
            {'indications' in service && service.indications && (
              <motion.div variants={fadeInUp} className="mb-8 lg:mb-10">
                <h3 className="text-lg font-semibold text-[#0E3A4A] mb-4">Indicaciones frecuentes:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.indications.map((indication, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[#64748B]">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1E88A8]/10 flex items-center justify-center">
                        <Check size={12} className="text-[#1E88A8]" />
                      </div>
                      <span className="text-sm lg:text-base">{indication}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Benefits */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-[#0E3A4A] mb-4">Beneficios:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[#64748B]">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5EEAD4]/20 flex items-center justify-center">
                      <Check size={14} className="text-[#0E3A4A]" />
                    </div>
                    <span className="text-sm lg:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section Component
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E3A4A] via-[#156378] to-[#1E88A8]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(94, 234, 212, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] left-[10%] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#5EEAD4]/10 blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#35B7C8]/10 blur-[100px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] tracking-[-0.02em] mb-6 lg:mb-8"
          >
            ¿Listo para iniciar su recuperación?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl lg:text-2xl text-white/75 leading-relaxed mb-10 lg:mb-14 max-w-3xl mx-auto"
          >
            Permita que nuestro equipo de especialistas diseñe un plan de tratamiento personalizado
            para ayudarle a recuperar movimiento, reducir dolor y mejorar su calidad de vida.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20cita.%0AParte%20del%20cuerpo%20que%20me%20duele:"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-8 lg:px-10 bg-white text-[#0E3A4A] rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Agendar Valoración
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5"
              />
            </a>
            <a
              href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20cita.%0AParte%20del%20cuerpo%20que%20me%20duele:"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 h-14 sm:h-16 w-full sm:w-auto px-6 sm:px-8 lg:px-10 bg-[#25D366] text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:bg-[#20BA5C]"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function ServiciosEspecializadosPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
