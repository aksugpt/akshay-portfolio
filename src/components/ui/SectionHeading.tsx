import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h2>
      <div className={cn(
        "h-1 w-12 bg-[var(--color-accent)] mt-4 rounded-full",
        align === 'center' && "mx-auto"
      )} />
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
