
"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Key, 
  Lock, 
  Unlock, 
  QrCode, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Loader2,
  DoorOpen,
  XCircle
} from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

type KeyStatus = 'idle' | 'validating' | 'success' | 'error';

export default function DigitalKeyPage() {
  const router = useRouter();
  const [status, setStatus] = useState<KeyStatus>('idle');

  // Simulación de datos de sesión
  const sessionData = {
    isKeyActive: true,
    checkIn: new Date('2024-10-15'),
    checkOut: new Date('2024-10-18'),
    currentDate: new Date('2024-10-16') // Simulamos estar dentro del rango
  };

  const handleUnlock = () => {
    // 1. Iniciar flujo de validación
    setStatus('validating');
    
    // Simulación de "Handshake" NFC y validación de seguridad
    setTimeout(() => {
      // 2. Lógica de validación simulada
      const isWithinDate = sessionData.currentDate >= sessionData.checkIn && sessionData.currentDate <= sessionData.checkOut;
      
      if (sessionData.isKeyActive && isWithinDate) {
        // CASO ÉXITO
        setStatus('success');
        
        // 3. Feedback sonoro/háptico visual y regreso al estado inicial
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        // CASO ERROR (opcional pero robustece el prototipo)
        setStatus('error');
        toast({
          variant: "destructive",
          title: "Error de validación",
          description: "La llave ha expirado o no corresponde a esta fecha.",
        });
        setTimeout(() => setStatus('idle'), 3000);
      }
    }, 1800);
  };

  return (
    <MobileContainer noPadding className="bg-background flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 pt-12 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="bg-white p-2.5 rounded-xl shadow-sm text-foreground active:scale-90 transition-transform">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-xl font-bold">Llave Digital</h1>
            <p className="text-[12px] text-muted-foreground font-medium">Hostales San Martín</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-10 space-y-6 hide-scrollbar">
        {/* Main Key Card */}
        <div className={cn(
          "rounded-[32px] p-8 text-white shadow-2xl transition-all duration-500 relative overflow-hidden aspect-[1/1.2] flex flex-col justify-between",
          status === 'success' ? "bg-green-600 shadow-green-500/30" : "bg-gradient-to-br from-primary via-primary to-accent shadow-primary/30",
          status === 'error' ? "bg-red-600 shadow-red-500/30" : ""
        )}>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                <Key size={28} className="text-white" />
              </div>
              <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {status === 'success' ? "Acceso Concedido" : "Activa"}
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold leading-tight">Juan Pérez</h2>
            <div className="mt-2 flex items-center gap-2 opacity-90">
              <DoorOpen size={18} />
              <span className="font-bold text-lg">Habitación 204</span>
            </div>
          </div>

          {/* Unlock Visual Section */}
          <div className="relative z-10 flex flex-col items-center py-8">
            <div className={cn(
              "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500",
              status === 'success' ? "bg-white scale-110" : "bg-white/20 border-2 border-white/40",
              status === 'validating' ? "border-white animate-pulse" : ""
            )}>
              {status === 'idle' && <Lock size={40} className="text-white" />}
              {status === 'validating' && <Loader2 size={40} className="text-white animate-spin" />}
              {status === 'success' && <Unlock size={40} className="text-green-600 animate-in zoom-in" />}
              {status === 'error' && <XCircle size={40} className="text-white" />}
            </div>
            <p className="mt-4 font-bold text-sm tracking-widest uppercase text-center min-h-[20px]">
              {status === 'idle' && "ACÉRCATE A LA PUERTA"}
              {status === 'validating' && "Validando acceso..."}
              {status === 'success' && "PUERTA ABIERTA"}
              {status === 'error' && "Acceso denegado"}
            </p>
          </div>

          <div className="relative z-10 flex justify-center">
            <Button 
              onClick={handleUnlock}
              disabled={status !== 'idle'}
              className={cn(
                "w-full h-16 rounded-2xl text-lg font-bold shadow-xl transition-all",
                status === 'success' 
                  ? "bg-white text-green-600 border-none" 
                  : "bg-white text-primary hover:bg-white/90 active:scale-95"
              )}
            >
              {status === 'idle' && "Abrir habitación"}
              {status === 'validating' && "Procesando..."}
              {status === 'success' && <div className="flex items-center gap-2"><CheckCircle2 size={24} /> ¡Éxito!</div>}
              {status === 'error' && "Reintentar"}
            </Button>
          </div>

          {/* Decorative Background */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/10 rounded-full blur-3xl" />
        </div>

        {/* QR Section */}
        <div className="bg-white rounded-[28px] p-6 shadow-soft border border-muted/50 flex flex-col items-center text-center">
          <div className="bg-muted/30 p-4 rounded-3xl mb-4">
            <QrCode size={120} className="text-foreground opacity-80" />
          </div>
          <p className="text-[13px] text-muted-foreground leading-relaxed px-4">
            Presenta este código en caso de asistencia o si el acceso digital falla.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-[24px] p-5 shadow-soft border border-muted/50">
            <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center text-primary mb-3">
              <Calendar size={20} />
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Check-in</p>
            <p className="font-bold text-foreground">15 Oct, 2024</p>
          </div>
          <div className="bg-white rounded-[24px] p-5 shadow-soft border border-muted/50">
            <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center text-primary mb-3">
              <Calendar size={20} />
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Check-out</p>
            <p className="font-bold text-foreground">18 Oct, 2024</p>
          </div>
          <div className="col-span-2 bg-white rounded-[24px] p-5 shadow-soft border border-muted/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Horario de acceso</p>
                <p className="font-bold text-foreground">24 Horas disponible</p>
              </div>
            </div>
            <CheckCircle2 size={20} className="text-green-500" />
          </div>
        </div>

        <p className="text-center text-[11px] text-muted-foreground font-medium italic py-4">
          "Accede a tu habitación sin llaves físicas, solo con tu celular"
        </p>
      </div>
    </MobileContainer>
  );
}
