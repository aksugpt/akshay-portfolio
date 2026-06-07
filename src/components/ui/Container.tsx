import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn("max-w-5xl mx-auto px-6 md:px-8", className)}>
      {children}
    </Component>
  );
}
