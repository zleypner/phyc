'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

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

const navItems = [
  { href: '#home', label: 'Inicio' },
  { href: '#services', label: 'Servicios' },
  { href: '#specialists', label: 'Especialistas' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-lg py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:gap-4">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">PC</span>
                </div>
                <div className="hidden sm:block">
                  <p className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                    isScrolled ? 'text-[#0E3A4A]' : 'text-white'
                  }`}>
                    Physical Care
                  </p>
                  <p className={`text-xs transition-colors duration-300 ${
                    isScrolled ? 'text-[#6B7280]' : 'text-white/70'
                  }`}>
                    Fisioterapia
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Center */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden lg:flex items-center justify-center gap-8"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-semibold transition-colors duration-300 relative group py-2 ${
                    isScrolled
                      ? 'text-[#0E3A4A] hover:text-[#1E88A8]'
                      : 'text-white hover:text-white/85'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-[#1E88A8]' : 'bg-white'
                  }`} />
                </Link>
              ))}
            </motion.div>

            {/* CTA Buttons - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-end gap-4"
            >
              {/* Phone - Desktop */}
              <a
                href="tel:+50689680947"
                className={`hidden md:flex items-center gap-2 font-semibold transition-colors duration-300 py-2 ${
                  isScrolled
                    ? 'text-[#0E3A4A] hover:text-[#1E88A8]'
                    : 'text-white hover:text-white/85'
                }`}
              >
                <Phone size={18} />
                <span>+506 8968-0947</span>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/50689680947"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-11 h-11 rounded-full bg-[#25D366] items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
                aria-label="Chatear en WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>

              {/* Schedule Button - Desktop */}
              <Link
                href="#contact"
                className="hidden md:block btn-primary text-sm shadow-md"
              >
                Agendar Cita
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#0E3A4A] hover:bg-[#F4F7F8]'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#0E3A4A]/55 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm z-50 glass-dark text-white shadow-2xl flex flex-col justify-between p-8 lg:hidden"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold text-lg">PC</span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg leading-tight">Physical Care</p>
                      <p className="text-xs text-white/60">Fisioterapia</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-medium text-white hover:text-[#35B7C8] transition-colors flex items-center justify-between group py-2"
                      >
                        {item.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#35B7C8]">&rarr;</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-white/10 pt-8 mt-auto">
                <a
                  href="tel:+50689680947"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors py-3 mb-4"
                >
                  <Phone size={18} className="text-[#35B7C8]" />
                  <span className="font-medium">+506 8968-0947</span>
                </a>
                <a
                  href="https://wa.me/50689680947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-2xl font-semibold hover:bg-[#20BA5C] transition-colors mb-4 shadow-lg shadow-[#25D366]/20"
                >
                  <WhatsAppIcon size={20} />
                  WhatsApp
                </a>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full btn-primary text-center block shadow-lg shadow-primary/20"
                >
                  Agendar Cita
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
