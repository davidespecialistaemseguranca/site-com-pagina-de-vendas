'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-foreground/40 flex items-center justify-center text-xs font-bold">
            D
          </div>
          <span className="text-sm font-semibold uppercase tracking-wider">David</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm uppercase tracking-wide hover:text-accent transition">
            Início
          </Link>
          <Link href="#sobre" className="text-sm uppercase tracking-wide hover:text-accent transition">
            Sobre
          </Link>
          <Link href="#consultoria" className="text-sm uppercase tracking-wide hover:text-accent transition">
            Consultoria
          </Link>
          <Link href="#discond" className="text-sm uppercase tracking-wide hover:text-accent transition">
            DISCOND™
          </Link>
          <a
            href="https://wa.me/5511999999999?text=Olá%20David!%20Gostaria%20de%20conhecer%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wide border border-foreground/40 px-4 py-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition"
          >
            Falar Agora
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm uppercase tracking-wide hover:text-accent transition">
              Início
            </Link>
            <Link href="#sobre" className="text-sm uppercase tracking-wide hover:text-accent transition">
              Sobre
            </Link>
            <Link href="#consultoria" className="text-sm uppercase tracking-wide hover:text-accent transition">
              Consultoria
            </Link>
            <Link href="#discond" className="text-sm uppercase tracking-wide hover:text-accent transition">
              DISCOND™
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá%20David!%20Gostaria%20de%20conhecer%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wide border border-foreground/40 px-4 py-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition text-center"
            >
              Falar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
