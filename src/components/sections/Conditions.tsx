'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Activity,
  Bone,
  Brain,
  Footprints,
  Hand,
  HeartPulse,
  PersonStanding,
  Stethoscope,
  Target,
  Zap,
} from 'lucide-react';

const conditions = [
  {
    icon: Bone,
    title: 'Dolor de Espalda',
    description: 'Dolor de espalda crónico o agudo que afecta tus actividades diarias y calidad de vida.',
    symptoms: ['Rigidez lumbar', 'Dolor irradiado a piernas', 'Movilidad limitada'],
    benefit: 'Terapia dirigida para restaurar la salud de la columna y eliminar el dolor.',
  },
  {
    icon: Brain,
    title: 'Dolor de Cuello',
    description: 'Molestias cervicales por mala postura, estrés o lesiones.',
    symptoms: ['Dolores de cabeza', 'Tensión en hombros', 'Rango de movimiento reducido'],
    benefit: 'Terapia manual y ejercicios para aliviar la tensión y mejorar la postura.',
  },
  {
    icon: Activity,
    title: 'Lesiones Deportivas',
    description: 'Lesiones atléticas que requieren rehabilitación especializada.',
    symptoms: ['Esguinces y distensiones', 'Lesiones por uso excesivo', 'Daño de ligamentos'],
    benefit: 'Protocolos de retorno al deporte diseñados para atletas.',
  },
  {
    icon: PersonStanding,
    title: 'Dolor de Rodilla',
    description: 'Molestias articulares que afectan caminar, subir escaleras y movimientos diarios.',
    symptoms: ['Hinchazón', 'Inestabilidad', 'Dificultad para doblar'],
    benefit: 'Fortalecer músculos circundantes y restaurar la función articular.',
  },
  {
    icon: Hand,
    title: 'Dolor de Hombro',
    description: 'Problemas del manguito rotador, hombro congelado o disfunción general del hombro.',
    symptoms: ['Movimiento de brazo limitado', 'Dolor nocturno', 'Debilidad'],
    benefit: 'Restaurar el rango completo de movimiento y fuerza.',
  },
  {
    icon: Zap,
    title: 'Tendinitis',
    description: 'Inflamación de tendones por movimientos repetitivos o uso excesivo.',
    symptoms: ['Dolor localizado', 'Hinchazón', 'Rigidez'],
    benefit: 'Terapias avanzadas para reducir la inflamación y promover la curación.',
  },
  {
    icon: Footprints,
    title: 'Fascitis Plantar',
    description: 'Dolor de talón y pie que afecta tu capacidad de caminar cómodamente.',
    symptoms: ['Dolor de talón matutino', 'Dolor al estar de pie', 'Molestia en el arco'],
    benefit: 'Planes de tratamiento personalizados incluyendo ortesis y terapia dirigida.',
  },
  {
    icon: Stethoscope,
    title: 'Recuperación Post-Cirugía',
    description: 'Rehabilitación después de procedimientos ortopédicos o quirúrgicos.',
    symptoms: ['Movilidad reducida', 'Debilidad muscular', 'Tejido cicatricial'],
    benefit: 'Acelerar la recuperación y recuperar la función completa de forma segura.',
  },
  {
    icon: HeartPulse,
    title: 'Lesiones Musculares',
    description: 'Desgarros, distensiones y disfunciones musculares que requieren tratamiento.',
    symptoms: ['Dolor agudo', 'Moretones', 'Función limitada'],
    benefit: 'Rehabilitación progresiva para restaurar la fuerza muscular.',
  },
  {
    icon: Target,
    title: 'Limitaciones de Movilidad',
    description: 'Restricciones generales de movimiento que afectan la independencia.',
    symptoms: ['Problemas de equilibrio', 'Dificultad para caminar', 'Problemas de coordinación'],
    benefit: 'Mejorar la movilidad funcional y calidad de vida.',
  },
];

export default function Conditions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Show only 8 conditions for balanced 4x2 grid
  const displayConditions = conditions.slice(0, 8);

  return (
    <section ref={ref} id="conditions" className="py-16 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container">
        {/* Section Header - improved spacing and hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E88A8]/8 text-[#1E88A8] text-sm font-semibold mb-4 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E88A8]" />
            Condiciones que Tratamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-[#0E3A4A] mb-6 leading-tight tracking-tight">
            ¿Estás Experimentando Alguno de Estos Problemas?
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-2xl">
            Nos especializamos en tratar una amplia gama de condiciones musculoesqueléticas con
            enfoques basados en evidencia adaptados a tus necesidades únicas.
          </p>
        </motion.div>

        {/* Conditions Grid - balanced 2x4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayConditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 border border-transparent hover:border-[#1E88A8]/20 shadow-[0_2px_12px_rgba(14,58,74,0.04)] hover:shadow-[0_12px_40px_rgba(14,58,74,0.08)] cursor-pointer transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E88A8]/8 to-[#35B7C8]/8 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[#1E88A8] group-hover:to-[#35B7C8] transition-all duration-300">
                  <condition.icon
                    size={26}
                    className="text-[#1E88A8] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#0E3A4A] text-lg mb-3 group-hover:text-[#1E88A8] transition-colors duration-300">
                  {condition.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#64748B] mb-5 leading-relaxed line-clamp-2">
                  {condition.description}
                </p>

                {/* Symptoms preview */}
                <div className="space-y-2.5 mb-5 pb-5 border-b border-[#F1F5F9]">
                  {condition.symptoms.slice(0, 2).map((symptom) => (
                    <p key={symptom} className="text-sm text-[#94A3B8] flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35B7C8] flex-shrink-0" />
                      {symptom}
                    </p>
                  ))}
                </div>

                {/* Learn more link */}
                <span className="text-sm font-semibold text-[#1E88A8] group-hover:text-[#0E3A4A] transition-colors duration-300 flex items-center gap-1.5">
                  Saber más
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - improved visual weight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-[#64748B] mb-6 text-lg">
            ¿No ves tu condición? Tratamos muchas más.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 btn btn-primary cursor-pointer"
          >
            Obtener Consulta Gratuita
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
