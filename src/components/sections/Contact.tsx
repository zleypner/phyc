'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Loader2,
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingrese un correo electrónico válido'),
  phone: z.string().min(8, 'Por favor ingrese un número de teléfono válido (mínimo 8 dígitos)'),
  service: z.string().min(1, 'Por favor seleccione un servicio'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  'Rehabilitación Deportiva',
  'Rehabilitación Física',
  'Terapia de Ondas de Choque',
  'Terapia TECAR',
  'Masaje Terapéutico',
  'Recuperación Post-Cirugía',
  'Otro',
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const handleSelectServiceEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ service: string }>;
      if (customEvent.detail && customEvent.detail.service) {
        const matchedService = services.find(
          s => s.toLowerCase().includes(customEvent.detail.service.toLowerCase()) || 
               customEvent.detail.service.toLowerCase().includes(s.toLowerCase())
        );
        if (matchedService) {
          setValue('service', matchedService);
        } else {
          setValue('service', customEvent.detail.service);
        }
      }
    };

    window.addEventListener('select-service', handleSelectServiceEvent);
    return () => window.removeEventListener('select-service', handleSelectServiceEvent);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section ref={ref} id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
            Comience Su Recuperación Hoy
          </h2>
          <p className="text-lg text-[#6B7280]">
            ¿Listo para dar el primer paso? Contáctenos para programar su cita
            o realizar cualquier consulta sobre nuestros servicios.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] rounded-3xl p-8 md:p-10 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Póngase en Contacto</h3>

              {/* Contact details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Nuestra Ubicación</h4>
                    <p className="text-white/80 text-sm">
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
                    <h4 className="font-semibold mb-1">Teléfono / WhatsApp</h4>
                    <a
                      href="tel:+50689680947"
                      className="text-white/80 text-sm hover:text-white transition-colors"
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
                    <h4 className="font-semibold mb-1">Correo Electrónico</h4>
                    <a
                      href="mailto:gerencia@physicalcarefisioterapia.com"
                      className="text-white/80 text-sm hover:text-white transition-colors break-all"
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
                    <h4 className="font-semibold mb-1">Horario de Atención</h4>
                    <p className="text-white/80 text-sm">
                      Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                      Sábado: Con cita previa<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/50689680947"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-xl font-semibold hover:bg-[#20BA5C] transition-colors"
              >
                <MessageCircle size={20} />
                Chatear por WhatsApp
              </a>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden h-48 bg-white/10 flex items-center justify-center">
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#F4F7F8] rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#0E3A4A] mb-6">
                Programar una Cita
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#0E3A4A] mb-2">
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="text-[#6B7280]">
                    Gracias por contactarnos. Nos comunicaremos con usted a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#0E3A4A] mb-2"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-500' : 'border-[#E5E7EB]'
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#1E88A8] focus:border-transparent transition-all`}
                      placeholder="Su nombre completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email and Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#0E3A4A] mb-2"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-[#E5E7EB]'
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#1E88A8] focus:border-transparent transition-all`}
                        placeholder="ejemplo@correo.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#0E3A4A] mb-2"
                      >
                        Número de Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-500' : 'border-[#E5E7EB]'
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#1E88A8] focus:border-transparent transition-all`}
                        placeholder="+506 0000-0000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[#0E3A4A] mb-2"
                    >
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.service ? 'border-red-500' : 'border-[#E5E7EB]'
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#1E88A8] focus:border-transparent transition-all`}
                    >
                      <option value="">Seleccione un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#0E3A4A] mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-500' : 'border-[#E5E7EB]'
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#1E88A8] focus:border-transparent transition-all resize-none`}
                      placeholder="Cuéntenos sobre su condición o en qué podemos ayudarle..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensaje
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    Al enviar, acepta nuestra Política de Privacidad. Responderemos
                    en un plazo de 24 horas.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
