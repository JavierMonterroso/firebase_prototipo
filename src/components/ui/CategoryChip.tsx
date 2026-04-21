
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
          "px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium whitespace-nowrap border",
          active 
            ? "bg-irtra-blue text-white border-irtra-blue shadow-md" 
            : "bg-white text-slate-600 border-slate-100"
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
        "flex flex-col items-center min-w-[80px] group transition-all duration-300",
        active ? "scale-105" : "hover:scale-105"
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm",
        active 
          ? "bg-irtra-blue text-white shadow-lg rotate-3" 
          : "bg-white text-irtra-blue group-hover:bg-irtra-bg border border-slate-50"
      )}>
        <IconComponent size={28} strokeWidth={1.5} />
      </div>
      <span className={cn(
        "text-[12px] mt-2 font-medium transition-colors",
        active ? "text-irtra-blue" : "text-slate-500"
      )}>
        {name}
      </span>
    </button>
  );
};
