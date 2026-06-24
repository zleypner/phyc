'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Share2 } from 'lucide-react';

// Facebook SVG Icon
const FacebookIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function FacebookSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy load the Facebook SDK when section comes into view
  useEffect(() => {
    if (isInView && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isInView, shouldLoad]);

  // Load Facebook SDK
  useEffect(() => {
    if (!shouldLoad) return;

    // Check if SDK is already loaded
    if ((window as typeof window & { FB?: { XFBML: { parse: () => void } } }).FB) {
      (window as typeof window & { FB: { XFBML: { parse: () => void } } }).FB.XFBML.parse();
      setIsLoaded(true);
      return;
    }

    // Load the SDK asynchronously
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      setIsLoaded(true);
    };
    document.body.appendChild(script);

    // Add the root div for Facebook SDK if it doesn't exist
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.prepend(fbRoot);
    }

    return () => {
      // Cleanup is optional since FB SDK is typically kept loaded
    };
  }, [shouldLoad]);

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F8FBFC]"
      aria-label="Seccion de Facebook de Physical Care"
    >
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#8DC741]/10 text-[#6B9930] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <FacebookIcon size={14} className="sm:w-4 sm:h-4" />
            Redes Sociales
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-4 sm:mb-6">
            Siguenos en{' '}
            <span className="text-[#8DC741]">Facebook</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Mantente al dia con consejos de rehabilitacion, recuperacion, fisioterapia,
            historias de pacientes y contenido educativo publicado por nuestro equipo.
          </p>
        </motion.div>

        {/* Facebook Embed Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[rgba(15,23,42,0.08)] shadow-lg shadow-[#8DC741]/5 overflow-hidden">
            {/* CTA Header */}
            <div className="p-4 sm:p-6 border-b border-[rgba(15,23,42,0.06)] bg-gradient-to-r from-[#F8FBFC] to-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#8DC741]/10 flex items-center justify-center">
                    <FacebookIcon size={20} className="sm:w-6 sm:h-6 text-[#6B9930]" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#0E3A4A]">
                      ¿Prefiere seguirnos directamente en Facebook?
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      @Physicalcarecr
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/Physicalcarecr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 bg-[#1877F2] text-white rounded-full font-semibold text-sm hover:bg-[#166FE5] transition-all duration-300 shadow-md shadow-[#1877F2]/20 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Visitar pagina de Facebook de Physical Care"
                >
                  Visitar Facebook
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Facebook Page Plugin Container */}
            <div className="p-4 sm:p-6 md:p-8">
              <div
                className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#F8FBFC] border border-[rgba(15,23,42,0.04)]"
                style={{ minHeight: '500px' }}
              >
                {/* Loading skeleton */}
                {!isLoaded && shouldLoad && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F8FBFC]">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 rounded-full border-4 border-[#1877F2]/20 border-t-[#1877F2] animate-spin" />
                      <p className="text-sm text-[#64748B]">Cargando contenido de Facebook...</p>
                    </div>
                  </div>
                )}

                {/* Placeholder before lazy load */}
                {!shouldLoad && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F8FBFC]">
                    <div className="flex flex-col items-center gap-4 text-center px-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#1877F2]/10 flex items-center justify-center">
                        <FacebookIcon size={32} className="text-[#1877F2]" />
                      </div>
                      <p className="text-sm text-[#64748B]">Desplazate para cargar el contenido de Facebook</p>
                    </div>
                  </div>
                )}

                {/* Facebook Page Plugin */}
                {shouldLoad && (
                  <div
                    className="fb-page w-full flex justify-center"
                    data-href="https://www.facebook.com/Physicalcarecr"
                    data-tabs="timeline"
                    data-width=""
                    data-height="700"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                    data-lazy="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/Physicalcarecr"
                      className="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/Physicalcarecr">
                        Physical Care Fisioterapia
                      </a>
                    </blockquote>
                  </div>
                )}
              </div>
            </div>

            {/* Footer note */}
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
              <p className="text-xs sm:text-sm text-[#94A3B8] text-center">
                Desplazate dentro del contenedor para ver mas publicaciones
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
