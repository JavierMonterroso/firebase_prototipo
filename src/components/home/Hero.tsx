
import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative pt-12 pb-6 px-5 hero-gradient rounded-b-[40px] mb-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-primary font-semibold text-sm tracking-wide">GUATEMALA</span>
          <h1 className="text-slate-900 mt-1">¡Hola, Explorador!</h1>
          <p className="text-slate-500 mt-1 font-medium">Descubre la magia del IRTRA</p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img src="https://picsum.photos/seed/user123/100/100" alt="Profile" />
        </div>
      </div>

      <Link href="/search">
        <div className="bg-white rounded-[18px] h-[56px] px-5 flex items-center shadow-soft border border-slate-50 transition-all hover:border-primary/20">
          <Search className="text-slate-400 mr-3" size={20} />
          <span className="text-slate-400">¿Qué quieres explorar hoy?</span>
        </div>
      </Link>
    </section>
  );
};
