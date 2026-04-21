
import React from 'react';
import { cn } from '@/lib/utils';

interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const MobileContainer = ({ children, className, noPadding = false }: MobileContainerProps) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-irtra-bg">
      <div 
        className={cn(
          "w-full max-w-md min-h-screen bg-white relative flex flex-col shadow-xl",
          !noPadding && "px-5",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
