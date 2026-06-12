'use client';

import { motion } from 'framer-motion';
import { AuthorityIdentity } from './authority-identity';
import { PublicationCard } from './publication-card';
import { LogoCarousel } from './logo-carousel';

export function AuthorityAssetsSection() {
  // Sample publications - easily editable
  const publications = [
    {
      title: 'Inteligência Estratégica em Segurança Vol. I',
      description: 'Framework metodológico para análise de risco estratégico em organizações',
      category: 'Framework',
      link: '#'
    },
    {
      title: 'Método DISCOND™: Segurança Operacional',
      description: 'Metodologia completa para implementação de segurança operacional',
      category: 'Metodologia',
      link: '#'
    },
    {
      title: 'Guia Executivo de Proteção',
      description: 'Guia estratégico para proteção em ambientes corporativos',
      category: 'Guia Prático',
      link: '#'
    },
    {
      title: 'Análise de Risco em Condomínios',
      description: 'Análise e diagnóstico de vulnerabilidades em propriedades residenciais',
      category: 'Checklist',
      link: '#'
    }
  ];

  // Sample logos - easily expandable to 15+
  const clientLogos = [
    { name: 'Empresa Fortune 500', alt: 'Fortune 500' },
    { name: 'Banco Internacional', alt: 'Banco' },
    { name: 'Corporação de Tecnologia', alt: 'Tech' },
    { name: 'Grupo Industrial', alt: 'Industrial' },
    { name: 'Incorporadora Imobiliária', alt: 'Imobiliária' }
  ];

  const certificationLogos = [
    { name: 'CPP - Especialista Certificado em Proteção', alt: 'CPP' },
    { name: 'ASIS International', alt: 'ASIS' },
    { name: 'Academia de Liderança Executiva', alt: 'Liderança' },
    { name: 'Instituto de Inteligência Estratégica', alt: 'Inteligência' },
    { name: 'Associação de Profissionais de Segurança', alt: 'SPIA' }
  ];

  return (
    <section className="py-24 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 space-y-4"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Expertise & Autoridade
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Autoridade Reconhecida em Segurança Executiva e Risco Estratégico
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Propriedade intelectual real, pesquisa publicada e credenciais profissionais que estabelecem autoridade em proteção executiva e gestão de risco organizacional.
          </p>
        </motion.div>

        {/* Personal Identity Card */}
        <div className="mb-24 p-8 border border-accent/20 rounded-lg bg-background/50">
          <AuthorityIdentity
            name="David Fernandes"
            credential="CPP"
            title="Criador do Método DISCOND™"
            subtitle="Com 20+ anos de experiência em proteção executiva, assessoria estratégica de risco e transformação organizacional"
          />
        </div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 space-y-8"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-foreground">
              Publicações & Frameworks
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Propriedade intelectual e metodologias publicadas que demonstram liderança de pensamento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publications.map((pub, idx) => (
              <PublicationCard key={idx} {...pub} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-24 p-8 border border-accent/20 rounded-lg bg-background/50"
        >
          <LogoCarousel
            logos={clientLogos}
            title="Portfólio de Clientes"
            description="Organizações e instituições que se beneficiaram de consultoria de segurança estratégica e serviços de proteção executiva"
          />
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 border border-accent/20 rounded-lg bg-background/50"
        >
          <LogoCarousel
            logos={certificationLogos}
            title="Credenciais Profissionais & Associações"
            description="Reconhecimento de organizações profissionais líderes e órgãos de certificação em segurança e gestão de risco"
          />
        </motion.div>
      </div>
    </section>
  );
}
