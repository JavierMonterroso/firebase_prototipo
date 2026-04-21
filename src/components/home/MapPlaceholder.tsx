
import React from 'react';
import { Map as MapIcon, Compass } from 'lucide-react';
import data from '@/app/lib/placeholder-images.json';

export const MapPlaceholder = () => {
  const mapImg = data.placeholderImages.find(i => i.id === 'map-placeholder')?.imageUrl;

  return (
    <div className="bg-white rounded-card shadow-soft overflow-hidden mt-6 mb-8 border border-slate-50">
      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-slate-800 flex items-center">
            <MapIcon size={20} className="mr-2 text-primary" />
            Mapa del complejo
          </h2>
          <p className="text-slate-400 text-[13px] mt-0.5">Encuentra tu próximo destino</p>
        </div>
        <div className="bg-irtra-bg p-2 rounded-xl text-primary">
          <Compass size={24} />
        </div>
      </div>
      
      <div className="relative h-44 w-full bg-slate-100 group overflow-hidden">
        <img 
          src={mapImg} 
          alt="Map Preview" 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-bold text-[12px] shadow-lg flex items-center">
            Próximamente interactivo
          </div>
        </div>
        
        {/* Faux Markers */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent-orange rounded-full border-2 border-white shadow-lg animate-pulse" />
      </div>
    </div>
  );
};
