'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ChevronRight,
  Clock,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

// WhatsApp Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Body zone icons as simple SVGs for premium feel
const BodyIcons = {
  neck: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="6" r="3"/>
      <path d="M12 9v6M9 12h6"/>
    </svg>
  ),
  back: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2v20M8 6c0 2 4 2 4 4s-4 2-4 4 4 2 4 4"/>
    </svg>
  ),
  shoulder: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="8" r="3"/>
      <path d="M5 14c0-2 3-4 7-4s7 2 7 4"/>
    </svg>
  ),
  knee: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 4v7M12 11c-2 0-4 2-4 5v4M12 11c2 0 4 2 4 5v4"/>
      <circle cx="12" cy="11" r="2"/>
    </svg>
  ),
  foot: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 18c0-2 2-4 6-4h4c4 0 6 2 6 4v2H4v-2z"/>
      <ellipse cx="12" cy="10" rx="4" ry="2"/>
    </svg>
  ),
  elbow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M6 4v8c0 2 2 4 4 4h4c2 0 4-2 4-4V4"/>
      <circle cx="10" cy="12" r="2"/>
    </svg>
  ),
};

interface BodyZone {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  sessions: string;
  icon: keyof typeof BodyIcons;
}

const bodyZones: BodyZone[] = [
  {
    id: 'neck',
    name: 'Cuello y Cervicales',
    shortDesc: 'Tensión cervical, dolor de cabeza, rigidez',
    description: 'La tensión cervical suele estar relacionada con malas posturas, estrés o movimientos repetitivos. Nuestro enfoque restaura la movilidad y elimina el dolor de raíz.',
    symptoms: [
      'Dolor al girar la cabeza',
      'Rigidez cervical',
      'Dolores de cabeza tensionales',
      'Tensión acumulada en hombros'
    ],
    treatments: [
      'Terapia Manual Ortopédica',
      'Terapia TECAR',
      'Ejercicio Terapéutico',
      'Corrección Postural'
    ],
    sessions: '4-6 sesiones',
    icon: 'neck'
  },
  {
    id: 'back',
    name: 'Espalda',
    shortDesc: 'Dolor lumbar, ciática, hernias',
    description: 'El dolor de espalda es la causa número uno de incapacidad funcional. Diseñamos planes específicos para descomprimir la columna y fortalecer el soporte muscular.',
    symptoms: [
      'Dolor sordo constante en la cintura',
      'Pinchazos al agacharse',
      'Entumecimiento hacia piernas',
      'Dificultad para estar de pie'
    ],
    treatments: [
      'Movilización Vertebral',
      'Fortalecimiento del Core',
      'Ondas de Choque',
      'Descompresión Espinal'
    ],
    sessions: '6-8 sesiones',
    icon: 'back'
  },
  {
    id: 'shoulder',
    name: 'Hombros',
    shortDesc: 'Manguito rotador, hombro congelado',
    description: 'Las lesiones del manguito rotador y el hombro congelado limitan drásticamente tu día a día. Tratamos la inflamación de raíz para recuperar tu rango de movimiento.',
    symptoms: [
      'Dolor al levantar el brazo',
      'Molestia al dormir de lado',
      'Debilidad al sostener objetos',
      'Pérdida de flexibilidad'
    ],
    treatments: [
      'Estabilización Escapular',
      'Liberación de Tendones',
      'Terapia TECAR',
      'Ejercicios de Movilidad'
    ],
    sessions: '5-8 sesiones',
    icon: 'shoulder'
  },
  {
    id: 'knee',
    name: 'Rodillas',
    shortDesc: 'Lesiones de ligamentos, artrosis',
    description: 'Ya sea una lesión de ligamentos por deporte o desgaste articular, devolvemos la fuerza y estabilidad a tus rodillas para que te muevas con confianza.',
    symptoms: [
      'Dolor al subir escaleras',
      'Sensación de inestabilidad',
      'Inflamación después del ejercicio',
      'Rigidez matutina'
    ],
    treatments: [
      'Reeducación de Marcha',
      'Fortalecimiento Excéntrico',
      'Terapia Manual',
      'Ondas de Choque'
    ],
    sessions: '5-7 sesiones',
    icon: 'knee'
  },
  {
    id: 'foot',
    name: 'Pie y Tobillo',
    shortDesc: 'Fascitis plantar, esguinces',
    description: 'La fascitis plantar y los esguinces crónicos responden excepcionalmente bien a nuestras terapias de ondas acústicas combinadas con ejercicios de carga progresiva.',
    symptoms: [
      'Dolor en el talón al despertar',
      'Molestia en el arco del pie',
      'Inestabilidad crónica',
      'Dolor al caminar prolongado'
    ],
    treatments: [
      'Ondas de Choque',
      'Terapia Manual',
      'Ejercicios de Carga',
      'Estudio de Pisada'
    ],
    sessions: '4-6 sesiones',
    icon: 'foot'
  },
  {
    id: 'elbow',
    name: 'Codo y Muñeca',
    shortDesc: 'Epicondilitis, túnel carpiano',
    description: 'El codo de tenista y el síndrome del túnel carpiano son lesiones por esfuerzo repetitivo. Reducimos la inflamación nerviosa y muscular rápidamente.',
    symptoms: [
      'Dolor al sujetar objetos',
      'Adormecimiento en dedos',
      'Sensibilidad en el codo',
      'Debilidad de agarre'
    ],
    treatments: [
      'Liberación Miofascial',
      'Neurodinamia',
      'Terapia TECAR',
      'Ergonomía'
    ],
    sessions: '4-6 sesiones',
    icon: 'elbow'
  }
];

export default function PainDiagnostic() {
  const [selectedZone, setSelectedZone] = useState<BodyZone>(bodyZones[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const IconComponent = BodyIcons[selectedZone.icon];

  return (
    <section
      ref={ref}
      id="conditions"
      className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-white pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header - Premium typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#0E3A4A] mb-5 leading-[1.1] tracking-tight">
            ¿Dónde Sientes Dolor?
          </h2>
          <p className="text-[17px] sm:text-[18px] md:text-[20px] text-[#64748B] leading-relaxed">
            Selecciona la zona afectada para conocer los síntomas más comunes,
            posibles causas y el tratamiento recomendado.
          </p>
        </motion.div>

        {/* Main interactive layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">

          {/* Left Column: Zone selector (35%) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            {bodyZones.map((zone) => {
              const isActive = selectedZone.id === zone.id;
              const ZoneIcon = BodyIcons[zone.icon];

              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-[#0E3A4A] border-[#0E3A4A] shadow-lg shadow-[#0E3A4A]/15'
                      : 'bg-white border-[#E5E7EB] hover:border-[#1E88A8]/40 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Icon */}
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? 'bg-[#35B7C8]/20 text-[#5EEAD4]'
                          : 'bg-[#F1F5F9] text-[#1E88A8] group-hover:bg-[#1E88A8]/10'
                      }`}>
                        <ZoneIcon />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className={`font-semibold text-[16px] sm:text-[17px] transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-[#0E3A4A]'
                        }`}>
                          {zone.name}
                        </p>
                        <p className={`text-[13px] sm:text-[14px] mt-0.5 truncate transition-colors duration-300 ${
                          isActive ? 'text-white/70' : 'text-[#64748B]'
                        }`}>
                          {zone.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      size={20}
                      className={`flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'text-[#5EEAD4] translate-x-0'
                          : 'text-[#CBD5E1] group-hover:text-[#1E88A8] group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Dynamic panel (65%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 md:p-10 min-h-[500px] lg:min-h-[580px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedZone.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
                    <div>
                      <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0E3A4A] leading-tight">
                        {selectedZone.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#1E88A8]/10 rounded-full">
                      <Clock size={16} className="text-[#1E88A8]" />
                      <span className="text-[13px] sm:text-[14px] font-semibold text-[#1E88A8]">
                        {selectedZone.sessions}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-6">
                    <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed">
                      {selectedZone.description}
                    </p>
                  </div>

                  {/* Symptoms */}
                  <div className="mt-8">
                    <h4 className="text-[13px] sm:text-[14px] font-bold text-[#0E3A4A] uppercase tracking-wider mb-4">
                      Síntomas Frecuentes
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedZone.symptoms.map((symptom, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-[14px] sm:text-[15px] text-[#64748B]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 flex-shrink-0" />
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Treatments */}
                  <div className="mt-8">
                    <h4 className="text-[13px] sm:text-[14px] font-bold text-[#0E3A4A] uppercase tracking-wider mb-4">
                      Tratamiento Recomendado
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedZone.treatments.map((treatment, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-[14px] sm:text-[15px] text-[#64748B]"
                        >
                          <CheckCircle2 size={16} className="text-[#10B981] flex-shrink-0" />
                          <span>{treatment}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <a
                      href="https://wa.me/50689680947"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 h-[52px] sm:h-[56px] px-8 bg-[#25D366] text-white rounded-full font-semibold text-[15px] shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/35"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>Agendar Evaluación</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1E88A8]/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-[#1E88A8]" />
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#475569]">
                ¿No estás seguro de qué tratamiento necesitas?
              </p>
            </div>
            <a
              href="https://wa.me/50689680947"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E5E7EB] rounded-full text-[14px] sm:text-[15px] font-semibold text-[#0E3A4A] hover:border-[#1E88A8] hover:text-[#1E88A8] transition-all duration-300"
            >
              Hablar con un Especialista
              <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
