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

// Instagram SVG Icon
const InstagramIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Facebook SVG Icon
const FacebookIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

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
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0E3A4A] to-[#06B8BF] text-white pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 text-[#06B8BF] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-md"
          >
            <Compass size={14} className="animate-spin-slow sm:w-4 sm:h-4" />
            Contacto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight text-white px-2"
          >
            Contacto & Ubicación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Estamos aquí para resolver tus dudas y acompañarte en tu proceso de rehabilitación.
          </motion.p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-8 pb-12 sm:py-10 sm:pb-16 md:py-16 md:pb-20 lg:py-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Row 1: Three cards - same size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Card 1: Contact Details */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl sm:rounded-2xl border border-[rgba(15,23,42,0.06)] shadow-sm p-4 sm:p-5 md:p-6 flex flex-col sm:col-span-2 md:col-span-1"
              >
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#1F2937] mb-3 sm:mb-4 md:mb-5">
                  Información General
                </h2>

                <div className="space-y-3 sm:space-y-4 flex-1">
                  {/* Location Address */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#06B8BF]/10 flex items-center justify-center flex-shrink-0 text-[#06B8BF]">
                      <MapPin size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-xs sm:text-sm text-[#1F2937] mb-0.5">Dirección</h3>
                      <p className="text-[#475569] text-[11px] sm:text-xs leading-relaxed">
                        Del Perimercados de Vargas Araya, 100m Norte.<br />
                        San Pedro, San José, Costa Rica.
                      </p>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#06B8BF]/10 flex items-center justify-center flex-shrink-0 text-[#06B8BF]">
                      <Phone size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-xs sm:text-sm text-[#1F2937] mb-0.5">Teléfono</h3>
                      <a
                        href="tel:+50689680947"
                        className="text-[#06B8BF] text-[11px] sm:text-xs font-medium hover:underline"
                      >
                        +506 8968-0947
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#06B8BF]/10 flex items-center justify-center flex-shrink-0 text-[#06B8BF]">
                      <Mail size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-xs sm:text-sm text-[#1F2937] mb-0.5">Email</h3>
                      <a
                        href="mailto:gerencia@physicalcarefisioterapia.com"
                        className="text-[#06B8BF] text-[11px] sm:text-xs font-medium hover:underline break-all"
                      >
                        gerencia@physicalcarefisioterapia.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center flex-shrink-0 text-white">
                      <InstagramIcon size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-xs sm:text-sm text-[#1F2937] mb-0.5">Instagram</h3>
                      <a
                        href="https://www.instagram.com/physicalcareft?utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#06B8BF] text-[11px] sm:text-xs font-medium hover:underline"
                      >
                        @physicalcareft
                      </a>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1877F2] flex items-center justify-center flex-shrink-0 text-white">
                      <FacebookIcon size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-xs sm:text-sm text-[#1F2937] mb-0.5">Facebook</h3>
                      <a
                        href="https://www.facebook.com/Physicalcarecr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#06B8BF] text-[11px] sm:text-xs font-medium hover:underline"
                      >
                        @Physicalcarecr
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Operating Hours */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl sm:rounded-2xl border border-[rgba(15,23,42,0.06)] shadow-sm p-4 sm:p-5 md:p-6 flex flex-col"
              >
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#1F2937] mb-3 sm:mb-4 md:mb-5 flex items-center gap-2">
                  <Clock size={16} className="text-[#06B8BF] sm:w-[18px] sm:h-[18px]" />
                  Horarios
                </h2>

                <div className="divide-y divide-[rgba(15,23,42,0.06)] text-xs sm:text-sm flex-1">
                  <div className="flex justify-between items-center gap-3 sm:gap-4 py-2.5 sm:py-3">
                    <span className="font-medium text-[#475569]">Lunes - Viernes</span>
                    <span className="text-[#1F2937] font-semibold">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center gap-3 sm:gap-4 py-2.5 sm:py-3">
                    <span className="font-medium text-[#475569]">Sábados</span>
                    <span className="text-[#06B8BF] font-semibold">9:00 - 14:00</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: WhatsApp */}
              <motion.div
                variants={itemVariants}
                className="bg-[#25D366] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm relative overflow-hidden flex flex-col min-h-[180px] sm:min-h-[200px] md:min-h-[220px]"
              >
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <WhatsAppIcon size={16} className="flex-shrink-0 text-white sm:w-[18px] sm:h-[18px]" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">Contáctanos</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 leading-tight text-white">
                    ¿Prefieres WhatsApp?
                  </h2>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                    Escríbenos para programar tu cita.
                  </p>
                  <a
                    href="https://wa.me/50689680947?text=Hola!%20Quiero%20agendar%20una%20cita.%0AParte%20del%20cuerpo%20que%20me%20duele:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-[#25D366] font-bold py-2 sm:py-2.5 px-4 sm:px-5 rounded-full hover:bg-slate-50 transition-colors shadow-lg text-xs sm:text-sm w-fit"
                  >
                    <WhatsAppIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Escribir Ahora
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Large Map with Navigation */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl sm:rounded-2xl border border-[rgba(15,23,42,0.06)] shadow-sm overflow-hidden"
            >
              {/* Map - Large */}
              <div className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-[#F4F7F8]">
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
              <div className="p-4 sm:p-5 md:p-6 border-t border-[rgba(15,23,42,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <p className="text-sm sm:text-base font-semibold text-[#1F2937]">
                    ¿Cómo llegar?
                  </p>
                  <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                    <a
                      href="https://maps.app.goo.gl/VWRUrX9KmDhxwhd97"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#0E3A4A] hover:bg-[#06B8BF] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md flex-1 sm:flex-initial"
                    >
                      <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Google Maps
                    </a>
                    <a
                      href="https://waze.com/ul?q=Physical+Care+Fisioterapia+Vargas+Araya&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#33CCFF] hover:bg-[#2CBEEF] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md flex-1 sm:flex-initial"
                    >
                      <WazeIcon size={16} className="sm:w-[18px] sm:h-[18px]" />
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
