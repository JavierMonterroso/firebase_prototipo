
"use client"

import React from 'react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { CategoryType } from '@/lib/types';

interface CategoryChipProps {
  name: CategoryType;
  iconName: string;
  active?: boolean;
  onClick?: () => void;
  variant?: 'large' | 'small';
}

export const CategoryChip = ({ name, iconName, active, onClick, variant = 'large' }: CategoryChipProps) => {
  // @ts-ignore - Dynamically picking icon from Lucide
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  if (variant === 'small') {
    return (
      <button 
        onClick={onClick}
        className={cn(
          "px-4 py-2 rounded-full transition-all duration-300 text-sm font-bold whitespace-nowrap border",
          active 
            ? "bg-primary text-white border-primary shadow-md" 
            : "bg-white text-muted-foreground border-muted"
        )}
      >
        {name}
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center min-w-[85px] group transition-all duration-300",
        active ? "scale-105" : "hover:scale-105"
      )}
    >
      <div className={cn(
        "w-15 h-15 p-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm",
        active 
          ? "bg-primary text-white shadow-lg rotate-2" 
          : "bg-white text-primary group-hover:bg-muted border border-muted"
      )}>
        <IconComponent size={28} strokeWidth={1.5} />
      </div>
      <span className={cn(
        "text-[12px] mt-2 font-bold transition-colors",
        active ? "text-primary" : "text-muted-foreground"
      )}>
        {name}
      </span>
    </button>
  );
};
