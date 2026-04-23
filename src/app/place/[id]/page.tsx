
"use client"

import React from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Navigation, 
  Heart, 
  Share2, 
  Utensils, 
  Info, 
  CheckCircle2, 
  Bed, 
  DoorOpen, 
  DoorClosed, 
  Users,
  Zap,
  Timer,
  ShieldAlert,
  Ticket,
  Waves,
  Gauge,
  RotateCw,
  History,
  Activity,
  Baby,
  Accessibility,
  UserCheck
} from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { PLACES } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PlaceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const place = PLACES.find(p => p.id === id);

  if (!place) {
    notFound();
  }

  const categoryName = place.categoria || place.tipo.charAt(0).toUpperCase() + place.tipo.slice(1);

  // Lógica para determinar el estado de la fila basado en molinetes
  const getQueueStatus = (count: number) => {
    if (count < 20) return { label: 'Fluida', color: 'text-green-600', bg: 'bg-green-50' };
    if (count < 60) return { label: 'Moderada', color: 'text-amber-600', bg: 'bg-amber-50' };
    return { label: 'Saturada', color: 'text-red-600', bg: 'bg-red-50' };
  };

  return (
    <MobileContainer className="pb-32" noPadding>
      <div className="relative h-[300px] w-full">
        <img src={place.imageUrl} alt={place.nombre} className="w-full h-full object-cover" />
        <div className="absolute top-6 left-5 right-5 flex justify-between items-center z-20">
          <button onClick={() => router.back()} className="bg-white/90 p-2 rounded-xl text-foreground shadow-lg active:scale-90 transition-transform">
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
            {/* Monitor de Fila (Molinetes) */}
            {(place.tipo === 'atraccion' || place.tipo === 'piscina') && place.detalles.personas_en_fila !== undefined && (
              <div className={cn(
                "p-4 rounded-2xl border flex items-center justify-between mb-2",
                getQueueStatus(place.detalles.personas_en_fila).bg,
                "border-black/5"
              )}>
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-xl bg-white", getQueueStatus(place.detalles.personas_en_fila).color)}>
                    <Activity size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Fila en Vivo (Molinetes)</p>
                    <p className="text-lg font-bold leading-tight">
                      {place.detalles.personas_en_fila} <span className="text-xs font-medium text-muted-foreground">personas</span>
                    </p>
                  </div>
                </div>
                <Badge className={cn("rounded-lg font-bold border-none", getQueueStatus(place.detalles.personas_en_fila).bg, getQueueStatus(place.detalles.personas_en_fila).color)}>
                  {getQueueStatus(place.detalles.personas_en_fila).label}
                </Badge>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-lg text-primary"><Clock size={18} /></div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase">Horario</p>
                <p className="text-sm font-semibold">
                  {typeof place.horario === 'string' ? place.horario : place.horario.general}
                </p>
              </div>
            </div>

            {/* Detalles específicos para Baños */}
            {place.categoria === 'baños' && (
              <div className="grid grid-cols-2 gap-4 mt-2">
                {place.detalles.hombres && (
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Users size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Hombres</p>
                      <p className="text-sm font-semibold">Disponible</p>
                    </div>
                  </div>
                )}
                {place.detalles.mujeres && (
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-50 p-2 rounded-lg text-pink-600"><Users size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Mujeres</p>
                      <p className="text-sm font-semibold">Disponible</p>
                    </div>
                  </div>
                )}
                {place.detalles.cambiador_bebe && (
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600"><Baby size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Cambiador</p>
                      <p className="text-sm font-semibold">Sí cuenta</p>
                    </div>
                  </div>
                )}
                {place.detalles.accesibilidad && (
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-50 p-2 rounded-lg text-slate-600"><Accessibility size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Accesible</p>
                      <p className="text-sm font-semibold">Universal</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {(place.tipo === 'atraccion' || place.tipo === 'piscina') && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 p-2 rounded-lg text-orange-600"><Zap size={18} /></div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">Intensidad</p>
                    <p className="text-sm font-semibold">{place.detalles.intensidad}</p>
                  </div>
                </div>
                {place.detalles.tiempo_estimado && (
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Timer size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Espera Est.</p>
                      <p className="text-sm font-semibold">{place.detalles.tiempo_estimado}</p>
                    </div>
                  </div>
                )}
                {place.detalles.duracion && (
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-50 p-2 rounded-lg text-slate-600"><History size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Duración</p>
                      <p className="text-sm font-semibold">{place.detalles.duracion}</p>
                    </div>
                  </div>
                )}
                {place.detalles.capacidad_por_turno && (
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600"><Users size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Por Turno</p>
                      <p className="text-sm font-semibold">{place.detalles.capacidad_por_turno} pers.</p>
                    </div>
                  </div>
                )}
                {place.detalles.velocidad_aproximada && (
                  <div className="flex items-center gap-3">
                    <div className="bg-rose-50 p-2 rounded-lg text-rose-600"><Gauge size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Velocidad</p>
                      <p className="text-sm font-semibold">{place.detalles.velocidad_aproximada}</p>
                    </div>
                  </div>
                )}
                {place.detalles.inversiones && (
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-50 p-2 rounded-lg text-amber-600"><RotateCw size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Inversiones</p>
                      <p className="text-sm font-semibold">{place.detalles.inversiones}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Check-in / Check-out para Hostales */}
            {place.tipo === 'hostal' && typeof place.horario !== 'string' && (
              <div className="grid grid-cols-2 gap-4">
                {place.horario.check_in && (
                  <div className="flex items-center gap-3">
                    <div className="bg-green-50 p-2 rounded-lg text-green-600"><DoorOpen size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Check-in</p>
                      <p className="text-sm font-semibold">{place.horario.check_in}</p>
                    </div>
                  </div>
                )}
                {place.horario.check_out && (
                  <div className="flex items-center gap-3">
                    <div className="bg-red-50 p-2 rounded-lg text-red-600"><DoorClosed size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Check-out</p>
                      <p className="text-sm font-semibold">{place.horario.check_out}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Habitaciones / Capacidad para Hostales */}
            {place.tipo === 'hostal' && (
              <div className="grid grid-cols-2 gap-4">
                {place.detalles.habitaciones && (
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-lg text-primary"><Bed size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Habitaciones</p>
                      <p className="text-sm font-semibold">{place.detalles.habitaciones}</p>
                    </div>
                  </div>
                )}
                {place.detalles.capacidad && (
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-lg text-primary"><Users size={18} /></div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">Capacidad</p>
                      <p className="text-sm font-semibold">{place.detalles.capacidad}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Especialidad para Restaurantes */}
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

        {/* Detalles Adicionales */}
        <div className="mt-8 space-y-6">
          {/* Restricciones */}
          {place.detalles.restricciones && (
            <div className="bg-red-50 p-4 rounded-[20px] border border-red-100 flex gap-3">
              <ShieldAlert className="text-red-500 shrink-0" size={20} />
              <div>
                <p className="text-[11px] text-red-600 font-bold uppercase mb-1">Restricciones</p>
                <p className="text-sm font-medium text-red-700">{place.detalles.restricciones}</p>
              </div>
            </div>
          )}

          {/* Servicios Sanitarios Específicos */}
          {place.categoria === 'baños' && place.detalles.servicios_adicionales && (
            <div>
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <Info size={18} className="text-primary" />
                Características adicionales
              </h2>
              <div className="flex flex-wrap gap-2">
                {place.detalles.servicios_adicionales.map((s, idx) => (
                  <Badge key={idx} variant="outline" className="rounded-xl py-1.5 px-4 border-muted text-muted-foreground">
                    <CheckCircle2 size={12} className="mr-2 text-green-500" />
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Lo mejor / Características destacadas */}
          {place.lo_mejor && (
            <div>
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                Lo mejor de {place.nombre}
              </h2>
              <div className="flex flex-wrap gap-2">
                {place.lo_mejor.map((s, idx) => (
                  <Badge key={idx} variant="outline" className="rounded-xl py-1.5 px-4 border-muted text-muted-foreground">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Precios si existen */}
          {place.precios && (
            <div className="bg-primary/5 p-5 rounded-[24px] border border-primary/10">
              <h2 className="font-bold mb-4 flex items-center gap-2">
                <Ticket size={20} className="text-primary" />
                Información de Precios
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Afiliados:</span>
                  <span className="text-sm font-bold text-primary">{place.precios.afiliados}</span>
                </div>
                <div className="border-t border-primary/10 pt-3">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase mb-2">No Afiliados</p>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Niños / Adulto Mayor:</span>
                    <span className="text-sm font-bold">{place.precios.no_afiliado.ninos_adulto_mayor}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Adultos:</span>
                    <span className="text-sm font-bold">{place.precios.no_afiliado.adulto}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Servicios para Hostales */}
          {place.detalles.servicios && (
            <div>
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <Info size={18} className="text-primary" />
                Servicios e Instalaciones
              </h2>
              <div className="flex flex-wrap gap-2">
                {place.detalles.servicios.map((s, idx) => (
                  <Badge key={idx} variant="outline" className="rounded-xl py-1.5 px-4 border-muted text-muted-foreground">
                    <CheckCircle2 size={12} className="mr-2 text-green-500" />
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          )}
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
