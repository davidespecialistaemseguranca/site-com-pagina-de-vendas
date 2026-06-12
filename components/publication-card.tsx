'use client';

import { motion } from 'framer-motion';

interface PublicationCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
  index?: number;
}

export function PublicationCard({
  title,
  description,
  category,
  image,
  link,
  index = 0
}: PublicationCardProps) {
  return (
    <motion.a
      href={link}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-full"
    >
      <div className="relative h-full p-6 border border-accent/20 rounded-lg bg-card hover:border-accent/50 transition-all duration-300 hover:bg-card/80 flex flex-col">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Image placeholder or actual image */}
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded mb-4 group-hover:opacity-90 transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-accent/5 rounded mb-4 flex items-center justify-center border border-accent/20">
              <div className="text-center">
                <div className="text-4xl mb-2">📕</div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Publication</p>
              </div>
            </div>
          )}

          {/* Category badge */}
          <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-3 w-fit">
            {category}
          </span>

          {/* Title */}
          <h4 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h4>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3 mb-4">
            {description}
          </p>

          {/* Learn more indicator */}
          {link && (
            <div className="text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Saiba Mais →
            </div>
          )}
        </div>
      </div>
    </motion.a>
  );
}
