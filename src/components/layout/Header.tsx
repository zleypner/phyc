'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios-especializados', label: 'Servicios' },
  { href: '/tecnologia-de-rehabilitacion', label: 'Tecnología' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const showSolidHeader = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidHeader
            ? 'glass shadow-lg py-3 lg:py-4'
            : 'bg-transparent py-5 lg:py-6'
          }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <nav className="flex min-h-[64px] items-center justify-between lg:grid lg:min-h-[72px] lg:grid-cols-3 lg:gap-6">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={false}
                animate={{ opacity: 1, x: 0 }}
              >
                <Image
                  src="/images/logo/logo-removedbg.png"
                  alt="Physical Care Fisioterapia"
                  width={220}
                  height={60}
                  className="h-14 sm:h-16 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="hidden items-center justify-center gap-10 lg:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-1 py-3 text-sm font-semibold transition-colors duration-300 ${showSolidHeader
                      ? 'text-[#0E3A4A] hover:text-[#1E88A8]'
                      : 'text-white hover:text-white/85'
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-1 left-1 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-[calc(100%-0.5rem)] ${showSolidHeader ? 'bg-[#1E88A8]' : 'bg-white'
                      }`}
                  />
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-end gap-3 sm:gap-4"
            >
              <a
                href="https://wa.me/50689680947?text=Hola%20quiero%20agendar%20una%20cita.%20Parte%20del%20cuerpo%20que%20me%20duele:"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-[44px] items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5C] hover:shadow-xl hover:shadow-[#25D366]/25 sm:flex"
                aria-label="Agendar cita por WhatsApp"
              >
                <WhatsAppIcon size={18} />
                <span>Agendar Cita</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 lg:hidden ${showSolidHeader
                    ? 'text-[#0E3A4A] hover:bg-[#F4F7F8]'
                    : 'text-white hover:bg-white/10'
                  }`}
                aria-label="Abrir menú"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#0E3A4A]/55 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col justify-between p-6 text-white shadow-2xl glass-dark sm:p-8 lg:hidden"
            >
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <Image
                    src="/images/logo/logo-removedbg.png"
                    alt="Physical Care Fisioterapia"
                    width={200}
                    height={55}
                    className="h-12 w-auto object-contain"
                  />

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/20"
                    aria-label="Cerrar menú"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between border-b border-white/10 py-4 text-xl font-medium text-white transition-colors hover:text-[#35B7C8]"
                      >
                        {item.label}
                        <span className="text-[#35B7C8] opacity-0 transition-opacity group-hover:opacity-100">
                          &rarr;
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <a
                  href="https://wa.me/50689680947?text=Hola%20quiero%20agendar%20una%20cita.%20Parte%20del%20cuerpo%20que%20me%20duele:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-4 font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-colors hover:bg-[#20BA5C]"
                >
                  <WhatsAppIcon size={20} />
                  Agendar Cita
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}