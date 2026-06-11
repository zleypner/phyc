'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuántas sesiones necesitaré?',
    answer:
      'El número de sesiones varía según su condición, severidad y objetivos individuales. Durante su evaluación inicial, le proporcionaremos un plan de tratamiento personalizado con un cronograma estimado. La mayoría de los pacientes ven una mejora significativa dentro de 4 a 8 sesiones, aunque algunas condiciones pueden requerir un tratamiento más prolongado.',
  },
  {
    question: '¿Necesito una referencia de un médico?',
    answer:
      'No, no necesita una referencia para atenderse con nosotros. Ofrecemos acceso directo a los servicios de fisioterapia. Sin embargo, si tiene informes médicos, imágenes o una referencia de su médico de cabecera, por favor tráigalos a su primera cita, ya que pueden ser de gran ayuda para su evaluación.',
  },
  {
    question: '¿Tratan lesiones deportivas?',
    answer:
      '¡Sí! La rehabilitación deportiva es una de nuestras principales especialidades. Tratamos a atletas de todos los niveles, desde deportistas recreativos hasta competidores profesionales. Nuestros programas de retorno al deporte están diseñados no solo para ayudarle a recuperarse, sino también para mejorar su rendimiento y prevenir futuras lesiones.',
  },
  {
    question: '¿Qué debo llevar a mi primera cita?',
    answer:
      'Por favor traiga ropa cómoda que permita el acceso a la zona afectada, cualquier informe médico o imágenes relevantes (radiografías, resonancias magnéticas, etc.), una lista de sus medicamentos actuales, su identificación y la información del seguro si aplica. Le recomendamos llegar de 10 a 15 minutos antes para completar cualquier documentación necesaria.',
  },
  {
    question: '¿Ofrecen consultas en línea?',
    answer:
      'Sí, ofrecemos evaluaciones virtuales y consultas de seguimiento para pacientes que no pueden visitarnos en persona. Esto es particularmente útil para pacientes internacionales que planean su visita, consultas iniciales o citas de seguimiento tras completar su tratamiento presencial.',
  },
  {
    question: '¿Cuáles son las opciones de pago?',
    answer:
      'Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias. También trabajamos con varios proveedores de seguros. El pago generalmente se realiza al momento del servicio, y podemos proporcionarle facturas detalladas para el reembolso de su seguro.',
  },
  {
    question: '¿Cuánto duran las sesiones de tratamiento?',
    answer:
      'Las evaluaciones iniciales suelen durar entre 45 y 60 minutos para permitir una valoración exhaustiva. Las sesiones de tratamiento de seguimiento suelen durar entre 30 y 45 minutos, según su plan de tratamiento y las terapias involucradas.',
  },
  {
    question: '¿Qué es la terapia de ondas de choque y es dolorosa?',
    answer:
      'La terapia de ondas de choque es un tratamiento no invasivo que utiliza ondas acústicas para promover la curación de los tejidos y reducir el dolor. La mayoría de los pacientes experimentan una leve molestia durante el tratamiento, pero generalmente se tolera muy bien. La intensidad se puede ajustar según su nivel de comodidad.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="section-padding bg-[#F4F7F8]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              ¿Tiene preguntas? Hemos recopilado respuestas a las dudas más comunes
              sobre nuestros servicios y tratamientos de rehabilitación.
            </p>

            {/* Contact prompt */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={22} className="text-[#1E88A8]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0E3A4A] mb-1">
                    ¿Aún tiene preguntas?
                  </h4>
                  <p className="text-sm text-[#6B7280] mb-4">
                    ¿No encuentra la respuesta que busca? No dude en ponerse en contacto con nuestro equipo.
                  </p>
                  <a
                    href="#contact"
                    className="text-[#1E88A8] font-medium text-sm hover:text-[#0E3A4A] transition-colors"
                  >
                    Contáctenos →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    className={`bg-white rounded-2xl overflow-hidden transition-shadow ${
                      openIndex === index ? 'shadow-lg' : 'shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-[#0E3A4A] pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          size={20}
                          className={
                            openIndex === index
                              ? 'text-[#1E88A8]'
                              : 'text-[#9CA3AF]'
                          }
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-5 text-[#6B7280]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
