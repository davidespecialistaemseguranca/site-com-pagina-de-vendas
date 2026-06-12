'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AuthorCredibilityBlock() {
  return (
    <section className="py-16 relative bg-card/40 border-y border-accent/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-32 h-40 md:w-40 md:h-52 overflow-hidden rounded-lg border border-accent/40">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/david-portrait-NuTtziGn.jpg-8jS6Dw4kCmkzA0TLmhXKtDnF87KjpC.png"
                alt="David Fernandes, CPP"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Author info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-widest text-accent font-semibold">Sobre o Autor</h3>
              <h4 className="text-2xl md:text-3xl font-semibold text-foreground">David Fernandes, CPP</h4>
              <p className="text-base text-accent font-light">Criador do Método DISCOND™</p>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Especialista em Redesenho Organizacional, Governança de Segurança e Transformação Empresarial com 20+ anos de experiência. Desenvolveu o método DISCOND™ baseado em análise de mais de 150 organizações, combinando excelência acadêmica com expertise operacional em campo.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded border border-accent/30">
                CPP Certified
              </span>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded border border-accent/30">
                ASIS Member
              </span>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded border border-accent/30">
                20+ Anos
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
