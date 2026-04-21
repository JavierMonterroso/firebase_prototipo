
import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { Place } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface PlaceCardProps {
  place: Place;
  horizontal?: boolean;
}

export const PlaceCard = ({ place, horizontal = false }: PlaceCardProps) => {
  if (horizontal) {
    return (
      <Link href={`/place/${place.id}`} className="block group">
        <div className="bg-white rounded-card shadow-soft p-3 flex gap-4 transition-transform active:scale-[0.98]">
          <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-image">
            <img 
              src={place.imageUrl} 
              alt={place.name} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <span className="text-primary text-[11px] font-semibold uppercase tracking-wider">{place.category}</span>
            </div>
            <h3 className="font-headline font-semibold text-slate-800 text-[16px] truncate leading-tight mt-1">{place.name}</h3>
            <div className="flex items-center text-slate-400 text-[12px] mt-1">
              <MapPin size={12} className="mr-1 shrink-0" />
              <span className="truncate">{place.location}</span>
            </div>
            <div className="flex items-center text-slate-400 text-[12px] mt-0.5">
              <Clock size={12} className="mr-1 shrink-0" />
              <span>{place.hours}</span>
            </div>
          </div>
          <div className="flex items-center px-1">
            <ChevronRight size={20} className="text-slate-300" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/place/${place.id}`} className="block group w-[220px] shrink-0">
      <div className="bg-white rounded-card shadow-soft overflow-hidden transition-all duration-300 group-hover:shadow-lg active:scale-[0.98]">
        <div className="relative h-32 overflow-hidden">
          <img 
            src={place.imageUrl} 
            alt={place.name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
          />
          <Badge className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-primary border-none text-[10px] py-0 px-2 rounded-full font-bold">
            {place.category}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-headline font-semibold text-slate-800 text-[17px] truncate leading-tight">{place.name}</h3>
          <div className="flex items-center text-slate-400 text-[11px] mt-2 mb-1">
            <MapPin size={12} className="mr-1 text-primary/60 shrink-0" />
            <span className="truncate">{place.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
