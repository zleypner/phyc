'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ClipboardCheck,
  Microscope,
  FileSpreadsheet,
  Dumbbell,
  Shield,
} from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: 'Evaluación Inicial',
    description:
      'Evaluación completa de tu condición, historial médico y objetivos personales para entender tu situación única.',
    details: [
      'Revisión del historial médico',
      'Evaluación del dolor',
      'Discusión de objetivos',
    ],
  },
  {
    step: 2,
    icon: Microscope,
    title: 'Evaluación Funcional',
    description:
      'Examen físico profundo para identificar la causa raíz de tu condición y cualquier factor contribuyente.',
    details: [
      'Análisis del movimiento',
      'Pruebas de fuerza',
      'Evaluación del rango de movimiento',
    ],
  },
  {
    step: 3,
    icon: FileSpreadsheet,
    title: 'Plan de Tratamiento Personalizado',
    description:
      'Un programa de rehabilitación personalizado diseñado específicamente para tu condición, tiempo y necesidades de estilo de vida.',
    details: [
      'Protocolos basados en evidencia',
      'Metas claras',
      'Programa de ejercicios en casa',
    ],
  },
  {
    step: 4,
    icon: Dumbbell,
    title: 'Rehabilitación Activa',
    description:
      'Sesiones de terapia práctica combinando técnicas manuales, ejercicios terapéuticos y modalidades avanzadas.',
    details: [
      'Terapia manual',
      'Ejercicios progresivos',
      'Tratamientos avanzados',
    ],
  },
  {
    step: 5,
    icon: Shield,
    title: 'Recuperación y Prevención',
    description:
      'Transición al mantenimiento independiente con estrategias para prevenir futuras lesiones y mantener tus resultados.',
    details: [
      'Estrategias de prevención',
      'Programa de mantenimiento',
      'Apoyo de seguimiento',
    ],
  },
];

export default function RecoveryJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
            Tu Camino de Recuperación
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Del Dolor al Rendimiento
          </h2>
          <p className="text-lg text-white/80">
            Nuestro enfoque estructurado asegura que entiendas cada paso de tu
            camino de rehabilitación y qué esperar en el proceso.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2" />

          {/* Steps */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-white/20" />
                )}

                {/* Step card */}
                <div className="relative z-10">
                  {/* Step number and icon */}
                  <div className="flex lg:flex-col items-center gap-4 mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                        <step.icon size={28} className="text-[#1E88A8]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#35B7C8] flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                    </motion.div>

                    <div className="lg:text-center flex-1 lg:flex-none">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:text-center pl-20 lg:pl-0">
                    <p className="text-white/70 text-sm mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail) => (
                        <p
                          key={detail}
                          className="text-xs text-white/60 flex items-center lg:justify-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#35B7C8]" />
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#0E3A4A] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
          >
            Comienza Tu Camino de Recuperación
          </a>
        </motion.div>
      </div>
    </section>
  );
}
