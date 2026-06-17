'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    name: 'Atención del Adulto Mayor',
    description: 'Cuidado especializado para mejorar movilidad y calidad de vida.',
    image: '/images/services/adultomayor.webp',
  },
  {
    name: 'Ondas de Choque',
    description: 'Tratamiento avanzado para lesiones crónicas y tendinosas.',
    image: '/images/technology/Ondas de Choque Focales STORZ Medical.png',
  },
  {
    name: 'Plantillas Ortopédicas',
    description: 'Corrección postural y alivio del dolor en pies y columna.',
    image: '/images/services/plantillas-ort.webp',
  },
  {
    name: 'Rehabilitación Deportiva',
    description: 'Recuperación óptima para atletas y deportistas activos.',
    image: '/images/services/deportivo.jpg',
  },
  {
    name: 'Terapia Manual Ortopédica',
    description: 'Técnicas manuales especializadas para dolor musculoesquelético.',
    image: '/images/services/manual-ortopedica.jpg',
  },
  {
    name: 'Tecarterapia',
    description: 'Tecnología de radiofrecuencia para acelerar la recuperación.',
    image: '/images/services/tecar.jpg',
  },
  {
    name: 'Masajes Terapéuticos',
    description: 'Alivio de tensión muscular y mejora de la circulación.',
    image: '/images/services/masajes-terapeuticos.jpg',
  },
  {
    name: 'Rehabilitación Pre y Post Cirugía',
    description: 'Preparación y recuperación integral para intervenciones quirúrgicas.',
    image: '/images/services/pre-post.jpg',
  },
];

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function SpecializedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold mb-6">
            Nuestros Tratamientos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-6">
            Servicios Especializados
          </h2>
          <p className="text-base md:text-lg text-[#64748B] leading-relaxed max-w-3xl mx-auto mb-6">
            Soluciones avanzadas de fisioterapia y rehabilitación diseñadas para ayudarle a recuperarse más rápido, reducir el dolor y volver a las actividades que más disfruta.
          </p>
          <Link
            href="/servicios-especializados"
            className="group inline-flex items-center gap-2 text-[#1E88A8] font-semibold text-lg hover:text-[#0E3A4A] transition-colors duration-300"
          >
            Leer más
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
            >
              <Link
                href="/servicios-especializados"
                className="group block bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:border-[#1E88A8]/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A4A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-bold text-[#0E3A4A] mb-2 group-hover:text-[#1E88A8] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-[#0E3A4A] font-medium mb-6">
            ¿Necesita ayuda para elegir el tratamiento adecuado?
          </p>
          <a
            href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20cita.%0AParte%20del%20cuerpo%20que%20me%20duele:"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:bg-[#20BA5C] hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar Valoración
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
