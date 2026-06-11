'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

// Waze Custom SVG Icon
const WazeIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.16 11.23a6.83 6.83 0 0 0-6.84-6.84A6.83 6.83 0 0 0 5.49 11.2a6.8 6.8 0 0 0 4.14 6.27l-.46 1.37a.5.5 0 0 0 .61.63l2.06-.62a6.76 6.76 0 0 0 4.48-1.38 6.8 6.8 0 0 0 2.84-6.26zM9.59 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5.47 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
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

// Form schema definition
const contactFormSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  correo: z.string().email({ message: 'Ingrese un correo electrónico válido' }),
  telefono: z.string().min(8, { message: 'Ingrese un número de teléfono válido (mínimo 8 dígitos)' }),
  motivo: z.string().min(1, { message: 'Por favor seleccione un motivo de consulta' }),
  mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: '',
      correo: '',
      telefono: '',
      motivo: '',
      mensaje: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Simulate API call for form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data submitted:', data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('Hubo un error al enviar el formulario. Por favor intente de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-[#FAFBFC] pb-20 pt-10">
      {/* Banner / Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] text-white py-20 md:py-28 mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.15),transparent_40%)]" />
        <div className="container relative z-10 text-center">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Contacto & Ubicación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Estamos aquí para resolver tus dudas y acompañarte en tu proceso de rehabilitación. Encuéntranos o ponte en contacto con nosotros hoy mismo.
          </motion.p>
        </div>
      </div>

      <div className="container">
        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Info & Map Navigation */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl border border-[rgba(15,23,42,0.06)] shadow-[0_4px_24px_rgba(14,58,74,0.04)] p-8"
            >
              <h2 className="text-2xl font-bold text-[#0E3A4A] mb-8 font-heading">
                Información General
              </h2>

              <div className="space-y-6">
                {/* Location Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0 text-[#1E88A8]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0E3A4A] mb-1">Nuestra Dirección</h3>
                    <p className="text-[#475569] text-base leading-relaxed">
                      Del Perimercados de Vargas Araya, 100 metros Norte.<br />
                      San Pedro de Montes de Oca, San José, Costa Rica.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0 text-[#1E88A8]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0E3A4A] mb-1">Línea Telefónica</h3>
                    <a
                      href="tel:+50689680947"
                      className="text-[#1E88A8] text-base font-medium hover:underline flex items-center gap-1.5"
                    >
                      +506 8968-0947
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0 text-[#1E88A8]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0E3A4A] mb-1">Correo Electrónico</h3>
                    <a
                      href="mailto:gerencia@physicalcarefisioterapia.com"
                      className="text-[#1E88A8] text-base font-medium hover:underline break-all"
                    >
                      gerencia@physicalcarefisioterapia.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map/Navigation CTA Buttons */}
              <div className="mt-8 pt-8 border-t border-[rgba(15,23,42,0.06)] space-y-4">
                <p className="text-sm font-semibold text-[#475569] uppercase tracking-wider mb-2">
                  ¿Cómo deseas llegar?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Google Maps Button */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Physical+Care+Fisioterapia+San+Pedro+Vargas+Araya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#0E3A4A] hover:bg-[#1E88A8] text-white py-3.5 px-4 rounded-2xl font-semibold text-[15px] transition-all duration-300 shadow-md shadow-[#0E3A4A]/10 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <MapPin size={18} />
                    Google Maps
                    <ExternalLink size={14} className="opacity-75" />
                  </a>

                  {/* Waze Button */}
                  <a
                    href="https://waze.com/ul?q=Physical+Care+Fisioterapia+Vargas+Araya&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-[#33CCFF] hover:bg-[#2CBEEF] text-white py-3.5 px-4 rounded-2xl font-semibold text-[15px] transition-all duration-300 shadow-md shadow-[#33CCFF]/20 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <WazeIcon size={18} />
                    Navegar con Waze
                    <ExternalLink size={14} className="opacity-75" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl border border-[rgba(15,23,42,0.06)] shadow-[0_4px_24px_rgba(14,58,74,0.04)] p-8"
            >
              <h2 className="text-xl font-bold text-[#0E3A4A] mb-6 flex items-center gap-3">
                <div className="text-[#1E88A8]">
                  <Clock size={20} />
                </div>
                Horarios de Atención
              </h2>

              <div className="divide-y divide-[rgba(15,23,42,0.06)] text-[15px]">
                <div className="flex justify-between py-3">
                  <span className="font-medium text-[#475569]">Lunes a Viernes</span>
                  <span className="text-[#0E3A4A] font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-[#475569]">Sábados</span>
                  <span className="text-[#1E88A8] font-semibold">Con cita previa</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-[#475569]">Domingos</span>
                  <span className="text-[#E11D48] font-semibold">Cerrado</span>
                </div>
              </div>
            </motion.div>

            {/* Quick WhatsApp Support Call */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#25D366] to-[#22C55E] text-white rounded-3xl p-8 shadow-lg shadow-[#25D366]/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 opacity-10">
                <WhatsAppIcon size={150} />
              </div>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2.5">
                <WhatsAppIcon size={24} />
                ¿Prefieres conversar por WhatsApp?
              </h2>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Escríbenos directamente para programar tu cita o consultar tarifas de manera inmediata.
              </p>
              <a
                href="https://wa.me/50689680947?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20las%20citas%20de%20fisioterapia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#22C55E] font-bold py-3.5 px-6 rounded-2xl hover:bg-slate-50 transition-colors shadow-md text-sm"
              >
                Escribir a WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right Column: Form & Maps Frame */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl border border-[rgba(15,23,42,0.06)] shadow-[0_4px_24px_rgba(14,58,74,0.04)] p-8 sm:p-10"
            >
              <h2 className="text-2xl font-bold text-[#0E3A4A] mb-2 font-heading">
                Envíanos un Mensaje
              </h2>
              <p className="text-[#64748B] text-[15px] mb-8">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-[#10B981]/10 text-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-[#065F46] mb-2">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-[#047857] text-sm max-w-sm mx-auto mb-6">
                    Agradecemos tu interés en Physical Care Fisioterapia. Nuestro equipo médico o administrativo te responderá pronto.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-semibold text-[#1E88A8] hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-200">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0E3A4A] mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Juan Pérez"
                        {...register('nombre')}
                        className={`w-full h-12 px-4 rounded-xl border ${
                          errors.nombre ? 'border-red-500 focus:outline-red-500' : 'border-slate-200 focus:outline-[#1E88A8]'
                        } bg-[#F8FAFC] text-sm transition-all text-[#0F172A]`}
                      />
                      {errors.nombre && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                          {errors.nombre.message}
                        </p>
                      )}
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0E3A4A] mb-2">
                        Número de Teléfono
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej. 8888-8888"
                        {...register('telefono')}
                        className={`w-full h-12 px-4 rounded-xl border ${
                          errors.telefono ? 'border-red-500 focus:outline-red-500' : 'border-slate-200 focus:outline-[#1E88A8]'
                        } bg-[#F8FAFC] text-sm transition-all text-[#0F172A]`}
                      />
                      {errors.telefono && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                          {errors.telefono.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Correo */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0E3A4A] mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        {...register('correo')}
                        className={`w-full h-12 px-4 rounded-xl border ${
                          errors.correo ? 'border-red-500 focus:outline-red-500' : 'border-slate-200 focus:outline-[#1E88A8]'
                        } bg-[#F8FAFC] text-sm transition-all text-[#0F172A]`}
                      />
                      {errors.correo && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                          {errors.correo.message}
                        </p>
                      )}
                    </div>

                    {/* Motivo de Consulta */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0E3A4A] mb-2">
                        Motivo de Consulta
                      </label>
                      <select
                        {...register('motivo')}
                        className={`w-full h-12 px-4 rounded-xl border ${
                          errors.motivo ? 'border-red-500 focus:outline-red-500' : 'border-slate-200 focus:outline-none'
                        } bg-[#F8FAFC] text-sm transition-all text-[#0F172A]`}
                      >
                        <option value="">Seleccione una opción...</option>
                        <option value="Rehabilitación Deportiva">Rehabilitación Deportiva</option>
                        <option value="Rehabilitación Física">Rehabilitación Física</option>
                        <option value="Terapia de Ondas de Choque">Terapia de Ondas de Choque</option>
                        <option value="Terapia TECAR">Terapia TECAR</option>
                        <option value="Masaje Terapéutico">Masaje Terapéutico</option>
                        <option value="Otro motivo">Otro motivo</option>
                      </select>
                      {errors.motivo && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                          {errors.motivo.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0E3A4A] mb-2">
                      Mensaje / Consulta
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Escribe brevemente tu caso o consulta médica aquí..."
                      {...register('mensaje')}
                      className={`w-full p-4 rounded-xl border ${
                        errors.mensaje ? 'border-red-500 focus:outline-red-500' : 'border-slate-200 focus:outline-[#1E88A8]'
                      } bg-[#F8FAFC] text-sm transition-all text-[#0F172A] resize-none`}
                    />
                    {errors.mensaje && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.mensaje.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0E3A4A] to-[#1E88A8] text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Embedded Google Map */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl border border-[rgba(15,23,42,0.06)] shadow-[0_4px_24px_rgba(14,58,74,0.04)] overflow-hidden p-3"
            >
              <div className="rounded-2xl overflow-hidden h-[450px] bg-[#F4F7F8]">
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
