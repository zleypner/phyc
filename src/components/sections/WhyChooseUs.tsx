'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  UserCheck,
  Award,
  Cpu,
  LineChart,
  MapPin,
  HeartHandshake,
} from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Planes de Tratamiento Personalizados',
    description:
      'Cada paciente recibe un programa de rehabilitación personalizado diseñado específicamente para su condición, objetivos y estilo de vida.',
  },
  {
    icon: Award,
    title: 'Profesionales Certificados',
    description:
      'Nuestro equipo está formado por fisioterapeutas licenciados con certificaciones avanzadas y desarrollo profesional continuo.',
  },
  {
    icon: Cpu,
    title: 'Tecnología Moderna',
    description:
      'Utilizamos equipos de vanguardia incluyendo terapia de ondas de choque, TECAR y herramientas de evaluación avanzadas.',
  },
  {
    icon: LineChart,
    title: 'Monitoreo Continuo',
    description:
      'Hacemos seguimiento de tu progreso en cada sesión, ajustando tu plan de tratamiento para asegurar resultados óptimos.',
  },
  {
    icon: MapPin,
    title: 'Ubicación Accesible',
    description:
      'Convenientemente ubicados en San Pedro de Montes de Oca con fácil acceso e instalaciones cómodas.',
  },
  {
    icon: HeartHandshake,
    title: 'Atención Centrada en el Paciente',
    description:
      'Tratamos personas, no solo condiciones. Tu comodidad, dignidad y bienestar son nuestras principales prioridades.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="why-us" className="py-12 sm:py-16 md:py-24 lg:py-36 bg-[#F8FAFC]">
      <div className="container px-4 sm:px-6 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#06B8BF]/10 text-[#06B8BF] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Por Qué Elegirnos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] px-2">
            La Excelencia que Impulsa su Recuperación
          </h2>
        </motion.div>

        {/* Mobile Image - Test visibility */}
        <div className="flex mb-8 sm:mb-10 justify-center">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#06B8BF]/30 shadow-[0_0_60px_rgba(94,234,212,0.3)]">
            <Image
              src="/images/assets/hero-woman.webp"
              alt="Bienestar y recuperación"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
              priority
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:border-[#06B8BF]/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#06B8BF]/10 to-[#06B8BF]/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:from-[#06B8BF] group-hover:to-[#06B8BF] transition-all duration-300">
                <reason.icon
                  size={20}
                  className="text-[#06B8BF] group-hover:text-white transition-colors sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
              </div>
              <h3 className="font-semibold text-[#1F2937] text-xs sm:text-sm md:text-base lg:text-lg mb-1.5 sm:mb-2 md:mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#6B7280] leading-relaxed line-clamp-3 sm:line-clamp-none">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
