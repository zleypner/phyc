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
    <section ref={ref} className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-b from-white via-[#F8FAFB] to-white overflow-hidden">
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5EEAD4]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#1E88A8]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E88A8]/10 to-[#5EEAD4]/10 border border-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
            Resultados Comprobados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em]">
            Números que Respaldan
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] bg-clip-text text-transparent">
              {' '}Nuestra Excelencia
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-6 xl:gap-12 max-w-[1200px] mx-auto">
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
              <div className="relative inline-flex items-center justify-center mb-6 md:mb-8">
                {/* Outer ring */}
                <div className="absolute inset-0 w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-full border-2 border-[#E5E7EB] group-hover:border-[#5EEAD4]/50 transition-colors duration-500" />
                {/* Inner circle with icon */}
                <div className="relative w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-full bg-gradient-to-br from-[#F8FAFB] to-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(94,234,212,0.15)] transition-all duration-500">
                  <stat.icon
                    size={28}
                    className="text-[#1E88A8] md:w-8 md:h-8 group-hover:text-[#35B7C8] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Decorative dot */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#5EEAD4] to-[#35B7C8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Number */}
              <div className="text-[42px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold text-[#0E3A4A] leading-none mb-3 md:mb-4 tracking-[-0.02em]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>

              {/* Label */}
              <p className="font-semibold text-[#0E3A4A] text-base md:text-lg mb-2">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-sm md:text-[15px] text-[#6B7280] leading-relaxed max-w-[220px] mx-auto">
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
          className="mt-16 md:mt-20 lg:mt-24 h-px bg-gradient-to-r from-transparent via-[#5EEAD4]/40 to-transparent max-w-[600px] mx-auto"
        />
      </div>
    </section>
  );
}
