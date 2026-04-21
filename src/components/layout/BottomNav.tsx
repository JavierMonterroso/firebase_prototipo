
"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Map as MapIcon, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Inicio', icon: Home, href: '/' },
    { label: 'Buscar', icon: Search, href: '/search' },
    { label: 'Mapa', icon: MapIcon, href: '/map' },
    { label: 'Perfil', icon: User, href: '/profile' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 rounded-full shadow-soft border border-irtra-bg/50 w-[90%] max-w-sm pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex flex-col items-center transition-all duration-300 px-3",
                isActive ? "text-primary scale-110" : "text-slate-400"
              )}
            >
              <Icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={cn(
                "text-[10px] mt-1 font-medium",
                isActive ? "opacity-100" : "opacity-0 scale-0"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
