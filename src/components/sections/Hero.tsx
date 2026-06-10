'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ArrowRight, ArrowDown, Award, Users, Activity, ClipboardList } from 'lucide-react';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Trust badges data with icons
const trustBadges = [
  { text: '9+ Años de Experiencia', icon: Award },
  { text: 'Especialistas Certificados', icon: Users },
  { text: 'Expertos en Rehabilitación Deportiva', icon: Activity },
  { text: 'Planes de Tratamiento Personalizados', icon: ClipboardList },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E3A4A]/95 via-[#1E88A8]/85 to-[#35B7C8]/75 z-10" />

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Bottom gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A4A]/50 via-transparent to-transparent z-20" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-8 md:right-24 w-36 h-36 rounded-full bg-white/5 blur-2xl z-10"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-8 md:left-24 w-52 h-52 rounded-full bg-[#35B7C8]/15 blur-3xl z-10"
      />

      {/* Subtle floating medical crosses */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 text-white text-3xl font-light select-none z-10"
      >
        +
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 right-1/4 text-[#35B7C8] text-4xl font-light select-none z-10"
      >
        +
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-30 w-full py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#35B7C8] animate-pulse" />
            Centro de Rehabilitación Líder en Costa Rica
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
          >
            Recupera Tu Movimiento.
            <br />
            <span className="bg-gradient-to-r from-[#5EEAD4] via-[#22D3EE] to-[#38BDF8] bg-clip-text text-transparent">
              Vive Sin Dolor.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-[720px] mx-auto leading-relaxed"
          >
            Fisioterapia personalizada y rehabilitación deportiva con tratamientos
            basados en evidencia para ayudarte a{' '}
            <span className="text-[#5EEAD4] font-medium">moverte sin dolor</span>{' '}
            y volver a lo que amas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
          >
            {/* Primary Button - Agendar Cita */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 min-w-[240px] w-full sm:w-auto max-w-[320px] h-14 sm:h-[56px] px-6 bg-white text-[#0E3A4A] rounded-2xl font-semibold text-base shadow-lg shadow-black/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15 hover:bg-[#F8FAFB] active:translate-y-0 active:shadow-md"
              aria-label="Agendar una cita"
            >
              <Calendar size={20} className="flex-shrink-0" />
              <span>Agendar Cita</span>
              <ArrowRight
                size={18}
                className="flex-shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </a>

            {/* Secondary Button - WhatsApp */}
            <a
              href="https://wa.me/50689680947"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 min-w-[260px] w-full sm:w-auto max-w-[320px] h-14 sm:h-[56px] px-6 bg-[#25D366] text-white rounded-2xl font-semibold text-base shadow-lg shadow-[#25D366]/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/35 hover:bg-[#22C55E] active:translate-y-0 active:shadow-md"
              aria-label="Chatear por WhatsApp"
            >
              <WhatsAppIcon size={20} className="flex-shrink-0" />
              <span>Chatear por WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 ease-out hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#35B7C8]/20 group-hover:scale-105">
                    <IconComponent size={22} className="text-[#5EEAD4]" />
                  </div>
                  <span className="text-white/90 text-sm sm:text-[15px] font-medium text-center leading-snug">
                    {badge.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors duration-300 cursor-pointer"
          aria-label="Desplazarse hacia abajo"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Descubre más</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4F7F8] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
