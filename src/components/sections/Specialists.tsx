'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const specialists = [
  {
    name: 'Lic. Enmanuel Li',
    role: 'Fisioterapeuta',
    description:
      'Especializado en lesiones deportivas y casos ortopédicos complejos, aportando enfoques de tratamiento innovadores a cada paciente.',
    image: '/specialists/enmanuel.png',
    credentials: [
      { icon: GraduationCap, label: 'Lic. en', sublabel: 'Fisioterapia' },
      { icon: Briefcase, label: '15+ años en', sublabel: 'rehabilitación' },
      { icon: Award, label: 'Rehabilitación Deportiva', sublabel: 'y Terapia Manual Ortopédica' },
    ],
    certifications: [
      'Terapeuta Manual Certificado',
      'Especialista en Rehabilitación Deportiva',
      'Certificado en Ondas de Choque',
    ],
  },
  {
    name: 'Yamilah Solano',
    role: 'Fisioterapeuta',
    description:
      'Dedicada al cuidado preventivo y masaje terapéutico, ayudando a los pacientes a mantener una salud óptima y prevenir lesiones.',
    image: '/specialists/yamilah.png',
    credentials: [
      { icon: GraduationCap, label: 'Lic. en', sublabel: 'Fisioterapia' },
      { icon: Briefcase, label: '10+ años en', sublabel: 'atención al paciente' },
      { icon: Award, label: 'Masaje Terapéutico y', sublabel: 'Cuidado Preventivo' },
    ],
    certifications: [
      'Fisioterapeuta Licenciada',
      'Certificada en Masaje Terapéutico',
      'Especialista en Cuidado Preventivo',
    ],
  },
];

export default function Specialists() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="specialists" className="py-20 md:py-28 lg:py-36 bg-[#F8FAFC]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#1E88A8] text-sm md:text-base font-semibold uppercase tracking-widest mb-3">
            Nuestros Especialistas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-4">
            Profesionales que te acompañan
          </h2>
          <p className="text-base md:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Experiencia, formación y vocación para ayudarte a recuperar tu mejor versión.
          </p>
        </motion.div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {specialists.map((specialist, index) => (
            <motion.article
              key={specialist.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  {specialist.image ? (
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E88A8] to-[#35B7C8]">
                      <span className="text-6xl font-bold text-white">
                        {specialist.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Name & Role */}
                  <h3 className="text-2xl font-bold text-[#0E3A4A] mb-1">
                    {specialist.name}
                  </h3>
                  <p className="text-lg text-[#1E88A8] font-semibold mb-4">
                    {specialist.role}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] text-[#64748B] leading-relaxed mb-6">
                    {specialist.description}
                  </p>

                  {/* Credentials Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
                    {specialist.credentials.map((cred, idx) => {
                      const IconComponent = cred.icon;
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <IconComponent size={18} className="text-[#1E88A8] mt-0.5 flex-shrink-0" />
                          <div className="text-xs text-[#64748B] leading-tight">
                            <span>{cred.label}</span>
                            <br />
                            <span className="font-medium text-[#475569]">{cred.sublabel}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2">
                    {specialist.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]"
                      >
                        <CheckCircle size={12} className="text-[#22C55E]" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
