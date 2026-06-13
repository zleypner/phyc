import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Specialists from '@/components/sections/Specialists';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Specialists />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
