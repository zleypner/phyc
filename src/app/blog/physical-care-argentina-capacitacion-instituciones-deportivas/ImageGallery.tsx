'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Gallery images from Argentina visit
const galleryImages = [
  {
    src: '/images/emma-personalbrand/argentina/1.jpeg',
    alt: 'MSc. Enmanuel Li Torres impartiendo capacitación en fisioterapia deportiva en Argentina',
    caption: 'Capacitación en instituciones deportivas de Argentina',
  },
  {
    src: '/images/emma-personalbrand/argentina/2.jpeg',
    alt: 'Enmanuel Li Torres como instructor experto en tecnologías de rehabilitación STORZ MEDICAL',
    caption: 'Instrucción en tecnologías avanzadas de rehabilitación',
  },
  {
    src: '/images/emma-personalbrand/argentina/3.jpeg',
    alt: 'Fisioterapeuta costarricense capacitando equipos médicos de clubes de fútbol argentinos',
    caption: 'Formación a equipos médicos de alto rendimiento',
  },
];

// Lightbox Component
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
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
      <div
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
      </div>

      {/* Caption */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/90 text-lg font-medium mb-2">
          {images[currentIndex].caption}
        </p>
        <p className="text-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default function ImageGallery() {
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
          Galería: capacitaciones en Argentina
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {galleryImagesWithoutHero.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index + 1)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
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
