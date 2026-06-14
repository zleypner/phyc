'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';

export default function TestimonialsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F8FAFB] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#5EEAD4]/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#1E88A8]/5 rounded-full blur-[80px]" />
      </div>

      {/* Decorative quotes */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-16 text-[#5EEAD4]/10">
        <Quote size={60} className="sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
      </div>
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-16 text-[#1E88A8]/10 rotate-180">
        <Quote size={60} className="sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1E88A8]/10 to-[#5EEAD4]/10 border border-[#1E88A8]/15 text-[#1E88A8] text-sm font-semibold mb-6">
            <Star size={14} className="fill-[#5EEAD4] text-[#5EEAD4]" />
            Experiencias reales
          </span>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0E3A4A] leading-[1.2] tracking-[-0.02em] mb-5">
            Resultados que nuestros pacientes{' '}
            <span className="bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] bg-clip-text text-transparent">
              recomiendan
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-4 max-w-2xl mx-auto">
            Cada proceso de recuperación cuenta una historia. Descubra por qué tantos pacientes recomiendan nuestros servicios y confían en nuestro equipo para acompañar su bienestar.
          </p>

          {/* Supporting text */}
          <p className="text-sm text-[#94A3B8] mb-8">
            Más de decenas de pacientes han compartido su experiencia con nosotros.
          </p>

          {/* CTA Button */}
          <Link
            href="/testimonios"
            className="group inline-flex items-center gap-2.5 bg-[#0E3A4A] text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:bg-[#1E88A8] hover:shadow-lg hover:shadow-[#1E88A8]/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver testimonios completos
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
