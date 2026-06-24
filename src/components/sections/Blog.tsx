'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Video, X } from 'lucide-react';

// Helper function to extract YouTube video ID from various URL formats
const getYouTubeVideoId = (url: string): string => {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return '';
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Video posts data
const videoPosts = [
  {
    id: 'v1',
    title: 'Fundamentos de Rehabilitación Física',
    description: 'Aprenda los principios básicos de la rehabilitación y cómo aplicarlos en su recuperación diaria.',
    url: 'https://youtu.be/OM31KyiG3V8',
    category: 'Rehabilitación',
    author: 'Physical Care',
    date: '2024',
  },
  {
    id: 'v2',
    title: 'Prevención de Lesiones Comunes',
    description: 'Técnicas y ejercicios preventivos para evitar lesiones musculoesqueléticas frecuentes.',
    url: 'https://youtu.be/YvhJGLEjQik',
    category: 'Prevención',
    author: 'Physical Care',
    date: '2024',
  },
  {
    id: 'v3',
    title: 'Guía de Recuperación Post-Lesión',
    description: 'Información clave para pacientes: qué esperar durante el proceso de recuperación.',
    url: 'https://youtu.be/86KSlYxNkZk',
    category: 'Recuperación',
    author: 'Physical Care',
    date: '2024',
  },
  {
    id: 'v4',
    title: 'Ejercicios Terapéuticos en Casa',
    description: 'Rutina de ejercicios que puede realizar en casa para mejorar su movilidad y fuerza.',
    url: 'https://youtu.be/KfsL2UCPwP0',
    category: 'Ejercicios',
    author: 'Physical Care',
    date: '2024',
  },
  {
    id: 'v5',
    title: 'Mejore su Calidad de Vida',
    description: 'Consejos prácticos para mantener un estilo de vida activo y saludable.',
    url: 'https://youtu.be/SB0nNJc5EWM',
    category: 'Bienestar',
    author: 'Physical Care',
    date: '2024',
  },
  {
    id: 'v6',
    title: 'Tratamientos Avanzados de Fisioterapia',
    description: 'Conozca las técnicas modernas que utilizamos para acelerar su recuperación.',
    url: 'https://youtu.be/pSSy13tjrU4',
    category: 'Tratamientos',
    author: 'Physical Care',
    date: '2024',
  },
];

// Category colors for badges - All green theme
const categoryColors: Record<string, string> = {
  'Rehabilitación': 'bg-[#8DC741]/15 text-[#6B9930]',
  'Prevención': 'bg-[#8DC741]/15 text-[#6B9930]',
  'Recuperación': 'bg-[#8DC741]/15 text-[#6B9930]',
  'Ejercicios': 'bg-[#8DC741]/15 text-[#6B9930]',
  'Bienestar': 'bg-[#8DC741]/15 text-[#6B9930]',
  'Tratamientos': 'bg-[#8DC741]/15 text-[#6B9930]',
};

// Video Modal Component
function VideoModal({
  video,
  onClose,
}: {
  video: (typeof videoPosts)[0] | null;
  onClose: () => void;
}) {
  const videoId = video ? getYouTubeVideoId(video.url) : '';

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [video]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="relative w-full max-w-5xl bg-[#0E3A4A] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Cerrar video"
            >
              <X size={24} />
            </button>

            {/* Video Container - 16:9 aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Video Info */}
            <div className="p-4 sm:p-6 bg-white">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 sm:mb-3 ${categoryColors[video.category] || 'bg-[#8DC741]/15 text-[#6B9930]'}`}>
                {video.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A4A] mb-1.5 sm:mb-2">
                {video.title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B7280]">{video.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedVideo, setSelectedVideo] = useState<(typeof videoPosts)[0] | null>(null);

  const openVideo = useCallback((video: (typeof videoPosts)[0]) => {
    setSelectedVideo(video);
  }, []);

  const closeVideo = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  return (
    <>
      <section ref={ref} id="blog" className="section-padding bg-white">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#8DC741]/15 text-[#6B9930] text-sm font-medium mb-4">
              <Video className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Podcast La Camilla CR
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
              La Camilla CR
            </h2>
            <p className="text-[#6B7280]">
              Contenido audiovisual desarrollado por nuestros especialistas para ayudarle en su proceso de rehabilitación y bienestar físico.
            </p>
          </motion.div>

          {/* Videos Grid - 1 col mobile, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoPosts.map((video, index) => {
              const videoId = getYouTubeVideoId(video.url);
              const thumbnailUrl = getYouTubeThumbnail(videoId);

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => openVideo(video)}
                    className="group block h-full w-full text-left"
                  >
                    <article className="h-full bg-[#F4F7F8] rounded-3xl overflow-hidden card-hover">
                      {/* Thumbnail with Play overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={thumbnailUrl}
                          alt={video.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                            <Play className="w-7 h-7 text-red-600 ml-1" fill="currentColor" />
                          </div>
                        </div>
                        {/* Video badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#8DC741] text-white text-xs font-medium">
                          <Video className="w-3 h-3" />
                          Video
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[video.category] || 'bg-[#8DC741]/15 text-[#6B9930]'}`}>
                          {video.category}
                        </span>
                        <h4 className="font-bold text-[#0E3A4A] mb-2 group-hover:text-[#1E88A8] transition-colors line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                          {video.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#9CA3AF]">
                          <span>{video.author}</span>
                          <span className="inline-flex items-center gap-1 text-[#6B9930] font-medium group-hover:text-[#5A8228]">
                            Ver Video
                            <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={closeVideo} />
    </>
  );
}
