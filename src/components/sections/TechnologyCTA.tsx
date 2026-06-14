'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export default function TechnologyCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#0E3A4A] via-[#155E75] to-[#1E88A8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#5EEAD4]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-[#35B7C8]/10 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#5EEAD4] text-sm font-semibold mb-6">
            <Zap size={16} className="fill-current" />
            Innovación en Rehabilitación
          </span>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] tracking-[-0.02em] mb-5">
            Tecnología avanzada para una{' '}
            <span className="text-[#5EEAD4]">rehabilitación más efectiva</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Combinamos experiencia clínica, equipos especializados y técnicas modernas para acompañar cada proceso de recuperación con mayor precisión, seguridad y resultados.
          </p>

          {/* CTA Button */}
          <Link
            href="/tecnologia-de-rehabilitacion"
            className="group inline-flex items-center gap-2.5 bg-white text-[#0E3A4A] font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:bg-[#5EEAD4] hover:shadow-lg hover:shadow-[#5EEAD4]/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            Leer más
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
