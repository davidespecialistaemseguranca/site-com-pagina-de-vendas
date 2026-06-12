'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-muted/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left side - Text and Personal Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Frame marker - strategic positioning */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground"
              >
                <span className="w-8 h-px bg-accent" />
                VOL. I - INTELIGÊNCIA ESTRATÉGICA EM SEGURANÇA
              </motion.div>
            </div>

            {/* Personal Authority System - unified composition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Unified Personal Identity Block */}
              <div className="space-y-4 pb-6 border-b border-accent/20">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">David Fernandes</h2>
                    <span className="text-xl text-accent font-light">CPP</span>
                  </div>
                  <p className="text-base text-accent font-light tracking-wide">Criador do Método DISCOND™</p>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Especialista em Redesenho Organizacional, Governança de Segurança Patrimonial, Segurança Condominial e Transformação Empresarial</p>
              </div>
              
              {/* Main positioning statement */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Os maiores riscos <span className="text-accent italic">raramente começam</span> com criminosos.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Segurança executiva que transcende protocolos convencionais. Análise estratégica para organizações que entendem que risco não é apenas um número.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="https://wa.me/5511999999999?text=Olá%20David!%20Gostaria%20de%20uma%20consultoria%20executiva."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground uppercase text-sm font-semibold tracking-wide hover:bg-accent/90 transition"
              >
                Conversa Reservada <ArrowRight size={16} />
              </a>
              <a
                href="#discond"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-foreground/20 uppercase text-sm font-semibold tracking-wide hover:bg-foreground/5 transition"
              >
                Conhecer Framework
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Executive Portrait with Authority Framing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="relative h-96 md:h-full min-h-[550px] flex items-center justify-center"
          >
            {/* Sophisticated layered background - executive consulting aesthetic */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Layer 1: Gradient foundation with luxury depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card opacity-60" />
              
              {/* Layer 2: Elegant gold accent lighting (top-right) */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/15 to-transparent rounded-full blur-3xl" />
              
              {/* Layer 3: Strategic depth - bottom accent */}
              <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-t from-accent/8 to-transparent rounded-full blur-3xl" />
              
              {/* Layer 4: Premium border frame */}
              <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
              
              {/* Inner sophisticated grid - DISCOND™ framework visual reference */}
              <div className="absolute inset-8 pointer-events-none">
                {/* Vertical accent lines - strategic framework grid */}
                <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />
                
                {/* Horizontal accent lines - operational layers */}
                <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
              </div>
            </div>

            {/* Premium content composition - executive portrait area with overlay */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 py-12">
              {/* Top accent element - strategic intelligence badge */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-12 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-accent font-semibold">Inteligência Estratégica</p>
              </motion.div>

              {/* Central portrait area - unified authority frame */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-xs h-auto flex items-center justify-center"
              >
                {/* Portrait background frame with sophisticated layering */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-accent/5 rounded-2xl border border-accent/30" />
                
                {/* Elegant corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/40 rounded-br-2xl" />
                
                {/* Executive portrait image */}
                <div className="relative z-10 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/david-portrait-NuTtziGn.jpg-8jS6Dw4kCmkzA0TLmhXKtDnF87KjpC.png"
                    alt="David Fernandes, CPP - Especialista em Segurança Executiva"
                    width={320}
                    height={400}
                    priority
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </motion.div>

              {/* Bottom accent element - strategic framework label */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-accent/80 font-semibold">Framework DISCOND™</p>
              </motion.div>
            </div>

            {/* Floating accent particles - sophisticated depth elements */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-1 h-1 bg-accent rounded-full"
            />
            <motion.div
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-32 left-16 w-1 h-1 bg-accent/60 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
