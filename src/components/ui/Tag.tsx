import { cn } from '@/utils/cn';

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span className={cn(
      "inline-block px-3 py-1 rounded-md text-sm font-mono bg-[#1C1C27] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
      className
    )}>
      {label}
    </span>
  );
}
