'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Target, Lock, Eye, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Proteção Estratégica',
    description: 'Identificação e mitigação de riscos operacionais antes que se materializem',
  },
  {
    icon: Zap,
    title: 'Inteligência Ativa',
    description: 'Monitoramento contínuo de ameaças ao seu ecossistema executivo',
  },
  {
    icon: Target,
    title: 'Precisão Cirúrgica',
    description: 'Análise contextual que vai além da segurança convencional',
  },
  {
    icon: Lock,
    title: 'Confidencialidade Total',
    description: 'Discrição e sigilo na abordagem de questões sensíveis',
  },
  {
    icon: Eye,
    title: 'Visão Holística',
    description: 'Compreensão profunda da sua organização e suas vulnerabilidades',
  },
  {
    icon: Briefcase,
    title: 'Foco Executivo',
    description: 'Consultoria direcionada para tomadores de decisão',
  },
];

export function FeaturesSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Uma abordagem <span className="text-accent">diferente</span> para segurança executiva
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Transcendemos protocolos genéricos. Cada situação é única, e requer análise profunda e estratégica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group p-6 bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 hover:bg-card/80"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
