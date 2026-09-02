'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Award,
  GraduationCap,
  Building2,
  Globe,
  Zap,
  Target,
  Activity,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

// WhatsApp SVG Icon (reutilizado del Hero existente)
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ============================================
// HERO SECTION
// ============================================
function PersonalBrandHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const credentials = [
    { label: 'STORZ MEDICAL Latam', highlight: true },
    { label: 'Ponente Internacional ISMST', highlight: true },
    { label: '+14 años de experiencia clínica', highlight: false },
    { label: 'Máster en Rehabilitación Deportiva', highlight: false },
  ];

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen z-10">
      {/* Background System */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E38] via-[#0E3D4A] to-[#156378] z-0" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(53, 183, 200, 0.12) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse 80% 30% at 30% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 z-20 pointer-events-none opacity-60">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="hidden lg:block">
          <path d="M20 400 C20 300, 80 250, 60 150 C40 50, 100 0, 100 0" stroke="rgba(94, 234, 212, 0.3)" strokeWidth="2" fill="none" />
          <path d="M60 150 C80 130, 120 140, 100 100" stroke="rgba(94, 234, 212, 0.25)" strokeWidth="1.5" fill="none" />
          <path d="M60 150 C40 130, 20 140, 30 100" stroke="rgba(94, 234, 212, 0.25)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 z-20 pointer-events-none opacity-50">
        <svg width="250" height="450" viewBox="0 0 250 450" fill="none" className="hidden lg:block">
          <path d="M200 450 C200 350, 150 280, 180 180 C210 80, 160 20, 150 0" stroke="rgba(94, 234, 212, 0.25)" strokeWidth="2" fill="none" />
          <ellipse cx="130" cy="100" rx="30" ry="50" fill="rgba(94, 234, 212, 0.08)" transform="rotate(-20 130 100)" />
        </svg>
      </div>

      {/* Floating ambient elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[10%] sm:right-[25%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#35B7C8]/10 blur-[80px] sm:blur-[100px] lg:blur-[120px] z-10"
      />

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-30 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-32 md:pb-40">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-visible">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start text-left"
              >
                {/* Mobile Photo */}
                <div className="lg:hidden mb-8 flex justify-center w-full">
                  <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden border-4 border-[#06B8BF]/30 shadow-2xl">
                    <Image
                      src="/images/emma-personalbrand/Enmanuel-Li.jpeg"
                      alt="Lic. Enmanuel Li Torres"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Name Badge */}
                <div className="mb-6 sm:mb-8 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white/90 text-[13px] sm:text-sm font-medium tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#06B8BF] animate-pulse flex-shrink-0" />
                    <span>Fisioterapeuta · TF-277</span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#06B8BF]/15 border border-[#06B8BF]/30 text-[#5EEAD4] text-[12px] sm:text-[13px] font-semibold tracking-wide">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Referente Internacional</span>
                  </span>
                  <span className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#06B8BF]/15 border border-[#06B8BF]/30 text-[#5EEAD4] text-[12px] sm:text-[13px] font-semibold tracking-wide">
                    <Award className="w-3.5 h-3.5" />
                    <span>ISMST Mundial</span>
                  </span>
                  <span className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#06B8BF]/15 border border-[#06B8BF]/30 text-[#5EEAD4] text-[12px] sm:text-[13px] font-semibold tracking-wide">
                    <Globe className="w-3.5 h-3.5" />
                    <span>STORZ MEDICAL Latam</span>
                  </span>
                  <span className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#FCD34D] text-[12px] sm:text-[13px] font-semibold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ponente 2026 · Colombia</span>
                  </span>
                </div>

                {/* Name */}
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[60px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-6">
                  Lic. Enmanuel
                  <br />
                  <span className="bg-gradient-to-r from-[#06B8BF] via-[#5EEAD4] to-[#06B8BF] bg-clip-text text-transparent" style={{ backgroundSize: '200% 100%' }}>
                    Li Torres
                  </span>
                </h1>

                {/* Headline */}
                <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white/90 font-medium leading-[1.4] mb-4 sm:mb-6 max-w-[560px]">
                  Pionero en ondas de choque y EMTT en Costa Rica. Referente clínico en Latinoamérica.
                </p>

                {/* Subtitle */}
                <p className="max-w-[540px] text-[15px] sm:text-[16px] lg:text-[17px] text-white/65 leading-[1.7] mb-8 sm:mb-10">
                  Capacitador internacional, ponente en congresos mundiales y Key Opinion Leader de STORZ MEDICAL para la región. Más de una década transformando el abordaje de lesiones persistentes con tecnología de vanguardia.
                </p>

                {/* Credentials Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-[480px]">
                  {credentials.map((cred, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl ${
                        cred.highlight
                          ? 'bg-[#06B8BF]/15 border border-[#06B8BF]/25'
                          : 'bg-white/[0.05] border border-white/[0.08]'
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${cred.highlight ? 'text-[#06B8BF]' : 'text-white/50'}`} strokeWidth={2} />
                      <span className={`text-[12px] sm:text-[13px] font-medium leading-tight ${cred.highlight ? 'text-[#06B8BF]' : 'text-white/70'}`}>
                        {cred.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20valoración%20con%20el%20Lic.%20Enmanuel%20Li."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2.5 h-[52px] sm:h-[56px] px-6 sm:px-8 bg-[#25D366] text-white rounded-full font-semibold text-[15px] sm:text-[16px] shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] active:translate-y-0 active:scale-[0.98]"
                    aria-label="Agendar valoración por WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                    <span>Agendar valoración</span>
                  </a>

                  <a
                    href="#enfoque"
                    className="group inline-flex items-center justify-center gap-2 h-[52px] sm:h-[56px] px-6 sm:px-8 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white rounded-full font-semibold text-[15px] sm:text-[16px] transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.25]"
                  >
                    <span>Conocer mi enfoque</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Photo placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden lg:flex items-center justify-center overflow-visible"
              >
                {/* Circular gradient background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[440px] h-[440px] xl:w-[500px] xl:h-[500px] rounded-full bg-gradient-to-br from-[#06B8BF]/25 via-[#06B8BF]/15 to-transparent blur-sm" />
                </div>

                {/* Photo container */}
                <div className="relative z-10 w-[380px] h-[380px] xl:w-[440px] xl:h-[440px] rounded-full overflow-hidden border-4 border-[#06B8BF]/20 shadow-2xl bg-gradient-to-br from-[#0E3D4A] to-[#156378]">
                  <Image
                    src="/images/emma-personalbrand/Enmanuel-Li.jpeg"
                    alt="Lic. Enmanuel Li Torres - Fisioterapeuta especializado en ondas de choque"
                    width={440}
                    height={440}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Floating badge - KOL */}
                <div className="absolute right-0 top-[20%] translate-x-[30%] bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06B8BF] to-[#1E88A8] flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#64748B] font-medium uppercase tracking-wider">Key Opinion Leader</p>
                      <p className="text-[13px] font-bold text-[#0E3A4A]">STORZ MEDICAL</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - Speaker */}
                <div className="absolute right-0 bottom-[15%] translate-x-[20%] bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#64748B] font-medium uppercase tracking-wider">Ponente 2026</p>
                      <p className="text-[13px] font-bold text-[#0E3A4A]">Colombia</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - ISMST */}
                <div className="absolute left-0 top-[40%] -translate-x-[30%] bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E88A8] to-[#0E3A4A] flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#64748B] font-medium uppercase tracking-wider">Miembro Activo</p>
                      <p className="text-[13px] font-bold text-[#0E3A4A]">ISMST Mundial</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================
// INTRODUCTION SECTION
// ============================================
function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-white relative z-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[850px] mx-auto text-center"
        >
          <span className="section-eyebrow mb-4 block">Director de Physical Care Fisioterapia</span>
          <h2 className="mb-6">
            El fisioterapeuta que entrena a otros fisioterapeutas
          </h2>
          <p className="text-[17px] sm:text-[18px] md:text-[19px] text-[#334155] leading-[1.8] mb-4">
            Fisioterapeuta colegiado <span className="font-semibold text-[#1E88A8]">TF-277</span> con más de 14 años de experiencia clínica. Como <span className="font-semibold text-[#1E88A8]">Key Opinion Leader de STORZ MEDICAL</span>, capacita profesionales de salud en Costa Rica, Colombia, Panamá y toda Latinoamérica.
          </p>
          <p className="text-[16px] sm:text-[17px] text-[#475569] leading-[1.8]">
            Ponente invitado en congresos internacionales de la ISMST, comparte su expertise en ondas de choque focales, radiales y terapia EMTT con la comunidad científica global. Cuando otros profesionales buscan dominar estas tecnologías, recurren a él.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// GALLERY SECTION
// ============================================
function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const topImages = [
    {
      src: '/images/emma-personalbrand/4.jpeg',
      alt: 'Lic. Enmanuel Li - Valoración clínica',
      caption: 'Valoración clínica',
    },
    {
      src: '/images/emma-personalbrand/5.jpeg',
      alt: 'Lic. Enmanuel Li - Ondas de choque',
      caption: 'Ondas de choque',
    },
    {
      src: '/images/emma-personalbrand/2.jpeg',
      alt: 'Lic. Enmanuel Li - Tratamiento con tecnología avanzada',
      caption: 'Tecnología de vanguardia',
    },
  ];

  const featuredImage = {
    src: '/images/emma-personalbrand/congreso.jpeg',
    alt: 'Lic. Enmanuel Li en congreso internacional',
    caption: 'Congreso Internacional ISMST',
  };

  return (
    <section ref={ref} className="section-padding bg-[#F4F7F8]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="section-eyebrow">Galería</span>
          <h2>En acción</h2>
        </motion.div>

        <div className="max-w-[1000px] mx-auto space-y-4 lg:space-y-6">
          {/* Top row - 3 square images */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {topImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-[13px] sm:text-[14px] font-medium">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - Featured wide image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative group overflow-hidden rounded-2xl aspect-[21/9]"
          >
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-[14px] sm:text-[16px] font-medium">{featuredImage.caption}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SPECIALIZATION SECTION
// ============================================
function SpecializationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const conditions = [
    'Tendinopatías',
    'Dolor musculoesquelético persistente',
    'Lesiones deportivas',
    'Lesiones recurrentes',
    'Casos sin respuesta a tratamientos convencionales',
  ];

  const approach = [
    { icon: Target, label: 'Valoración especializada' },
    { icon: Zap, label: 'Ondas de choque' },
    { icon: Activity, label: 'EMTT' },
    { icon: Sparkles, label: 'Fisioterapia' },
    { icon: CheckCircle, label: 'Rehabilitación funcional' },
  ];

  return (
    <section ref={ref} id="enfoque" className="section-padding bg-[#F4F7F8]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="section-eyebrow">Enfoque Clínico</span>
          <h2>Cuando una lesión persiste, el abordaje debe ir más allá.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-[1100px] mx-auto">
          {/* Conditions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card card-lg"
          >
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0E3A4A] mb-6">
              Enfoque especializado en:
            </h3>
            <ul className="space-y-4">
              {conditions.map((condition, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#06B8BF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#06B8BF]" strokeWidth={2} />
                  </div>
                  <span className="text-[15px] sm:text-[16px] text-[#334155] leading-relaxed">{condition}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="card card-lg bg-gradient-to-br from-[#0E3A4A] to-[#156378]"
          >
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-white mb-6">
              Estrategia terapéutica integrada:
            </h3>
            <div className="space-y-4">
              {approach.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#06B8BF]/20 border border-[#06B8BF]/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#06B8BF]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[15px] sm:text-[16px] text-white/90 font-medium">{item.label}</span>
                  {index < approach.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#06B8BF]/50 hidden sm:block ml-auto" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-6 pt-6 border-t border-white/10 text-[14px] text-white/60 leading-relaxed">
              Las tecnologías no se utilizan de forma aislada, sino dentro de una estrategia terapéutica completa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TECHNOLOGY SECTION
// ============================================
function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mainTechnologies = [
    {
      title: 'Ondas de Choque Focales',
      description: 'Tecnología de alta precisión para el tratamiento de tendinopatías y calcificaciones.',
      priority: true,
    },
    {
      title: 'Ondas de Choque Radiales',
      description: 'Tratamiento de puntos gatillo, fascitis plantar y condiciones musculoesqueléticas.',
      priority: true,
    },
    {
      title: 'EMTT · Magnetolith',
      description: 'Terapia electromagnética de alta intensidad para regeneración tisular profunda.',
      priority: true,
    },
  ];

  const additionalServices = [
    'Fisioterapia musculoesquelética',
    'Rehabilitación deportiva',
    'Terapia manual',
    'Tracción y descompresión vertebral',
    'Plantillas ortopédicas',
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="section-eyebrow">Tecnología Avanzada</span>
          <h2>Tecnología aplicada a rehabilitación</h2>
          <p className="section-subtitle">
            Equipamiento de última generación STORZ MEDICAL para el tratamiento de lesiones musculoesqueléticas.
          </p>
        </motion.div>

        {/* Main Technologies - Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16 max-w-[1100px] mx-auto">
          {mainTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card card-hover text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#06B8BF]/10 to-[#1E88A8]/10 border border-[#06B8BF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-[#1E88A8]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0E3A4A] mb-3">{tech.title}</h3>
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3 max-w-[800px] mx-auto"
        >
          {additionalServices.map((service, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F4F7F8] border border-[rgba(15,23,42,0.06)] text-[14px] font-medium text-[#334155]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E88A8]" />
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// INTERNATIONAL AUTHORITY SECTION
// ============================================
function InternationalAuthoritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-[#0E3A4A] via-[#0E3D4A] to-[#156378] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06B8BF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#35B7C8]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06B8BF]/15 border border-[#06B8BF]/25 text-[#06B8BF] text-[13px] sm:text-sm font-semibold mb-6 tracking-wide">
            <Globe className="w-4 h-4" />
            Respaldo Internacional
          </span>
          <h2 className="text-white mb-4">La voz de referencia en ondas de choque para Latinoamérica</h2>
          <p className="text-[16px] sm:text-[17px] text-white/60 max-w-[600px] mx-auto">
            Reconocido por las organizaciones más prestigiosas del mundo en terapia de ondas de choque y tecnologías de rehabilitación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[900px] mx-auto">
          {/* ISMST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.08] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6 sm:p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#06B8BF]/20 border border-[#06B8BF]/30 flex items-center justify-center mb-5">
              <Award className="w-7 h-7 text-[#06B8BF]" />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-3">Miembro Activo ISMST</h3>
            <p className="text-[14px] sm:text-[15px] text-white/70 leading-relaxed mb-4">
              International Society for Medical Shockwave Treatment. La máxima autoridad científica mundial en terapia de ondas de choque.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] font-medium">Bogotá 2025</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] font-medium">Madrid 2026</span>
            </div>
          </motion.div>

          {/* KOL STORZ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.08] backdrop-blur-md border border-white/[0.1] rounded-2xl p-6 sm:p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#06B8BF]/20 border border-[#06B8BF]/30 flex items-center justify-center mb-5">
              <Globe className="w-7 h-7 text-[#06B8BF]" />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-3">Key Opinion Leader · STORZ MEDICAL</h3>
            <p className="text-[14px] sm:text-[15px] text-white/70 leading-relaxed mb-4">
              Designado por el fabricante líder mundial para capacitar profesionales de salud en ondas de choque, Magnetolith y EMTT en toda la región.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] font-medium">Costa Rica</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] font-medium">Colombia</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-[12px] font-medium">Panamá</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// INTERNATIONAL EXPERIENCE TIMELINE
// ============================================
function InternationalExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const events = [
    {
      year: '2025',
      title: 'Congreso Mundial ISMST',
      location: 'Bogotá, Colombia',
      description: 'Asistente al Congreso Mundial de Ondas de Choque en Medicina',
      badge: 'Asistente',
    },
    {
      year: '2026',
      title: 'Congreso Mundial ISMST',
      location: 'Madrid, España',
      description: 'Participación en el congreso científico más importante del mundo en ondas de choque',
      badge: 'Confirmado',
    },
    {
      year: '2026',
      title: 'Ponente Principal',
      location: 'Barranquilla, Colombia',
      description: 'Congreso ISMST & OCC — Invitación especial como speaker internacional',
      highlight: 'Más allá del dolor: mecanotransducción multimodal en condiciones musculoesqueléticas persistentes.',
      badge: 'Speaker',
      featured: true,
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="section-eyebrow">Agenda Internacional</span>
          <h2>Donde los expertos se reúnen, él está presente</h2>
          <p className="section-subtitle">
            Participación activa en los congresos científicos más importantes del mundo en terapia de ondas de choque.
          </p>
        </motion.div>

        <div className="max-w-[700px] mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              {index < events.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-[#06B8BF] to-[#06B8BF]/20" />
              )}

              {/* Timeline dot */}
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center ${(event as { featured?: boolean }).featured ? 'bg-[#F59E0B]' : 'bg-[#06B8BF]'}`}>
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Content */}
              <div className={`rounded-2xl p-5 sm:p-6 ml-4 ${(event as { featured?: boolean }).featured ? 'bg-gradient-to-br from-[#0E3A4A] to-[#156378] border border-[#06B8BF]/20' : 'bg-[#F4F7F8]'}`}>
                <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[13px] font-bold ${(event as { featured?: boolean }).featured ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : 'bg-[#06B8BF]/10 text-[#06B8BF]'}`}>{event.year}</span>
                  <span className={`text-[13px] ${(event as { featured?: boolean }).featured ? 'text-white/60' : 'text-[#64748B]'}`}>{event.location}</span>
                  {event.badge && (
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                      event.badge === 'Speaker'
                        ? 'bg-[#F59E0B] text-white'
                        : (event as { featured?: boolean }).featured
                          ? 'bg-white/10 text-white/80'
                          : 'bg-[#1E88A8]/10 text-[#1E88A8]'
                    }`}>
                      {event.badge}
                    </span>
                  )}
                </div>
                <h3 className={`text-[17px] sm:text-[18px] font-semibold mb-2 ${(event as { featured?: boolean }).featured ? 'text-white' : 'text-[#0E3A4A]'}`}>{event.title}</h3>
                <p className={`text-[14px] sm:text-[15px] ${(event as { featured?: boolean }).featured ? 'text-white/70' : 'text-[#475569]'}`}>{event.description}</p>
                {event.highlight && (
                  <p className={`mt-3 pt-3 border-t text-[13px] sm:text-[14px] font-medium italic ${(event as { featured?: boolean }).featured ? 'border-white/10 text-[#5EEAD4]' : 'border-[rgba(15,23,42,0.06)] text-[#1E88A8]'}`}>
                    &ldquo;{event.highlight}&rdquo;
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// EDUCATION SECTION
// ============================================
function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      icon: GraduationCap,
      title: 'Licenciatura en Terapia Física',
      institution: 'Universidad Santa Paula',
    },
    {
      icon: Award,
      title: 'Máster en Rehabilitación Deportiva',
      institution: 'Universidad de Salamanca, España',
    },
    {
      icon: CheckCircle,
      title: 'Formación en Terapia Manual Ortopédica',
      institution: 'Certificación especializada',
    },
  ];

  const stats = [
    { value: '+14', label: 'años de experiencia profesional' },
    { value: '+10', label: 'años con ondas de choque' },
  ];

  return (
    <section ref={ref} className="section-padding bg-[#F4F7F8]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="section-eyebrow">Formación Académica</span>
          <h2>Preparación continua</h2>
        </motion.div>

        <div className="max-w-[900px] mx-auto">
          {/* Education cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 lg:mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card card-sm text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#1E88A8]/10 border border-[#1E88A8]/20 flex items-center justify-center">
                  <edu.icon className="w-6 h-6 text-[#1E88A8]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#0E3A4A] mb-2 leading-snug">{edu.title}</h3>
                <p className="text-[13px] sm:text-[14px] text-[#64748B]">{edu.institution}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="text-[36px] sm:text-[44px] font-bold text-[#1E88A8]">{stat.value}</span>
                <p className="text-[14px] sm:text-[15px] text-[#475569] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROFESSIONAL LEADERSHIP SECTION
// ============================================
function ProfessionalLeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const roles = [
    {
      icon: Building2,
      title: 'Director',
      organization: 'Physical Care Fisioterapia',
      current: true,
    },
    {
      icon: Award,
      title: 'Coordinador de Fisioterapia',
      organization: 'Federación Costarricense de Baloncesto',
      period: '2018–2022',
    },
    {
      icon: GraduationCap,
      title: 'Coordinador del Departamento de Fisioterapia',
      organization: 'UNED',
      period: '2014–2016',
    },
    {
      icon: Building2,
      title: 'Propietario',
      organization: 'NF Médica Costa Rica',
      current: true,
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <span className="section-eyebrow">Trayectoria Profesional</span>
          <h2>Liderazgo y experiencia</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[800px] mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#F4F7F8] border border-[rgba(15,23,42,0.04)]"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(15,23,42,0.06)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <role.icon className="w-5 h-5 text-[#1E88A8]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#0E3A4A]">{role.title}</h3>
                  {role.current && (
                    <span className="px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[11px] font-semibold">Actual</span>
                  )}
                </div>
                <p className="text-[14px] text-[#475569]">{role.organization}</p>
                {role.period && <p className="text-[13px] text-[#94A3B8] mt-1">{role.period}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PHILOSOPHY SECTION
// ============================================
function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding-lg bg-[#F4F7F8] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06B8BF]/3 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[700px] mx-auto text-center"
        >
          <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#1E88A8] to-[#06B8BF] flex items-center justify-center shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#0E3A4A] leading-[1.2] mb-6">
            &ldquo;No se trata únicamente de tratar dónde duele.&rdquo;
          </h2>

          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#475569] leading-[1.8]">
            Se trata de comprender por qué una lesión persiste, evaluar cada caso y construir una estrategia que combine conocimiento clínico, tecnología y rehabilitación funcional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// FINAL CTA SECTION
// ============================================
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-[#0E3A4A] via-[#0E3D4A] to-[#156378] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#06B8BF]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#35B7C8]/6 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[600px] mx-auto text-center"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white leading-[1.2] mb-5">
            Tu recuperación empieza con una buena valoración.
          </h2>

          <p className="text-[16px] sm:text-[17px] text-white/70 leading-relaxed mb-8 sm:mb-10">
            Agendá una valoración especializada en Physical Care Fisioterapia.
          </p>

          <a
            href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20valoración%20con%20el%20Lic.%20Enmanuel%20Li."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 h-[56px] sm:h-[60px] px-8 sm:px-10 bg-[#25D366] text-white rounded-full font-semibold text-[16px] sm:text-[17px] shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(37,211,102,0.5)] active:translate-y-0"
            aria-label="Agendar valoración por WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
            <span>Agendar por WhatsApp</span>
          </a>

          <p className="mt-6 text-[14px] text-white/50">
            +506 8968-0947
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT INFO SECTION
// ============================================
function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Ubicación',
      value: '150 metros norte de Perimercados de Vargas Araya',
      subvalue: 'San Pedro de Montes de Oca, Costa Rica',
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'Lunes a viernes: 10:00 a.m. – 8:00 p.m.',
      subvalue: 'Sábados: 8:00 a.m. – 1:00 p.m.',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '8968-0947 (WhatsApp)',
      subvalue: '2253-1860',
    },
    {
      icon: Mail,
      label: 'Correo',
      value: 'terapiafisicali@gmail.com',
      link: 'mailto:terapiafisicali@gmail.com',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2>Contacto</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-[1100px] mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border-2 border-[#06B8BF]/30 flex items-center justify-center">
                <info.icon className="w-6 h-6 text-[#06B8BF]" strokeWidth={1.5} />
              </div>
              <p className="text-[11px] sm:text-[12px] text-[#64748B] uppercase tracking-[0.15em] font-medium mb-3">{info.label}</p>
              {info.link ? (
                <a href={info.link} className="text-[15px] sm:text-[16px] text-[#1E88A8] font-medium hover:underline leading-relaxed">
                  {info.value}
                </a>
              ) : (
                <p className="text-[15px] sm:text-[16px] text-[#334155] font-medium leading-relaxed">{info.value}</p>
              )}
              {info.subvalue && (
                <p className="text-[14px] sm:text-[15px] text-[#64748B] mt-1.5 leading-relaxed">{info.subvalue}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Website link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16 lg:mt-20"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[15px] sm:text-[16px] text-[#1E88A8] font-medium hover:underline"
          >
            www.physicalcarefisioterapia.com
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function EnmanuelLiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PersonalBrandHero />
        <IntroductionSection />
        <GallerySection />
        <SpecializationSection />
        <TechnologySection />
        <InternationalAuthoritySection />
        <InternationalExperienceSection />
        <EducationSection />
        <ProfessionalLeadershipSection />
        <PhilosophySection />
        <FinalCTASection />
        <ContactInfoSection />
      </main>
      <Footer />
    </>
  );
}
