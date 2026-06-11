'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    role: 'Maratonista',
    condition: 'Recuperación de Lesión de Rodilla',
    rating: 5,
    text: 'Después de mi lesión de rodilla, pensé que mis días de correr habían terminado. El equipo de Physical Care no solo me ayudó a recuperarme, sino que mejoró mi rendimiento.',
  },
  {
    id: 2,
    name: 'María Fernández',
    role: 'Profesional de Oficina',
    condition: 'Dolor de Espalda Crónico',
    rating: 5,
    text: 'Años de trabajo de escritorio me dejaron con dolor de espalda crónico. Physical Care identificó las causas raíz y me dio soluciones prácticas. Finalmente vivo sin dolor.',
  },
  {
    id: 3,
    name: 'Roberto Jiménez',
    role: 'Entrenador de Fútbol',
    condition: 'Recuperación de Cirugía de Hombro',
    rating: 5,
    text: 'La rehabilitación post-cirugía fue desafiante, pero los especialistas hicieron el proceso manejable. Recuperé la función completa más rápido de lo esperado.',
  },
  {
    id: 4,
    name: 'Ana Patricia Soto',
    role: 'Instructora de Yoga',
    condition: 'Fascitis Plantar',
    rating: 5,
    text: 'Como instructora de yoga, el dolor de pie era devastador para mi carrera. La terapia de ondas de choque resolvió mi fascitis plantar completamente.',
  },
  {
    id: 5,
    name: 'Diego Vargas',
    role: 'Atleta de CrossFit',
    condition: 'Rehabilitación Deportiva',
    rating: 5,
    text: 'El equipo entiende a los atletas. No solo trataron mi lesión—me ayudaron a volver más fuerte. El enfoque de entrenamiento funcional fue perfecto.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} id="testimonials" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#1E88A8] text-sm md:text-base font-medium uppercase tracking-wider mb-2">
            Casos de Éxito
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <div className="w-24 h-0.5 bg-[#1E88A8] mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto">
            Historias reales de pacientes que han experimentado la diferencia Physical Care.
          </p>
        </motion.div>

        {/* Testimonial Carousel - Tighter composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-[900px] mx-auto"
        >
          {/* Main testimonial card */}
          <div className="relative bg-[#FAFBFC] rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden">
            {/* Quote icon - subtle */}
            <Quote
              size={80}
              className="absolute top-8 right-8 text-[#1E88A8]/5"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#FBBF24] fill-[#FBBF24]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-[22px] md:text-[28px] text-[#0E3A4A] leading-[1.5] font-medium mb-10 max-w-[750px]">
                  &ldquo;{currentTestimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] flex items-center justify-center text-white font-semibold text-xl">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0E3A4A] text-lg">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-[15px] text-[#64748B]">
                      {currentTestimonial.role} · {currentTestimonial.condition}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#475569] hover:bg-[#1E88A8] hover:text-white hover:border-[#1E88A8] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#1E88A8]'
                      : 'w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center text-[#475569] hover:bg-[#1E88A8] hover:text-white hover:border-[#1E88A8] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </motion.div>

        {/* Trust indicators - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-10 mt-12 md:mt-16"
        >
          <div className="flex items-center gap-2 text-[#64748B]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-[#FBBF24] fill-[#FBBF24]"
                />
              ))}
            </div>
            <span className="font-medium text-[15px]">4.9/5 Calificación</span>
          </div>
          <div className="text-[#64748B] text-[15px]">
            <span className="font-semibold text-[#0E3A4A]">450+</span> Pacientes Satisfechos
          </div>
          <div className="text-[#64748B] text-[15px]">
            <span className="font-semibold text-[#0E3A4A]">98%</span> Nos Recomendarían
          </div>
        </motion.div>
      </div>
    </section>
  );
}
