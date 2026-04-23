
"use client"

import React from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, Star, MapPin, Clock, Navigation, Heart, Share2, Utensils, Info, CheckCircle2 } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { PLACES } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PlaceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const place = PLACES.find(p => p.id === id);

  if (!place) {
    notFound();
  }

  const categoryName = place.categoria || place.tipo.charAt(0).toUpperCase() + place.tipo.slice(1);

  return (
    <MobileContainer className="pb-32" noPadding>
      <div className="relative h-[300px] w-full">
        <img src={place.imageUrl} alt={place.nombre} className="w-full h-full object-cover" />
        <div className="absolute top-6 left-5 right-5 flex justify-between items-center z-20">
          <button onClick={() => router.back()} className="bg-white/90 p-2 rounded-xl text-foreground shadow-lg">
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-2">
            <button className="bg-white/90 p-2 rounded-xl text-foreground shadow-lg"><Share2 size={20} /></button>
            <button className="bg-white/90 p-2 rounded-xl text-accent shadow-lg"><Heart size={20} /></button>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-8 relative z-10">
        <div className="bg-white rounded-[32px] p-6 shadow-soft border border-muted/20">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold uppercase text-[10px]">
              {categoryName}
            </Badge>
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-primary text-primary" />
              <span className="font-bold">{place.rating}</span>
              <span className="text-muted-foreground text-[12px]">({place.reviews})</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">{place.nombre}</h1>
          <div className="flex items-center text-muted-foreground text-sm mb-6">
            <MapPin size={14} className="mr-1 text-primary" />
            {place.ubicacion}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-lg text-primary"><Clock size={18} /></div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase">Horario</p>
                <p className="text-sm font-semibold">
                  {typeof place.horario === 'string' ? place.horario : place.horario.general}
                </p>
              </div>
            </div>

            {/* Restaurante Specific Info */}
            {place.tipo === 'restaurante' && place.detalles.tipo_comida && (
              <div className="flex items-center gap-3">
                <div className="bg-muted p-2 rounded-lg text-primary"><Utensils size={18} /></div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase">Especialidad</p>
                  <p className="text-sm font-semibold">{place.detalles.tipo_comida}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold mb-3">Descripción</h2>
          <p className="text-muted-foreground leading-relaxed">
            {place.descripcion}
          </p>
        </div>

        {/* Dynamic Details based on Type */}
        {place.tipo === 'restaurante' && (
          <div className="mt-8 space-y-6">
            {place.detalles.servicio && (
              <div>
                <h2 className="font-bold mb-3 flex items-center gap-2">
                  <Info size={18} className="text-primary" />
                  Servicios Disponibles
                </h2>
                <div className="flex flex-wrap gap-2">
                  {place.detalles.servicio.map((s, idx) => (
                    <Badge key={idx} variant="outline" className="rounded-xl py-1.5 px-4 border-muted text-muted-foreground">
                      <CheckCircle2 size={12} className="mr-2 text-green-500" />
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {place.detalles.ambiente && (
              <div className="bg-muted/30 p-4 rounded-[20px] border border-muted/50">
                <p className="text-[11px] text-muted-foreground font-bold uppercase mb-1">Ambiente</p>
                <p className="text-sm font-medium">{place.detalles.ambiente}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-10">
          <Button className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20">
            <Navigation size={20} className="mr-2" />
            Cómo llegar
          </Button>
        </div>
      </div>
    </MobileContainer>
  );
}
