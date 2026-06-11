import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Blog from '@/components/sections/Blog';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
