'use client';

import Link from 'next/link';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-foreground/40 flex items-center justify-center text-xs font-bold">
                D
              </div>
              <span className="font-semibold uppercase tracking-wider">David</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Consultoria estratégica em segurança executiva para organizações que não deixam a inteligência ao acaso.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-sm tracking-wide">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-muted-foreground hover:text-accent transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#discond" className="text-muted-foreground hover:text-accent transition">
                  Framework DISCOND™
                </Link>
              </li>
              <li>
                <Link href="#consultoria" className="text-muted-foreground hover:text-accent transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/playbooks/vulnerabilidades-portarias" className="text-muted-foreground hover:text-accent transition">
                  Playbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-sm tracking-wide">Contato</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:contato@davidespecialistaemseguranca.online"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
              >
                <Mail size={16} />
                E-mail
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
              >
                <ArrowRight size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2025 David — Especialista em Segurança. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition">
                Privacidade
              </Link>
              <Link href="#" className="hover:text-accent transition">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
