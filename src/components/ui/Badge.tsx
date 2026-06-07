import { cn } from '@/utils/cn';

interface BadgeProps {
  label: string;
  variant?: 'success' | 'warning' | 'info' | 'neutral';
  dot?: boolean;
  className?: string;
}

export function Badge({ label, variant = 'neutral', dot = true, className }: BadgeProps) {
  const variants = {
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    info: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    neutral: "bg-[var(--color-border)] text-[var(--color-text-secondary)] border-[var(--color-border)]"
  };

  const dotColors = {
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    info: "bg-blue-500",
    neutral: "bg-[var(--color-text-secondary)]"
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
      variants[variant],
      className
    )}>
      {dot && (
        <span className="relative flex h-2 w-2">
          {(variant === 'success' || variant === 'info') && (
            <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", dotColors[variant])}></span>
          )}
          <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColors[variant])}></span>
        </span>
      )}
      {label}
    </span>
  );
}
