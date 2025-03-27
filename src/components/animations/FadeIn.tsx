
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FadeInProps = {
  children: ReactNode;
  delay?: 'none' | '100' | '200' | '300' | '400' | '500';
  direction?: 'up' | 'right' | 'none';
  fullWidth?: boolean;
  className?: string;
};

const FadeIn = ({ 
  children, 
  delay = 'none', 
  direction = 'up',
  fullWidth = false,
  className 
}: FadeInProps) => {
  const getAnimation = () => {
    if (direction === 'right') return 'animate-fade-in-right opacity-0';
    if (direction === 'up') return 'animate-fade-in opacity-0';
    return 'animate-blur-in opacity-0';
  };

  const getDelay = () => {
    if (delay === 'none') return '';
    return `animation-delay-${delay}`;
  };

  return (
    <div 
      className={cn(
        getAnimation(),
        getDelay(),
        fullWidth && 'w-full',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeIn;
