
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

  // Ocultar navbar en login y registro
  if (pathname === '/login' || pathname === '/register') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-4 pointer-events-none">
      <nav className="flex items-center justify-around bg-white/95 backdrop-blur-xl py-3 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-white/20 w-full max-w-md pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center transition-all duration-300 min-w-[64px]",
                isActive ? "text-irtra-blue scale-105" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <div className={cn(
                "p-1.5 rounded-xl transition-colors",
                isActive ? "bg-irtra-blue/10" : "bg-transparent"
              )}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                "text-[11px] mt-1 font-semibold transition-all",
                isActive ? "opacity-100" : "opacity-70"
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
