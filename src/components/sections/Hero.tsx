'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ArrowRight, ArrowDown, Award, Users, Dumbbell, ClipboardList, Sparkles } from 'lucide-react';

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

// Trust badges data
const trustBadges = [
  { text: '9+ Años de', subtext: 'Experiencia', icon: Award },
  { text: 'Especialistas', subtext: 'Certificados', icon: Users },
  { text: 'Expertos en', subtext: 'Rehabilitación Deportiva', icon: Dumbbell },
  { text: 'Planes de Tratamiento', subtext: 'Personalizados', icon: ClipboardList },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F3D] via-[#0E3A4A] to-[#1E6B7A] z-10" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] z-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-[15%] w-[300px] h-[300px] rounded-full bg-[#35B7C8]/10 blur-[100px] z-10"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-[10%] w-[400px] h-[400px] rounded-full bg-[#5EEAD4]/8 blur-[120px] z-10"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-30 w-full">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
                <Sparkles size={16} className="text-[#5EEAD4]" />
                Fisioterapia Personalizada
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            >
              Recupera tu mejor versión
              <br />
              <span className="text-[#5EEAD4]">sin dolor</span> y vuelve a lo que amas
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Fisioterapia personalizada, rehabilitación deportiva y tratamientos
              basados en evidencia para resultados reales y duraderos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              {/* Primary Button - Agendar Cita */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[240px] h-14 px-8 bg-white text-[#0E3A4A] rounded-2xl font-semibold text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <Calendar size={20} />
                <span>Agendar Cita</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Button - WhatsApp */}
              <a
                href="https://wa.me/50689680947"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[240px] h-14 px-8 bg-[#25D366] text-white rounded-2xl font-semibold text-base shadow-lg transition-all duration-300 hover:bg-[#22C55E] hover:shadow-xl hover:scale-[1.02]"
              >
                <WhatsAppIcon size={20} />
                <span>Chatear por WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto"
            >
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent size={22} className="text-white/70" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/90 text-sm font-medium leading-tight">{badge.text}</p>
                      <p className="text-white/90 text-sm font-medium leading-tight">{badge.subtext}</p>
                    </div>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Descubre</span>
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
