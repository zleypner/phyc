'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Footprints, Gift, ArrowRight } from 'lucide-react';

export default function StoreCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-r from-[#F8FBFC] to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0E3A4A] to-[#155E75] p-6 md:p-8 lg:p-10"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B8BF]/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-[#8DC741]/20 rounded-full blur-xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Content */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-[#06B8BF]/20 flex items-center justify-center">
                  <Footprints size={24} className="text-[#06B8BF]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#8DC741]/20 flex items-center justify-center">
                  <Gift size={24} className="text-[#8DC741]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Visita nuestra tienda
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  Plantillas ortopedicas y gift cards de sesiones de terapia
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-white text-[#0E3A4A] rounded-full font-semibold text-sm hover:bg-[#06B8BF] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Ver Tienda
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
