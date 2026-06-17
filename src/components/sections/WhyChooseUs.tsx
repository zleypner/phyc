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
    <section ref={ref} id="why-us" className="py-20 md:py-28 lg:py-36 bg-[#F4F7F8]">
      <div className="container max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            Por Qué Elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A]">
            La Excelencia que Impulsa su Recuperación
          </h2>
        </motion.div>

        {/* Mobile Image - Test visibility */}
        <div className="flex mb-10 justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#5EEAD4]/30 shadow-[0_0_60px_rgba(94,234,212,0.3)]">
            <Image
              src="/images/assets/hero-woman.webp"
              alt="Bienestar y recuperación"
              fill
              className="object-cover"
              sizes="256px"
              priority
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:border-[#1E88A8]/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center mb-5 group-hover:from-[#1E88A8] group-hover:to-[#35B7C8] transition-all duration-300">
                <reason.icon
                  size={28}
                  className="text-[#1E88A8] group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-semibold text-[#0E3A4A] text-base md:text-lg mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
