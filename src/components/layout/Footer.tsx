import { contactData } from '@/data/contact';
import { Briefcase, Code, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-bg)] py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-[var(--color-text-secondary)]">
            © {currentYear} Akshay Gupta. All rights reserved.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]/70 mt-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors py-2"
            aria-label="LinkedIn"
          >
            <Briefcase size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors py-2"
            aria-label="GitHub"
          >
            <Code size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors py-2"
            aria-label="Email"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
