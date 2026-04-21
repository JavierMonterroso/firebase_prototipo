
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Clock, Share2, Heart, Navigation, Info, ExternalLink } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { PLACES } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PlaceDetailPage({ params }: { params: { id: string } }) {
  const place = PLACES.find(p => p.id === params.id);

  if (!place) {
    notFound();
  }

  return (
    <MobileContainer className="pb-32" noPadding>
      <div className="relative h-[350px] w-full">
        <img 
          src={place.imageUrl} 
          alt={place.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-5 right-5 flex justify-between items-center">
          <Link href="/search" className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl text-slate-800 shadow-lg active:scale-90 transition-transform">
            <ArrowLeft size={22} />
          </Link>
          <div className="flex gap-3">
            <button className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl text-slate-800 shadow-lg active:scale-90 transition-transform">
              <Share2 size={22} />
            </button>
            <button className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl text-accent-orange shadow-lg active:scale-90 transition-transform">
              <Heart size={22} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="px-5 -mt-12 relative z-10">
        <div className="bg-white rounded-[32px] p-6 shadow-soft border border-slate-50">
          <Badge className="bg-irtra-bg text-primary border-none mb-4 px-4 py-1.5 rounded-full font-bold text-[12px]">
            {place.category}
          </Badge>
          
          <h1 className="text-[28px] text-slate-900 leading-tight mb-4">{place.name}</h1>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-start">
              <div className="bg-irtra-bg p-2 rounded-lg text-primary mr-3 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-slate-400 text-[12px] font-medium uppercase tracking-wider">Ubicación</p>
                <p className="text-slate-800 font-medium">{place.location}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-irtra-bg p-2 rounded-lg text-primary mr-3 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-slate-400 text-[12px] font-medium uppercase tracking-wider">Horario de atención</p>
                <p className="text-slate-800 font-medium">{place.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-slate-900 mb-3">Descripción</h2>
          <p className="text-slate-500 leading-relaxed">
            {place.description}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-slate-900 mb-4">Ubicación aproximada</h2>
          <div className="bg-irtra-bg rounded-card h-40 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/mini-map/400/200" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-1000" 
              alt="Mini Map" 
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                <MapPin size={24} className="text-primary" />
              </div>
              <p className="text-slate-500 font-semibold text-[14px]">Ver en mapa interactivo</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Button className="h-14 rounded-button bg-irtra-blue text-white shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-[16px] font-bold">
            <Navigation size={20} />
            Cómo llegar
          </Button>
          <Button variant="outline" className="h-14 rounded-button border-irtra-blue/20 text-irtra-blue bg-white flex items-center justify-center gap-2 text-[16px] font-bold">
            <Info size={20} />
            Información detallada
          </Button>
        </div>
      </div>
    </MobileContainer>
  );
}
