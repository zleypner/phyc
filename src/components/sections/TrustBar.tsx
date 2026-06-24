'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, Award, Heart } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: 25,
    suffix: '',
    label: 'Años de Experiencia',
    description: 'Dedicados a la excelencia en rehabilitación',
  },
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Pacientes Atendidos',
    description: 'Vidas transformadas a través del cuidado',
  },
  {
    icon: Award,
    value: 2,
    suffix: '',
    label: 'Especialistas Certificados',
    description: 'Equipo experto en rehabilitación',
  },
  {
    icon: Heart,
    value: 99,
    suffix: '%',
    label: 'Satisfacción del Paciente',
    description: 'Compromiso con tu recuperación',
  },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-36 bg-gradient-to-b from-white via-[#F8FAFB] to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0E3A4A 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#06B8BF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#06B8BF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#06B8BF]/10 to-[#06B8BF]/10 border border-[#06B8BF]/10 text-[#06B8BF] text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#06B8BF] animate-pulse" />
            Resultados Comprobados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#1F2937] leading-[1.15] tracking-[-0.02em] px-2">
            Números que Respaldan
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#06B8BF] to-[#06B8BF] bg-clip-text text-transparent">
              {' '}Nuestra Excelencia
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-6 xl:gap-12 max-w-[1200px] mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative text-center group"
            >
              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
                {/* Outer ring */}
                <div className="absolute inset-0 w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[80px] md:h-[80px] lg:w-[88px] lg:h-[88px] rounded-full border-2 border-[#E5E7EB] group-hover:border-[#06B8BF]/50 transition-colors duration-500" />
                {/* Inner circle with icon */}
                <div className="relative w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[80px] md:h-[80px] lg:w-[88px] lg:h-[88px] rounded-full bg-gradient-to-br from-[#F8FAFB] to-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(94,234,212,0.15)] transition-all duration-500">
                  <stat.icon
                    size={20}
                    className="text-[#06B8BF] sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:text-[#06B8BF] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Decorative dot */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#06B8BF] to-[#06B8BF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Number */}
              <div className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[64px] font-bold text-[#1F2937] leading-none mb-2 sm:mb-3 md:mb-4 tracking-[-0.02em]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>

              {/* Label */}
              <p className="font-semibold text-[#1F2937] text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-[15px] text-[#6B7280] leading-relaxed max-w-[180px] sm:max-w-[200px] lg:max-w-[220px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 md:mt-16 lg:mt-24 h-px bg-gradient-to-r from-transparent via-[#06B8BF]/40 to-transparent max-w-[600px] mx-auto"
        />
      </div>
    </section>
  );
}
