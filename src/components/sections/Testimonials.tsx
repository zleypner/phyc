'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Star,
  Target,
  Heart,
  UserCheck,
  Award,
  Sparkles,
  MessageCircle,
  Shield,
  Activity,
  Quote,
} from 'lucide-react';

// Real testimonial data with conditions
const testimonials = [
  {
    name: 'Vanessa Arronis Padilla',
    therapist: 'Enmanuel Li',
    rating: 5,
    nps: 10,
    testimonial: 'Excelente servicio. El trato y los aparatos que se utilizan son excelentes.',
    condition: 'Dolor lumbar',
  },
  {
    name: 'Virginia María Valverde',
    therapist: 'Yamilah Solano',
    rating: 5,
    nps: 10,
    testimonial: 'Muy bien, siempre me atiende excelente. Siempre que voy me sirve mucho.',
    condition: 'Recuperación deportiva',
  },
  {
    name: 'Marco Andrés Soto Solís',
    therapist: 'Yamilah Solano',
    rating: 5,
    nps: 10,
    testimonial: 'Genial. Muy buen trato y tratamiento. Me han ayudado mucho en la recuperación de mis lesiones.',
    condition: 'Dolor de rodilla',
  },
  {
    name: 'Ruth Vargas Gómez',
    therapist: 'Enmanuel Li',
    rating: 5,
    nps: 10,
    testimonial: 'Muy buena. Lo recomiendo, la recomiendo y la recomiendo, excelente todo',
    condition: 'Post cirugía',
  },
  {
    name: 'Cinthya Rebeca Umaña',
    therapist: 'Yamilah Solano',
    rating: 5,
    nps: 10,
    testimonial: 'Excelente. Superaron mis expectativas, estoy muy agradecida. Súper recomendado.',
    condition: 'Dolor de espalda',
  },
  {
    name: 'Ricardo Arévalo Bravo',
    therapist: 'Enmanuel Li',
    rating: 5,
    nps: 10,
    testimonial: 'Excelente profesional y servicio. Excelentes profesionales.',
    condition: 'Lesión deportiva',
  },
  {
    name: 'Tamara Salgado Reyes',
    therapist: 'Yamilah Solano',
    rating: 5,
    nps: 10,
    testimonial: 'La atención de Yami es excelente, la recomiendo 1000%.',
    condition: 'Rehabilitación',
  },
  {
    name: 'Wilberth Barrantes López',
    therapist: 'Enmanuel Li',
    rating: 5,
    nps: 10,
    testimonial: 'Excelente trato y me aclaró muchas dudas. Muy profesionales y con mucho conocimiento.',
    condition: 'Dolor cervical',
  },
  {
    name: 'Marco Antonio Fonseca',
    therapist: 'Yamilah Solano',
    rating: 5,
    nps: 10,
    testimonial: 'Siempre me han atendido con cariño y dedicación. Me han logrado rehabilitar.',
    condition: 'Recuperación',
  },
  {
    name: 'Verónica McNally',
    therapist: 'Enmanuel Li',
    rating: 5,
    nps: 10,
    testimonial: 'Muy profesional y efectivo.',
    condition: 'Dolor de hombro',
  },
  {
    name: 'Sylvia Sánchez Saborío',
    therapist: 'Yamilah Solano',
    rating: 5,
    nps: 10,
    testimonial: 'Los profesionales conocen mucho de su área.',
    condition: 'Tendinitis',
  },
  {
    name: 'Mario Alberto Fernández',
    therapist: 'Enmanuel Li',
    rating: 5,
    nps: 10,
    testimonial: 'Excelente servicio y atención.',
    condition: 'Dolor lumbar',
  },
];


// Trust metrics data
const trustMetrics = [
  {
    icon: Star,
    value: '5.0/5',
    label: 'Calificación promedio',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-50',
  },
  {
    icon: Target,
    value: '10/10',
    label: 'Nivel de satisfacción',
    iconColor: 'text-[#06B8BF]',
    iconBg: 'bg-[#06B8BF]/10',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Recomendaciones Positivas',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-50',
  },
];

// Benefits data
const benefits = [
  {
    icon: UserCheck,
    title: 'Atención personalizada',
    description: 'Cada tratamiento se adapta a tus necesidades específicas.',
  },
  {
    icon: Award,
    title: 'Profesionales certificados',
    description: 'Equipo con amplia experiencia y formación continua.',
  },
  {
    icon: Sparkles,
    title: 'Recuperación efectiva',
    description: 'Resultados comprobados en rehabilitación de lesiones.',
  },
  {
    icon: Heart,
    title: 'Trato humano y cercano',
    description: 'Te acompañamos con empatía en cada etapa.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicación clara',
    description: 'Te explicamos cada paso de tu tratamiento.',
  },
  {
    icon: Shield,
    title: 'Confianza garantizada',
    description: 'Seguridad y profesionalismo en cada sesión.',
  },
];

// Condition icon mapping
const conditionIcons: { [key: string]: typeof Activity } = {
  'Dolor lumbar': Activity,
  'Recuperación deportiva': Activity,
  'Dolor de rodilla': Activity,
  'Post cirugía': Activity,
  'Dolor de espalda': Activity,
  'Lesión deportiva': Activity,
  'Rehabilitación': Activity,
  'Dolor cervical': Activity,
  'Recuperación': Activity,
  'Dolor de hombro': Activity,
  'Tendinitis': Activity,
};

// Testimonial Card Component for Marquee
function TestimonialCard({
  name,
  therapist,
  rating,
  nps,
  testimonial,
  condition,
}: {
  name: string;
  therapist: string;
  rating: number;
  nps: number;
  testimonial: string;
  condition: string;
}) {
  const initials = name.split(' ').slice(0, 2).map((n) => n[0]).join('');
  const ConditionIcon = conditionIcons[condition] || Activity;

  return (
    <article className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(30,136,168,0.15)] hover:border-[#06B8BF]/20 transition-all duration-300 mx-2 sm:mx-3">
      {/* Header with quote and stars */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        {/* Quote icon */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#06B8BF]/10 to-[#06B8BF]/10 flex items-center justify-center">
          <Quote size={14} className="text-[#06B8BF] sm:w-[18px] sm:h-[18px]" />
        </div>

        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={12} className="text-amber-400 fill-amber-400 sm:w-3.5 sm:h-3.5" />
          ))}
        </div>
      </div>

      {/* Testimonial text */}
      <blockquote className="text-[13px] sm:text-[14px] md:text-[15px] text-[#374151] leading-relaxed mb-4 sm:mb-5 line-clamp-3">
        "{testimonial}"
      </blockquote>

      {/* Patient info */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#06B8BF] to-[#06B8BF] flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#06B8BF]/20">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-semibold text-[#1F2937] text-xs sm:text-sm truncate">{name}</p>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 flex-wrap">
            <span className="text-[10px] sm:text-xs text-[#64748B]">Por {therapist}</span>
            <span className="w-1 h-1 rounded-full bg-[#CBD5E1] hidden sm:block" />
            <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-[#06B8BF] font-medium">
              <ConditionIcon size={8} className="sm:w-[10px] sm:h-[10px]" />
              {condition}
            </span>
          </div>
        </div>

        {/* NPS Badge */}
        <span className="flex-shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-[#8DC741]/10 text-[#8DC741] text-[10px] sm:text-[11px] font-bold">
          {nps}/10
        </span>
      </div>
    </article>
  );
}

// Marquee Component
function Marquee({
  children,
  direction = 'left',
  speed = 10,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={`flex overflow-hidden ${pauseOnHover ? '[&:hover>div]:pause' : ''}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
      <div
        className={`flex shrink-0 gap-0 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className={`flex shrink-0 gap-0 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animationDuration: `${speed}s`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

// JSON-LD Schema for SEO
function TestimonialsSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Physical Care Fisioterapia',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: testimonials.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating.toString(),
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewBody: t.testimonial,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <TestimonialsSchema />

      <section
        ref={ref}
        id="testimonials"
        className="relative bg-gradient-to-b from-[#F8FBFC] via-white to-[#F8FBFC] py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden"
        aria-labelledby="testimonials-heading"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#06B8BF]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#06B8BF]/5 rounded-full blur-[120px]" />
        </div>

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0E3A4A 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container px-4 sm:px-6 relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-3 sm:mb-5"
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#06B8BF]/10 to-[#06B8BF]/10 border border-[#06B8BF]/10 text-[#06B8BF] text-xs sm:text-sm font-semibold">
              <Star size={12} className="fill-current sm:w-3.5 sm:h-3.5" />
              Historias reales, resultados reales
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#1F2937] mb-3 sm:mb-5 leading-[1.1] tracking-[-0.02em] px-2"
          >
            Lo que nuestros
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#06B8BF] to-[#06B8BF] bg-clip-text text-transparent"> pacientes dicen</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed max-w-[700px] mx-auto mb-8 sm:mb-12 md:mb-16 px-2"
          >
            Pacientes que han recuperado su movilidad, reducido su dolor y mejorado su calidad de
            vida gracias a nuestro equipo de fisioterapia.
          </motion.p>

          {/* Trust Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-20"
          >
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${metric.iconBg} flex items-center justify-center mb-2 sm:mb-3 md:mb-4`}
                  >
                    <IconComponent size={16} className={`${metric.iconColor} sm:w-5 sm:h-5 md:w-6 md:h-6`} />
                  </div>
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] mb-0.5 sm:mb-1">{metric.value}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#64748B]">{metric.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Testimonials Marquee Section - Full Width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Section Title */}
          <div className="container px-4 sm:px-6 mb-6 sm:mb-8 md:mb-10">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] mb-2 sm:mb-3">
                Más historias de nuestros pacientes
              </h3>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#06B8BF] to-[#06B8BF] rounded-full mx-auto" />
            </div>
          </div>

          {/* Single Row - Moving Left */}
          <Marquee direction="left" speed={60}>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                therapist={testimonial.therapist}
                rating={testimonial.rating}
                nps={testimonial.nps}
                testimonial={testimonial.testimonial}
                condition={testimonial.condition}
              />
            ))}
          </Marquee>
        </motion.div>

        {/* Why Patients Recommend Us */}
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16 md:mt-20 lg:mt-24"
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1F2937] text-center mb-6 sm:mb-8 md:mb-10 px-2">
              ¿Por qué nuestros pacientes nos recomiendan?
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.55 + index * 0.06 }}
                    className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#06B8BF]/20 transition-all duration-300 text-center"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#06B8BF]/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-[#06B8BF]/20 transition-colors duration-300">
                      <IconComponent size={16} className="text-[#06B8BF] sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
                    </div>
                    <h4 className="font-semibold text-[#1F2937] text-[10px] sm:text-xs md:text-sm mb-1 sm:mb-1.5 leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs text-[#64748B] leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
