'use client';

import { motion } from 'framer-motion';

export function PublicationsSection() {
  // David Fernandes' actual published works
  const publications = [
    {
      title: 'Segurança em Arquitetura e Construção',
      subtitle: 'Construindo empreendimentos mais seguros',
      author: 'David Fernandes da Silva, CPP',
      publisher: 'Ferrari',
      category: 'Arquitetura & Construção'
    },
    {
      title: 'Manual de Prevenção de Perdas',
      subtitle: 'De Furtos e Roubos - Para a Indústria e Varejo',
      author: 'David Fernandes da Silva, CPP',
      publisher: 'Ferrari',
      category: 'Indústria & Varejo'
    },
    {
      title: 'Prevenção de Assaltos, Furtos e Invasões Perimetrais',
      subtitle: 'Varejo, Indústria e Grandes Empreendimentos',
      author: 'David Fernandes da Silva, CPP',
      publisher: 'Ferrari',
      category: 'Segurança Perimetral'
    },
    {
      title: 'Manual de Segurança Condominial',
      subtitle: 'Segurança de Condomínios Residenciais, Empresariais e Industriais',
      author: 'David Fernandes da Silva, CPP',
      publisher: 'Especializado',
      category: 'Segurança Condominial'
    },
    {
      title: 'Proteção de Condomínios, Casas, Comércios e Segurança Pessoal',
      subtitle: 'CPME Security',
      author: 'David Fernandes, CPP',
      publisher: 'CPME',
      category: 'Proteção Patrimonial'
    },
    {
      title: 'Proteção de Usinas',
      subtitle: 'Conceitos de Segurança Patrimonial para o Setor Sucroenergético',
      author: 'David Fernandes da Silva, CPP',
      publisher: 'Gatua',
      category: 'Segurança Industrial'
    },
    {
      title: 'Cartilha ABESE - Segurança de Condomínios',
      subtitle: 'Empresas de Sistemas de Segurança',
      author: 'David Fernandes, CPP',
      publisher: 'ABESE',
      category: 'Segurança Residencial'
    },
    {
      title: 'Cartilha ABESE - Sistemas Eletrônicos de Segurança',
      subtitle: 'O que é preciso saber para adquirir o melhor sistema',
      author: 'David Fernandes, CPP',
      publisher: 'ABESE',
      category: 'Sistemas Eletrônicos'
    },
    {
      title: 'Sistema de Intrusão',
      subtitle: 'Metodologia e Implementação',
      author: 'David Fernandes, CPP',
      publisher: 'Especializado',
      category: 'Sistemas de Segurança'
    }
  ];

  return (
    <section className="py-24 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-4"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase block">
            Propriedade Intelectual
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-snug">
            Livros, Manuais e Publicações Técnicas
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Mais de duas décadas produzindo conteúdo técnico, metodologias, frameworks e publicações especializadas em segurança patrimonial, segurança condominial, gestão de riscos e proteção de ativos.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group flex flex-col p-6 border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-background/80 transition-all duration-300 space-y-4 h-full"
            >
              {/* Publication Icon/Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-accent/10 to-accent/5 rounded-md flex items-center justify-center border border-accent/10 group-hover:border-accent/30 transition-colors">
                <div className="text-center space-y-2">
                  <div className="text-3xl">📕</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{pub.category}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-foreground leading-tight line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {pub.subtitle}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-accent/10">
                  <p className="text-xs text-accent font-medium">{pub.author}</p>
                  <p className="text-xs text-muted-foreground">{pub.publisher}</p>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full text-xs uppercase tracking-widest text-accent font-semibold hover:text-accent-light transition-colors">
                  Ver Detalhes →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 border border-accent/20 rounded-lg bg-card/50 text-center"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="text-accent font-semibold">David Fernandes, CPP</span> é autor reconhecido de livros, manuais e publicações técnicas especializadas em segurança patrimonial, segurança condominial e gestão de riscos. Sua obra reflete mais de 20 anos de experiência prática e consultoria em segurança organizacional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
