
"use client"

import React, { useState, useMemo } from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Clock, Share2, Heart, Navigation, Star, Phone, Sparkles, User, ShieldAlert, Timer, Users, Info, Accessibility } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { PLACES } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

export default function PlaceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const place = PLACES.find(p => p.id === id);

  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  if (!place) {
    notFound();
  }

  const handleRate = () => {
    toast({
      title: "¡Gracias por tu opinión!",
      description: `Has calificado ${place.name} con ${userRating} estrellas.`,
    });
  };

  // Logic for wait time estimation
  const estimatedWaitTime = useMemo(() => {
    if (!place.peopleInQueue || !place.capacityPerTurn || !place.durationMinutes) return null;
    return Math.ceil(place.peopleInQueue / place.capacityPerTurn) * place.durationMinutes;
  }, [place]);

  return (
    <MobileContainer className="pb-32" noPadding>
      <div className="relative h-[350px] w-full">
        <img 
          src={place.imageUrl} 
          alt={place.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-5 right-5 flex justify-between items-center z-20">
          <button 
            onClick={() => router.back()} 
            className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl text-foreground shadow-lg active:scale-90 transition-transform"
          >
            <ArrowLeft size={22} />
          </button>
          <div className="flex gap-3">
            <button className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl text-foreground shadow-lg active:scale-90 transition-transform">
              <Share2 size={22} />
            </button>
            <button className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl text-accent shadow-lg active:scale-90 transition-transform">
              <Heart size={22} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="px-5 -mt-12 relative z-10">
        <div className="bg-white rounded-[32px] p-6 shadow-soft border border-muted/20">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col gap-1">
              <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-bold text-[12px] w-fit">
                {place.category}
              </Badge>
              <span className="text-[12px] font-bold text-accent uppercase tracking-wider ml-1">{place.parque} {place.zona ? `• ${place.zona}` : ''}</span>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <Star size={18} className="fill-primary text-primary" />
                <span className="text-[18px] font-bold text-foreground">{place.rating}</span>
              </div>
              <span className="text-[11px] text-muted-foreground font-medium">({place.reviewCount} opiniones)</span>
            </div>
          </div>
          
          <h1 className="text-[28px] text-foreground leading-tight mb-4">{place.name}</h1>

          {/* Wait Time Display for Attractions */}
          {estimatedWaitTime !== null && (
            <div className="mb-6 bg-primary/5 rounded-2xl p-4 flex items-center justify-between border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2.5 rounded-xl">
                  <Timer size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Espera estimada</p>
                  <p className="text-xl font-bold text-foreground">{estimatedWaitTime} min</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground font-medium">{place.peopleInQueue} personas en fila</p>
              </div>
            </div>
          )}
          
          <div className="flex flex-col gap-4">
            {/* Specific Info Sections */}
            {place.intensity && (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent mr-3 shrink-0">
                    <ShieldAlert size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[11px] font-medium uppercase">Intensidad</p>
                    <p className="text-foreground font-bold">{place.intensity}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[11px] font-medium uppercase">Público</p>
                    <p className="text-foreground font-bold">{place.targetAudience}</p>
                  </div>
                </div>
              </div>
            )}

            {place.cuisineType && (
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 shrink-0">
                  <Info size={18} />
                </div>
                <div>
                  <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-wider">Especialidad</p>
                  <p className="text-foreground font-semibold">{place.cuisineType} • {place.serviceType}</p>
                </div>
              </div>
            )}

            {place.accessibility && (
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 shrink-0">
                  <Accessibility size={18} />
                </div>
                <div>
                  <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-wider">Accesibilidad</p>
                  <p className="text-foreground font-semibold">{place.accessibility}</p>
                </div>
              </div>
            )}

            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-wider">Ubicación</p>
                <p className="text-foreground font-semibold">{place.location}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-muted-foreground text-[11px] font-medium uppercase tracking-wider">Horario</p>
                <p className="text-foreground font-semibold">{place.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-muted">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full h-12 rounded-2xl border-primary text-primary font-bold hover:bg-primary/5">
                  Calificar este lugar
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90%] rounded-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl">¿Qué te pareció {place.name}?</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center gap-2 py-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setUserRating(star)}
                      className="transition-transform active:scale-90"
                    >
                      <Star 
                        size={40} 
                        className={cn(
                          "transition-colors",
                          (hoverRating || userRating) >= star ? "fill-primary text-primary" : "text-muted"
                        )} 
                      />
                    </button>
                  ))}
                </div>
                <DialogFooter>
                  <Button 
                    onClick={handleRate} 
                    disabled={userRating === 0}
                    className="w-full h-12 rounded-2xl bg-primary text-white font-bold"
                  >
                    Enviar calificación
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Attraction Detailed Stats */}
        {place.category === 'Atracciones' && place.capacityPerTurn && (
          <div className="mt-8 bg-white rounded-card p-6 shadow-soft border border-muted/50">
            <h2 className="text-foreground mb-4 font-bold flex items-center gap-2">
              <Info size={20} className="text-primary" />
              Especificaciones
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Personas por turno</span>
                <span className="font-bold text-foreground">{place.capacityPerTurn}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Duración aproximada</span>
                <span className="font-bold text-foreground">{place.durationMinutes} min</span>
              </div>
              {place.restrictions && (
                <div className="pt-2 border-t border-muted">
                  <p className="text-[11px] text-muted-foreground font-bold uppercase mb-1">Restricciones</p>
                  <p className="text-sm font-medium text-destructive">{place.restrictions}</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-foreground mb-3 font-bold">Acerca de este lugar</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px]">
            {place.description}
          </p>
        </div>

        <div className="mt-10 mb-10 flex flex-col gap-4">
          <Button className="h-14 rounded-button bg-primary text-white shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-[16px] font-bold">
            <Navigation size={20} />
            Cómo llegar
          </Button>
        </div>
      </div>
    </MobileContainer>
  );
}
