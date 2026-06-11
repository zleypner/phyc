'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, Award, Heart } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: 9,
    suffix: '+',
    label: 'Años de Experiencia',
    description: 'Dedicados a la excelencia en rehabilitación',
  },
  {
    icon: Users,
    value: 450,
    suffix: '+',
    label: 'Pacientes Atendidos',
    description: 'Vidas transformadas a través del cuidado',
  },
  {
    icon: Award,
    value: 3,
    suffix: '+',
    label: 'Especialistas Certificados',
    description: 'Equipo experto en rehabilitación',
  },
  {
    icon: Heart,
    value: 98,
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
      {count}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-40 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            Resultados Comprobados
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E3A4A]">
            Números que Respaldan Nuestra Excelencia
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 mb-5 group-hover:scale-110 transition-transform">
                <stat.icon size={30} className="text-[#1E88A8]" />
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E3A4A] mb-3">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <p className="font-semibold text-[#0E3A4A] text-lg mb-2">{stat.label}</p>
              <p className="text-sm text-[#6B7280] max-w-[200px] mx-auto">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1E88A8]/30 to-transparent" />
      </div>
    </section>
  );
}
