'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, FileCheck, HeartPulse } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Evaluación Integral',
    description:
      'Realizamos una valoración completa para entender tu condición, identificar la causa del problema y definir objetivos claros de recuperación.',
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Plan Personalizado',
    description:
      'Diseñamos un tratamiento adaptado a tu lesión, necesidades y estilo de vida utilizando técnicas basadas en evidencia.',
  },
  {
    step: '03',
    icon: HeartPulse,
    title: 'Recuperación y Prevención',
    description:
      'Te acompañamos durante todo el proceso para recuperar tu movilidad, reducir el dolor y prevenir futuras lesiones.',
  },
];

export default function RecoveryJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-[#0E3A4A] via-[#134B5F] to-[#1E88A8] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#35B7C8] rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
            Tu Camino de Recuperación
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Tu Recuperación en 3 Pasos
          </h2>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
            Un proceso claro, personalizado y respaldado por profesionales para
            ayudarte a recuperar tu movilidad y calidad de vida.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Progress connector line - Desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[16.67%] right-[16.67%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full" />
            {/* Animated progress dots */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 bg-gradient-to-r from-[#35B7C8] via-[#5EEAD4] to-[#35B7C8] origin-left rounded-full"
              style={{ opacity: 0.6 }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className={`${index === 2 ? 'md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none' : ''}`}
                >
                  <div className="group relative bg-white/[0.07] backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 h-full">
                    {/* Step Number - Large */}
                    <div className="absolute -top-4 -right-2 md:top-6 md:right-6">
                      <span className="text-6xl md:text-7xl font-bold text-white/[0.08] group-hover:text-white/[0.12] transition-colors duration-300 select-none">
                        {step.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-[#35B7C8] to-[#1E88A8] flex items-center justify-center shadow-lg shadow-[#35B7C8]/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#35B7C8]/30 transition-all duration-300">
                        <IconComponent size={28} className="text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Step indicator */}
                      <span className="inline-block text-[#5EEAD4] text-sm font-semibold tracking-wider mb-3">
                        PASO {step.step}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed text-[15px] md:text-base max-w-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#35B7C8]/10 to-transparent rounded-bl-3xl rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-14 md:mt-20"
        >
          <a
            href="https://wa.me/50689680947"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-[#0E3A4A] px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/95 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15"
          >
            Comienza Tu Recuperación
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
