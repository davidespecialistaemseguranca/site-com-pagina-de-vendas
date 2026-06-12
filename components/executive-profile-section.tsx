'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ExecutiveProfileSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-card/20">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Perfil Executivo</span>
          <h2 className="text-4xl md:text-5xl font-light mt-3">
            Quem é <span className="text-accent">David Fernandes</span>
          </h2>
        </motion.div>

        {/* Executive profile grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Executive Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Premium frame with accent lighting */}
            <div className="relative">
              {/* Background gradient frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-2xl" />
              
              {/* Elegant corner markers */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/60 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/60 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/60 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/60 rounded-br-xl" />
              
              {/* Portrait image */}
              <div className="relative z-10 rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/david-portrait-NuTtziGn.jpg-8jS6Dw4kCmkzA0TLmhXKtDnF87KjpC.png"
                  alt="David Fernandes, CPP - Criador do Método DISCOND™"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Accent floating element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/20 rounded-full"
            />
          </motion.div>

          {/* Right: Executive Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Personal Identity */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-semibold text-foreground">David Fernandes</h3>
                <span className="text-lg text-accent font-light">CPP</span>
              </div>
              <p className="text-base text-accent font-light tracking-wide">Criador do Método DISCOND™</p>
            </div>

            {/* Core expertise */}
            <div className="space-y-4 py-6 border-y border-accent/20">
              <h4 className="text-sm uppercase tracking-widest text-accent font-semibold">Especialização</h4>
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Redesenho Organizacional</p>
                  <p className="text-sm text-muted-foreground">Transformação estrutural de sistemas de segurança</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Governança de Segurança</p>
                  <p className="text-sm text-muted-foreground">Implementação de políticas e protocolos estratégicos</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Transformação Empresarial</p>
                  <p className="text-sm text-muted-foreground">Alinhamento de segurança com objetivos corporativos</p>
                </div>
              </div>
            </div>

            {/* Executive Biography */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-accent font-semibold">Trajetória</h4>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de 20 anos de experiência em consultoria de segurança executiva, David Fernandes desenvolveu uma metodologia única que combina análise estratégica profunda com implementação prática.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Seu framework DISCOND™ é resultado de trabalho de campo em mais de 150 organizações, gerando insights comprovados sobre prevenção de riscos operacionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Como Especialista Certificado em Proteção (CPP), David trabalha com C-suite e líderes organizacionais para transformar análise de risco em ação estratégica.
              </p>
            </div>

            {/* Key credentials */}
            <div className="space-y-3 pt-4">
              <h4 className="text-sm uppercase tracking-widest text-accent font-semibold">Credenciais</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">CPP (Certified Protection Professional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">Membro ASIS International</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">Criador do Framework DISCOND™</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">20+ anos de experiência operacional</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
