'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Compass,
} from 'lucide-react';

// Waze Official Logo Icon
const WazeIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.54 6.63c-1.62-2.93-4.74-4.64-8.54-4.64-5.12 0-9 3.37-9 8.5 0 2.6 1.14 4.82 3.07 6.37-.13.39-.37.75-.74 1.13-.66.66-1.57 1.12-2.58 1.34a.5.5 0 00-.1.97c1.56.39 3.27.24 4.77-.45.55-.26 1.04-.57 1.47-.93a11.8 11.8 0 003.11.42c5.12 0 9-3.37 9-8.5 0-1.57-.4-3.02-1.08-4.21h-.38zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
  </svg>
);

// WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
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

export default function ContactoPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#FAFBFC]">
      {/* Banner / Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] text-white pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#5EEAD4] text-sm font-semibold mb-4 backdrop-blur-md"
          >
            <Compass size={16} className="animate-spin-slow" />
            Contacto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-white"
          >
            Contacto & Ubicación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed px-2"
          >
            Estamos aquí para resolver tus dudas y acompañarte en tu proceso de rehabilitación.
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-10 pb-16 md:py-16 md:pb-20 lg:py-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:space-y-8"
          >
            {/* Row 1: Three cards - same size */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Contact Details */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl border border-[rgba(15,23,42,0.06)] shadow-sm p-5 sm:p-6 flex flex-col"
              >
                <h2 className="text-lg sm:text-xl font-bold text-[#0E3A4A] mb-4 sm:mb-5">
                  Información General
                </h2>

                <div className="space-y-4 flex-1">
                  {/* Location Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0 text-[#1E88A8]">
                      <MapPin size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm text-[#0E3A4A] mb-0.5">Dirección</h3>
                      <p className="text-[#475569] text-xs leading-relaxed">
                        Del Perimercados de Vargas Araya, 100m Norte.<br />
                        San Pedro, San José, Costa Rica.
                      </p>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0 text-[#1E88A8]">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm text-[#0E3A4A] mb-0.5">Teléfono</h3>
                      <a
                        href="tel:+50689680947"
                        className="text-[#1E88A8] text-xs font-medium hover:underline"
                      >
                        +506 8968-0947
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0 text-[#1E88A8]">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm text-[#0E3A4A] mb-0.5">Email</h3>
                      <a
                        href="mailto:gerencia@physicalcarefisioterapia.com"
                        className="text-[#1E88A8] text-xs font-medium hover:underline break-all"
                      >
                        gerencia@physicalcarefisioterapia.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Operating Hours */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl border border-[rgba(15,23,42,0.06)] shadow-sm p-5 sm:p-6 flex flex-col"
              >
                <h2 className="text-lg sm:text-xl font-bold text-[#0E3A4A] mb-4 sm:mb-5 flex items-center gap-2">
                  <Clock size={18} className="text-[#1E88A8]" />
                  Horarios
                </h2>

                <div className="divide-y divide-[rgba(15,23,42,0.06)] text-sm flex-1">
                  <div className="flex justify-between items-center gap-4 py-3">
                    <span className="font-medium text-[#475569]">Lunes - Viernes</span>
                    <span className="text-[#0E3A4A] font-semibold">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center gap-4 py-3">
                    <span className="font-medium text-[#475569]">Sábados</span>
                    <span className="text-[#1E88A8] font-semibold">Cita previa</span>
                  </div>
                  <div className="flex justify-between items-center gap-4 py-3">
                    <span className="font-medium text-[#475569]">Domingos</span>
                    <span className="text-[#E11D48] font-semibold">Cerrado</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: WhatsApp */}
              <motion.div
                variants={itemVariants}
                className="bg-[#25D366] rounded-2xl p-5 sm:p-6 shadow-sm relative overflow-hidden flex flex-col min-h-[220px]"
              >
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <WhatsAppIcon size={18} className="flex-shrink-0 text-white" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Contáctanos</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight text-white">
                    ¿Prefieres WhatsApp?
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">
                    Escríbenos para programar tu cita.
                  </p>
                  <a
                    href="https://wa.me/50689680947?text=Hola%20quiero%20agendar%20una%20cita.%20Parte%20del%20cuerpo%20que%20me%20duele:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#25D366] font-bold py-2.5 px-5 rounded-full hover:bg-slate-50 transition-colors shadow-lg text-sm w-fit"
                  >
                    <WhatsAppIcon size={18} />
                    Escribir Ahora
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Large Map with Navigation */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl border border-[rgba(15,23,42,0.06)] shadow-sm overflow-hidden"
            >
              {/* Map - Large */}
              <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-[#F4F7F8]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1448695574516!2d-84.05436545!3d9.9318015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e35a5b5db887%3A0x5f5f5f5f5f5f5f5f!2sSan%20Pedro%2C%20Montes%20de%20Oca!5e0!3m2!1sen!2scr!4v1718000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Ubicación de Physical Care Fisioterapia"
                />
              </div>

              {/* Navigation Buttons */}
              <div className="p-5 sm:p-6 border-t border-[rgba(15,23,42,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-base font-semibold text-[#0E3A4A]">
                    ¿Cómo llegar?
                  </p>
                  <div className="flex flex-col min-[400px]:flex-row gap-3 w-full sm:w-auto">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Physical+Care+Fisioterapia+San+Pedro+Vargas+Araya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#0E3A4A] hover:bg-[#1E88A8] text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md flex-1 min-[400px]:flex-initial"
                    >
                      <MapPin size={18} />
                      Google Maps
                    </a>
                    <a
                      href="https://waze.com/ul?q=Physical+Care+Fisioterapia+Vargas+Araya&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#33CCFF] hover:bg-[#2CBEEF] text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md flex-1 min-[400px]:flex-initial"
                    >
                      <WazeIcon size={18} />
                      Waze
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
