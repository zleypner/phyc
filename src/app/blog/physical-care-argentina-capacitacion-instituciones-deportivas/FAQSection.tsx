'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#1E88A8] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-[#0E3A4A] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1E88A8] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-6 text-[#64748B] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0E3A4A] mb-8">
        Preguntas frecuentes
      </h2>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
