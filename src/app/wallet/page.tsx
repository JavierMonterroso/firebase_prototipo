
"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Wallet, CreditCard, Sparkles, QrCode, ShieldCheck } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Button } from '@/components/ui/button';

export default function WalletPage() {
  const router = useRouter();

  return (
    <MobileContainer noPadding className="bg-background">
      <div className="p-6 pt-12 flex flex-col h-screen">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => router.back()} className="bg-white p-2 rounded-xl shadow-sm text-foreground">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Monedero IRTRA</h1>
        </div>

        <div className="relative flex-1 flex flex-col">
          {/* Visual Card Prototype */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-[32px] p-8 text-white shadow-2xl shadow-primary/30 relative overflow-hidden mb-10 aspect-[1.6/1] flex flex-col justify-between">
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Saldo Digital</p>
                <p className="text-3xl font-bold tracking-tight">Q --.--</p>
              </div>
              <Sparkles size={28} className="text-white/40" />
            </div>
            
            <div className="relative z-10 flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Titular</p>
                <p className="font-bold tracking-wide">JUAN PÉREZ</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                <QrCode size={32} className="opacity-90" />
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
          </div>

          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white rounded-[32px] p-8 border border-primary/10 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-4">Próximamente disponible</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estamos trabajando para que puedas pagar en todos nuestros restaurantes, tiendas y hostales usando únicamente tu celular a través de códigos QR.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-muted">
                <div className="bg-white p-2.5 rounded-xl shadow-sm text-primary">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Recargas seguras</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Podrás recargar tu saldo con cualquier tarjeta de crédito o débito.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pb-10">
            <Button disabled className="w-full h-14 rounded-2xl bg-muted text-muted-foreground font-bold border-none">
              Configurar monedero (Próximamente)
            </Button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
