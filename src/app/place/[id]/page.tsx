
"use client"

import React from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, Star, MapPin, Clock, Navigation, Heart, Share2 } from 'lucide-react';
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

  return (
    <MobileContainer className="pb-32" noPadding>
      <div className="relative h-[300px] w-full">
        <img src={place.imageUrl} alt={place.name} className="w-full h-full object-cover" />
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
              {place.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-primary text-primary" />
              <span className="font-bold">{place.rating}</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">{place.name}</h1>
          <div className="flex items-center text-muted-foreground text-sm mb-6">
            <MapPin size={14} className="mr-1 text-primary" />
            {place.location}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-lg text-primary"><Clock size={18} /></div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase">Horario</p>
                <p className="text-sm font-semibold">
                  {typeof place.hours === 'string' ? place.hours : place.hours.general}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold mb-3">Descripción</h2>
          <p className="text-muted-foreground leading-relaxed">
            {place.description}
          </p>
        </div>

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
