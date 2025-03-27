
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BlurContainerProps = {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

const BlurContainer = ({ 
  children, 
  className,
  hoverEffect = false
}: BlurContainerProps) => {
  return (
    <div 
      className={cn(
        'glass-effect rounded-xl p-6 transition-all duration-300',
        hoverEffect && 'hover:shadow-glass-hover hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
