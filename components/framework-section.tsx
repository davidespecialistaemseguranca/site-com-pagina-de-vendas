'use client';

import { motion } from 'framer-motion';

const frameworkSteps = [
  {
    letter: 'D',
    title: 'Diagnóstico',
    description: 'Análise profunda do cenário atual e identificação de vulnerabilidades estratégicas',
  },
  {
    letter: 'I',
    title: 'Inteligência',
    description: 'Coleta e análise de dados relevantes para contextualizar os riscos',
  },
  {
    letter: 'S',
    title: 'Síntese',
    description: 'Organização estratégica das informações em um plano de ação claro',
  },
  {
    letter: 'C',
    title: 'Consultoria',
    description: 'Recomendações executivas personalizadas para sua organização',
  },
  {
    letter: 'O',
    title: 'Operacionalização',
    description: 'Implementação gradual das estratégias de proteção definidas',
  },
  {
    letter: 'N',
    title: 'Negociação',
    description: 'Gestão de questões sensíveis com discrição e autoridade',
  },
  {
    letter: 'D',
    title: 'Desenvolvimento',
    description: 'Evolução contínua da sua postura de segurança e inteligência',
  },
];

export function FrameworkSection() {
  return (
    <section id="discond" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Metodologia Proprietária
            </span>
          </div>
          <h2 className="text-5xl font-light mb-6">
            Framework <span className="text-accent">DISCOND™</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma abordagem estruturada e comprovada para transformar análise em ação estratégica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4 mb-12">
          {frameworkSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 border border-border group-hover:border-accent/50 transition-all duration-300 bg-card/50 group-hover:bg-card/80 text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {step.letter}
                </div>
                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-accent/20 p-8 md:p-12 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Resultado: Segurança com Propósito</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            O framework DISCOND™ não é apenas uma metodologia—é a evolução da consultoria de segurança executiva. Cada etapa foi desenvolvida para garantir que sua organização não apenas reaja às ameaças, mas as antecipe com precisão cirúrgica.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Gostaria%20de%20conhecer%20mais%20sobre%20o%20framework%20DISCOND%20e%20como%20pode%20beneficiar%20minha%20organização."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground uppercase text-sm font-semibold tracking-wide hover:bg-accent/90 transition"
          >
            Solicitar Acesso
          </a>
        </motion.div>
      </div>
    </section>
  );
}
