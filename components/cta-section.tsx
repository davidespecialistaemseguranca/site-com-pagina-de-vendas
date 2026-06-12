'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-light">
            Pronto para elevar sua <span className="text-accent">segurança estratégica?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Agendamos uma conversa reservada para entender seus desafios específicos e apresentar a melhor abordagem para sua organização.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
              href="https://wa.me/5511999999999?text=Olá%20David!%20Gostaria%20de%20agendar%20uma%20conversa%20reservada%20sobre%20segurança%20estratégica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground uppercase text-sm font-semibold tracking-wide hover:bg-accent/90 transition"
            >
              <MessageCircle size={18} />
              Falar com Especialista
            </a>
            <a
              href="/playbooks/vulnerabilidades-portarias"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent uppercase text-sm font-semibold tracking-wide hover:bg-accent/10 transition"
            >
              Conhecer Playbook
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground pt-4"
          >
            Resposta em até 2 horas • Sigilo Total • Sem Compromisso
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
