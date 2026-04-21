
"use client"

import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { BottomNav } from '@/components/layout/BottomNav';
import { CategoryChip } from '@/components/ui/CategoryChip';
import { PlaceCard } from '@/components/ui/PlaceCard';
import { CATEGORIES, PLACES } from '@/lib/data';
import { CategoryType } from '@/lib/types';
import { Input } from '@/components/ui/input';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'All'>('All');

  const filteredPlaces = useMemo(() => {
    return PLACES.filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          place.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || place.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <MobileContainer className="pb-32" noPadding>
      <header className="px-5 pt-8 pb-4 sticky top-0 bg-white z-40">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="bg-irtra-bg p-2 rounded-xl text-slate-800 active:scale-90 transition-transform">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-[24px]">Búsqueda</h1>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ej. Los Corozos, Piscina..."
              className="pl-10 h-12 rounded-[18px] bg-irtra-bg border-none shadow-none focus-visible:ring-1 focus-visible:ring-primary/20"
            />
          </div>
          <button className="bg-irtra-blue text-white p-3 rounded-[18px] shadow-md shadow-primary/20 active:scale-95 transition-transform">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </header>

      <div className="px-5">
        <div className="flex gap-3 overflow-x-auto py-4 hide-scrollbar -mx-5 px-5">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full transition-all text-sm font-medium whitespace-nowrap border ${activeCategory === 'All' ? 'bg-irtra-blue text-white border-irtra-blue' : 'bg-white text-slate-600 border-slate-100'}`}
          >
            Todos
          </button>
          {CATEGORIES.map((category) => (
            <CategoryChip 
              key={category.id}
              name={category.name}
              iconName={category.icon}
              variant="small"
              active={activeCategory === category.name}
              onClick={() => setActiveCategory(category.name)}
            />
          ))}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-800">Resultados ({filteredPlaces.length})</h2>
          </div>

          {filteredPlaces.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} horizontal />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-irtra-bg w-20 h-20 rounded-full flex items-center justify-center mb-4 text-slate-300">
                <SearchIcon size={40} />
              </div>
              <h3 className="font-headline font-semibold text-slate-800">No se encontraron resultados</h3>
              <p className="text-slate-400 mt-2 px-10">Intenta buscar con otros términos o cambia la categoría.</p>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </MobileContainer>
  );
}
