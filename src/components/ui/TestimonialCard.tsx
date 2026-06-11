'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  therapist: string;
  rating: number;
  nps: number;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  therapist,
  rating,
  nps,
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.article
      className="group relative flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[calc(50vw-2rem)] lg:w-[380px] bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:shadow-[0_8px_40px_-8px_rgba(30,136,168,0.2)] hover:border-[#1E88A8]/20 hover:scale-[1.02] cursor-default"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Quote Icon */}
      <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gradient-to-br from-[#1E88A8]/10 to-[#35B7C8]/10 flex items-center justify-center">
        <Quote size={18} className="text-[#1E88A8]" />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-[#FBBF24] fill-[#FBBF24]"
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{rating} de 5 estrellas</span>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-[15px] sm:text-base text-[#374151] leading-relaxed mb-6 min-h-[80px] line-clamp-4">
        &ldquo;{testimonial}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />

      {/* Patient Info */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar */}
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#1E88A8] to-[#35B7C8] flex items-center justify-center text-white font-semibold text-sm shadow-md">
            {name.split(' ').slice(0, 2).map(n => n[0]).join('')}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-[#0E3A4A] text-sm truncate">
              {name}
            </p>
            <p className="text-xs text-[#64748B] truncate">
              Atendido por {therapist.split(' ')[0]} {therapist.split(' ')[1]}
            </p>
          </div>
        </div>

        {/* NPS Badge */}
        <div className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0]">
          <span className="text-xs font-semibold text-[#059669]">
            NPS {nps}/10
          </span>
        </div>
      </div>
    </motion.article>
  );
}
