
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, MessageCircle, HelpCircle } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function HelpPage() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy tu asistente IRTRA. ¿En qué puedo ayudarte hoy?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: messages.length + 1, text: input, sender: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: prev.length + 1, 
        text: "Gracias por tu consulta. Un agente se conectará pronto para ayudarte.", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <MobileContainer noPadding className="bg-background flex flex-col h-screen">
      <div className="p-6 pt-12 bg-white shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="bg-muted p-2 rounded-xl text-foreground">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-xl font-bold">Centro de Ayuda</h1>
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> En línea
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={cn(
            "max-w-[80%] p-4 rounded-[20px] text-sm font-medium",
            m.sender === 'bot' 
              ? "bg-muted text-foreground rounded-tl-none" 
              : "bg-primary text-white ml-auto rounded-tr-none"
          )}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="p-6 bg-white border-t border-muted shrink-0 pb-10">
        <div className="flex gap-2">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu duda..." 
            className="rounded-2xl h-12 bg-muted/40 border-none"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="h-12 w-12 rounded-2xl p-0 shrink-0">
            <Send size={20} />
          </Button>
        </div>
      </div>
    </MobileContainer>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
