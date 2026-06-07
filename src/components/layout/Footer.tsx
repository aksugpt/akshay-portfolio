import { contactData } from '@/data/contact';
import * as LucideIcons from 'lucide-react';

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

        <div className="flex gap-4">
          {contactData.socials.map((social, idx) => {
            const IconComponent = (LucideIcons as any)[social.iconName];
            return (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors p-2"
                aria-label={social.label}
              >
                {IconComponent ? <IconComponent size={20} /> : social.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
