'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  User,
  ChevronRight,
  ChevronDown,
  X,
  ChevronLeft,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Article data
const articleData = {
  title: 'Más allá del dolor: fisioterapia avanzada, Magnetolith y ondas de choque en Costa Rica',
  badge: 'Investigación y Fisioterapia',
  description:
    'El Lic. Enmanuel Li Torres, director clínico de Physical Care Fisioterapia, presentó en un congreso internacional en Colombia un enfoque de rehabilitación que integra magnetotransducción EMTT, ondas de choque y ejercicio terapéutico para abordar lesiones musculoesqueléticas persistentes.',
  author: 'Lic. Enmanuel Li Torres',
  authorRole: 'Director Clínico y General, Physical Care Fisioterapia',
  readingTime: '10 minutos de lectura',
  publishDate: '2026-10-14',
  publishDateFormatted: '14 de octubre de 2026',
};

// Gallery images from the Colombia congress
const galleryImages = [
  {
    src: '/images/emma-personalbrand/collombia/WhatsApp Image 2026-09-14 at 16.55.52 (3).jpeg',
    alt: 'Lic. Enmanuel Li Torres presentando sobre fundamentos biofísicos de EMTT en el congreso ISMST-OCC 2026 en Barranquilla, Colombia',
    caption: 'Presentación sobre fundamentos biofísicos de la terapia EMTT',
  },
  {
    src: '/images/emma-personalbrand/collombia/WhatsApp Image 2026-09-14 at 16.55.52 (4).jpeg',
    alt: 'Vista del salón de conferencias durante la presentación sobre matriz decisionaria para protocolo multimodal en el congreso ISMST-OCC 2026',
    caption: 'Salón de conferencias del congreso ISMST-OCC 2026',
  },
  {
    src: '/images/emma-personalbrand/collombia/WhatsApp Image 2026-09-14 at 16.55.52.jpeg',
    alt: 'Enmanuel Li Torres explicando la sinergia multimodal ESWT, EMTT y carga guiada durante su ponencia internacional',
    caption: 'Explicación de la sinergia multimodal en rehabilitación',
  },
  {
    src: '/images/emma-personalbrand/collombia/WhatsApp Image 2026-09-14 at 16.55.53 (1).jpeg',
    alt: 'Panel de expertos en el congreso internacional de ondas de choque OCC-ISMST 2026 en Colombia',
    caption: 'Panel de expertos internacionales en ondas de choque',
  },
  {
    src: '/images/emma-personalbrand/collombia/WhatsApp Image 2026-09-14 at 16.55.53.jpeg',
    alt: 'Lic. Enmanuel Li Torres presentando dosimetría y protocolo Physical Care para tratamiento con EMTT y ondas de choque',
    caption: 'Presentación sobre dosimetría y protocolo clínico Physical Care',
  },
];

// Main hero image (first image showing presenter at podium)
const heroImage = galleryImages[0];

// FAQ data
const faqData = [
  {
    question: '¿Qué es la fisioterapia avanzada?',
    answer:
      'Es un término utilizado para describir programas de rehabilitación que integran evaluación clínica, ejercicio terapéutico y, cuando corresponde, tecnologías complementarias. No representa por sí mismo una especialidad médica reconocida.',
  },
  {
    question: '¿Qué es Magnetolith?',
    answer:
      'MAGNETOLITH es un equipo utilizado para aplicar terapia de magnetotransducción extracorpórea o EMTT, mediante campos electromagnéticos variables.',
  },
  {
    question: '¿Para qué sirven las ondas de choque en fisioterapia?',
    answer:
      'Las ondas de choque pueden utilizarse en determinadas condiciones musculoesqueléticas, especialmente algunas tendinopatías. Su indicación depende del diagnóstico y de la evidencia clínica disponible.',
  },
  {
    question: '¿La fisioterapia puede ayudar con una lesión del manguito rotador?',
    answer:
      'Sí. Muchos pacientes con problemas del manguito rotador pueden beneficiarse de programas de rehabilitación conservadora. La elección del tratamiento depende de la evaluación profesional.',
  },
  {
    question: '¿Cuántas sesiones de fisioterapia necesito?',
    answer:
      'La cantidad de sesiones depende del diagnóstico, la evolución y los objetivos funcionales. No existe un protocolo universal apropiado para todas las personas.',
  },
  {
    question: '¿Dónde encontrar fisioterapia y rehabilitación en San Pedro, Costa Rica?',
    answer:
      'Physical Care Fisioterapia se encuentra en San Pedro de Montes de Oca, San José, Costa Rica. Ofrece servicios de fisioterapia, rehabilitación y tecnologías complementarias de tratamiento.',
  },
];

// Scientific references
const references = [
  {
    authors: 'Mancini I. y colaboradores',
    year: '2025',
    title:
      'Investigación in vitro sobre EMTT, células tendinosas y remodelación de matriz extracelular',
    journal: 'Journal of Orthopaedic Research',
  },
  {
    authors: 'Gerdesmeyer L. y colaboradores',
    year: '2024',
    title: 'Investigación sobre EMTT, diferenciación osteogénica y mineralización ósea',
    journal: 'International Journal of Molecular Sciences',
  },
  {
    authors: 'Gerdesmeyer L. y colaboradores',
    year: '2023',
    title: 'Ensayo controlado sobre EMTT en tendinopatía del manguito rotador',
    journal: 'American Journal of Sports Medicine',
  },
  {
    authors: 'Gerdesmeyer L. y colaboradores',
    year: '2022',
    title: 'Investigación sobre EMTT y respuesta angiogénica de células mesenquimales',
    journal: 'Tissue Engineering Part A',
  },
  {
    authors: 'Klüter T. y colaboradores',
    year: '2018',
    title:
      'Investigación sobre EMTT combinada con ondas de choque en tendinopatía crónica del manguito rotador',
    journal: 'Electromagnetic Biology and Medicine',
  },
  {
    authors: 'STORZ MEDICAL',
    year: '2024',
    title: 'Documentación técnica y guías de aplicación de MAGNETOLITH ultra+',
    journal: 'Documentación del fabricante',
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// ============================================
// LIGHTBOX COMPONENT
// ============================================
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Cerrar galeria"
        >
          <X size={24} />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-[90vw] h-[80vh] max-w-6xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </motion.div>

        {/* Caption */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/90 text-lg font-medium mb-2">
            {images[currentIndex].caption}
          </p>
          <p className="text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================
// FAQ ITEM COMPONENT
// ============================================
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#1E88A8] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-[#0E3A4A] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1E88A8] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#64748B] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background - Dark teal gradient (matching main page) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E38] via-[#0E3D4A] to-[#156378]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(53, 183, 200, 0.12) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 30% at 30% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-[#35B7C8]/10 blur-[100px] z-10"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[30%] left-[5%] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#5EEAD4]/10 blur-[80px] z-10"
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#5EEAD4] animate-pulse" />
              {articleData.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}
          >
            Mas alla del dolor:{' '}
            <span className="bg-gradient-to-r from-[#06B8BF] via-[#5EEAD4] to-[#06B8BF] bg-clip-text text-transparent">
              fisioterapia avanzada
            </span>
            , Magnetolith y ondas de choque en Costa Rica
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl"
          >
            {articleData.description}
          </motion.p>

          {/* Meta info */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-6 text-white/70"
          >
            <div className="flex items-center gap-2">
              <User size={18} className="text-[#5EEAD4]" />
              <span className="font-medium text-white">{articleData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#5EEAD4]" />
              <span>{articleData.readingTime}</span>
            </div>
            <span className="text-white/50">{articleData.publishDateFormatted}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

// ============================================
// BREADCRUMB COMPONENT
// ============================================
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-[#64748B]">
        <li>
          <Link href="/" className="hover:text-[#1E88A8] transition-colors">
            Inicio
          </Link>
        </li>
        <ChevronRight size={14} className="text-[#9CA3AF]" />
        <li>
          <Link href="/blog" className="hover:text-[#1E88A8] transition-colors">
            Blog
          </Link>
        </li>
        <ChevronRight size={14} className="text-[#9CA3AF]" />
        <li className="text-[#0E3A4A] font-medium truncate max-w-[200px] sm:max-w-none">
          Fisioterapia avanzada Costa Rica
        </li>
      </ol>
    </nav>
  );
}

// ============================================
// IMAGE GALLERY COMPONENT
// ============================================
function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Skip the first image (hero) in the gallery
  const galleryImagesWithoutHero = galleryImages.slice(1);

  return (
    <>
      <div className="my-12">
        <h3 className="text-2xl font-bold text-[#0E3A4A] mb-6">
          Galería del congreso ISMST-OCC 2026
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImagesWithoutHero.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index + 1)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-[#0E3A4A]" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  );
}

// ============================================
// ARTICLE CONTENT COMPONENT
// ============================================
function ArticleContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="prose prose-lg max-w-none"
    >
      {/* Main hero image */}
      <motion.div variants={fadeInUp} className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </motion.div>

      {/* Introduction */}
      <motion.section variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6 mt-0">
          Cuando el dolor persiste: una nueva perspectiva de la rehabilitación
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          El dolor de hombro, las tendinitis, las lesiones del manguito rotador y otras condiciones musculoesqueléticas pueden afectar profundamente la calidad de vida.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Para algunas personas, actividades tan sencillas como levantar un brazo, dormir sin interrupciones, vestirse o practicar deporte se convierten en desafíos diarios.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          En muchos casos, los pacientes buscan fisioterapia después de semanas o meses de molestias, especialmente cuando los tratamientos anteriores no han conseguido recuperar completamente su movilidad o capacidad funcional.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Sin embargo, la rehabilitación no debería enfocarse únicamente en disminuir el dolor.
        </p>
        <div className="bg-gradient-to-r from-[#8DC741]/10 to-[#8DC741]/5 rounded-2xl p-6 border-l-4 border-[#8DC741] my-8">
          <p className="text-[#0E3A4A] font-semibold text-lg m-0">
            El verdadero objetivo es ayudar al paciente a recuperar su movimiento, fuerza, independencia y capacidad para realizar las actividades que forman parte de su vida.
          </p>
        </div>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Esta perspectiva fue el eje de la presentación científica titulada <em>Más allá del dolor: mecanotransducción multimodal en condiciones musculoesqueléticas persistentes</em>, desarrollada por el Lic. Enmanuel Li Torres, director clínico y general de Physical Care Fisioterapia, durante el congreso ISMST-OCC 2026 en Barranquilla, Colombia.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La exposición reunió fundamentos científicos, investigaciones clínicas y una serie de cinco casos atendidos en Physical Care.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          El enfoque presentado combina tecnologías de rehabilitación con programas de ejercicio terapéutico y carga progresiva, buscando mejorar la recuperación funcional de personas con lesiones persistentes.
        </p>
      </motion.section>

      {/* Mechanotransduction section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Qué es la mecanotransducción en fisioterapia
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La mecanotransducción es el proceso mediante el cual las células detectan estímulos físicos y los convierten en respuestas biológicas.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Los tendones, músculos y huesos responden constantemente a las fuerzas que reciben durante el movimiento, el ejercicio y las actividades cotidianas.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Estos mecanismos forman parte de la adaptación de los tejidos al esfuerzo.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-6">
          En fisioterapia, comprender la mecanotransducción permite diseñar estrategias orientadas a mejorar la capacidad de los tejidos para tolerar cargas.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Durante su presentación, Enmanuel Li Torres explicó un enfoque multimodal que integra tres componentes:
        </p>

        <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
          Ondas de choque extracorpóreas (ESWT)
        </h3>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Las <Link href="/servicios-especializados#ondas-de-choque" className="text-[#1E88A8] hover:underline">ondas de choque</Link> son impulsos acústicos que interactúan con los tejidos.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Se utilizan en el tratamiento de determinadas condiciones musculoesqueléticas, especialmente algunas tendinopatías y lesiones relacionadas con sobrecarga.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Existen modalidades radiales y focales, cuya selección depende de la evaluación clínica y del objetivo terapéutico.
        </p>

        <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
          Magnetotransducción extracorpórea (EMTT)
        </h3>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La EMTT utiliza campos electromagnéticos variables de alta intensidad para inducir estímulos bioeléctricos en los tejidos.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Esta tecnología se estudia como complemento en determinados programas de rehabilitación musculoesquelética.
        </p>

        <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
          Ejercicio terapéutico con carga guiada
        </h3>
        <p className="text-[#64748B] leading-relaxed mb-4">
          El ejercicio terapéutico permite recuperar progresivamente movilidad, fuerza y tolerancia al esfuerzo.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Su importancia radica en trasladar las mejoras obtenidas durante el tratamiento hacia las actividades reales del paciente.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          La integración de estas herramientas busca desarrollar un programa individualizado, en lugar de depender exclusivamente de una intervención pasiva.
        </p>
      </motion.section>

      {/* Magnetolith section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Qué es Magnetolith y cómo funciona la terapia EMTT
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          <Link href="/tecnologia-de-rehabilitacion#magnetolith" className="text-[#1E88A8] hover:underline">MAGNETOLITH ultra+</Link> es un equipo de magnetotransducción extracorpórea desarrollado por STORZ MEDICAL.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Su tecnología utiliza campos electromagnéticos variables que pueden inducir respuestas eléctricas en los tejidos.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          A diferencia de la magnetoterapia convencional, la EMTT emplea parámetros de transducción y frecuencia distintos.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Durante la conferencia se explicaron mecanismos relacionados con la señalización celular, el movimiento de iones y procesos biológicos investigados en tejidos musculoesqueléticos.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Estudios experimentales han explorado posibles efectos sobre células tendinosas, matriz extracelular y diferenciación celular.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Sin embargo, los hallazgos de laboratorio no deben interpretarse automáticamente como beneficios clínicos comprobados.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La indicación de EMTT depende de la evaluación individual, la condición del paciente y la evidencia disponible.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          En Physical Care Fisioterapia, esta tecnología forma parte de las herramientas que pueden considerarse dentro de programas especializados de rehabilitación.
        </p>
      </motion.section>

      {/* Shockwave section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Ondas de choque en Costa Rica: aplicaciones en lesiones musculoesqueléticas
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La terapia de ondas de choque extracorpóreas es una intervención utilizada en determinadas condiciones musculoesqueléticas.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Entre las afecciones en las que puede considerarse se encuentran algunas tendinopatías, problemas del manguito rotador, fascitis plantar y lesiones asociadas con sobrecarga.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Su aplicación debe adaptarse al diagnóstico y a las características del paciente.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Las <Link href="/tecnologia-de-rehabilitacion#ondas-focales" className="text-[#1E88A8] hover:underline">ondas de choque focales</Link> permiten concentrar el estímulo acústico en una región específica, mientras que las <Link href="/tecnologia-de-rehabilitacion#ondas-radiales" className="text-[#1E88A8] hover:underline">radiales</Link> distribuyen la energía de manera diferente.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La elección de la modalidad requiere conocimiento clínico y técnico.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Durante la conferencia se presentó su utilización combinada con EMTT y ejercicio terapéutico en determinados casos de dolor persistente de hombro.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          El objetivo del abordaje no es únicamente disminuir síntomas, sino facilitar la progresión hacia movimientos y actividades funcionales.
        </p>
      </motion.section>

      {/* Rotator cuff section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Tratamiento del manguito rotador: recuperar la movilidad y la fuerza
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          El manguito rotador está formado por músculos y tendones que contribuyen a estabilizar y mover el hombro.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Las lesiones de estas estructuras pueden provocar dolor al elevar el brazo, molestias nocturnas, debilidad y dificultad para realizar actividades cotidianas.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Entre las condiciones frecuentes se encuentran las tendinopatías y determinadas rupturas parciales de los tendones.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La rehabilitación conservadora puede formar parte del tratamiento de muchos pacientes, aunque la estrategia depende del diagnóstico, la gravedad y los objetivos individuales.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          En la serie clínica presentada por Physical Care se describieron pacientes con lesiones del supraespinoso, dolor persistente y limitaciones funcionales. Sus resultados muestran la importancia de evaluar no solamente el dolor, sino también la movilidad, la fuerza y la capacidad de realizar actividades relevantes para cada persona.
        </p>
      </motion.section>

      {/* Gallery */}
      <ImageGallery />

      {/* Clinical cases section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Casos clínicos presentados en el congreso internacional
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Durante el congreso ISMST-OCC 2026, Physical Care compartió una serie descriptiva de cinco casos clínicos.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm m-0">
            Los resultados corresponden a pacientes específicos y no constituyen una garantía de recuperación ni permiten demostrar por sí solos la eficacia de una tecnología.
          </p>
        </div>

        {/* Case 1 */}
        <div className="bg-[#F4F7F8] rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
            Caso clínico 1: paciente de 76 años con ruptura parcial del supraespinoso
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-3">
            La paciente presentaba una ruptura parcial del 20% del tendón supraespinoso.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Inicialmente experimentaba dolor de 10/10 durante el movimiento y podía elevar activamente el brazo hasta aproximadamente 60 grados.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            El abordaje incluyó diez sesiones durante cuatro semanas, con predominio de EMTT y un programa funcional.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            En la quinta sesión se registró un avance importante: la paciente consiguió abrocharse el sostén por la espalda de forma independiente.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Al finalizar, se reportó movilidad activa completa en flexión y abducción, con dolor de 0/10 en reposo y durante las actividades diarias habituales.
          </p>
          <p className="text-[#0E3A4A] font-medium">
            Este caso demuestra la relevancia de medir la recuperación mediante actividades que tienen significado para el paciente.
          </p>
        </div>

        {/* Case 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
            Caso clínico 2: lesión del manguito rotador y dolor nocturno
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Un paciente de 61 años presentaba una ruptura parcial del 25% del supraespinoso.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            El dolor alcanzaba 8/10 y afectaba significativamente su descanso nocturno.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Su movilidad activa de abducción estaba limitada a aproximadamente 90 grados.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            El tratamiento presentado integró ondas de choque radiales, ondas de choque focales, EMTT y ejercicio terapéutico.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            En la quinta sesión se reportó desaparición del dolor nocturno y recuperación de la movilidad activa completa.
          </p>
          <p className="text-[#64748B] leading-relaxed">
            Posteriormente, el programa avanzó hacia ejercicios de fortalecimiento.
          </p>
        </div>

        {/* Case 3 */}
        <div className="bg-[#F4F7F8] rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
            Caso clínico 3: dolor persistente después de fisioterapia convencional
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Un paciente de 65 años había experimentado molestias del manguito rotador durante cinco meses.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Anteriormente había completado diez sesiones de fisioterapia convencional, con una respuesta parcial.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            En Physical Care se implementó un programa que combinó EMTT, ondas de choque y ejercicios activos con carga.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            La evolución descrita incluyó recuperación de los arcos de movimiento y capacidad de realizar un ejercicio de empuje vertical sin síntomas.
          </p>
          <p className="text-[#0E3A4A] font-medium">
            Este caso destaca la importancia de reevaluar las estrategias de rehabilitación cuando persisten las limitaciones funcionales.
          </p>
        </div>

        {/* Case 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
            Caso clínico 4: dolor de hombro durante entrenamiento de fuerza
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Una paciente de 64 años, propietaria de un gimnasio y practicante de musculación, experimentaba dolor al realizar determinados ejercicios de empuje.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            A pesar de conservar movilidad y autonomía en sus actividades diarias, presentaba molestias al trabajar con cargas específicas.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Durante la evaluación se registró dolor de 5/10 en la fase excéntrica del press inclinado con 25 libras y del press plano con 30 libras.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            El enfoque presentado combinó EMTT con ejercicios de carga progresiva.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            El objetivo era mejorar la tolerancia del tendón durante las actividades deportivas habituales.
          </p>
          <p className="text-[#0E3A4A] font-medium">
            Este caso demuestra que la recuperación funcional debe adaptarse al nivel de exigencia física de cada paciente.
          </p>
        </div>

        {/* Case 5 */}
        <div className="bg-[#F4F7F8] rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
            Caso clínico 5: seguimiento de una lesión ósea en el pie
          </h3>
          <p className="text-[#64748B] leading-relaxed mb-3">
            La serie también incluyó una paciente con una lesión ósea descrita en la región del quinto dedo del pie.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            El tratamiento reportado consistió en seis sesiones de EMTT distribuidas durante tres semanas.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Se documentó ausencia de dolor desde la segunda sesión y formación de callo óseo en una radiografía de seguimiento.
          </p>
          <p className="text-[#64748B] leading-relaxed mb-3">
            Aunque la evolución fue favorable, no es posible atribuir la consolidación exclusivamente a la tecnología utilizada.
          </p>
          <p className="text-[#0E3A4A] font-medium">
            El resultado debe interpretarse considerando el proceso natural de recuperación ósea y las limitaciones de una observación clínica individual.
          </p>
        </div>
      </motion.section>

      {/* Evidence section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Qué dice la evidencia científica sobre EMTT y ondas de choque
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La investigación sobre magnetotransducción extracorpórea ha explorado diferentes aplicaciones en rehabilitación musculoesquelética.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Durante la presentación se citaron investigaciones sobre células tendinosas, diferenciación osteogénica y tratamiento de determinadas afecciones del hombro.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Entre los estudios expuestos se incluyó un ensayo clínico atribuido a Gerdesmeyer y colaboradores (2023), con 43 participantes, en el que se reportaron diferencias favorables en las puntuaciones de dolor del grupo tratado con EMTT frente a una intervención simulada.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          También se presentó una investigación atribuida a Klüter y colaboradores (2018), con 86 participantes, que evaluó la combinación de EMTT y ondas de choque en pacientes con problemas del manguito rotador.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Estos hallazgos son relevantes para la investigación, pero requieren interpretación crítica.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La evidencia disponible no permite asumir que todas las lesiones responderán de la misma manera ni que una tecnología pueda sustituir por completo el ejercicio terapéutico y la valoración profesional.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          Se necesitan estudios adicionales para comprender mejor las indicaciones, la dosificación y los resultados a largo plazo.
        </p>
      </motion.section>

      {/* When to consult section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Cuándo consultar a un fisioterapeuta por dolor persistente
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Una valoración de fisioterapia puede ser útil cuando el dolor limita actividades cotidianas, deportivas o laborales. Algunas situaciones que justifican una evaluación profesional incluyen:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 list-none pl-0">
          {[
            'Dolor de hombro al levantar el brazo',
            'Molestias nocturnas asociadas con lesiones musculoesqueléticas',
            'Tendinitis o tendinopatías persistentes',
            'Dificultades para recuperar movilidad después de una lesión',
            'Dolor durante ejercicios de fuerza',
            'Molestias que continúan después de tratamientos anteriores',
            'Limitaciones para trabajar, practicar deporte o realizar actividades domésticas',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[#64748B]">
              <div className="w-6 h-6 rounded-full bg-[#8DC741]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ChevronRight size={14} className="text-[#8DC741]" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[#64748B] leading-relaxed">
          La evaluación permite identificar necesidades individuales y determinar si corresponde implementar ejercicio terapéutico, educación, otras intervenciones de fisioterapia o derivación médica.
        </p>
      </motion.section>

      {/* Safety section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Seguridad de la terapia EMTT
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La terapia EMTT requiere valorar antecedentes médicos y posibles contraindicaciones.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          En la presentación se señalaron restricciones importantes, como marcapasos y determinados implantes electrónicos, embarazo, cáncer activo y aplicación en la región craneal.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          También se describieron precauciones relacionadas con ciertos implantes metálicos y tatuajes con tintas metálicas.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          El tratamiento debe aplicarse únicamente cuando exista una indicación profesional adecuada y siguiendo las instrucciones del fabricante.
        </p>
      </motion.section>

      {/* Physical Care section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Physical Care Fisioterapia: conocimiento internacional aplicado a la rehabilitación en Costa Rica
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La participación del Lic. Enmanuel Li Torres en el congreso ISMST-OCC 2026 permitió presentar experiencias clínicas desarrolladas en Physical Care y compartir conocimientos sobre rehabilitación musculoesquelética.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La exposición destacó la importancia de integrar investigación, tecnología y ejercicio terapéutico para abordar problemas funcionales complejos.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Desde San Pedro de Montes de Oca, Costa Rica, <Link href="/" className="text-[#1E88A8] hover:underline">Physical Care Fisioterapia</Link> ofrece servicios de rehabilitación orientados a las necesidades individuales de sus pacientes.
        </p>
        <div className="bg-gradient-to-r from-[#0E3A4A] to-[#1E88A8] rounded-2xl p-6 my-8">
          <p className="text-white font-semibold text-lg m-0">
            La recuperación no consiste únicamente en eliminar el dolor, sino en recuperar la capacidad de moverse, trabajar, entrenar y vivir con mayor independencia.
          </p>
        </div>
      </motion.section>
    </motion.article>
  );
}

// ============================================
// FAQ SECTION
// ============================================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="mt-16 pt-12 border-t border-gray-200"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-8"
      >
        Preguntas frecuentes sobre fisioterapia avanzada en Costa Rica
      </motion.h2>
      <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

// ============================================
// REFERENCES SECTION
// ============================================
function ReferencesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="mt-12 pt-8 border-t border-gray-200"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-xl font-bold text-[#0E3A4A] mb-6"
      >
        Referencias cientificas
      </motion.h2>
      <motion.ol variants={fadeInUp} className="space-y-3 text-sm text-[#64748B] list-decimal list-inside">
        {references.map((ref, index) => (
          <li key={index} className="leading-relaxed">
            {ref.authors} ({ref.year}). {ref.title}. <em>{ref.journal}</em>.
          </li>
        ))}
      </motion.ol>
      <motion.div
        variants={fadeInUp}
        className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5"
      >
        <p className="text-amber-800 text-sm m-0">
          <strong>Aviso medico:</strong> Este articulo tiene fines educativos. Los resultados descritos corresponden a una serie clinica observacional y no garantizan resultados similares en otros pacientes. La informacion no sustituye una evaluacion medica o fisioterapeutica.
        </p>
      </motion.div>
    </motion.section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="mt-16 relative py-16 sm:py-20 lg:py-24 rounded-3xl overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E3A4A] via-[#156378] to-[#1E88A8]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(94, 234, 212, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 text-center">
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
        >
          Agende una valoracion en Physical Care Fisioterapia
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Si experimenta dolor de hombro, lesiones musculares, molestias persistentes o dificultades para recuperar su movilidad, una valoracion profesional puede ayudarle a comprender su condicion y las alternativas de tratamiento disponibles.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-white/70 mb-10"
        >
          En Physical Care Fisioterapia, cada programa se adapta a las necesidades y objetivos de la persona.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/50687337942?text=Hola!%20Quiero%20agendar%20una%20valoracion.%20Lei%20el%20articulo%20sobre%20fisioterapia%20avanzada."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#25D366] text-white rounded-full font-semibold text-base shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:bg-[#20BA5C]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar valoracion
          </a>
          <Link
            href="/servicios-especializados"
            className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            Conocer nuestros tratamientos
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Main content area */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8">
            <Breadcrumb />
            <ArticleContent />
            <FAQSection />
            <ReferencesSection />
            <CTASection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
