'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Shield, FileCheck, Heart, ArrowRight } from 'lucide-react';

// Insurance logos - automatically imported from public/images/insurances
// To add new insurances, simply add the image file to that folder and add the entry here
const insuranceLogos = [
  { src: '/images/insurances/palig.webp', alt: 'PALIG' },
  { src: '/images/insurances/maprelogo.webp', alt: 'MAPFRE' },
];

const benefits = [
  {
    icon: FileCheck,
    title: 'Verificación de cobertura',
    description: 'Confirmamos tu cobertura antes de tu cita cuando sea necesario.',
  },
  {
    icon: Shield,
    title: 'Proceso sencillo',
    description: 'Te orientamos durante todo el proceso para que sea rápido y sin complicaciones.',
  },
  {
    icon: Heart,
    title: 'Atención enfocada en tu recuperación',
    description: 'Nuestro objetivo es que dediques tu energía a recuperarte, mientras nosotros te ayudamos con el proceso administrativo.',
  },
];

export default function InsuranceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section ref={ref} id="seguros" className="py-16 sm:py-20 md:py-28 lg:py-36 bg-[#F8FAFC]">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1E88A8]/8 text-[#1E88A8] text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E88A8]" />
            Seguros Médicos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-[#0E3A4A] mb-4 sm:mb-6 leading-tight tracking-tight">
            Trabajamos con los principales seguros médicos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto">
            Facilitamos el proceso para que puedas concentrarte en tu recuperación. Nuestro equipo puede orientarte y verificar la cobertura disponible para tu tratamiento.
          </p>
        </motion.div>

        {/* Insurance Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-3xl mx-auto mb-14 sm:mb-20 md:mb-24"
        >
          {insuranceLogos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#1E88A8]/20 hover:-translate-y-1">
                <div className="relative w-full h-24 sm:h-28 md:h-32 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 33vw, 280px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-14 sm:mb-20 md:mb-24"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#1E88A8]/20 hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-[#1E88A8] group-hover:to-[#35B7C8] transition-all duration-300">
                <benefit.icon
                  size={24}
                  className="text-[#1E88A8] group-hover:text-white transition-colors sm:w-7 sm:h-7"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0E3A4A] mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0E3A4A] via-[#155E75] to-[#1E88A8] p-6 sm:p-10 md:p-14 lg:p-16"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#5EEAD4]/10 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[#35B7C8]/10 rounded-full blur-[60px] sm:blur-[80px]" />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
              ¿Tienes dudas sobre tu seguro?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8">
              Nuestro equipo puede ayudarte a verificar la cobertura y responder cualquier consulta antes de tu cita.
            </p>
            <a
              href="https://wa.me/50689680947?text=Hola!%20Tengo%20dudas%20sobre%20la%20cobertura%20de%20mi%20seguro%20médico%20para%20tratamientos%20de%20fisioterapia."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white inline-flex items-center gap-2 sm:gap-3"
            >
              Consultar cobertura
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
