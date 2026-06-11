'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="contact" className="py-20 md:py-28 lg:py-36 bg-[#FAFBFC]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            <MessageCircle size={16} />
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-4">
            Comienza Tu Recuperación
          </h2>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto">
            ¿Listo para dar el primer paso? Contáctenos por WhatsApp para programar su cita.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] rounded-3xl p-6 sm:p-8 md:p-10 text-white h-full">
              <h3 className="text-2xl md:text-[28px] font-semibold mb-8">Información de Contacto</h3>

              {/* Contact details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-lg">Nuestra Ubicación</h4>
                    <p className="text-white/75 text-[15px] leading-relaxed">
                      San Pedro de Montes de Oca<br />
                      San José, Costa Rica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-lg">Teléfono / WhatsApp</h4>
                    <a
                      href="tel:+50689680947"
                      className="text-white/75 text-[15px] hover:text-white transition-colors"
                    >
                      +506 8968-0947
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-lg">Correo Electrónico</h4>
                    <a
                      href="mailto:gerencia@physicalcarefisioterapia.com"
                      className="text-white/75 text-[15px] hover:text-white transition-colors break-all"
                    >
                      gerencia@physicalcarefisioterapia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-lg">Horario de Atención</h4>
                    <p className="text-white/75 text-[15px] leading-relaxed">
                      Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                      Sábado: Con cita previa
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[180px] bg-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.058741686894!2d-84.05436545!3d9.9318015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e35a5b5db887%3A0x5f5f5f5f5f5f5f5f!2sSan%20Pedro%2C%20Montes%20de%20Oca!5e0!3m2!1sen!2scr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Physical Care Fisioterapia"
                />
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl border border-[rgba(15,23,42,0.06)] shadow-[0_4px_24px_rgba(14,58,74,0.06)] p-6 sm:p-8 md:p-10 h-full flex flex-col justify-center">
              {/* WhatsApp Icon */}
              <div className="w-20 h-20 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                <WhatsAppIcon size={40} className="text-[#25D366]" />
              </div>

              <h3 className="text-2xl md:text-[28px] font-semibold text-[#0E3A4A] text-center mb-4">
                Agenda Tu Cita por WhatsApp
              </h3>

              <p className="text-[#64748B] text-center mb-8 leading-relaxed">
                Escríbenos directamente por WhatsApp para agendar tu cita de manera rápida y sencilla.
                Nuestro equipo te responderá a la brevedad.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-[#475569]">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px]">Respuesta rápida y personalizada</span>
                </div>
                <div className="flex items-center gap-3 text-[#475569]">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px]">Confirma tu cita al instante</span>
                </div>
                <div className="flex items-center gap-3 text-[#475569]">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px]">Resuelve tus dudas antes de la cita</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/50689680947"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-[#25D366] text-white h-14 rounded-2xl font-semibold text-base hover:bg-[#22C55E] transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={22} />
                Agendar Cita
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="text-[13px] text-[#94A3B8] text-center mt-6">
                Disponible de Lunes a Viernes, 8:00 AM - 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
