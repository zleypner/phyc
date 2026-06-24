'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Instagram SVG Icon
const InstagramIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function InstagramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#F8FBFC] to-white"
      aria-label="Seccion de Instagram de Physical Care"
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
            <InstagramIcon size={14} className="sm:w-4 sm:h-4" />
            Instagram
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-4 sm:mb-6">
            Siguenos en{' '}
            <span className="text-[#8DC741]">
              Instagram
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Videos de ejercicios, consejos de rehabilitacion, testimonios de pacientes y contenido
            educativo para tu bienestar fisico.
          </p>
        </motion.div>

        {/* Instagram Embed Card */}
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
                    <InstagramIcon size={20} className="sm:w-6 sm:h-6 text-[#6B9930]" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#0E3A4A]">
                      ¿Prefiere seguirnos directamente en Instagram?
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      @physicalcarefisioterapia
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/physicalcarefisioterapia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 bg-[#8DC741] text-white rounded-full font-semibold text-sm hover:bg-[#7AB534] transition-all duration-300 shadow-md shadow-[#8DC741]/20 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Visitar perfil de Instagram de Physical Care"
                >
                  Visitar Instagram
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Instagram Feed Preview */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#F8FBFC] border border-[rgba(15,23,42,0.04)]">
                {/* Instagram Embed */}
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#8DC741]/15 flex items-center justify-center mb-6">
                    <InstagramIcon size={40} className="sm:w-12 sm:h-12 text-[#6B9930]" />
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0E3A4A] mb-3 text-center">
                    @physicalcarefisioterapia
                  </h3>

                  <p className="text-sm sm:text-base text-[#64748B] text-center max-w-md mb-6">
                    Siguenos para ver videos de ejercicios terapeuticos, consejos de rehabilitacion
                    y testimonios de nuestros pacientes.
                  </p>

                  {/* Stats Preview */}
                  <div className="flex items-center gap-6 sm:gap-8 mb-8">
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-[#0E3A4A]">450+</p>
                      <p className="text-xs sm:text-sm text-[#64748B]">Publicaciones</p>
                    </div>
                    <div className="w-px h-10 bg-[rgba(15,23,42,0.1)]" />
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-[#0E3A4A]">2.5K+</p>
                      <p className="text-xs sm:text-sm text-[#64748B]">Seguidores</p>
                    </div>
                    <div className="w-px h-10 bg-[rgba(15,23,42,0.1)]" />
                    <div className="text-center">
                      <p className="text-xl sm:text-2xl font-bold text-[#0E3A4A]">100+</p>
                      <p className="text-xs sm:text-sm text-[#64748B]">Videos</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://www.instagram.com/physicalcarefisioterapia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 sm:px-10 bg-[#8DC741] text-white rounded-full font-semibold text-sm sm:text-base hover:bg-[#7AB534] transition-all duration-300 shadow-lg shadow-[#8DC741]/25 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <InstagramIcon size={18} className="sm:w-5 sm:h-5" />
                    Ver Perfil Completo
                  </a>
                </div>
              </div>
            </div>

            {/* Content types */}
            <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { icon: '🏃', label: 'Ejercicios' },
                  { icon: '💪', label: 'Rehabilitacion' },
                  { icon: '⭐', label: 'Testimonios' },
                  { icon: '📚', label: 'Educacion' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#F8FBFC] border border-[rgba(15,23,42,0.04)]"
                  >
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-[#64748B]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
