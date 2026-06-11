'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ArrowRight, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '¿Cuándo debería ver a un fisioterapeuta?',
    excerpt:
      'Aprenda a reconocer los signos que indican que es hora de buscar ayuda profesional para sus dolores o problemas de movilidad.',
    category: 'Educación al Paciente',
    readTime: 'Lectura de 5 min',
    author: 'Lic. Enmanuel Li',
    date: '15 de marzo, 2024',
    image: null,
  },
  {
    id: 2,
    title: 'Recuperación tras lesiones deportivas: Qué esperar',
    excerpt:
      'Una guía completa para comprender el proceso de rehabilitación después de las lesiones deportivas más comunes.',
    category: 'Rehabilitación Deportiva',
    readTime: 'Lectura de 7 min',
    author: 'Lic. Enmanuel Li',
    date: '10 de marzo, 2024',
    image: null,
  },
  {
    id: 3,
    title: 'Beneficios de la terapia de ondas de choque',
    excerpt:
      'Descubra cómo este tratamiento innovador y no invasivo puede acelerar la curación y reducir el dolor crónico.',
    category: 'Tratamientos',
    readTime: 'Lectura de 4 min',
    author: 'Lic. Enmanuel Li',
    date: '5 de marzo, 2024',
    image: null,
  },
  {
    id: 4,
    title: 'Prevención de lesiones de rodilla: Guía completa',
    excerpt:
      'Ejercicios y estrategias esenciales para proteger sus rodillas, ya sea un atleta o simplemente una persona activa.',
    category: 'Prevención',
    readTime: 'Lectura de 6 min',
    author: 'Yamilah Solano',
    date: '28 de febrero, 2024',
    image: null,
  },
  {
    id: 5,
    title: 'Manejo del dolor de espalda crónico: Enfoques basados en evidencia',
    excerpt:
      'Estrategias modernas para el manejo a largo plazo del dolor de espalda basadas en las últimas investigaciones científicas.',
    category: 'Educación al Paciente',
    readTime: 'Lectura de 8 min',
    author: 'Lic. Enmanuel Li',
    date: '20 de febrero, 2024',
    image: null,
  },
];

const categoryColors: Record<string, string> = {
  'Educación al Paciente': 'bg-blue-100 text-blue-700',
  'Rehabilitación Deportiva': 'bg-green-100 text-green-700',
  'Tratamientos': 'bg-purple-100 text-purple-700',
  'Prevención': 'bg-orange-100 text-orange-700',
};

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="blog" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#1E88A8]/10 text-[#1E88A8] text-sm font-medium mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3A4A] mb-6">
            Artículos y Recursos de Salud
          </h2>
          <p className="text-lg text-[#6B7280]">
            Consejos de expertos, tips de rehabilitación y los últimos conocimientos de nuestro
            equipo para ayudarle en su camino de recuperación.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <article className="group h-full bg-[#F4F7F8] rounded-3xl overflow-hidden card-hover">
              <div className="grid md:grid-cols-2 h-full">
                {/* Image placeholder */}
                <div className="h-64 md:h-full bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold">1</span>
                    </div>
                    <p className="text-white/80 text-sm">Artículo Destacado</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col">
                  <span
                    className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      categoryColors[blogPosts[0].category]
                    }`}
                  >
                    {blogPosts[0].category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0E3A4A] mb-3 group-hover:text-[#1E88A8] transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-[#6B7280] mb-6 flex-grow">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#9CA3AF]">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Other Posts */}
          {blogPosts.slice(1, 4).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <article className="group h-full bg-[#F4F7F8] rounded-2xl overflow-hidden card-hover">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#0E3A4A] to-[#1E88A8] flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                    {post.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      categoryColors[post.category]
                    }`}
                  >
                    {post.category}
                  </span>
                  <h3 className="font-bold text-[#0E3A4A] mb-2 group-hover:text-[#1E88A8] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 md:mt-16"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1E88A8] font-semibold hover:text-[#0E3A4A] transition-colors"
          >
            Ver Todos los Artículos
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
