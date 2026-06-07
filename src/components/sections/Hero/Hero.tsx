import { motion } from 'framer-motion';
import { Container, Button, Badge } from '@/components/ui';
import { heroData } from '@/data/hero';
import { Typewriter } from './Typewriter';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-[var(--color-border)] pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Glow Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.07] rounded-full blur-[120px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--color-text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-primary) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)'
          }}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge label="Available for Opportunities" variant="success" dot={true} className="mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4"
        >
          Hi, I'm {heroData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium mb-2 max-w-2xl"
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-10 md:h-12 mb-8" // Fixed height to prevent layout shift
        >
          <span className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent)] to-indigo-400">
            <Typewriter strings={heroData.roles} typeSpeed={60} delayBetween={2500} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed"
        >
          {heroData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button href="#resume" label={heroData.ctaResume} icon="FileText" iconPosition="left" size="lg" />
          <Button href="#featured-work" label={heroData.ctaWork} variant="secondary" icon="ArrowRight" iconPosition="right" size="lg" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >


          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-text-secondary)]"
          />
        </motion.div>
      </Container>
    </section>
  );
}
