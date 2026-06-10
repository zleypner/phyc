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

  return (
    <section ref={ref} id="conditions" className="section-padding bg-[#F4F7F8]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            Condiciones que Tratamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
            ¿Estás Experimentando Alguno de Estos Problemas?
          </h2>
          <p className="text-lg text-[#6B7280]">
            Nos especializamos en tratar una amplia gama de condiciones musculoesqueléticas con
            enfoques basados en evidencia adaptados a tus necesidades únicas.
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 card-hover cursor-pointer">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#1E88A8] group-hover:to-[#35B7C8] transition-all duration-300">
                  <condition.icon
                    size={24}
                    className="text-[#1E88A8] group-hover:text-white transition-colors"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[#0E3A4A] text-lg mb-2">
                  {condition.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                  {condition.description}
                </p>

                {/* Symptoms preview */}
                <div className="space-y-2 mb-4">
                  {condition.symptoms.slice(0, 2).map((symptom) => (
                    <p key={symptom} className="text-xs text-[#9CA3AF] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35B7C8]" />
                      {symptom}
                    </p>
                  ))}
                </div>

                {/* Learn more link */}
                <span className="text-sm font-medium text-[#1E88A8] group-hover:text-[#35B7C8] transition-colors">
                  Saber más →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#6B7280] mb-4">
            ¿No ves tu condición? Tratamos muchas más. Contáctanos para una consulta.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Obtener Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
