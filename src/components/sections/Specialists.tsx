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
    image: '/images/assets/emmapicture.webp',
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
    image: '/images/assets/yamilapic.webp',
    credentials: [
      { icon: GraduationCap, label: 'Lic. en', sublabel: 'Fisioterapia' },
      { icon: Briefcase, label: '10+ años en', sublabel: 'atención al paciente' },
      { icon: Award, label: 'Masaje Terapéutico y', sublabel: 'Cuidado Preventivo' },
    ],
    certifications: [
      'Fisioterapeuta Licenciada',
      'Certificada en Masaje Terapéutico',
      'Especialista en Cuidado Preventivo',
      'Certificada en Ondas de Choque',
    ],
  },
];

export default function Specialists() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="specialists" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-[#06B8BF] text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            Nuestros Especialistas
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4 sm:mb-6">
            Profesionales que te acompañan
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto px-2">
            Experiencia, formación y vocación para ayudarte a recuperar tu mejor versión.
          </p>
        </motion.div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {specialists.map((specialist, index) => (
            <motion.article
              key={specialist.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <div className="bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden h-full flex flex-col">
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
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#06B8BF] to-[#06B8BF]">
                      <span className="text-6xl font-bold text-white">
                        {specialist.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex-1 flex flex-col">
                  {/* Name & Role */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-1">
                    {specialist.name}
                  </h3>
                  <p className="text-base sm:text-lg text-[#06B8BF] font-semibold mb-3 sm:mb-4">
                    {specialist.role}
                  </p>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed mb-4 sm:mb-6">
                    {specialist.description}
                  </p>

                  {/* Credentials Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-100">
                    {specialist.credentials.map((cred, idx) => {
                      const IconComponent = cred.icon;
                      return (
                        <div key={idx} className="flex items-start gap-2 sm:gap-2.5">
                          <IconComponent size={16} className="text-[#06B8BF] mt-0.5 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                          <div className="text-[12px] sm:text-[13px] text-[#64748B] leading-tight">
                            <span>{cred.label}</span>
                            <br />
                            <span className="font-medium text-[#475569]">{cred.sublabel}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {specialist.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-[#8DC741]/10 text-[#6B9930] border border-[#8DC741]/30"
                      >
                        <CheckCircle size={10} className="text-[#8DC741] sm:w-3 sm:h-3" />
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
