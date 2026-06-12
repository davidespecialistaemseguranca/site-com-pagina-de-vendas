# 🎨 Guia de Customização

## Cores Personalizadas

Para alterar o esquema de cores, edite `/app/globals.css`:

### Exemplo: Mudar para tema Azul + Dourado
```css
:root {
  --background: #0a0f1a;
  --foreground: #ffffff;
  --accent: #d4af37;  /* Dourado */
  /* ... resto das cores ... */
}
```

## Conteúdo da Homepage

### Hero Section
Arquivo: `/components/hero-section.tsx`
```tsx
// Alterar headline
<h1>Seu novo título aqui</h1>

// Alterar subtítulo
<p>Sua descrição aqui</p>

// Alterar link WhatsApp
href="https://wa.me/SEU_NUMERO"
```

### Features
Arquivo: `/components/features-section.tsx`
```tsx
const features = [
  {
    icon: Shield,
    title: 'Seu título aqui',
    description: 'Sua descrição aqui',
  },
  // ... adicione mais
];
```

### Framework DISCOND™
Arquivo: `/components/framework-section.tsx`
```tsx
const frameworkSteps = [
  {
    letter: 'S',
    title: 'Seu título',
    description: 'Sua descrição',
  },
  // ... customize cada etapa
];
```

## Adicionar Novas Páginas

### 1. Criar nova rota
```bash
mkdir -p app/sua-rota
touch app/sua-rota/page.tsx
```

### 2. Adicionar ao layout
```tsx
// Em components/navigation.tsx
<Link href="/sua-rota" className="...">
  Sua Página
</Link>
```

### 3. Usar componentes existentes
```tsx
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function SuaPagina() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* Seu conteúdo */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
```

## Animações Customizadas

Framer Motion está integrado. Exemplos:

### Fade In
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Seu conteúdo
</motion.div>
```

### Slide Up on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Seu conteúdo
</motion.div>
```

### Hover Scale
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clique aqui
</motion.button>
```

## Adicionar Formulário

### Exemplo com Server Action
```tsx
'use client';

import { useState } from 'react';

export default function FormularioContato() {
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    
    // Seu código de envio aqui
    
    setEnviando(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="seu@email.com"
        required
        className="w-full px-4 py-2 bg-card border border-border"
      />
      <button
        type="submit"
        disabled={enviando}
        className="w-full px-4 py-2 bg-accent text-accent-foreground"
      >
        {enviando ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
```

## Adicionar Images

### Otimizar com Next.js Image
```tsx
import Image from 'next/image';

<Image
  src="/sua-imagem.jpg"
  alt="Descrição"
  width={800}
  height={600}
  priority // para hero images
/>
```

### Adicionar Background
```tsx
<div
  className="bg-cover"
  style={{
    backgroundImage: 'url(/sua-imagem.jpg)',
  }}
>
  Conteúdo
</div>
```

## Metadados de Página

### Para nova página
```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Título da Página',
  description: 'Descrição para SEO',
};

export default function Page() {
  // ...
}
```

## Componentes Reutilizáveis

### Criar novo componente
```tsx
// components/meu-componente.tsx
'use client';

interface MeuComponenteProps {
  titulo: string;
  descricao: string;
}

export function MeuComponente({ titulo, descricao }: MeuComponenteProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p className="text-muted-foreground">{descricao}</p>
    </div>
  );
}
```

### Usar em páginas
```tsx
import { MeuComponente } from '@/components/meu-componente';

export default function Page() {
  return (
    <MeuComponente
      titulo="Exemplo"
      descricao="Descrição do componente"
    />
  );
}
```

## Dark Mode (já está ativo)

Se precisar de toggle:
```tsx
'use client';

import { useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      onClick={() => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
      }}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
```

## CSS Customizado

### Adicionar estilos globais
Em `/app/globals.css`:

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition;
  }
}
```

### Usar no JSX
```tsx
<button className="btn-primary">Clique aqui</button>
```

## Responsive Design

### Mobile-first approach
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Texto responsivo
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Grid responsivo
</div>
```

## Performance

### Code Splitting
```tsx
import dynamic from 'next/dynamic';

const ComponentePesado = dynamic(() => import('./componente-pesado'), {
  loading: () => <div>Carregando...</div>,
});
```

### Image Optimization
```tsx
<Image
  src="/imagem.jpg"
  alt="Alt text"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="..." // thumb64
/>
```

---

**Dúvidas?** Consulte a [documentação oficial do Next.js](https://nextjs.org/docs) e [Tailwind CSS](https://tailwindcss.com/docs)
