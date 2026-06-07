import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
}

export function Card({ children, className, hover = true, as: Component = 'div' }: CardProps) {
  return (
    <Component
      className={cn(
        "bg-[var(--color-surface-bg)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300",
        hover && "hover:border-[var(--color-accent)] hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </Component>
  );
}
