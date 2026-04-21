
"use client"

import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/navigation';
import { useRouter } from 'next/navigation';

export const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative pt-12 pb-8 px-5 hero-gradient rounded-b-[48px] mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-irtra-blue font-bold text-[12px] tracking-[0.2em] uppercase">GUATEMALA</span>
          <h1 className="text-slate-900 mt-1.5 text-3xl font-bold tracking-tight">¡Hola, Juan!</h1>
          <p className="text-slate-600 mt-1 font-medium text-[15px]">Descubre la magia del IRTRA</p>
        </div>
        <button 
          onClick={() => router.push('/profile')}
          className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg active:scale-95 transition-transform"
        >
          <img src="https://picsum.photos/seed/user123/100/100" alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>

      <div 
        onClick={() => router.push('/search')}
        className="bg-white rounded-2xl h-[64px] px-6 flex items-center shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-white/50 transition-all hover:border-irtra-blue/20 cursor-pointer active:scale-[0.98]"
      >
        <Search className="text-irtra-blue mr-4" size={22} strokeWidth={2.5} />
        <span className="text-slate-400 font-medium">¿Qué quieres explorar hoy?</span>
      </div>
    </section>
  );
};
