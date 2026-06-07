import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Extract all section IDs to track
  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled 
          ? "bg-[var(--color-surface-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'hero')} // Assuming hero is the top section
          className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
        >
          AG.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--color-accent)] relative",
                activeSection === link.id 
                  ? "text-[var(--color-accent)]" 
                  : "text-[var(--color-text-secondary)]"
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-text-primary)] p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--color-surface-bg)] border-b border-[var(--color-border)] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={cn(
                    "text-lg font-medium",
                    activeSection === link.id 
                      ? "text-[var(--color-accent)]" 
                      : "text-[var(--color-text-secondary)]"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
