'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Star,
  Target,
  Heart,
  Users,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Award,
  Sparkles,
  MessageCircle,
  Shield,
  Activity,
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

// Testimonial Card Component
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
    <article className="group h-full bg-white rounded-[20px] p-6 md:p-7 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(30,136,168,0.12)] hover:border-[#1E88A8]/20 transition-all duration-300 flex flex-col">
      {/* Header with stars and quote */}
      <div className="flex items-start justify-between mb-4">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Quote mark */}
        <span className="text-4xl text-[#1E88A8]/20 font-serif leading-none">"</span>
      </div>

      {/* Testimonial text */}
      <blockquote className="text-[15px] text-[#374151] leading-relaxed mb-6 flex-grow">
        "{testimonial}"
      </blockquote>

      {/* Patient info */}
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] flex items-center justify-center text-white font-semibold text-sm">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-semibold text-[#0E3A4A] text-sm truncate">{name}</p>
          <p className="text-xs text-[#64748B]">Atendida por {therapist}</p>
        </div>

        {/* NPS Badge */}
        <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#059669] text-xs font-semibold">
          NPS {nps}/10
        </span>
      </div>

      {/* Condition tag */}
      <div className="pt-4 border-t border-gray-100">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E88A8]/8 text-[#1E88A8] text-xs font-medium">
          <ConditionIcon size={12} />
          {condition}
        </span>
      </div>
    </article>
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

  // Carousel state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPrevious = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      <TestimonialsSchema />

      <section
        ref={ref}
        id="testimonials"
        className="relative bg-[#FAFBFC] overflow-hidden"
        style={{ paddingTop: '140px', paddingBottom: '140px' }}
        aria-labelledby="testimonials-heading"
      >
        {/* Subtle medical pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230E3A4A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium">
              <Star size={14} className="fill-current" />
              Historias reales, resultados reales
            </span>
          </motion.div>

          {/* Main Heading - Serif style */}
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0E3A4A] mb-8 leading-tight"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Lo que nuestros pacientes dicen
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center text-lg text-[#64748B] leading-relaxed max-w-[700px] mx-auto"
            style={{ marginBottom: '64px' }}
          >
            Pacientes que han recuperado su movilidad, reducido su dolor y mejorado su calidad de
            vida gracias a nuestro equipo de fisioterapia.
          </motion.p>

          {/* Trust Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
            style={{ marginBottom: '80px' }}
          >
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                  className="bg-white rounded-[20px] p-5 md:p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${metric.iconBg} flex items-center justify-center mb-4`}
                  >
                    <IconComponent size={24} className={metric.iconColor} />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-[#0E3A4A] mb-1">{metric.value}</p>
                  <p className="text-sm text-[#64748B]">{metric.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Testimonials Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0E3A4A] mb-3">
              Más historias de nuestros pacientes
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] rounded-full mx-auto" />
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative"
          >
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#0E3A4A] hover:bg-[#1E88A8] hover:text-white hover:border-[#1E88A8] transition-all duration-300"
              aria-label="Testimonios anteriores"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 z-10 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#0E3A4A] hover:bg-[#1E88A8] hover:text-white hover:border-[#1E88A8] transition-all duration-300"
              aria-label="Testimonios siguientes"
            >
              <ChevronRight size={24} />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-4 md:px-8 lg:px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {currentTestimonials.map((testimonial) => (
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
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-[#1E88A8] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a página ${index + 1}`}
                  aria-current={index === currentPage ? 'true' : 'false'}
                />
              ))}
            </div>
          </motion.div>

          {/* Why Patients Recommend Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ marginTop: '100px' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0E3A4A] text-center mb-10">
              ¿Por qué nuestros pacientes nos recomiendan?
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.55 + index * 0.06 }}
                    className="group bg-white rounded-[20px] p-5 md:p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#1E88A8]/20 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#1E88A8]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1E88A8]/20 transition-colors duration-300">
                      <IconComponent size={22} className="text-[#1E88A8]" />
                    </div>
                    <h4 className="font-semibold text-[#0E3A4A] text-sm md:text-base mb-2 leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">
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
