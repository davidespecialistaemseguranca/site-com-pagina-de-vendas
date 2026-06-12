'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511999999999?text=Olá%20David!%20Gostaria%20de%20conversar%20sobre%20segurança%20estratégica."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
