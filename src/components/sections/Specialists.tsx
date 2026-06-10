'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, GraduationCap, Briefcase, MessageCircle } from 'lucide-react';

const specialists = [
  {
    name: 'Lic. Enmanuel Li',
    role: 'Fisioterapeuta Principal',
    credentials: 'Lic. en Fisioterapia',
    experience: '9+ años en rehabilitación',
    specialty: 'Rehabilitación Deportiva y Terapia Manual Ortopédica',
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
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
            Conoce a Nuestros Especialistas
          </h2>
          <p className="text-lg text-[#6B7280]">
            Nuestro equipo de profesionales certificados combina experiencia, compasión y
            dedicación para brindar atención de rehabilitación excepcional.
          </p>
        </motion.div>

        {/* Specialists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialists.map((specialist, index) => (
            <motion.div
              key={specialist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#F4F7F8] rounded-3xl overflow-hidden card-hover">
                {/* Image container */}
                <div className="relative h-72 md:h-80 bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] overflow-hidden">
                  {specialist.image ? (
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold text-white">
                          {specialist.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#0E3A4A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-white text-[#0E3A4A] px-6 py-3 rounded-full font-medium hover:bg-[#F4F7F8] transition-colors shadow-lg"
                    >
                      <MessageCircle size={18} />
                      Agendar Cita
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0E3A4A] mb-1">
                    {specialist.name}
                  </h3>
                  <p className="text-[#1E88A8] font-medium mb-3">
                    {specialist.role}
                  </p>
                  <p className="text-sm text-[#6B7280] mb-4">
                    {specialist.description}
                  </p>

                  {/* Info badges */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <GraduationCap size={16} className="text-[#1E88A8]" />
                      {specialist.credentials}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <Briefcase size={16} className="text-[#1E88A8]" />
                      {specialist.experience}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <Award size={16} className="text-[#1E88A8]" />
                      {specialist.specialty}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2">
                    {specialist.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-[#1E88A8]/10 text-[#1E88A8] px-3 py-1.5 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
