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
  MapPin,
  GraduationCap,
  Building2,
  Zap,
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
  title: 'Physical Care en Argentina: capacitación, innovación y experiencia en instituciones deportivas de alto rendimiento',
  badge: 'Capacitación Internacional',
  description:
    'El MSc. Enmanuel Li Torres, director clínico de Physical Care Fisioterapia, realizó una visita profesional a Argentina, donde participó en actividades de capacitación y conoció diferentes instituciones vinculadas con la medicina deportiva y la rehabilitación.',
  author: 'MSc. Enmanuel Li Torres',
  authorRole: 'Director Clínico y General, Physical Care Fisioterapia',
  readingTime: '6 minutos de lectura',
  publishDate: '2026-11-13',
  publishDateFormatted: '13 de noviembre de 2026',
};

// Gallery images from Argentina visit
const galleryImages = [
  {
    src: '/images/emma-personalbrand/argentina/1.jpeg',
    alt: 'MSc. Enmanuel Li Torres durante su visita profesional a Argentina para capacitación en medicina deportiva y rehabilitación',
    caption: 'Visita profesional a instituciones deportivas de Argentina',
  },
  {
    src: '/images/emma-personalbrand/argentina/2.jpeg',
    alt: 'Enmanuel Li Torres en actividades de capacitación e innovación tecnológica en Argentina',
    caption: 'Capacitación e innovación en medicina deportiva',
  },
  {
    src: '/images/emma-personalbrand/argentina/3.jpeg',
    alt: 'Experiencia internacional de Physical Care Fisioterapia en instituciones deportivas de alto rendimiento',
    caption: 'Experiencia en instituciones de alto rendimiento',
  },
];

// Main hero image
const heroImage = galleryImages[0];

// FAQ data
const faqData = [
  {
    question: '¿Qué instituciones visitó el director clínico de Physical Care en Argentina?',
    answer:
      'El MSc. Enmanuel Li Torres visitó clínicas, el Comité Olímpico Argentino y los clubes profesionales River Plate y San Lorenzo de Almagro.',
  },
  {
    question: '¿Qué importancia tiene la capacitación internacional en fisioterapia?',
    answer:
      'Permite conocer nuevas investigaciones, tecnologías y enfoques profesionales que pueden contribuir a la actualización del conocimiento clínico.',
  },
  {
    question: '¿Physical Care ofrece rehabilitación deportiva?',
    answer:
      'Sí. Physical Care cuenta con servicios de fisioterapia y rehabilitación deportiva, orientados a la recuperación funcional y al regreso progresivo a las actividades físicas.',
  },
  {
    question: '¿Cómo puedo agendar una valoración?',
    answer:
      'Puedes comunicarte con Physical Care Fisioterapia mediante WhatsApp para consultar disponibilidad y conocer las opciones de atención.',
  },
];

// Institutions visited
const institutionsVisited = [
  {
    name: 'Club Atlético River Plate',
    description: 'Uno de los clubes más reconocidos del fútbol argentino.',
    icon: Building2,
  },
  {
    name: 'Club Atlético San Lorenzo de Almagro',
    description: 'Institución histórica del fútbol de primera división.',
    icon: Building2,
  },
  {
    name: 'Comité Olímpico Argentino',
    description: 'Organización vinculada con el desarrollo del deporte olímpico.',
    icon: GraduationCap,
  },
  {
    name: 'Clínicas y centros especializados',
    description: 'Centros relacionados con la atención y rehabilitación física.',
    icon: MapPin,
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
          aria-label="Cerrar galería"
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
      {/* Background - Dark teal gradient */}
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
            Physical Care en{' '}
            <span className="bg-gradient-to-r from-[#06B8BF] via-[#5EEAD4] to-[#06B8BF] bg-clip-text text-transparent">
              Argentina
            </span>
            : capacitación e innovación en deporte de alto rendimiento
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
          Physical Care en Argentina
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
          Galería de la visita a Argentina
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
// INSTITUTIONS GRID COMPONENT
// ============================================
function InstitutionsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
      {institutionsVisited.map((institution, index) => {
        const Icon = institution.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F4F7F8] to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-[#1E88A8]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0E3A4A] mb-1">{institution.name}</h4>
                <p className="text-sm text-[#64748B]">{institution.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
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
        <p className="text-[#64748B] leading-relaxed mb-4 text-lg">
          La fisioterapia evoluciona constantemente. Nuevas investigaciones, tecnologías y metodologías están transformando la manera de abordar las lesiones, la rehabilitación y la recuperación física.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Con el compromiso de mantenerse actualizado, el MSc. Enmanuel Li Torres, director clínico de Physical Care Fisioterapia, realizó una visita profesional a Argentina, donde participó en actividades de capacitación y conoció diferentes instituciones vinculadas con la medicina deportiva y la rehabilitación.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          Durante esta experiencia visitó clínicas, el Comité Olímpico Argentino y dos reconocidos clubes del fútbol profesional: River Plate y San Lorenzo de Almagro.
        </p>
      </motion.section>

      {/* High performance sports section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Experiencia y aprendizaje en el deporte de alto rendimiento
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La recuperación de un deportista requiere mucho más que tratar una lesión. Implica comprender las exigencias físicas de su disciplina, evaluar su evolución y desarrollar estrategias para regresar a la actividad de manera segura.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Durante su visita a Argentina, Enmanuel tuvo la oportunidad de conocer entornos vinculados con el deporte profesional y ampliar su perspectiva sobre la rehabilitación y el rendimiento físico.
        </p>

        <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
          Instituciones visitadas
        </h3>
        <InstitutionsGrid />

        <p className="text-[#64748B] leading-relaxed mt-6">
          Estas experiencias forman parte de su proceso de actualización profesional y permiten conocer diferentes perspectivas sobre el trabajo en salud y deporte.
        </p>
      </motion.section>

      {/* NEUROLITH section */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Capacitación e innovación tecnológica
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Otro aspecto importante de esta experiencia fue su participación en actividades de capacitación y en el lanzamiento de NEUROLITH, una tecnología desarrollada por STORZ MEDICAL.
        </p>

        <div className="bg-gradient-to-r from-[#1E88A8]/10 to-[#1E88A8]/5 rounded-2xl p-6 border-l-4 border-[#1E88A8] my-8">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-[#1E88A8] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-[#0E3A4A] mb-2">NEUROLITH - STORZ MEDICAL</h4>
              <p className="text-[#64748B] m-0">
                NEUROLITH utiliza estimulación transcraneal por pulsos acústicos, una tecnología que se investiga como posible intervención complementaria para personas con enfermedad de Alzheimer.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[#64748B] leading-relaxed mb-4">
          Aunque los estudios iniciales muestran resultados de interés, todavía se necesita más investigación para establecer su eficacia clínica a largo plazo. No se ha demostrado que cure el Alzheimer.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          Conocer este tipo de innovaciones permite ampliar la comprensión de los avances científicos y tecnológicos en las ciencias de la salud.
        </p>
      </motion.section>

      {/* Gallery */}
      <ImageGallery />

      {/* What this means for Physical Care */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          ¿Qué significa esta experiencia para Physical Care?
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          En Physical Care creemos que la formación continua es fundamental para ofrecer una atención profesional y actualizada.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          La experiencia internacional de nuestro director clínico fortalece su perspectiva sobre la rehabilitación, la recuperación funcional y el movimiento humano.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          Nuestro enfoque es comprender las necesidades de cada persona y desarrollar programas de fisioterapia adaptados a sus objetivos.
        </p>

        <div className="bg-gradient-to-r from-[#8DC741]/10 to-[#8DC741]/5 rounded-2xl p-6 border-l-4 border-[#8DC741] my-8">
          <p className="text-[#0E3A4A] font-semibold text-lg m-0">
            Ya sea que practiques deporte, tengas una lesión o presentes molestias que afectan tus actividades diarias, una valoración profesional puede ayudarte a identificar el camino adecuado para tu recuperación.
          </p>
        </div>
      </motion.section>

      {/* CTA inline */}
      <motion.section variants={fadeInUp} className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Tu recuperación también merece atención especializada
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          No necesitas ser deportista profesional para darle importancia a tu salud física.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Si presentas dolor muscular, lesiones deportivas, molestias articulares o dificultades de movilidad, en <Link href="/" className="text-[#1E88A8] hover:underline">Physical Care Fisioterapia</Link> podemos orientarte.
        </p>

        <div className="bg-[#F4F7F8] rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
            Agenda tu valoración
          </h3>
          <p className="text-[#64748B] mb-6">
            Cuéntanos qué molestias tienes y conoce las opciones de rehabilitación disponibles para ti.
          </p>
          <a
            href="https://wa.me/50687337942?text=Hola!%20Quiero%20agendar%20una%20valoracion.%20Lei%20el%20articulo%20sobre%20la%20visita%20a%20Argentina."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#25D366] text-white rounded-full font-semibold text-base shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:bg-[#20BA5C]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar valoración por WhatsApp
          </a>
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
        Preguntas frecuentes
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
          Agende una valoración en Physical Care Fisioterapia
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Si experimenta dolor muscular, lesiones deportivas, molestias articulares o dificultades para recuperar su movilidad, una valoración profesional puede ayudarle a comprender su condición y las alternativas de tratamiento disponibles.
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
            href="https://wa.me/50687337942?text=Hola!%20Quiero%20agendar%20una%20valoracion.%20Lei%20el%20articulo%20sobre%20la%20visita%20a%20Argentina."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#25D366] text-white rounded-full font-semibold text-base shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:bg-[#20BA5C]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar valoración
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
            <CTASection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
