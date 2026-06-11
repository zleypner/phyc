'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Activity, 
  ChevronRight, 
  Activity as HeartIcon, 
  Clock, 
  HelpCircle,
  ShieldAlert
} from 'lucide-react';

interface PainArea {
  id: string;
  name: string;
  mappedService: string;
  symptoms: string[];
  treatment: string;
  expectedSessions: string;
  description: string;
}

const painAreas: PainArea[] = [
  {
    id: 'neck',
    name: 'Cuello y Cervicales',
    mappedService: 'Rehabilitación Física',
    symptoms: ['Dolor al girar la cabeza', 'Tensión acumulada en hombros', 'Dolores de cabeza de origen tensional', 'Rigidez cervical'],
    treatment: 'Combinación de Terapia Manual Ortopédica para liberar articulaciones y Terapia TECAR de radiofrecuencia profunda para relajar los espasmos musculares.',
    expectedSessions: '4 a 6 sesiones',
    description: 'La tensión en el cuello suele deberse a malas posturas en el escritorio, estrés o latigazo cervical. Nuestro enfoque restaura la movilidad sin dolor.'
  },
  {
    id: 'back',
    name: 'Espalda (Lumbar / Dorsal)',
    mappedService: 'Rehabilitación Física',
    symptoms: ['Dolor sordo constante en la cintura', 'Pinchazos al agacharse', 'Entumecimiento que irradia a los glúteos', 'Dificultad para estar de pie'],
    treatment: 'Movilización vertebral pasiva, ejercicios de fortalecimiento del núcleo (core) y Terapia de Ondas de Choque si hay fibrosis o dolor crónico.',
    expectedSessions: '6 a 8 sesiones',
    description: 'El dolor lumbar es la causa número uno de incapacidad funcional. Diseñamos planes específicos para descomprimir la columna y fortalecer el soporte muscular.'
  },
  {
    id: 'shoulder',
    name: 'Hombro y Brazos',
    mappedService: 'Rehabilitación Física',
    symptoms: ['Dolor al levantar el brazo lateralmente', 'Molestia aguda al dormir de lado', 'Debilidad al sostener objetos', 'Pérdida de flexibilidad'],
    treatment: 'Protocolo de estabilización escapular, liberación de tendones del manguito rotador y Terapia TECAR para acelerar la regeneración de tejidos.',
    expectedSessions: '5 a 8 sesiones',
    description: 'Las lesiones del manguito rotador y el hombro congelado limitan drásticamente tu día a día. Tratamos la inflamación de raíz para recuperar tu rango de movimiento.'
  },
  {
    id: 'knee',
    name: 'Rodilla y Piernas',
    mappedService: 'Rehabilitación Deportiva',
    symptoms: ['Dolor al subir o bajar escaleras', 'Sensación de inestabilidad o "fallo"', 'Inflamación después de hacer ejercicio', 'Rigidez matutina'],
    treatment: 'Reeducación de la marcha, fortalecimiento excéntrico del cuádriceps, terapia manual de la rótula y Ondas de Choque focalizadas.',
    expectedSessions: '5 a 7 sesiones',
    description: 'Ya sea una lesión de ligamentos por deporte o desgaste articular (artrosis), devolvemos la fuerza y la estabilidad a tus rodillas para que te muevas con confianza.'
  },
  {
    id: 'foot',
    name: 'Pie y Tobillo',
    mappedService: 'Terapia de Ondas de Choque',
    symptoms: ['Dolor agudo en el talón al dar los primeros pasos del día', 'Molestia en el arco del pie', 'Inestabilidad crónica tras un esguince mal curado'],
    treatment: 'Tratamiento especializado con Ondas de Choque acústicas de alta energía para desintegrar calcificaciones y estudio de pisada para plantillas personalizadas.',
    expectedSessions: '4 a 6 sesiones',
    description: 'La fascitis plantar y los esguinces crónicos responden excepcionalmente bien a nuestras terapias de ondas acústicas avanzadas combinadas con ejercicios de carga progresiva.'
  },
  {
    id: 'elbow',
    name: 'Codo y Muñeca',
    mappedService: 'Rehabilitación Física',
    symptoms: ['Dolor al sujetar una taza o girar una llave', 'Adormecimiento en los dedos (túnel carpiano)', 'Sensibilidad en la parte externa del codo (epicondilitis)'],
    treatment: 'Liberación miofascial de los flexores/extensores del antebrazo, estiramientos específicos de nervios periféricos y Terapia TECAR.',
    expectedSessions: '4 a 6 sesiones',
    description: 'El codo de tenista o golfista y el síndrome del túnel carpiano suelen ser lesiones por esfuerzo repetitivo. Reducimos la inflamación nerviosa y muscular rápidamente.'
  }
];

export default function PainMap() {
  const [selectedArea, setSelectedArea] = useState<PainArea>(painAreas[1]); // Default to back
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleBookAppointment = () => {
    // Dispatch custom event to select service in contact form
    const event = new CustomEvent('select-service', { 
      detail: { service: selectedArea.mappedService } 
    });
    window.dispatchEvent(event);
    
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="pain-map" className="section-padding bg-white relative">
      {/* Decorative background shapes - contained within viewport */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#1E88A8]/5 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 0 }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#35B7C8]/5 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 0 }} />

      <div className="container relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#1E88A8] text-sm md:text-base font-medium uppercase tracking-wider mb-2">
            Autoevaluación Rápida
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-4">
            ¿Dónde Sientes Molestia o Dolor?
          </h2>
          <div className="w-24 h-0.5 bg-[#1E88A8] mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto">
            Selecciona la zona afectada para comprender mejor tus síntomas y ver nuestra recomendación de tratamiento personalizado basado en evidencia.
          </p>
        </motion.div>

        {/* Interactive layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Anatomical Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            <h3 className="text-xl font-bold text-[#0E3A4A] mb-2 flex items-center gap-2">
              <Activity className="text-[#1E88A8]" size={20} />
              Selecciona una Zona Corporal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {painAreas.map((area) => {
                const isActive = selectedArea.id === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#0E3A4A] border-[#0E3A4A] text-white shadow-lg shadow-[#0E3A4A]/20'
                        : 'bg-[#F4F7F8] border-[#E5E7EB] text-[#0E3A4A] hover:bg-[#E8ECEE] hover:border-[#D1D5DB] hover:shadow-md'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className={`font-semibold text-lg ${isActive ? 'text-white' : 'text-[#0E3A4A]'}`}>
                        {area.name}
                      </p>
                      <p className={`text-xs mt-1 ${isActive ? 'text-[#35B7C8]' : 'text-[#6B7280]'}`}>
                        Plan recomendado: {area.mappedService}
                      </p>
                    </div>
                    <ChevronRight size={18} className={`flex-shrink-0 ml-2 ${isActive ? 'text-[#35B7C8]' : 'text-[#9CA3AF]'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Recommendation Details */}
          <div className="lg:col-span-7 flex">
            <div className="bg-[#F4F7F8] border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 md:p-10 w-full flex flex-col justify-between shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedArea.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-grow"
                >
                  {/* Title and Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#1E88A8] font-bold">Diagnóstico preliminar</span>
                      <h4 className="text-2xl md:text-3xl font-extrabold text-[#0E3A4A] mt-1">{selectedArea.name}</h4>
                    </div>
                    <div className="bg-[#1E88A8]/10 text-[#1E88A8] px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-[#1E88A8]/20">
                      <Clock size={14} />
                      Duración estimada: {selectedArea.expectedSessions}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h5 className="font-bold text-[#0E3A4A] text-sm uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <HelpCircle size={16} className="text-[#1E88A8]" />
                      Sobre esta condición
                    </h5>
                    <p className="text-[#6B7280] leading-relaxed">{selectedArea.description}</p>
                  </div>

                  {/* Symptoms */}
                  <div>
                    <h5 className="font-bold text-[#0E3A4A] text-sm uppercase tracking-wide mb-3 flex items-center gap-1.5">
                      <ShieldAlert size={16} className="text-red-500" />
                      Síntomas Frecuentes
                    </h5>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {selectedArea.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#6B7280]">
                          <span className="w-2 h-2 rounded-full bg-[#35B7C8] mt-1.5 flex-shrink-0" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment approach */}
                  <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 md:p-6 shadow-sm">
                    <h5 className="font-bold text-[#0E3A4A] text-sm uppercase tracking-wide mb-2 flex items-center gap-1.5">
                      <HeartIcon size={16} className="text-green-500" />
                      Enfoque de Tratamiento en Physical Care
                    </h5>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {selectedArea.treatment}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Button */}
              <div className="mt-8 border-t border-[#E5E7EB] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left sm:text-left w-full sm:w-auto">
                  <p className="text-xs text-[#9CA3AF]">Servicio sugerido para agendar</p>
                  <p className="font-bold text-[#0E3A4A]">{selectedArea.mappedService}</p>
                </div>
                <button
                  onClick={handleBookAppointment}
                  className="w-full sm:w-auto btn btn-primary cursor-pointer"
                >
                  Agendar Cita Para Esta Zona &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
