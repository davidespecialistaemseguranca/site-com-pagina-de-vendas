'use client';

import { motion } from 'framer-motion';

interface Logo {
  name: string;
  url?: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  title: string;
  description?: string;
}

export function LogoCarousel({ logos, title, description }: LogoCarouselProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Logo grid with responsive columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="group relative"
          >
            {logo.url ? (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-24 flex items-center justify-center p-4 border border-accent/20 rounded-lg bg-card/50 hover:border-accent/50 hover:bg-card transition-all duration-300 group"
              >
                {/* Placeholder for logo - would be replaced with actual image */}
                <div className="text-center space-y-2">
                  <div className="text-2xl">🏢</div>
                  <p className="text-xs text-muted-foreground text-center line-clamp-2">
                    {logo.name}
                  </p>
                </div>
              </a>
            ) : (
              <div className="relative h-24 flex items-center justify-center p-4 border border-accent/20 rounded-lg bg-card/50 hover:border-accent/50 transition-all duration-300">
                {/* Placeholder for logo - would be replaced with actual image */}
                <div className="text-center space-y-2">
                  <div className="text-2xl">🏢</div>
                  <p className="text-xs text-muted-foreground text-center line-clamp-2">
                    {logo.name}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {/* Empty slots for future logos - show up to 15 total slots */}
        {logos.length < 15 && (
          <>
            {Array.from({ length: Math.min(15 - logos.length, 3) }).map((_, idx) => (
              <motion.div
                key={`empty-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (logos.length + idx) * 0.05, duration: 0.5 }}
                className="relative h-24 flex items-center justify-center p-4 border border-dashed border-accent/20 rounded-lg bg-background/30 hover:border-accent/30 transition-all duration-300"
              >
                <p className="text-xs text-muted-foreground/50 text-center">Coming Soon</p>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
