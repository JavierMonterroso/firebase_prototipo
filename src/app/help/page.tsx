
"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, User, Sparkles, MessageCircle } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'staff';
  time: string;
}

export default function GuestServicePage() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "¡Hola, Juan! Soy el equipo de Atención al Huésped del IRTRA. ¿En qué podemos asistirte hoy?", 
      sender: 'staff',
      time: 'Ahora'
    }
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { 
      id: Date.now(), 
      text: input, 
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    // Simulate staff response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "Con mucho gusto, Juan. Estamos procesando tu solicitud de inmediato.",
        "Entendido. Un miembro de nuestro equipo se dirigirá a tu ubicación en unos minutos.",
        "¡Excelente elección! Hemos registrado tu solicitud. ¿Deseas algo más para complementar tu estancia?",
        "Por supuesto. Estamos aquí para hacer tu visita mágica. ¿Hay algo más en lo que podamos apoyarte?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const staffMsg: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'staff',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, staffMsg]);
    }, 1500);
  };

  return (
    <MobileContainer noPadding className="bg-background flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 pt-12 bg-white border-b border-muted shrink-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="bg-muted/50 p-2.5 rounded-xl text-foreground active:scale-90 transition-transform">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Atención al Huésped</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">Equipo en línea</p>
            </div>
          </div>
          <div className="bg-primary/10 p-2 rounded-full text-primary">
            <User size={20} />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar bg-cream/30">
        {messages.map((m) => (
          <div key={m.id} className={cn(
            "flex flex-col max-w-[85%]",
            m.sender === 'user' ? "ml-auto items-end" : "items-start"
          )}>
            <div className={cn(
              "p-4 text-[14px] font-medium leading-relaxed",
              m.sender === 'staff' 
                ? "bg-white text-foreground rounded-[24px] rounded-tl-none shadow-soft border border-muted/30" 
                : "bg-primary text-white rounded-[24px] rounded-tr-none shadow-lg shadow-primary/20"
            )}>
              {m.text}
            </div>
            <span className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-tighter px-1">
              {m.time} {m.sender === 'staff' ? '• Staff IRTRA' : ''}
            </span>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
            <span className="text-[11px] font-bold uppercase">Staff está escribiendo...</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-muted shrink-0 pb-10">
        <div className="flex gap-3">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="¿En qué podemos ayudarte?" 
            className="flex-1 h-14 rounded-2xl bg-muted/40 border-none shadow-none focus-visible:ring-1 focus-visible:ring-primary/20 px-6 font-medium"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button 
            onClick={handleSend} 
            className="h-14 w-14 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 p-0 shrink-0 hover:scale-105 active:scale-95 transition-all"
          >
            <Send size={22} />
          </Button>
        </div>
        <p className="text-center text-[10px] text-muted-foreground mt-4 font-medium italic">
          Servicio disponible 24/7 para huéspedes de Los Hostales
        </p>
      </div>
    </MobileContainer>
  );
}
