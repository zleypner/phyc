'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UserCheck,
  Award,
  Cpu,
  BookOpen,
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
    icon: BookOpen,
    title: 'Práctica Basada en Evidencia',
    description:
      'Todos nuestros tratamientos están fundamentados en la investigación científica más reciente y las mejores prácticas clínicas.',
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
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
              Por Qué Elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
              La Diferencia Physical Care
            </h2>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group bg-white rounded-2xl p-5 flex items-start gap-4 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#1E88A8] group-hover:to-[#35B7C8] transition-all duration-300">
                    <reason.icon
                      size={22}
                      className="text-[#1E88A8] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0E3A4A] mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
