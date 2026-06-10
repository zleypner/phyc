'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Video,
  Calendar,
  FileText,
  HeartHandshake,
  Plane,
} from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Evaluaciones Virtuales',
    description:
      'Comienza tu viaje con una consulta en línea completa antes de viajar a Costa Rica.',
  },
  {
    icon: FileText,
    title: 'Planificación del Tratamiento',
    description:
      'Recibe un plan de tratamiento detallado y cronograma personalizado para la duración de tu visita.',
  },
  {
    icon: Calendar,
    title: 'Coordinación de Citas',
    description:
      'Nos encargamos de toda la programación para maximizar tu rehabilitación durante tu estadía.',
  },
  {
    icon: HeartHandshake,
    title: 'Guía de Recuperación',
    description:
      'Apoyo y orientación integral durante todo tu camino de rehabilitación.',
  },
  {
    icon: Plane,
    title: 'Apoyo de Viaje',
    description:
      'Recomendaciones de alojamiento y transporte cerca de nuestra clínica.',
  },
];

export default function MedicalTourism() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-[#F4F7F8]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] p-8 md:p-12">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Globe size={40} className="text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Bienvenidos Pacientes Internacionales
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Costa Rica es un destino premier para el turismo médico. Combina
                  rehabilitación de clase mundial con la belleza de Centroamérica.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white">60%</div>
                    <div className="text-sm text-white/70">Ahorro en Costos</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-white/70">Personal Bilingüe</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-16 right-16 w-24 h-24 rounded-full bg-white/5"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
              Turismo Médico
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E3A4A] mb-6">
              Tu Destino de Recuperación
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Ya sea que busques rehabilitación especializada no disponible en tu
              país de origen o quieras combinar la recuperación con un escape tranquilo,
              Physical Care brinda apoyo integral para pacientes internacionales.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={22} className="text-[#1E88A8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E3A4A] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#6B7280]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-center"
              >
                Planifica Tu Visita
              </a>
              <a
                href="https://wa.me/50689680947"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Chatea con Nosotros
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
