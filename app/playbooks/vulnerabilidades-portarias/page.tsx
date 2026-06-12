'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AuthorCredibilityBlock } from '@/components/author-credibility-block';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Check, AlertTriangle, Users, Eye, Lock, Shield, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

const operationalRisks = [
  {
    icon: AlertTriangle,
    title: 'Visitantes Sem Verificação Real',
    description: 'Acesso permitido sem confirmar identidade. Você não sabe quem entra no condomínio.',
  },
  {
    icon: Users,
    title: 'Delivery Desorganizado',
    description: 'Prestadores circulam sem controle. Sem registrar horário, número de pessoas ou movimento.',
  },
  {
    icon: Eye,
    title: 'Pontos Cegos Desprotegidos',
    description: 'Áreas sem câmeras. Impossível rastrear movimento ou investigar depois.',
  },
  {
    icon: Lock,
    title: 'Procedimentos Inconsistentes',
    description: 'Cada porteiro faz diferente. Sem protocolo único, sem padrão operacional.',
  },
  {
    icon: Shield,
    title: 'Portaria Remota Vulnerável',
    description: 'Sem autoridade no local. Sem verificação presencial de identidade ou veículos.',
  },
  {
    icon: Users,
    title: 'Comunicação Fragmentada',
    description: 'Portaria isolada. Sem canal rápido para avisar segurança sobre suspeitas ou emergências.',
  },
];

const checklistDelivers = [
  { icon: FileText, label: '47 itens verificáveis', desc: 'Checklist pronto para preencher' },
  { icon: CheckCircle2, label: 'Matriz de priorização', desc: 'Organize por risco e custo' },
  { icon: FileText, label: 'Procedimentos passo-a-passo', desc: 'Para cada cenário operacional' },
  { icon: CheckCircle2, label: 'Verificação de identidade', desc: 'Protocolo claro e executável' },
  { icon: FileText, label: 'Rastreamento de visitantes', desc: 'Controle total de quem circula' },
  { icon: CheckCircle2, label: 'Mapeamento de câmeras', desc: 'Identifique pontos cegos' },
  { icon: FileText, label: 'Auditoria de acesso', desc: 'Revise sistemas periodicamente' },
  { icon: CheckCircle2, label: 'Guia de delivery', desc: 'Padronize entregas e prestadores' },
];

const targetRoles = [
  { role: 'Síndicos', desc: 'Implementar segurança operacional no condomínio' },
  { role: 'Administradoras', desc: 'Padronizar procedimentos em múltiplas propriedades' },
  { role: 'Gestores Operacionais', desc: 'Organizar dia a dia de acesso e controle' },
  { role: 'Portarias Remotas', desc: 'Fortalecer protocolos mesmo à distância' },
  { role: 'Consultores', desc: 'Oferecer ferramenta pronta para clientes' },
  { role: 'Facilities', desc: 'Implementar segurança preventiva estruturada' },
];

const whatsappMessage = encodeURIComponent('Olá David, quero receber o Checklist Executivo de Vulnerabilidades em Portarias e Controle de Acesso.');

export default function PlaybookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* ============================================================
          SECTION 1: HIGH-CONVERSION PREMIUM HERO
          ============================================================ */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                Operacional. Prático. Pronto para Usar.
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight">
              <span className="text-foreground">Seu condomínio pode possuir</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                vulnerabilidades operacionais invisíveis
              </span>
              <br />
              <span className="text-foreground">que comprometem toda a segurança da portaria</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Um framework executivo completo para identificar, classificar, priorizar e resolver vulnerabilidades em controle de acesso e operações de segurança. Ferramenta profissional de tomada de decisão baseada na metodologia DISCOND™.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                <Check className="w-4 h-4" /> Preenchível
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                <Check className="w-4 h-4" /> Aplicável rapidamente
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                <Check className="w-4 h-4" /> Pronto para implementação
              </span>
            </div>

            {/* Premium pricing block */}
            <div className="pt-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg text-muted-foreground line-through">De R$ 497</span>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded">Oferta de lançamento</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-accent">R$ 97</span>
                  <span className="text-lg text-muted-foreground">,00</span>
                </div>
                <p className="text-sm text-accent-light uppercase tracking-widest font-semibold">Acesso imediato no WhatsApp</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground uppercase text-sm font-semibold tracking-wide hover:bg-accent/90 transition"
              >
                Receber Framework Executivo <ArrowRight size={16} />
              </a>
              <a
                href="#proposta-valor"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-foreground/20 uppercase text-sm font-semibold tracking-wide hover:bg-foreground/5 transition"
              >
                Ver Componentes
              </a>
            </div>

              <div className="text-sm text-muted-foreground">
                ✓ Entrega via WhatsApp • ✓ Acesso imediato • ✓ Sem riscos
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: INVISIBLE OPERATIONAL RISKS
          ============================================================ */}
      <section className="py-24 relative bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Riscos Silenciosos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              6 Vulnerabilidades Operacionais <span className="text-accent">Invisíveis</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Que existem na maioria dos condomínios. E ninguém as vê até algo acontecer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalRisks.map((risk, idx) => {
              const Icon = risk.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="group relative bg-background border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors duration-300 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold mb-3 text-foreground leading-snug">{risk.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{risk.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3A: WHAT YOU WILL RECEIVE - VALUE PROPOSITION
          ============================================================ */}
      <section id="proposta-valor" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-4"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              O QUE VOCÊ RECEBERÁ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              Um Framework Executivo <span className="text-accent">Completo</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Muito mais que um checklist. Um toolkit profissional com ferramentas de avaliação, classificação de risco, planejamento e apresentação executiva. Baseado na metodologia DISCOND™.
            </p>
          </motion.div>

          {/* Six component cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Checklist Executivo de Vulnerabilidades',
                description: 'Identifique fraquezas críticas em controle de acesso, gestão de visitantes, entregas, garagens e procedimentos operacionais',
                icon: '📋'
              },
              {
                title: 'Matriz de Classificação de Risco',
                description: 'Classifique cada vulnerabilidade como Alto, Médio ou Baixo risco usando critérios estruturados e objetivos',
                icon: '📊'
              },
              {
                title: 'Construtor de Planos de Ação',
                description: 'Defina ações corretivas, responsabilidades específicas e prazos de implementação realistas',
                icon: '📝'
              },
              {
                title: 'Matriz de Priorização Executiva',
                description: 'Organize vulnerabilidades por urgência e impacto operacional para tomada de decisão estratégica',
                icon: '⚡'
              },
              {
                title: 'Template de Apresentação em Assembleias',
                description: 'Apresente achados, prioridades e recomendações de forma profissional e convincente aos proprietários',
                icon: '🎯'
              },
              {
                title: 'Método DISCOND™ Aplicado',
                description: 'Aplique a metodologia proprietária focada em prevenção, priorização e melhoria operacional contínua',
                icon: '🔐'
              }
            ].map((component, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group p-6 border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-background/50 transition-all duration-300 space-y-4"
              >
                <div className="text-4xl">{component.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{component.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Value summary box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 border border-accent/20 rounded-lg bg-card/50"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <span className="text-accent font-semibold">Posicionamento estratégico:</span> Você não recebe apenas um documento para preencher. Você adquire um framework operacional profissional que permite identificar vulnerabilidades reais, entender o risco real de cada uma, priorizar investimentos de segurança, comunicar problemas à assembleia de forma profissional e implementar melhorias estruturadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: WHAT YOU RECEIVE - PRACTICAL FOCUS
          ============================================================ */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Dentro do Checklist
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              Ferramenta Prática e <span className="text-accent">Preenchível</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Tudo documentado. Pronto para usar. Sem teoria. Sem complicação. Sem necessidade de inventar nada.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {checklistDelivers.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className="p-6 border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300 space-y-3"
                >
                  <Icon className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-bold text-foreground text-sm md:text-base">{item.label}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-8 bg-card border border-accent/20 rounded-lg space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              <span className="text-accent font-semibold">Formato executivo:</span> PDF organizado com checklist preenchível, matrizes de priorização, procedimentos operacionais claros. Você abre, preenche com sua realidade, e implementa hoje mesmo. Cada item foi testado em operação real com condomínios.
            </p>
            <p className="text-sm md:text-base text-accent-light font-medium">
              Tempo de implementação: 2-4 semanas para organização completa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: IDEAL FOR
          ============================================================ */}
      <section className="py-24 relative bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Público-Alvo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              Ideal Para <span className="text-accent">Quem</span>?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Se você precisa organizar segurança operacional no condomínio, este material resolve seu problema.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetRoles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-background/50 transition-all duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold text-accent mb-2">{item.role}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: WHY THIS IS DIFFERENT
          ============================================================ */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              O Diferencial
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              Isto É <span className="text-accent">Um Framework</span>, Não Apenas Um Checklist.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-3 pb-6 border-b border-accent/20">
                <h3 className="text-lg md:text-xl font-bold text-accent">Não é apenas um checklist</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Um toolkit executivo com estrutura de avaliação, classificação de risco, priorização e planejamento de ações.</p>
              </div>

              <div className="space-y-3 pb-6 border-b border-accent/20">
                <h3 className="text-lg md:text-xl font-bold text-accent">Baseado em metodologia proprietária</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Método DISCOND™ desenvolvido após análise de 150+ condomínios e propriedades comerciais.</p>
              </div>

              <div className="space-y-3 pb-6 border-b border-accent/20">
                <h3 className="text-lg md:text-xl font-bold text-accent">Ferramentas profissionais inclusas</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Matrizes de risco, templates de apresentação, guias operacionais e estrutura de priorização executiva.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-accent">Pronto para implementação</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">Sem necessidade de consultoria adicional. Sua equipe pode começar hoje e completar implementação em 2-4 semanas.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-8 bg-card border border-accent/20 rounded-lg">
                <h3 className="text-lg md:text-xl font-bold text-accent mb-4">Ferramentas Profissionais Reais</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  É o mesmo framework usado por administradoras de condomínios, consultores de segurança e empresas de portaria remota. Você recebe o kit completo de ferramentas profissionais. Não é um ebook de vendas. É um toolkit operacional.
                </p>
              </div>

              <div className="p-6 bg-background border border-accent/20 rounded-lg space-y-4">
                <p className="text-xs text-accent font-semibold uppercase tracking-wide">Estatísticas Reais</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-accent">150+</p>
                    <p className="text-sm md:text-base text-muted-foreground">Propriedades Analisadas</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">87%</p>
                    <p className="text-sm md:text-base text-muted-foreground">Redução de Incidentes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">20+ Anos</p>
                    <p className="text-sm md:text-base text-muted-foreground">Experiência de Campo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: PREMIUM MOCKUPS
          ============================================================ */}
      <section className="py-24 relative bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              O Produto
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              Checklist Executivo <span className="text-accent">Premium</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Prático. Organizado. Pronto para preencher e implementar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Executive Checklist', desc: '47 itens preenchíveis com priorização de risco' },
              { title: 'Operational Procedures', desc: 'Procedimentos passo-a-passo para cada cenário' },
              { title: 'Implementation Guide', desc: 'Roteiro claro de implementação em 4 semanas' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 border border-accent/20 rounded-lg bg-background group-hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  <div className="w-full h-40 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg mb-6 flex items-center justify-center border border-accent/20">
                    <FileText className="w-8 h-8 text-accent opacity-50" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground flex-grow leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: AUTHORITY & TRUST
          ============================================================ */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Credibilidade
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              Desenvolvido por <span className="text-accent">Especialista Certificado</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'CPP Certified', desc: 'Certified Protection Professional - maior certificação de segurança do mundo. Apenas 2% dos profissionais possuem.' },
              { title: 'Autor & Professor', desc: 'Publicações técnicas em segurança. Docência em segurança estratégica e gestão de risco operacional.' },
              { title: 'Framework DISCOND™', desc: 'Metodologia proprietária testada em 150+ propriedades com redução verificada de 87% em incidentes.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-background/50 transition-all duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold text-accent mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: PREMIUM PRICING & OFFER
          ============================================================ */}
      <section className="py-24 relative bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Oferta Especial de Lançamento
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-snug">
              <span className="text-foreground">Investimento Estratégico</span>
              <br />
              <span className="text-accent">Em Proteção Operacional</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 bg-background border border-accent/20 rounded-lg text-center space-y-6 mb-12"
            >
              <div>
                <p className="text-lg text-muted-foreground line-through mb-2">De R$ 497,00</p>
                <div className="inline-block px-4 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded mb-4">Preço de referência</div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm md:text-base text-accent-light uppercase tracking-widest font-semibold">Oferta de Lançamento — Válida por Tempo Limitado</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-6xl md:text-7xl font-bold text-accent">R$ 97</span>
                  <span className="text-lg md:text-xl text-muted-foreground">,00</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-accent-light font-semibold">Economia de 81% em relação ao preço de referência</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Acesso Imediato', desc: 'Recebe no WhatsApp em poucos minutos' },
                { title: 'Implementação Rápida', desc: '2-4 semanas para organização completa' },
                { title: 'Suporte Consultivo', desc: 'WhatsApp com especialista por 2 horas' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 border border-accent/20 rounded-lg text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2 text-base md:text-lg">{item.title}</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 p-8 bg-card border border-accent/20 rounded-lg text-center"
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              Uma consultoria externa de segurança operacional custa R$5.000+. Um diagnóstico de vulnerabilidades custa R$10.000+. Este material segue o mesmo framework que usamos em consultoria. A diferença é que você tem acesso à estrutura pronta por R$97. É retorno sobre investimento real.
            </p>
            <p className="text-base md:text-lg text-accent font-semibold">
              Um incidente de segurança evitado já justifica o investimento centenas de vezes.
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          AUTHOR CREDIBILITY BLOCK
          ============================================================ */}
      <AuthorCredibilityBlock />

      {/* ============================================================
          SECTION 9: FINAL WHATSAPP CTA - CINEMATIC
          ============================================================ */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug">
              <span className="text-foreground">Organize Sua Portaria</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                em Apenas 2 Semanas
              </span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Implementação completa de segurança operacional preventiva. Do checklist à prática. Transforme vulnerabilidades invisíveis em procedimentos claros.
            </p>

            <div className="pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-accent-foreground uppercase text-sm font-bold tracking-wider hover:bg-accent-light transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg shadow-accent/30"
                >
                  Receber no WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/5511999999999?text=Olá%20David,%20gostaria%20de%20falar%20sobre%20implementação%20do%20checklist%20no%20condomínio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-accent text-foreground uppercase text-sm font-bold tracking-wider hover:bg-accent/10 transition-all duration-300 rounded-lg"
                >
                  Implementar o Checklist
                </a>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-sm md:text-base text-muted-foreground font-semibold">
                  ✓ Sigilo garantido • ✓ Sem compromisso • ✓ Acesso imediato • ✓ Suporte consultivo
                </p>
                <p className="text-xs md:text-sm text-accent font-medium">
                  Resposta via WhatsApp em até 2 horas
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-12 border-t border-accent/20 max-w-2xl mx-auto"
            >
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Mais de 150 condomínios já transformaram sua segurança operacional com o Framework DISCOND™. Agora é a sua vez.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
