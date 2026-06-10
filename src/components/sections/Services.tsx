'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Dumbbell,
  Activity,
  Zap,
  Heart,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const serviceGroups = [
  {
    id: 'sports',
    icon: Dumbbell,
    title: 'Rehabilitación Deportiva',
    description: 'Vuelve al juego con programas especializados de recuperación atlética.',
    color: 'from-[#1E88A8] to-[#35B7C8]',
    services: [
      {
        name: 'Lesiones Deportivas',
        description: 'Tratamiento integral para lesiones atléticas incluyendo esguinces, distensiones y daño de ligamentos.',
        benefits: ['Curación acelerada', 'Prevención de lesiones', 'Optimización del rendimiento'],
      },
      {
        name: 'Programas de Retorno al Deporte',
        description: 'Protocolos de rehabilitación estructurados diseñados para volver de forma segura a tus actividades deportivas.',
        benefits: ['Entrenamiento específico', 'Progresión gradual', 'Pruebas de rendimiento'],
      },
      {
        name: 'Recuperación Funcional',
        description: 'Restaura patrones de movimiento funcionales esenciales para el rendimiento atlético.',
        benefits: ['Análisis de movimiento', 'Ejercicios correctivos', 'Optimización biomecánica'],
      },
    ],
  },
  {
    id: 'physical',
    icon: Activity,
    title: 'Rehabilitación Física',
    description: 'Restaura la movilidad y función con atención fisioterapéutica experta.',
    color: 'from-[#0E3A4A] to-[#1E88A8]',
    services: [
      {
        name: 'Fisioterapia',
        description: 'Tratamiento basado en evidencia para restaurar el movimiento y reducir el dolor mediante terapia manual y ejercicios.',
        benefits: ['Reducción del dolor', 'Movilidad mejorada', 'Independencia funcional'],
      },
      {
        name: 'Recuperación Post-Cirugía',
        description: 'Rehabilitación especializada después de cirugías ortopédicas para una recuperación óptima.',
        benefits: ['Progresión segura', 'Manejo de cicatrices', 'Restauración de fuerza'],
      },
      {
        name: 'Cuidado Geriátrico',
        description: 'Terapia suave y efectiva diseñada para adultos mayores para mantener la independencia.',
        benefits: ['Prevención de caídas', 'Entrenamiento de equilibrio', 'Calidad de vida'],
      },
    ],
  },
  {
    id: 'advanced',
    icon: Zap,
    title: 'Tratamientos Avanzados',
    description: 'Terapias de vanguardia usando la última tecnología en rehabilitación.',
    color: 'from-[#35B7C8] to-[#1E88A8]',
    services: [
      {
        name: 'Terapia de Ondas de Choque',
        description: 'Tratamiento no invasivo con ondas acústicas para dolor crónico y curación de tejidos.',
        benefits: ['Curación acelerada', 'Alivio del dolor', 'Sin tiempo de inactividad'],
      },
      {
        name: 'Terapia TECAR',
        description: 'Terapia de radiofrecuencia que estimula la regeneración de tejidos y reduce la inflamación.',
        benefits: ['Curación profunda', 'Inflamación reducida', 'Resultados rápidos'],
      },
      {
        name: 'Terapia Manual Ortopédica',
        description: 'Técnicas manuales para tratar disfunciones articulares, musculares y de tejidos blandos.',
        benefits: ['Movilización articular', 'Liberación de tejido blando', 'Manejo del dolor'],
      },
    ],
  },
  {
    id: 'wellness',
    icon: Heart,
    title: 'Prevención y Bienestar',
    description: 'Cuidado proactivo para prevenir lesiones y mantener una salud óptima.',
    color: 'from-[#1E88A8] to-[#0E3A4A]',
    services: [
      {
        name: 'Masaje Terapéutico',
        description: 'Terapia de masaje profesional para aliviar la tensión muscular y promover la relajación.',
        benefits: ['Alivio del estrés', 'Recuperación muscular', 'Circulación mejorada'],
      },
      {
        name: 'Plantillas Ortopédicas',
        description: 'Plantillas personalizadas para corregir la alineación del pie y prevenir lesiones.',
        benefits: ['Corrección postural', 'Prevención del dolor', 'Comodidad mejorada'],
      },
      {
        name: 'Programas Preventivos',
        description: 'Programas personalizados de ejercicio y bienestar para mantener la salud a largo plazo.',
        benefits: ['Prevención de lesiones', 'Mantenimiento del rendimiento', 'Guía de estilo de vida'],
      },
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <section ref={ref} id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[680px] mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold uppercase tracking-wide mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0E3A4A] mb-5 leading-tight">
            Atención Integral para Tu Recuperación
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Desde rehabilitación deportiva hasta bienestar preventivo, ofrecemos tratamientos
            basados en evidencia para ayudarte a alcanzar una salud óptima.
          </p>
        </motion.div>

        {/* Service Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`relative overflow-hidden rounded-[24px] p-6 lg:p-8 cursor-pointer transition-all duration-300 ease-out ${
                  activeGroup === group.id
                    ? 'bg-gradient-to-br ' + group.color
                    : 'bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[rgba(15,23,42,0.06)]'
                }`}
                onClick={() => setActiveGroup(activeGroup === group.id ? null : group.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-colors ${
                        activeGroup === group.id
                          ? 'bg-white/20'
                          : 'bg-gradient-to-br ' + group.color
                      }`}
                    >
                      <group.icon
                        size={28}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl lg:text-2xl font-bold transition-colors leading-tight ${
                          activeGroup === group.id ? 'text-white' : 'text-[#0E3A4A]'
                        }`}
                      >
                        {group.title}
                      </h3>
                      <p
                        className={`text-sm lg:text-base mt-1 transition-colors leading-relaxed ${
                          activeGroup === group.id ? 'text-white/85' : 'text-[#475569]'
                        }`}
                      >
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeGroup === group.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ArrowRight
                      size={22}
                      className={activeGroup === group.id ? 'text-white' : 'text-[#1E88A8]'}
                    />
                  </motion.div>
                </div>

                {/* Expanded Services */}
                <AnimatePresence>
                  {activeGroup === group.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 mt-6"
                    >
                      {group.services.map((service, sIndex) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: sIndex * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-5"
                        >
                          <h4 className="font-semibold text-white text-lg mb-2">
                            {service.name}
                          </h4>
                          <p className="text-white/85 text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit) => (
                              <span
                                key={benefit}
                                className="inline-flex items-center gap-1.5 text-sm bg-white/20 text-white px-3 py-1.5 rounded-full font-medium"
                              >
                                <CheckCircle size={14} />
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Preview when collapsed */}
                {activeGroup !== group.id && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-[rgba(15,23,42,0.06)]">
                    {group.services.map((service) => (
                      <span
                        key={service.name}
                        className="text-sm bg-white text-[#0E3A4A] px-3 py-2 rounded-full font-medium shadow-sm"
                      >
                        {service.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-7 bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] text-white rounded-2xl font-semibold text-base shadow-[0_4px_14px_rgba(30,136,168,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,136,168,0.45)]"
          >
            Agenda una Consulta
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
