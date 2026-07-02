'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Zap, ArrowRight, Sparkles } from 'lucide-react';

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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
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
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Combinamos experiencia clínica, equipos especializados y técnicas modernas para acompañar cada proceso de recuperación con mayor precisión, seguridad y resultados.
          </p>
        </motion.div>

        {/* Magnetolith Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/10"
        >
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
            <Image
              src="/images/technology/magnetolin.webp"
              alt="Magnetolith - Tecnología de estimulación electromagnética"
              fill
              className="object-contain scale-110 md:scale-125"
            />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5EEAD4]/20 text-[#5EEAD4] text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} />
              Revolucionario
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Magnetolith
            </h3>

            <p className="text-[#5EEAD4] font-semibold text-lg">
              Estimulación electromagnética de alta intensidad
            </p>

            <p className="text-white/80 leading-relaxed">
              El Magnetolith está revolucionando las sesiones de fisioterapia. Esta tecnología de vanguardia permite que las personas se recuperen más rápido y sin dolor, utilizando campos electromagnéticos de alta intensidad para estimular músculos, nervios y tejidos profundos sin necesidad de contacto directo.
            </p>

            <div className="bg-[#5EEAD4]/10 rounded-xl p-4 border border-[#5EEAD4]/20">
              <p className="text-white font-medium flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#5EEAD4]/20 flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
                </span>
                Recuperación acelerada y tratamientos sin dolor para alcanzar estructuras que las terapias convencionales no logran estimular.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/tecnologia-de-rehabilitacion"
              className="group inline-flex items-center gap-2.5 bg-white text-[#0E3A4A] font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:bg-[#5EEAD4] hover:shadow-lg hover:shadow-[#5EEAD4]/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Conocer más
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
