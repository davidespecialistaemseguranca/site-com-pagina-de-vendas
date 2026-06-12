'use client';

import { motion } from 'framer-motion';

interface AuthorityIdentityProps {
  name?: string;
  credential?: string;
  title?: string;
  subtitle?: string;
}

export function AuthorityIdentity({
  name = 'David Fernandes',
  credential = 'CPP',
  title = 'Criador do Método DISCOND™',
  subtitle = 'Especialista em Consultoria Executiva & Transformação Empresarial'
}: AuthorityIdentityProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-3"
    >
      <div className="space-y-1">
        <h3 className="text-2xl md:text-3xl font-light">
          {name}, <span className="text-accent font-semibold">{credential}</span>
        </h3>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold">
          {title}
        </p>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
