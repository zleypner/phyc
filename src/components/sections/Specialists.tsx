'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import Image from 'next/image';

const specialists = [
  {
    name: 'Lic. Enmanuel Li',
    role: 'Fisioterapeuta Principal',
    credentials: 'Lic. en Fisioterapia',
    experience: '9+ años en rehabilitación',
    specialty: 'Rehabilitación Deportiva y Terapia Manual',
    certifications: [
      'Terapeuta Manual Certificado',
      'Especialista en Rehabilitación Deportiva',
      'Certificado en Ondas de Choque',
    ],
    image: '/specialists/enmanuel.png',
    description:
      'Especializado en lesiones deportivas y casos ortopédicos complejos, aportando enfoques de tratamiento innovadores a cada paciente.',
  },
  {
    name: 'Yamilah Solano',
    role: 'Fisioterapeuta',
    credentials: 'Lic. en Fisioterapia',
    experience: '5+ años en atención al paciente',
    specialty: 'Masaje Terapéutico y Cuidado Preventivo',
    certifications: [
      'Fisioterapeuta Licenciada',
      'Certificada en Masaje Terapéutico',
      'Especialista en Cuidado Preventivo',
    ],
    image: '/specialists/yamilah.png',
    description:
      'Dedicada al cuidado preventivo y masaje terapéutico, ayudando a los pacientes a mantener una salud óptima y prevenir lesiones.',
  },
];

export default function Specialists() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="specialists" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[680px] mx-auto mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-semibold uppercase tracking-wide mb-4">
            Nuestros Especialistas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0E3A4A] mb-5 leading-tight">
            Profesionales que Te Acompañan
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Experiencia, formación y vocación para ayudarte a recuperar tu mejor versión.
          </p>
        </motion.div>

        {/* Specialists Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 max-w-5xl mx-auto">
          {specialists.map((specialist, index) => (
            <motion.article
              key={specialist.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-[28px] border border-[rgba(15,23,42,0.08)] shadow-[0_4px_20px_rgba(14,58,74,0.08)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(14,58,74,0.12)]">
                {/* Image Container */}
                <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] overflow-hidden">
                  {specialist.image ? (
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-5xl font-bold text-white">
                          {specialist.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Name & Role */}
                  <div className="mb-5">
                    <h3 className="text-2xl sm:text-[28px] font-bold text-[#0E3A4A] mb-2 leading-tight">
                      {specialist.name}
                    </h3>
                    <p className="text-lg sm:text-xl text-[#1E88A8] font-semibold">
                      {specialist.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base text-[#475569] leading-[1.7] mb-6">
                    {specialist.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-[rgba(15,23,42,0.08)] mb-6" />

                  {/* Credentials Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={20} className="text-[#1E88A8]" />
                      </div>
                      <span className="text-sm text-[#475569] leading-snug">
                        {specialist.credentials}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={20} className="text-[#1E88A8]" />
                      </div>
                      <span className="text-sm text-[#475569] leading-snug">
                        {specialist.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0">
                        <Award size={20} className="text-[#1E88A8]" />
                      </div>
                      <span className="text-sm text-[#475569] leading-snug">
                        {specialist.specialty}
                      </span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2.5">
                    {specialist.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-[#1E88A8]/8 text-[#0E3A4A] transition-colors hover:bg-[#1E88A8]/12"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-7 bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] text-white rounded-2xl font-semibold text-base shadow-[0_4px_14px_rgba(30,136,168,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,136,168,0.45)]"
          >
            <Calendar size={20} />
            Agenda Tu Cita con Nuestros Especialistas
          </a>
        </motion.div>
      </div>
    </section>
  );
}
