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
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
            Atención Integral para Tu Recuperación
          </h2>
          <p className="text-lg text-[#6B7280]">
            Desde rehabilitación deportiva hasta bienestar preventivo, ofrecemos un espectro completo
            de tratamientos basados en evidencia para ayudarte a alcanzar una salud óptima.
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
                className={`relative overflow-hidden rounded-3xl p-6 lg:p-8 cursor-pointer transition-all duration-500 ${
                  activeGroup === group.id
                    ? 'bg-gradient-to-br ' + group.color
                    : 'bg-[#F4F7F8] hover:bg-[#E8ECEE]'
                }`}
                onClick={() => setActiveGroup(activeGroup === group.id ? null : group.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
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
                        className={activeGroup === group.id ? 'text-white' : 'text-white'}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          activeGroup === group.id ? 'text-white' : 'text-[#0E3A4A]'
                        }`}
                      >
                        {group.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors ${
                          activeGroup === group.id ? 'text-white/80' : 'text-[#6B7280]'
                        }`}
                      >
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeGroup === group.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight
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
                      className="space-y-4"
                    >
                      {group.services.map((service, sIndex) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: sIndex * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-5"
                        >
                          <h4 className="font-semibold text-white mb-2">
                            {service.name}
                          </h4>
                          <p className="text-white/80 text-sm mb-3">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.benefits.map((benefit) => (
                              <span
                                key={benefit}
                                className="inline-flex items-center gap-1.5 text-xs bg-white/20 text-white px-3 py-1.5 rounded-full"
                              >
                                <CheckCircle size={12} />
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    {group.services.map((service) => (
                      <span
                        key={service.name}
                        className="text-xs bg-white/80 text-[#0E3A4A] px-3 py-1.5 rounded-full"
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
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Agenda una Consulta
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
