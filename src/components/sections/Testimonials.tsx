'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Star,
  Target,
  Heart,
  Users,
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
    value: 'NPS 10/10',
    label: 'Puntuación NPS',
    iconColor: 'text-[#1E88A8]',
    iconBg: 'bg-[#1E88A8]/10',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Recomendaciones Positivas',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-50',
  },
  {
    icon: Users,
    value: '450+',
    label: 'Pacientes satisfechos',
    iconColor: 'text-[#1E88A8]',
    iconBg: 'bg-[#1E88A8]/10',
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
    <article className="flex-shrink-0 w-[340px] sm:w-[380px] bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(30,136,168,0.15)] hover:border-[#1E88A8]/20 transition-all duration-300 mx-3">
      {/* Header with quote and stars */}
      <div className="flex items-start justify-between mb-4">
        {/* Quote icon */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E88A8]/10 to-[#5EEAD4]/10 flex items-center justify-center">
          <Quote size={18} className="text-[#1E88A8]" />
        </div>

        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
      </div>

      {/* Testimonial text */}
      <blockquote className="text-[15px] text-[#374151] leading-relaxed mb-5 line-clamp-3">
        "{testimonial}"
      </blockquote>

      {/* Patient info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-[#1E88A8]/20">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-semibold text-[#0E3A4A] text-sm truncate">{name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-[#64748B]">Atendido por {therapist}</span>
            <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
            <span className="inline-flex items-center gap-1 text-xs text-[#1E88A8] font-medium">
              <ConditionIcon size={10} />
              {condition}
            </span>
          </div>
        </div>

        {/* NPS Badge */}
        <span className="flex-shrink-0 px-2 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-[11px] font-bold">
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
  speed = 30,
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
        className="relative bg-gradient-to-b from-[#F8FBFC] via-white to-[#F8FBFC] py-16 md:py-24 lg:py-32 overflow-hidden"
        aria-labelledby="testimonials-heading"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#5EEAD4]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1E88A8]/5 rounded-full blur-[120px]" />
        </div>

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0E3A4A 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E88A8]/10 to-[#5EEAD4]/10 border border-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold">
              <Star size={14} className="fill-current" />
              Historias reales, resultados reales
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0E3A4A] mb-5 leading-[1.1] tracking-[-0.02em]"
          >
            Lo que nuestros
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] bg-clip-text text-transparent"> pacientes dicen</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center text-base sm:text-lg text-[#64748B] leading-relaxed max-w-[700px] mx-auto mb-12 md:mb-16"
          >
            Pacientes que han recuperado su movilidad, reducido su dolor y mejorado su calidad de
            vida gracias a nuestro equipo de fisioterapia.
          </motion.p>

          {/* Trust Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 md:mb-20"
          >
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                  className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${metric.iconBg} flex items-center justify-center mb-3 md:mb-4`}
                  >
                    <IconComponent size={20} className={`${metric.iconColor} md:w-6 md:h-6`} />
                  </div>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0E3A4A] mb-1">{metric.value}</p>
                  <p className="text-xs md:text-sm text-[#64748B]">{metric.label}</p>
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
          <div className="container mb-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0E3A4A] mb-3">
                Más historias de nuestros pacientes
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] rounded-full mx-auto" />
            </div>
          </div>

          {/* Single Row - Moving Left */}
          <Marquee direction="left" speed={50}>
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
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 md:mt-24"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0E3A4A] text-center mb-10">
              ¿Por qué nuestros pacientes nos recomiendan?
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.55 + index * 0.06 }}
                    className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#1E88A8]/20 transition-all duration-300 text-center"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1E88A8]/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-[#1E88A8]/20 transition-colors duration-300">
                      <IconComponent size={20} className="text-[#1E88A8] md:w-[22px] md:h-[22px]" />
                    </div>
                    <h4 className="font-semibold text-[#0E3A4A] text-xs md:text-sm mb-1.5 leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] md:text-xs text-[#64748B] leading-relaxed">
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
