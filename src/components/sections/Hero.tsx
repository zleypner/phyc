'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, CheckCircle, Calendar, Heart } from 'lucide-react';
import Image from 'next/image';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Carousel slides data
const heroSlides = [
  {
    id: 1,
    badge: 'Centro de Rehabilitación Líder en Costa Rica',
    headline: 'Recupera Tu Movimiento.',
    headlineHighlight: 'Vive Sin Dolor.',
    subtitle: 'Fisioterapia personalizada y rehabilitación deportiva con tratamientos basados en evidencia para ayudarte a',
    subtitleHighlight: 'moverte sin dolor',
    subtitleEnd: 'y volver a lo que amas.',
  },
  {
    id: 2,
    badge: 'Rehabilitación Deportiva Especializada',
    headline: 'Vuelve al Deporte.',
    headlineHighlight: 'Más Fuerte que Antes.',
    subtitle: 'Programas de rehabilitación diseñados para atletas que buscan',
    subtitleHighlight: 'recuperación completa',
    subtitleEnd: 'y prevención de futuras lesiones.',
  },
  {
    id: 3,
    badge: 'Tratamiento del Dolor Crónico',
    headline: 'Libérate del Dolor.',
    headlineHighlight: 'Recupera Tu Vida.',
    subtitle: 'Técnicas avanzadas de fisioterapia para tratar el dolor crónico y ayudarte a',
    subtitleHighlight: 'vivir plenamente',
    subtitleEnd: 'cada día.',
  },
  {
    id: 4,
    badge: 'Atención Personalizada',
    headline: 'Tu Bienestar.',
    headlineHighlight: 'Nuestra Prioridad.',
    subtitle: 'Planes de tratamiento individualizados con seguimiento continuo para garantizar',
    subtitleHighlight: 'resultados reales',
    subtitleEnd: 'y duraderos.',
  },
];

// Feature bar items
const featureItems = [
  {
    icon: User,
    title: 'Atención',
    titleLine2: 'Personalizada',
    description: 'Planes adaptados a ti',
  },
  {
    icon: CheckCircle,
    title: 'Profesionales',
    titleLine2: 'Certificados',
    description: 'Experiencia y confianza',
  },
  {
    icon: Calendar,
    title: 'Seguimiento',
    titleLine2: 'Continuo',
    description: 'Acompañamiento real',
  },
  {
    icon: Heart,
    title: 'Resultados',
    titleLine2: 'Comprobados',
    description: 'Tu bienestar, nuestra meta',
  },
];

// Auto-play interval in milliseconds
const AUTOPLAY_INTERVAL = 8000;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(3); // Start on slide 4 (index 3)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Go to specific slide
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentData = heroSlides[currentSlide];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ============================================
          BACKGROUND SYSTEM - Premium depth layers
          ============================================ */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Base gradient - Dark teal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E38] via-[#0E3D4A] to-[#156378] z-0" />

        {/* Radial gradient for depth */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(53, 183, 200, 0.12) 0%, transparent 60%)',
          }}
        />

        {/* Top light wash */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse 80% 30% at 30% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      {/* ============================================
          DECORATIVE PLANT ELEMENTS
          ============================================ */}
      {/* Left bottom plant */}
      <div className="absolute bottom-0 left-0 z-20 pointer-events-none opacity-60">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="hidden lg:block">
          <path d="M20 400 C20 300, 80 250, 60 150 C40 50, 100 0, 100 0" stroke="rgba(94, 234, 212, 0.3)" strokeWidth="2" fill="none"/>
          <path d="M60 150 C80 130, 120 140, 100 100" stroke="rgba(94, 234, 212, 0.25)" strokeWidth="1.5" fill="none"/>
          <path d="M60 150 C40 130, 20 140, 30 100" stroke="rgba(94, 234, 212, 0.25)" strokeWidth="1.5" fill="none"/>
          <path d="M80 220 C100 200, 140 210, 120 170" stroke="rgba(94, 234, 212, 0.2)" strokeWidth="1.5" fill="none"/>
          <path d="M80 220 C60 200, 30 210, 50 170" stroke="rgba(94, 234, 212, 0.2)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      {/* Right bottom plant */}
      <div className="absolute bottom-0 right-0 z-20 pointer-events-none opacity-50">
        <svg width="250" height="450" viewBox="0 0 250 450" fill="none" className="hidden lg:block">
          <path d="M200 450 C200 350, 150 280, 180 180 C210 80, 160 20, 150 0" stroke="rgba(94, 234, 212, 0.25)" strokeWidth="2" fill="none"/>
          <path d="M180 180 C150 160, 100 170, 130 120" stroke="rgba(94, 234, 212, 0.2)" strokeWidth="1.5" fill="none"/>
          <path d="M180 180 C210 160, 240 170, 220 120" stroke="rgba(94, 234, 212, 0.2)" strokeWidth="1.5" fill="none"/>
          <ellipse cx="130" cy="100" rx="30" ry="50" fill="rgba(94, 234, 212, 0.08)" transform="rotate(-20 130 100)"/>
          <ellipse cx="220" cy="100" rx="25" ry="45" fill="rgba(94, 234, 212, 0.06)" transform="rotate(20 220 100)"/>
        </svg>
      </div>

      {/* Floating ambient elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[20%] right-[25%] w-[400px] h-[400px] rounded-full bg-[#35B7C8]/10 blur-[120px] z-10"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-[30%] left-[5%] w-[300px] h-[300px] rounded-full bg-[#5EEAD4]/8 blur-[100px] z-10"
      />

      {/* ============================================
          MAIN CONTENT - Split Layout
          ============================================ */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 min-h-screen flex flex-col"
      >
        {/* Main content area */}
        <div className="flex-1 flex items-center pt-24 sm:pt-28 md:pt-32 pb-48 sm:pb-56 md:pb-64 lg:pb-72">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Column - Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start text-left"
                >
                  {/* Badge */}
                  <div className="mb-6 sm:mb-8">
                    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white/90 text-[13px] sm:text-sm font-medium tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
                      <span>{currentData.badge}</span>
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8">
                    {currentData.headline}
                    <br />
                    <span
                      className="bg-gradient-to-r from-[#5EEAD4] via-[#67E8F9] to-[#5EEAD4] bg-clip-text text-transparent"
                      style={{ backgroundSize: '200% 100%' }}
                    >
                      {currentData.headlineHighlight}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="max-w-[520px] text-[16px] sm:text-[17px] lg:text-[18px] text-white/70 leading-[1.7] mb-8 sm:mb-10">
                    {currentData.subtitle}{' '}
                    <span className="text-[#5EEAD4] font-medium">{currentData.subtitleHighlight}</span>{' '}
                    {currentData.subtitleEnd}
                  </p>

                  {/* CTA Section with Social Proof */}
                  <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/50689680947"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2.5 h-[52px] sm:h-[56px] px-7 sm:px-8 bg-[#25D366] text-white rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] active:translate-y-0 active:scale-[0.98]"
                      aria-label="Agendar cita por WhatsApp"
                    >
                      <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                      <span>Agendar Cita</span>
                    </a>

                    {/* Social Proof - Patient Avatars */}
                    <div className="flex items-center gap-4">
                      {/* Stacked Avatars */}
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0E3D4A] overflow-hidden bg-gradient-to-br from-[#5EEAD4]/30 to-[#35B7C8]/30">
                          <Image
                            src="/specialists/yamilah.png"
                            alt="Paciente"
                            width={44}
                            height={44}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0E3D4A] overflow-hidden bg-gradient-to-br from-[#5EEAD4]/30 to-[#35B7C8]/30">
                          <Image
                            src="/specialists/enmanuel.png"
                            alt="Paciente"
                            width={44}
                            height={44}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0E3D4A] overflow-hidden bg-gradient-to-br from-[#5EEAD4]/30 to-[#35B7C8]/30 flex items-center justify-center">
                          <span className="text-white/80 text-xs font-medium">+</span>
                        </div>
                      </div>
                      {/* Text */}
                      <div className="flex flex-col">
                        <span className="text-[#5EEAD4] font-semibold text-[15px] sm:text-[16px]">+500 pacientes</span>
                        <span className="text-white/60 text-[13px] sm:text-[14px]">Confían en nosotros</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right Column - Hero Image */}
              <div className="relative hidden lg:flex items-center justify-center">
                {/* Circular gradient background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[500px] h-[500px] xl:w-[580px] xl:h-[580px] rounded-full bg-gradient-to-br from-[#35B7C8]/30 via-[#5EEAD4]/20 to-transparent blur-sm" />
                </div>

                {/* Secondary glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[450px] h-[450px] xl:w-[520px] xl:h-[520px] rounded-full bg-gradient-to-tr from-[#5EEAD4]/15 to-[#35B7C8]/25 blur-md" />
                </div>

                {/* Hero Image */}
                <div className="relative z-10 w-full max-w-[550px] xl:max-w-[620px]">
                  <Image
                    src="/hero-woman.png"
                    alt="Mujer relajada disfrutando de bienestar"
                    width={620}
                    height={700}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Right side decorative leaves */}
                <div className="absolute -right-10 bottom-0 z-5 opacity-40">
                  <svg width="180" height="350" viewBox="0 0 180 350" fill="none">
                    <path d="M100 350 C120 280, 80 220, 120 140 C160 60, 100 0, 80 0" stroke="rgba(94, 234, 212, 0.4)" strokeWidth="2" fill="none"/>
                    <ellipse cx="120" cy="80" rx="40" ry="60" fill="rgba(94, 234, 212, 0.1)" transform="rotate(25 120 80)"/>
                    <ellipse cx="80" cy="160" rx="35" ry="55" fill="rgba(94, 234, 212, 0.08)" transform="rotate(-15 80 160)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            FEATURE BAR - Bottom curved section
            ============================================ */}
        <div className="absolute bottom-0 left-0 right-0 z-40">
          {/* Wave/Curve SVG */}
          <div className="relative">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-16 sm:h-20 md:h-24"
            >
              <path
                d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                fill="url(#wave-gradient)"
                fillOpacity="0.95"
              />
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0E3D4A" />
                  <stop offset="50%" stopColor="#156378" />
                  <stop offset="100%" stopColor="#0E3D4A" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Feature Bar Container */}
          <div className="bg-gradient-to-r from-[#0E3D4A] via-[#156378]/90 to-[#0E3D4A] backdrop-blur-xl">
            <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {featureItems.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#5EEAD4]/10 border border-[#5EEAD4]/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4]" strokeWidth={1.5} />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col">
                      <span className="text-white font-semibold text-[14px] sm:text-[15px] leading-tight">
                        {feature.title}
                        <br />
                        {feature.titleLine2}
                      </span>
                      <span className="text-white/50 text-[12px] sm:text-[13px] mt-1">{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation */}
              <div className="flex items-center justify-center gap-4 sm:gap-5">
                {/* Previous button */}
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.08] backdrop-blur-sm border border-[#5EEAD4]/30 flex items-center justify-center text-[#5EEAD4]/70 hover:text-[#5EEAD4] hover:bg-white/[0.12] hover:border-[#5EEAD4]/50 transition-all duration-300 active:scale-95"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft size={18} strokeWidth={2} />
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-2.5">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative h-2.5 rounded-full transition-all duration-500 ${
                        index === currentSlide
                          ? 'w-2.5 bg-[#5EEAD4]'
                          : 'w-2.5 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Ir a slide ${index + 1}`}
                    >
                      {/* Active ring */}
                      {index === currentSlide && (
                        <span className="absolute -inset-1 rounded-full border border-[#5EEAD4]/50" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Next button */}
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#5EEAD4] flex items-center justify-center text-[#0E3D4A] hover:bg-[#5EEAD4]/90 transition-all duration-300 active:scale-95"
                  aria-label="Siguiente slide"
                >
                  <ChevronRight size={18} strokeWidth={2} />
                </button>
              </div>

              {/* Slide counter */}
              <div className="text-center mt-4 text-white/40 text-sm font-medium tracking-wide">
                <span className="text-white/70">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="mx-2">/</span>
                <span>{String(heroSlides.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
