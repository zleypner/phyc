'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = '50689680947';
  const message = encodeURIComponent('Hello! I would like to schedule an appointment at Physical Care Fisioterapia.');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-full right-0 mb-3 w-64"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 relative">
              <button
                onClick={() => setIsTooltipVisible(false)}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close tooltip"
              >
                <X size={14} className="text-gray-400" />
              </button>
              <p className="font-semibold text-[#0E3A4A] mb-1">Need help?</p>
              <p className="text-sm text-gray-600 mb-3">
                Chat with us on WhatsApp for quick assistance with appointments.
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] text-white text-center py-2 rounded-lg font-medium hover:bg-[#20BA5C] transition-colors"
              >
                Start Chat
              </a>
              {/* Tooltip arrow */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open WhatsApp chat"
      >
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <MessageCircle size={28} className="relative z-10" />
      </motion.button>

      {/* Hover label */}
      <AnimatePresence>
        {isHovered && !isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <span className="bg-[#0E3A4A] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Chat with us
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
