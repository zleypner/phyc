'use client';

import { useRef, useState, useCallback, useId } from 'react';
import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, MessageCircle, CheckCircle, Clock, Shield } from 'lucide-react';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const faqs = [
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

const trustBadges = [
  {
    icon: CheckCircle,
    title: 'Información confiable',
    description: 'Respuestas elaboradas por profesionales médicos.',
  },
  {
    icon: Clock,
    title: 'Respuesta rápida',
    description: 'Te respondemos en el menor tiempo posible.',
  },
  {
    icon: Shield,
    title: 'Privacidad garantizada',
    description: 'Tus datos y consultas están protegidos.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % faqs.length;
      document.getElementById(`${baseId}-header-${nextIndex}`)?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = index === 0 ? faqs.length - 1 : index - 1;
      document.getElementById(`${baseId}-header-${prevIndex}`)?.focus();
    }
    if (e.key === 'Home') {
      e.preventDefault();
      document.getElementById(`${baseId}-header-0`)?.focus();
    }
    if (e.key === 'End') {
      e.preventDefault();
      document.getElementById(`${baseId}-header-${faqs.length - 1}`)?.focus();
    }
  }, [baseId]);

  return (
    <section ref={ref} id="faq" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#F8FBFC] via-[#F0F7F9] to-[#E8F4F6] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#5EEAD4]/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#1E88A8]/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
      </div>

      {/* Bottom decorative plants */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none opacity-40">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" className="hidden lg:block">
          <path d="M30 300 C30 220, 70 180, 50 100 C30 20, 80 0, 80 0" stroke="rgba(94, 234, 212, 0.4)" strokeWidth="2" fill="none"/>
          <path d="M50 100 C70 80, 100 90, 80 60" stroke="rgba(94, 234, 212, 0.3)" strokeWidth="1.5" fill="none"/>
          <ellipse cx="80" cy="50" rx="25" ry="40" fill="rgba(94, 234, 212, 0.08)" transform="rotate(-15 80 50)"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none opacity-30">
        <svg width="180" height="280" viewBox="0 0 180 280" fill="none" className="hidden lg:block">
          <path d="M150 280 C150 200, 100 160, 130 80 C160 0, 100 0, 100 0" stroke="rgba(94, 234, 212, 0.35)" strokeWidth="2" fill="none"/>
          <ellipse cx="130" cy="60" rx="30" ry="45" fill="rgba(94, 234, 212, 0.06)" transform="rotate(20 130 60)"/>
        </svg>
      </div>

      <div className="container px-4 sm:px-6 relative z-20">
        {/* Header - Now on top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] text-[#1E88A8] text-sm font-semibold mb-6 shadow-sm">
            <MessageCircle size={16} />
            Preguntas Frecuentes
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-[#0E3A4A] leading-[1.15] tracking-[-0.02em] mb-5">
            Resolvemos tus{' '}
            <span className="bg-gradient-to-r from-[#1E88A8] to-[#35B7C8] bg-clip-text text-transparent">
              dudas
            </span>
          </h2>

          {/* Description */}
          <p className="text-[15px] sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros tratamientos? Hemos preparado respuestas detalladas a las inquietudes más habituales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Left Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const headerId = `${baseId}-header-${index}`;
              const panelId = `${baseId}-panel-${index}`;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'shadow-lg shadow-[#0E3A4A]/8'
                        : 'shadow-sm hover:shadow-md'
                    }`}
                  >
                    {/* Left accent border for active item */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                        isOpen ? 'bg-gradient-to-b from-[#1E88A8] to-[#5EEAD4]' : 'bg-transparent'
                      }`}
                    />

                    <button
                      id={headerId}
                      onClick={() => handleToggle(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full px-5 sm:px-6 py-5 flex items-center justify-between text-left group cursor-pointer gap-4 bg-transparent border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88A8] focus-visible:ring-inset"
                    >
                      {/* Question */}
                      <span
                        className={`font-semibold text-[15px] sm:text-base transition-colors duration-300 flex-1 ${
                          isOpen ? 'text-[#0E3A4A]' : 'text-[#0E3A4A] group-hover:text-[#1E88A8]'
                        }`}
                      >
                        {faq.question}
                      </span>
                      {/* Plus/Minus Icon */}
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#1E88A8] text-white'
                            : 'bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#1E88A8]/10 group-hover:text-[#1E88A8]'
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={16} strokeWidth={2.5} />
                        ) : (
                          <Plus size={16} strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={headerId}
                          initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#64748B] text-[14px] sm:text-[15px] leading-[1.75]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column - Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32 lg:self-start"
          >
            {/* Support Card */}
            <div className="bg-gradient-to-br from-[#0E3A4A] via-[#155E75] to-[#1E88A8] rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-[#0E3A4A]/15 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -right-6 -bottom-6 opacity-10">
                <MessageCircle size={120} />
              </div>

              {/* Chat icon */}
              <div className="w-12 h-12 rounded-xl bg-[#5EEAD4]/20 flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-[#5EEAD4]" />
              </div>

              <h3 className="text-lg font-bold mb-2 text-white">¿Aún tienes preguntas?</h3>
              <p className="text-white text-sm leading-relaxed mb-5">
                Estamos aquí para ayudarte. Escríbenos y te responderemos.
              </p>

              <a
                href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20cita.%0AParte%20del%20cuerpo%20que%20me%20duele:"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-[#0E3A4A] font-semibold py-3 px-5 rounded-xl transition-all duration-300 hover:bg-[#5EEAD4] hover:shadow-lg text-sm group"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Preguntar por WhatsApp
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-3">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm">
                    <badge.icon size={18} className="text-[#1E88A8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0E3A4A] text-sm">{badge.title}</p>
                    <p className="text-[12px] text-[#64748B] leading-snug">{badge.description}</p>
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
