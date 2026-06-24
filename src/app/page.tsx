import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import SpecializedServices from '@/components/sections/SpecializedServices';
import TrustBar from '@/components/sections/TrustBar';
import TechnologyCTA from '@/components/sections/TechnologyCTA';
import Specialists from '@/components/sections/Specialists';
import FAQ from '@/components/sections/FAQ';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import StoreCTA from '@/components/sections/StoreCTA';
import GiftCardCTA from '@/components/sections/GiftCardCTA';
import MissionVision from '@/components/sections/MissionVision';
import TestimonialsCTA from '@/components/sections/TestimonialsCTA';
import Contact from '@/components/sections/Contact';
import LocationSection from '@/components/sections/LocationSection';

export const metadata: Metadata = {
  title: 'Terapia Física en Costa Rica | Centro de Fisioterapia San Pedro | Physical Care',
  description:
    'Centro de terapia física #1 en Costa Rica. Fisioterapeutas especializados en rehabilitación deportiva, ondas de choque, tecarterapia y tratamiento del dolor crónico. Más de 450 pacientes satisfechos. Agenda tu cita en San Pedro.',
  keywords: [
    'terapia fisica',
    'terapia fisica costa rica',
    'fisioterapia',
    'fisioterapia costa rica',
    'fisioterapia san jose',
    'fisioterapeuta',
    'rehabilitacion deportiva',
    'centro de fisioterapia',
    'clinica de terapia fisica',
    'ondas de choque',
    'tecarterapia',
    'dolor de espalda',
    'lesiones deportivas',
  ],
  alternates: {
    canonical: 'https://physicalcarefisioterapia.com',
  },
  openGraph: {
    title: 'Terapia Física en Costa Rica | Physical Care Fisioterapia',
    description:
      'Centro líder de terapia física en San Pedro, Costa Rica. Tratamientos especializados con tecnología de punta. +9 años de experiencia. 450+ pacientes satisfechos.',
    url: 'https://physicalcarefisioterapia.com',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SpecializedServices />
        <TrustBar />
        <StoreCTA />
        <GiftCardCTA />
        <TechnologyCTA />
        <Specialists />
        <FAQ />
        <WhyChooseUs />
        <MissionVision />
        <TestimonialsCTA />
        <Contact />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
