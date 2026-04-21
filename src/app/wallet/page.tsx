
"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Wallet, Plus, History, CreditCard, Sparkles } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Button } from '@/components/ui/button';

export default function WalletPage() {
  const router = useRouter();

  return (
    <MobileContainer noPadding className="bg-background">
      <div className="p-6 pt-12">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => router.back()} className="bg-white p-2 rounded-xl shadow-sm text-foreground">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Monedero IRTRA</h1>
        </div>

        <div className="bg-primary rounded-[32px] p-8 text-white shadow-xl shadow-primary/30 relative overflow-hidden mb-8">
          <div className="relative z-10">
            <p className="text-white/80 font-medium mb-1">Saldo Disponible</p>
            <p className="text-4xl font-bold mb-8">Q 450.00</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Titular</p>
                <p className="font-bold">JUAN PÉREZ</p>
              </div>
              <CreditCard size={32} className="opacity-40" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button className="h-20 rounded-[24px] bg-white border border-muted text-foreground flex flex-col gap-1 hover:bg-muted/30">
            <Plus className="text-primary" />
            <span className="font-bold text-xs uppercase">Recargar</span>
          </Button>
          <Button className="h-20 rounded-[24px] bg-white border border-muted text-foreground flex flex-col gap-1 hover:bg-muted/30">
            <History className="text-accent" />
            <span className="font-bold text-xs uppercase">Movimientos</span>
          </Button>
        </div>

        <div className="bg-accent/10 rounded-[24px] p-6 border border-accent/20 flex items-center gap-4">
          <div className="bg-accent text-white p-3 rounded-2xl">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="font-bold text-foreground">Pago Sin Contacto</h3>
            <p className="text-sm text-muted-foreground leading-snug">Próximamente podrás pagar en restaurantes y tiendas con tu celular.</p>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
