import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowRight,
  Clock,
  User,
  ChevronRight,
  Award,
  Users,
  Building2,
  Globe,
  Mic,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Dynamic imports for interactive components (reduces initial bundle)
const ImageGallery = dynamic(() => import('./ImageGallery'), {
  loading: () => <div className="my-12 h-64 bg-gray-100 rounded-2xl animate-pulse" />,
});
const FAQSection = dynamic(() => import('./FAQSection'), {
  loading: () => <div className="mt-16 pt-12 h-96 bg-gray-50 rounded-2xl animate-pulse" />,
});

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Article data
const articleData = {
  title: 'Physical Care en Argentina: fisioterapeuta costarricense capacita a instituciones deportivas de élite',
  badge: 'Capacitador Internacional',
  description:
    'El MSc. Enmanuel Li Torres, director clínico de Physical Care Fisioterapia, fue invitado a Argentina para impartir capacitaciones en instituciones deportivas de alto rendimiento, incluyendo River Plate, San Lorenzo y el Comité Olímpico Argentino.',
  author: 'MSc. Enmanuel Li Torres',
  authorRole: 'Director Clínico y General, Physical Care Fisioterapia',
  readingTime: '7 minutos de lectura',
  publishDate: '2026-11-13',
  publishDateFormatted: '13 de noviembre de 2026',
};

// Gallery images from Argentina visit
const galleryImages = [
  {
    src: '/images/emma-personalbrand/argentina/1.jpeg',
    alt: 'MSc. Enmanuel Li Torres impartiendo capacitación en fisioterapia deportiva en Argentina',
    caption: 'Capacitación en instituciones deportivas de Argentina',
  },
  {
    src: '/images/emma-personalbrand/argentina/2.jpeg',
    alt: 'Enmanuel Li Torres como instructor experto en tecnologías de rehabilitación STORZ MEDICAL',
    caption: 'Instrucción en tecnologías avanzadas de rehabilitación',
  },
  {
    src: '/images/emma-personalbrand/argentina/3.jpeg',
    alt: 'Fisioterapeuta costarricense capacitando equipos médicos de clubes de fútbol argentinos',
    caption: 'Formación a equipos médicos de alto rendimiento',
  },
];

// Main hero image
const heroImage = galleryImages[0];

// FAQ data
const faqData = [
  {
    question: '¿En qué instituciones impartió capacitaciones el MSc. Enmanuel Li Torres en Argentina?',
    answer:
      'El MSc. Enmanuel Li Torres fue invitado como capacitador experto a instituciones de élite incluyendo el Club Atlético River Plate, el Club Atlético San Lorenzo de Almagro, el Comité Olímpico Argentino y diversas clínicas especializadas en medicina deportiva.',
  },
  {
    question: '¿Qué tipo de capacitaciones impartió Physical Care en Argentina?',
    answer:
      'Las capacitaciones abarcaron tecnologías avanzadas de rehabilitación como ondas de choque, magnetotransducción EMTT con Magnetolith, protocolos de recuperación deportiva y metodologías de tratamiento basadas en evidencia científica.',
  },
  {
    question: '¿Por qué instituciones argentinas invitaron a un fisioterapeuta de Costa Rica?',
    answer:
      'El MSc. Enmanuel Li Torres es reconocido internacionalmente por su expertise en tecnologías de rehabilitación de STORZ MEDICAL y su experiencia clínica de más de 14 años. Su participación en congresos internacionales y publicaciones lo posicionan como referente en fisioterapia avanzada.',
  },
  {
    question: '¿Physical Care ofrece la misma calidad de atención que reciben los atletas de élite?',
    answer:
      'Sí. En Physical Care Fisioterapia aplicamos los mismos protocolos, tecnologías y metodologías que utilizamos para capacitar a instituciones deportivas de alto rendimiento. Cada paciente recibe atención especializada independientemente de si es deportista profesional o no.',
  },
  {
    question: '¿Cómo puedo agendar una valoración con el equipo de Physical Care?',
    answer:
      'Puedes agendar tu valoración contactando a Physical Care Fisioterapia por WhatsApp al +506 8733-7942. Estamos ubicados en San Pedro de Montes de Oca, San José, Costa Rica.',
  },
];

// Institutions where training was given
const institutionsTrained = [
  {
    name: 'Club Atlético River Plate',
    description: 'Capacitación al equipo médico de uno de los clubes más grandes de Sudamérica.',
    icon: Building2,
    highlight: 'Fútbol Profesional',
  },
  {
    name: 'Club Atlético San Lorenzo de Almagro',
    description: 'Formación en protocolos de rehabilitación deportiva de alto rendimiento.',
    icon: Building2,
    highlight: 'Primera División',
  },
  {
    name: 'Comité Olímpico Argentino',
    description: 'Instrucción en tecnologías avanzadas para atletas olímpicos.',
    icon: Award,
    highlight: 'Deporte Olímpico',
  },
  {
    name: 'Clínicas especializadas',
    description: 'Talleres sobre protocolos EMTT y ondas de choque para profesionales de salud.',
    icon: Users,
    highlight: 'Profesionales de Salud',
  },
];

// Training topics
const trainingTopics = [
  {
    title: 'Ondas de Choque Focales y Radiales',
    description: 'Protocolos avanzados de dosimetría y aplicación clínica para tendinopatías y lesiones musculoesqueléticas.',
  },
  {
    title: 'Magnetotransducción EMTT',
    description: 'Uso del Magnetolith para rehabilitación de tejidos blandos y potenciación de resultados clínicos.',
  },
  {
    title: 'Rehabilitación Deportiva',
    description: 'Metodologías de retorno al deporte seguro y progresivo para atletas de alto rendimiento.',
  },
  {
    title: 'NEUROLITH - Nueva Tecnología',
    description: 'Participación en la inauguración del primer equipo NEUROLITH en Argentina.',
  },
];


// ============================================
// HERO SECTION (Server Component - no animations for faster load)
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background - Dark teal gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E38] via-[#0E3D4A] to-[#156378]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(53, 183, 200, 0.12) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Static floating elements (CSS only, no JS animation) */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-[#35B7C8]/10 blur-[100px] z-10 animate-pulse" />
      <div className="absolute bottom-[30%] left-[5%] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#5EEAD4]/10 blur-[80px] z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#8DC741]/20 backdrop-blur-md border border-[#8DC741]/30 text-white text-sm font-medium">
              <Globe className="w-4 h-4 text-[#8DC741]" />
              {articleData.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}
          >
            Fisioterapeuta costarricense{' '}
            <span className="bg-gradient-to-r from-[#8DC741] via-[#A8E063] to-[#8DC741] bg-clip-text text-transparent">
              capacita
            </span>{' '}
            a instituciones deportivas de élite en{' '}
            <span className="bg-gradient-to-r from-[#06B8BF] via-[#5EEAD4] to-[#06B8BF] bg-clip-text text-transparent">
              Argentina
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            {articleData.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <User size={18} className="text-[#5EEAD4]" />
              <span className="font-medium text-white">{articleData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#5EEAD4]" />
              <span>{articleData.readingTime}</span>
            </div>
            <span className="text-white/50">{articleData.publishDateFormatted}</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}

// ============================================
// BREADCRUMB COMPONENT
// ============================================
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-[#64748B]">
        <li>
          <Link href="/" className="hover:text-[#1E88A8] transition-colors">
            Inicio
          </Link>
        </li>
        <ChevronRight size={14} className="text-[#9CA3AF]" />
        <li>
          <Link href="/blog" className="hover:text-[#1E88A8] transition-colors">
            Blog
          </Link>
        </li>
        <ChevronRight size={14} className="text-[#9CA3AF]" />
        <li className="text-[#0E3A4A] font-medium truncate max-w-[200px] sm:max-w-none">
          Capacitador Internacional en Argentina
        </li>
      </ol>
    </nav>
  );
}

// ============================================
// INSTITUTIONS GRID COMPONENT (Server Component - no animations)
// ============================================
function InstitutionsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
      {institutionsTrained.map((institution, index) => {
        const Icon = institution.icon;
        return (
          <div
            key={index}
            className="bg-gradient-to-br from-[#F4F7F8] to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E88A8]/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-[#1E88A8]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-[#0E3A4A]">{institution.name}</h4>
                </div>
                <span className="inline-block px-2 py-0.5 text-xs font-medium bg-[#8DC741]/15 text-[#6B9930] rounded-full mb-2">
                  {institution.highlight}
                </span>
                <p className="text-sm text-[#64748B]">{institution.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================
// TRAINING TOPICS COMPONENT (Server Component - no animations)
// ============================================
function TrainingTopics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {trainingTopics.map((topic, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#1E88A8]/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E88A8] to-[#0E3A4A] flex items-center justify-center flex-shrink-0">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-[#0E3A4A] mb-1">{topic.title}</h4>
            <p className="text-sm text-[#64748B]">{topic.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// ARTICLE CONTENT COMPONENT (Server Component - no animations)
// ============================================
function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Main hero image */}
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            <Globe className="w-4 h-4" />
            MSc. Enmanuel Li Torres impartiendo capacitación internacional
          </span>
        </div>
      </div>

      {/* Key achievement highlight */}
      <div className="bg-gradient-to-r from-[#0E3A4A] to-[#1E88A8] rounded-2xl p-6 sm:p-8 mb-12 text-white">
        <div className="flex items-start gap-4">
          <Award className="w-10 h-10 text-[#8DC741] flex-shrink-0" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Reconocimiento Internacional</h2>
            <p className="text-white/90 m-0">
              El MSc. Enmanuel Li Torres fue invitado como <strong>capacitador experto</strong> por STORZ MEDICAL para instruir a profesionales de instituciones deportivas de élite en Argentina, incluyendo equipos de la primera división del fútbol argentino y el Comité Olímpico.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          De Costa Rica a Argentina: expertise que cruza fronteras
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4 text-lg">
          Cuando hablamos de terapia física de alto nivel, el conocimiento no tiene fronteras. El MSc. Enmanuel Li Torres, director clínico de Physical Care Fisioterapia, fue convocado por STORZ MEDICAL para llevar su expertise a Argentina y capacitar a equipos médicos de las instituciones deportivas más importantes del país.
        </p>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Esta invitación no es casualidad. Con más de 14 años de experiencia clínica, certificaciones internacionales en tecnologías de rehabilitación y una trayectoria de presentaciones en congresos internacionales, Enmanuel se ha posicionado como un referente latinoamericano en fisioterapia avanzada. Además de Buenos Aires, Argentina, también ha impartido capacitaciones en Bogotá, Colombia, consolidando su rol como capacitador internacional.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          Durante su visita a Argentina, impartió capacitaciones especializadas en instituciones que atienden a atletas de élite y deportistas profesionales, compartiendo los mismos protocolos y metodologías que aplica diariamente en Physical Care Fisioterapia.
        </p>
      </section>

      {/* Institutions trained section */}
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Instituciones capacitadas
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-6">
          El programa de capacitación incluyó sesiones teórico-prácticas en algunas de las instituciones deportivas más prestigiosas de Argentina:
        </p>
        <InstitutionsGrid />
        <p className="text-[#64748B] leading-relaxed mt-6">
          En cada institución, los equipos médicos recibieron formación intensiva sobre el uso correcto de tecnologías de rehabilitación, protocolos basados en evidencia científica y estrategias de recuperación para deportistas de alto rendimiento.
        </p>
      </section>

      {/* Training topics section */}
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Temas de capacitación impartidos
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Las capacitaciones abarcaron las tecnologías y metodologías más avanzadas en rehabilitación deportiva:
        </p>
        <TrainingTopics />
      </section>

      {/* NEUROLITH section */}
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Inauguración de NEUROLITH
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Como parte de esta visita, el MSc. Enmanuel Li Torres tuvo la oportunidad de participar en la inauguración del primer equipo NEUROLITH en Argentina, la nueva tecnología de STORZ MEDICAL para estimulación transcraneal por pulsos acústicos.
        </p>

        <p className="text-[#64748B] leading-relaxed">
          Esta participación refuerza el posicionamiento de Physical Care Fisioterapia como centro de referencia en tecnologías de rehabilitación avanzada en Latinoamérica.
        </p>
      </section>

      {/* Gallery - Dynamically loaded client component */}
      <ImageGallery />

      {/* What this means for patients */}
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          ¿Qué significa esto para los pacientes de Physical Care?
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-4">
          Cuando un profesional es invitado a capacitar a instituciones deportivas de élite en otro país, sus pacientes son los principales beneficiados.
        </p>

        <div className="bg-gradient-to-r from-[#8DC741]/10 to-[#8DC741]/5 rounded-2xl p-6 border-l-4 border-[#8DC741] my-8">
          <p className="text-[#0E3A4A] font-semibold text-lg m-0">
            Los mismos protocolos, tecnologías y metodologías que se enseñan a los equipos médicos de River Plate, San Lorenzo y el Comité Olímpico Argentino están disponibles para ti en Physical Care Fisioterapia, en San Pedro de Montes de Oca, Costa Rica.
          </p>
        </div>

        <p className="text-[#64748B] leading-relaxed mb-4">
          No necesitas ser deportista profesional para recibir atención de nivel internacional. En Physical Care, cada paciente —sea atleta de élite, deportista recreativo o persona con dolor crónico— recibe el mismo estándar de excelencia.
        </p>
        <p className="text-[#64748B] leading-relaxed">
          La experiencia internacional de nuestro director clínico se traduce directamente en mejores resultados para nuestros pacientes: diagnósticos más precisos, tratamientos más efectivos y recuperaciones más rápidas.
        </p>
      </section>

      {/* CTA inline */}
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-6">
          Recibe atención de nivel internacional en Costa Rica
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-6">
          Ya sea que tengas una lesión deportiva, dolor crónico, necesites rehabilitación post-quirúrgica o simplemente quieras mejorar tu rendimiento físico, en <Link href="/" className="text-[#1E88A8] hover:underline font-medium">Physical Care Fisioterapia</Link> tenemos la expertise y la tecnología para ayudarte.
        </p>

        <div className="bg-[#F4F7F8] rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-[#0E3A4A] mb-4">
            Agenda tu valoración con el equipo de Physical Care
          </h3>
          <p className="text-[#64748B] mb-6">
            Conversemos sobre tu situación y diseñemos un plan de tratamiento personalizado con la misma calidad que reciben los atletas de élite.
          </p>
          <a
            href="https://wa.me/50687337942?text=Hola!%20Quiero%20agendar%20una%20valoracion.%20Lei%20el%20articulo%20sobre%20las%20capacitaciones%20en%20Argentina."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#25D366] text-white rounded-full font-semibold text-base shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:bg-[#20BA5C]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar valoración por WhatsApp
          </a>
        </div>
      </section>
    </article>
  );
}

// ============================================
// CTA SECTION (Server Component - no animations)
// ============================================
function CTASection() {
  return (
    <section className="mt-16 relative py-16 sm:py-20 lg:py-24 rounded-3xl overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E3A4A] via-[#156378] to-[#1E88A8]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(141, 199, 65, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8DC741]/20 rounded-full text-white text-sm font-medium mb-6">
          <Award className="w-4 h-4 text-[#8DC741]" />
          Expertise internacional a tu alcance
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
          Agende una valoración con el equipo que capacita a instituciones de élite
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
          El mismo nivel de atención que reciben los atletas de River Plate, San Lorenzo y el Comité Olímpico Argentino está disponible para usted en Physical Care Fisioterapia, San Pedro, Costa Rica.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/50687337942?text=Hola!%20Quiero%20agendar%20una%20valoracion.%20Lei%20el%20articulo%20sobre%20las%20capacitaciones%20en%20Argentina."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-[#25D366] text-white rounded-full font-semibold text-base shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/30 hover:bg-[#20BA5C]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Agendar valoración
          </a>
          <Link
            href="/servicios-especializados"
            className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            Conocer nuestros tratamientos
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Main content area */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8">
            <Breadcrumb />
            <ArticleContent />
            <FAQSection />
            <CTASection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
