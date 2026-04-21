
import React from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight, Star } from 'lucide-react';
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
        <div className="bg-white rounded-card shadow-soft p-3.5 flex gap-4 transition-all hover:shadow-md active:scale-[0.98] border border-muted/50">
          <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-[20px] shadow-sm">
            <img 
              src={place.imageUrl} 
              alt={place.name} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-accent text-[11px] font-bold uppercase tracking-widest">{place.parque} {place.zona ? `• ${place.zona}` : ''}</span>
              <div className="flex items-center gap-1 bg-primary/5 px-1.5 py-0.5 rounded-lg">
                <Star size={10} className="fill-primary text-primary" />
                <span className="text-[11px] font-bold text-primary">{place.rating}</span>
              </div>
            </div>
            <h3 className="font-headline font-bold text-foreground text-[16px] truncate leading-tight">{place.name}</h3>
            <div className="flex items-center text-muted-foreground text-[12px] mt-2">
              <MapPin size={13} className="mr-1.5 text-primary/60 shrink-0" />
              <span className="truncate font-medium">{place.location}</span>
            </div>
          </div>
          <div className="flex items-center pr-1">
            <div className="bg-muted p-2 rounded-full text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
              <ChevronRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/place/${place.id}`} className="block group w-[220px] shrink-0">
      <div className="bg-white rounded-card shadow-soft overflow-hidden transition-all duration-300 group-hover:shadow-xl active:scale-[0.98] border border-muted/50">
        <div className="relative h-36 overflow-hidden">
          <img 
            src={place.imageUrl} 
            alt={place.name} 
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <Badge className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-primary border-none text-[10px] py-1 px-3 rounded-full font-bold shadow-sm flex items-center gap-1">
            <Star size={10} className="fill-primary" />
            {place.rating}
          </Badge>
          <Badge className="absolute top-3 left-3 bg-accent/90 backdrop-blur-md text-white border-none text-[10px] py-1 px-3 rounded-full font-bold shadow-sm">
            {place.category}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-headline font-bold text-foreground text-[17px] truncate leading-tight mb-2">{place.name}</h3>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-accent font-bold uppercase">{place.parque}</span>
            <div className="flex items-center text-muted-foreground text-[12px] font-medium">
              <MapPin size={13} className="mr-1.5 text-primary/60 shrink-0" />
              <span className="truncate">{place.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
