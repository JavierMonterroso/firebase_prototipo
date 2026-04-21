
"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Camera, Image as ImageIcon, Heart, Share2, Sparkles } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';

export default function MemoriesPage() {
  const router = useRouter();

  return (
    <MobileContainer noPadding className="bg-background">
      <div className="p-6 pt-12">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => router.back()} className="bg-white p-2 rounded-xl shadow-sm text-foreground">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Mis Recuerdos</h1>
        </div>

        <div className="bg-muted rounded-[32px] p-10 text-center mb-8 border-2 border-dashed border-muted-foreground/20">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-primary">
            <Camera size={32} />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Captura la magia</h2>
          <p className="text-muted-foreground">Pronto podrás ver aquí todas las fotos que te tomen en las atracciones mediante reconocimiento facial.</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Álbumes Sugeridos</h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="relative aspect-[3/4] rounded-[24px] overflow-hidden group">
                <img 
                  src={`https://picsum.photos/seed/memory${i}/400/600`} 
                  className="w-full h-full object-cover grayscale opacity-50" 
                  alt="Memory placeholder" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <Sparkles className="text-white mb-2" size={24} />
                  <p className="text-white font-bold text-xs uppercase tracking-tighter">Disponible próximamente</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
