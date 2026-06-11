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
    <section ref={ref} className="relative py-16 md:py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={28} className="text-[#1E88A8]" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <p className="font-semibold text-[#0E3A4A] mb-1">{stat.label}</p>
              <p className="text-sm text-[#6B7280]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E88A8]/20 to-transparent" />
    </section>
  );
}
