
"use client"

import React from 'react';
import { Map as MapIcon, Compass } from 'lucide-react';
import data from '@/app/lib/placeholder-images.json';

export const MapPlaceholder = () => {
  const mapImg = data.placeholderImages.find(i => i.id === 'map-placeholder')?.imageUrl;

  return (
    <div className="bg-white rounded-card shadow-soft overflow-hidden mt-6 mb-8 border border-muted/50">
      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-foreground flex items-center">
            <MapIcon size={20} className="mr-2 text-primary" />
            Mapa del complejo
          </h2>
          <p className="text-muted-foreground text-[13px] mt-0.5">Encuentra tu próximo destino</p>
        </div>
        <div className="bg-primary/10 p-2 rounded-xl text-primary">
          <Compass size={24} />
        </div>
      </div>
      
      <div className="relative h-44 w-full bg-muted group overflow-hidden">
        <img 
          src={mapImg} 
          alt="Map Preview" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-irtra-dark/40 via-transparent to-transparent flex items-end p-4">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-bold text-[12px] shadow-lg flex items-center">
            Próximamente interactivo
          </div>
        </div>
        
        {/* Faux Markers */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg animate-pulse" />
      </div>
    </div>
  );
};
