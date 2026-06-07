import { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import * as LucideIcons from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  children?: ReactNode;
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}: ButtonProps) {
  const IconComponent = icon ? (LucideIcons as any)[icon] : null;

  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  const variants = {
    primary: "bg-[var(--color-accent)] text-white hover:bg-opacity-90 shadow-sm",
    secondary: "bg-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-opacity-80",
    ghost: "hover:bg-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  const content = (
    <>
      {IconComponent && iconPosition === 'left' && <IconComponent className={cn("mr-2", size === 'sm' ? 'w-4 h-4' : 'w-5 h-5')} />}
      {label || children}
      {IconComponent && iconPosition === 'right' && <IconComponent className={cn("ml-2", size === 'sm' ? 'w-4 h-4' : 'w-5 h-5')} />}
    </>
  );

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
