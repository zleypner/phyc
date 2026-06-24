'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gift, CheckCircle, Heart } from 'lucide-react';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function GiftCardCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-[#8DC741] via-[#7AB534] to-[#6B9930] p-5 sm:p-8 md:p-12 lg:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 sm:w-48 h-24 sm:h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Gift size={14} className="sm:w-4 sm:h-4" />
                Regalo Perfecto
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-3 sm:mb-4 text-[#0E3A4A]">
                Regala salud y bienestar a quien mas quieres
              </h2>

              <p className="text-base sm:text-xl md:text-2xl text-[#0E3A4A]/80 font-medium mb-3 sm:mb-4">
                Regala a tu abuela sesiones de terapia fisica
              </p>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-8">
                El mejor regalo para tus padres, abuelos o cualquier ser querido.
                Sesiones de fisioterapia profesional para mejorar su calidad de vida,
                aliviar dolores y recuperar movilidad.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-8 text-left">
                {[
                  'Sesiones de terapia fisica',
                  'Atencion personalizada',
                  'Sin fecha de vencimiento',
                  'Evaluacion inicial incluida',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-white/90 text-xs sm:text-sm md:text-base">
                    <CheckCircle size={14} className="sm:w-[18px] sm:h-[18px] text-white flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/50689680947?text=Hola!%20Quiero%20regalar%20sesiones%20de%20terapia%20fisica%20a%20un%20ser%20querido.%20Quisiera%20información%20sobre%20la%20Gift%20Card."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 h-11 sm:h-14 px-6 sm:px-8 bg-white text-[#6B9930] rounded-full font-bold text-sm sm:text-base shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Regalar Ahora
              </a>
            </div>

            {/* Visual - Hidden on mobile */}
            <motion.div
              className="relative hidden sm:flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect behind card */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl scale-110 animate-pulse" />

                {/* Gift card visual */}
                <motion.div
                  className="relative w-56 h-36 sm:w-72 sm:h-44 md:w-80 md:h-48 bg-gradient-to-br from-white via-white to-gray-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 overflow-hidden"
                  animate={{
                    rotate: [3, -1, 3],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#8DC741] to-[#6B9930] flex items-center justify-center shadow-lg shadow-[#8DC741]/30"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Gift size={16} className="sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                      <span className="text-[10px] sm:text-xs font-bold text-[#8DC741] uppercase tracking-wider">Gift Card</span>
                    </div>
                    <p className="text-[#1F2937] font-bold text-sm sm:text-lg mb-0.5 sm:mb-1">Physical Care</p>
                    <p className="text-[#64748B] text-xs sm:text-sm mb-2 sm:mb-4">Sesiones de Terapia Fisica</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-[#64748B]">Para: Tu ser querido</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Heart size={12} className="sm:w-4 sm:h-4 text-[#8DC741]" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative floating hearts */}
                <motion.div
                  className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/25 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart size={20} className="sm:w-6 sm:h-6 text-white drop-shadow-md" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/25 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, -10, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Heart size={14} className="sm:w-[18px] sm:h-[18px] text-white drop-shadow-md" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
