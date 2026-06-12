'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Análise de Vulnerabilidades Operacionais',
    description: 'Avaliação completa de riscos estruturais que podem comprometer sua organização',
    features: ['Mapeamento de riscos', 'Análise contextual', 'Relatório executivo'],
  },
  {
    title: 'Consultoria Estratégica de Segurança',
    description: 'Desenvolvimento de planos de segurança alinhados com objetivos empresariais',
    features: ['Planejamento estratégico', 'Implementação faseada', 'Monitoramento contínuo'],
  },
  {
    title: 'Gestão de Crises Executivas',
    description: 'Suporte especializado em situações críticas que exigem decisões precisas',
    features: ['Resposta rápida', 'Gestão de comunicação', 'Proteção de imagem'],
  },
  {
    title: 'Inteligência e Monitoramento',
    description: 'Acompanhamento contínuo de ameaças relevantes ao seu negócio',
    features: ['Inteligência ativa', 'Alertas em tempo real', 'Análise comportamental'],
  },
];

export function ConsultingSection() {
  return (
    <section id="consultoria" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-muted/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-light mb-6">
            Serviços de <span className="text-accent">Consultoria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Soluções personalizadas para cada dimensão da segurança executiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="border border-border hover:border-accent/50 transition-all duration-300 p-8 bg-card/50 hover:bg-card/80 relative overflow-hidden h-full">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-12 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Gostaria%20de%20conhecer%20mais%20sobre%20esse%20serviço%20de%20consultoria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm font-semibold text-accent hover:text-accent/80 uppercase tracking-wide transition"
                >
                  Solicitar Informações →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
