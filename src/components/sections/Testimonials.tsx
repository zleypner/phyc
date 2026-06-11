'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Star, Target, Heart, Users, ArrowRight, Shield, UserCheck, Sparkles, MessageCircle, CheckCircle, Award } from 'lucide-react';
import TestimonialCard from '@/components/ui/TestimonialCard';

// Real testimonial data
const testimonials = [
  {
    name: "Mario Alberto Fernández Gurdian",
    therapist: "Enmanuel Li Torres",
    rating: 5,
    nps: 10,
    testimonial: "Excelente servicio y atención."
  },
  {
    name: "Tamara Salgado Reyes",
    therapist: "Yamilah Solano Farah",
    rating: 5,
    nps: 10,
    testimonial: "La atención de Yami es excelente, la recomiendo 1000%."
  },
  {
    name: "Marco Antonio Fonseca León",
    therapist: "Yamilah Solano Farah",
    rating: 5,
    nps: 10,
    testimonial: "Siempre me han atendido con cariño y dedicación. Además, siempre me han atendido en emergencias y me han logrado rehabilitar."
  },
  {
    name: "Sylvia Sánchez Saborío",
    therapist: "Yamilah Solano Farah",
    rating: 5,
    nps: 10,
    testimonial: "Los profesionales conocen mucho de su área."
  },
  {
    name: "Ricardo Arévalo Bravo",
    therapist: "Enmanuel Li Torres",
    rating: 5,
    nps: 10,
    testimonial: "Excelente profesional y servicio. Excelentes profesionales."
  },
  {
    name: "Wilberth Alejandro Barrantes López",
    therapist: "Enmanuel Li Torres",
    rating: 5,
    nps: 10,
    testimonial: "Excelente trato y me aclaró muchas dudas, lo cual me da seguridad para continuar con el proceso. Muy profesionales y con mucho conocimiento."
  },
  {
    name: "Virginia María Valverde Coghi",
    therapist: "Yamilah Solano Farah",
    rating: 5,
    nps: 10,
    testimonial: "Muy buena como siempre. Porque siempre que voy donde ella me ha curado."
  },
  {
    name: "Maylin Vanessa Arronis Padilla",
    therapist: "Enmanuel Li Torres",
    rating: 5,
    nps: 10,
    testimonial: "Excelente servicio. El trato y los aparatos que se utilizan son excelentes."
  },
  {
    name: "Virginia María Valverde Coghi",
    therapist: "Yamilah Solano Farah",
    rating: 5,
    nps: 10,
    testimonial: "Muy bien, siempre me atiende excelente. Siempre que voy me sirve mucho."
  },
  {
    name: "Marco Andrés Soto Solís",
    therapist: "Yamilah Solano Farah",
    rating: 5,
    nps: 10,
    testimonial: "Genial. Muy buen trato y tratamiento. Me han ayudado mucho en la recuperación de mis lesiones."
  },
  {
    name: "Ruth Vargas Cordero",
    therapist: "Enmanuel Li Torres",
    rating: 5,
    nps: 10,
    testimonial: "Muy buena. Lo recomendaría. Muy claro lo que él recomienda y la evolución satisfactoria."
  },
  {
    name: "Cinthya Rebeca Umaña Castro",
    therapist: "Yamilah Solano Farah",
    rating: 5,
    nps: 10,
    testimonial: "Excelente. Superaron mis expectativas, estoy muy agradecida. Súper recomendado. La atención y el trato fueron excelentes."
  },
  {
    name: "Verónica McNally Meléndez",
    therapist: "Enmanuel Li Torres",
    rating: 5,
    nps: 10,
    testimonial: "Muy profesional y efectivo."
  }
];


// Trust metrics data
const trustMetrics = [
  {
    icon: Star,
    value: '5.0/5',
    label: 'Calificación Promedio',
    color: 'text-[#FBBF24]',
    bgColor: 'bg-[#FBBF24]/10',
  },
  {
    icon: Target,
    value: 'NPS 10/10',
    label: 'Puntuación NPS',
    color: 'text-[#1E88A8]',
    bgColor: 'bg-[#1E88A8]/10',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Recomendaciones Positivas',
    color: 'text-[#EF4444]',
    bgColor: 'bg-[#EF4444]/10',
  },
  {
    icon: Users,
    value: '450+',
    label: 'Pacientes Satisfechos',
    color: 'text-[#10B981]',
    bgColor: 'bg-[#10B981]/10',
  },
];

// Benefits data
const benefits = [
  { icon: UserCheck, title: 'Atención personalizada', description: 'Cada tratamiento se adapta a tus necesidades específicas' },
  { icon: Award, title: 'Profesionales certificados', description: 'Equipo con amplia experiencia y formación continua' },
  { icon: Sparkles, title: 'Recuperación efectiva', description: 'Resultados comprobados en rehabilitación de lesiones' },
  { icon: Heart, title: 'Trato humano y cercano', description: 'Te acompañamos con empatía en cada etapa' },
  { icon: MessageCircle, title: 'Comunicación clara', description: 'Te explicamos cada paso de tu tratamiento' },
  { icon: Shield, title: 'Confianza garantizada', description: 'Seguridad y profesionalismo en cada sesión' },
];

// Marquee component for infinite scroll using CSS animation for better pause support
function MarqueeRow({
  items,
  direction = 'left',
  speed = 35,
  isPaused = false
}: {
  items: typeof testimonials;
  direction?: 'left' | 'right';
  speed?: number;
  isPaused?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  const duration = items.length * (100 / speed);

  return (
    <div className="relative flex overflow-hidden">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-5 sm:gap-6 animate-marquee"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationPlayState: isPaused || shouldReduceMotion ? 'paused' : 'running',
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            name={testimonial.name}
            therapist={testimonial.therapist}
            rating={testimonial.rating}
            nps={testimonial.nps}
            testimonial={testimonial.testimonial}
          />
        ))}
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
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <TestimonialsSchema />

      <section
        ref={ref}
        id="testimonials"
        className="relative py-20 md:py-28 lg:py-36 bg-[#F8FAFC] overflow-hidden"
        aria-labelledby="testimonials-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230E3A4A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-5">
              <Star size={14} className="fill-current" />
              Testimonios Verificados
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-5 leading-tight"
            >
              Lo que nuestros pacientes dicen
            </h2>
            <p className="text-base md:text-lg text-[#64748B] leading-relaxed">
              Pacientes que han recuperado su movilidad, reducido su dolor y mejorado su calidad de vida gracias a nuestro equipo de fisioterapia.
            </p>
          </motion.div>

          {/* Trust Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-14 md:mb-20"
          >
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${metric.bgColor} flex items-center justify-center mb-3`}>
                    <IconComponent size={20} className={metric.color} />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-[#0E3A4A] mb-1">
                    {metric.value}
                  </p>
                  <p className="text-sm text-[#64748B]">
                    {metric.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Testimonial Carousel - Full Width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-label="Carrusel de testimonios de pacientes"
        >
          <MarqueeRow items={testimonials} direction="left" speed={25} isPaused={isPaused} />
        </motion.div>

        <div className="container">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 md:mt-28"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0E3A4A] text-center mb-10 md:mb-14">
              ¿Por qué nuestros pacientes nos recomiendan?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1E88A8]/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center group-hover:from-[#1E88A8]/20 group-hover:to-[#35B7C8]/20 transition-colors duration-300">
                      <IconComponent size={20} className="text-[#1E88A8]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0E3A4A] mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 md:mt-24"
          >
            <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-[#0E3A4A] via-[#1E88A8] to-[#35B7C8] rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20V20zm0-20h20v20H20V0zM0 20h20v20H0V20zM0 0h20v20H0V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#35B7C8]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                  <CheckCircle size={16} />
                  Más de 450 pacientes satisfechos
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Comience su proceso de recuperación hoy mismo
                </h3>
                <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Permita que nuestro equipo le ayude a volver a moverse sin dolor y con confianza.
                </p>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0E3A4A] rounded-2xl font-semibold text-base shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Agendar Cita
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
