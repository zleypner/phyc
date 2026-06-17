'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Target, Users, Sparkles, Award } from 'lucide-react';

const missionVisionCards = [
  {
    id: 'mission',
    title: 'MISIÓN',
    text: 'Favorecer la mejora de la calidad de vida de nuestros pacientes mediante programas de rehabilitación física, recuperación funcional y tratamientos personalizados, ofreciendo atención basada en evidencia científica, tecnología avanzada y un compromiso genuino con el bienestar integral de cada persona.',
    icon: Heart,
  },
  {
    id: 'vision',
    title: 'VISIÓN',
    text: 'Ser un centro de referencia en fisioterapia y rehabilitación en Costa Rica, reconocido por la excelencia clínica, la innovación tecnológica y la capacidad de transformar positivamente la vida de nuestros pacientes mediante resultados medibles y atención de clase mundial.',
    icon: Target,
  },
];

const impactStats = [
  {
    id: 'patients',
    value: '+1000',
    label: 'Pacientes Atendidos',
    icon: Users,
  },
  {
    id: 'personalized',
    value: '100%',
    label: 'Atención Personalizada',
    icon: Heart,
  },
  {
    id: 'technology',
    value: '',
    label: 'Tecnología Especializada',
    icon: Sparkles,
    isText: true,
  },
];

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-[#FAFBFC]">
      <div className="container max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold mb-6">
            <Award size={16} />
            Nuestra Identidad
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-6">
            Nuestra Misión y Visión
          </h2>
          <p className="text-base md:text-lg text-[#64748B] leading-relaxed max-w-4xl mx-auto">
            En Physical Care Fisioterapia creemos que la rehabilitación va más allá del alivio de los síntomas. Nuestro compromiso es ayudar a cada paciente a recuperar su movilidad, funcionalidad y calidad de vida mediante tratamientos personalizados, tecnología especializada y atención profesional basada en evidencia científica. Trabajamos con cercanía, empatía y excelencia para acompañar a cada persona en su proceso de recuperación.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20 lg:mb-24"
        >
          {missionVisionCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:border-[#1E88A8]/20 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E88A8] to-[#35B7C8]" />

                <div className="p-8 md:p-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E88A8]/10 to-[#5EEAD4]/10 flex items-center justify-center mb-6 group-hover:from-[#1E88A8]/15 group-hover:to-[#5EEAD4]/15 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-[#1E88A8]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#0E3A4A] mb-4 tracking-wide">
                    {card.title}
                  </h3>

                  {/* Text */}
                  <p className="text-[#64748B] leading-relaxed text-sm md:text-base">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] rounded-3xl overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#5EEAD4]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#35B7C8]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
            {/* Impact Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10 md:mb-12 leading-tight">
              Recuperando movimiento,{' '}
              <span className="bg-gradient-to-r from-[#5EEAD4] to-[#35B7C8] bg-clip-text text-transparent">
                mejorando vidas.
              </span>
            </h3>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
            >
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    variants={statVariants}
                    className="text-center"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/10">
                      <IconComponent className="w-8 h-8 text-[#5EEAD4]" strokeWidth={1.5} />
                    </div>

                    {/* Value */}
                    {stat.isText ? (
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        <Sparkles className="w-8 h-8 mx-auto text-[#5EEAD4]" />
                      </div>
                    ) : (
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                    )}

                    {/* Label */}
                    <p className="text-white/80 text-sm md:text-base font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
