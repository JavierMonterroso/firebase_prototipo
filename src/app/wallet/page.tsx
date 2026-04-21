
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Wallet, 
  CreditCard, 
  Sparkles, 
  QrCode, 
  ShieldCheck, 
  Plus, 
  History, 
  ChevronRight,
  X,
  CheckCircle2
} from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

interface Transaction {
  id: string;
  type: 'Recarga' | 'Pago';
  amount: number;
  date: string;
}

export default function WalletPage() {
  const router = useRouter();
  
  // State for prototype functionality
  const [isActivated, setIsActivated] = useState(false);
  const [showActivationForm, setShowActivationForm] = useState(false);
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState<Transaction[]>([]);
  const [showQR, setShowQR] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);
  
  // Form state
  const [cardData, setCardData] = useState({
    name: 'JUAN PÉREZ',
    number: '',
    expiry: '',
    cvv: ''
  });

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsActivated(true);
    setShowActivationForm(false);
    toast({
      title: "¡Monedero activado!",
      description: "Ya puedes recargar saldo para tu aventura.",
    });
  };

  const handleRecharge = (amount: number) => {
    setBalance(prev => prev + amount);
    const newTransaction: Transaction = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'Recarga',
      amount: amount,
      date: 'Hoy'
    };
    setHistory(prev => [newTransaction, ...prev]);
    setShowRecharge(false);
    toast({
      title: "Recarga exitosa",
      description: `Se han abonado Q ${amount.toFixed(2)} a tu cuenta.`,
    });
  };

  // State A: Not Activated
  if (!isActivated && !showActivationForm) {
    return (
      <MobileContainer noPadding className="bg-background">
        <div className="p-6 pt-12 flex flex-col h-screen">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => router.back()} className="bg-white p-2 rounded-xl shadow-sm text-foreground active:scale-95 transition-transform">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold">Monedero IRTRA</h1>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 text-primary animate-pulse">
              <Wallet size={48} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Tu llave digital al parque</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Paga en todos nuestros restaurantes, tiendas y hostales usando únicamente tu celular. Rápido, seguro y sin contacto.
            </p>
            
            <div className="grid grid-cols-1 gap-4 w-full mb-12">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-primary/10 shadow-soft text-left">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-sm">Pagos 100% seguros</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-primary/10 shadow-soft text-left">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <QrCode size={20} />
                </div>
                <span className="font-bold text-sm">Uso fácil con códigos QR</span>
              </div>
            </div>

            <Button 
              onClick={() => setShowActivationForm(true)}
              className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Activar mi monedero
            </Button>
          </div>
        </div>
      </MobileContainer>
    );
  }

  // State B: Activation Form
  if (showActivationForm) {
    return (
      <MobileContainer noPadding className="bg-background">
        <div className="p-6 pt-12">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => setShowActivationForm(false)} className="bg-white p-2 rounded-xl shadow-sm text-foreground">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">Configurar Pago</h1>
          </div>

          <form onSubmit={handleActivate} className="space-y-6">
            <div className="bg-white rounded-[32px] p-6 shadow-soft border border-muted/50 space-y-4">
              <div className="space-y-2">
                <Label className="font-bold ml-1">Número de tarjeta</Label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={18} />
                  <Input 
                    placeholder="0000 0000 0000 0000"
                    className="h-12 pl-12 rounded-xl bg-muted/30 border-none"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-bold ml-1">Vencimiento</Label>
                  <Input placeholder="MM/YY" className="h-12 rounded-xl bg-muted/30 border-none text-center" required />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold ml-1">CVV</Label>
                  <Input placeholder="123" type="password" maxLength={3} className="h-12 rounded-xl bg-muted/30 border-none text-center" required />
                </div>
              </div>
            </div>

            <p className="text-[12px] text-muted-foreground text-center px-4 leading-relaxed">
              * Tus datos están protegidos. Esta configuración es solo para habilitar las recargas digitales en tu monedero.
            </p>

            <Button 
              type="submit"
              className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 mt-4"
            >
              Vincular y Activar
            </Button>
          </form>
        </div>
      </MobileContainer>
    );
  }

  // State C: Dashboard (Activated)
  return (
    <MobileContainer noPadding className="bg-background">
      <div className="p-6 pt-12 flex flex-col min-h-screen">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => router.back()} className="bg-white p-2 rounded-xl shadow-sm text-foreground active:scale-95 transition-transform">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">Mi Monedero</h1>
          </div>
          <div className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full font-bold text-[10px]">
            ACTIVO
          </div>
        </div>

        {/* Visual Card */}
        <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-[32px] p-8 text-white shadow-2xl shadow-primary/30 relative overflow-hidden mb-8 aspect-[1.6/1] flex flex-col justify-between">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Saldo Disponible</p>
              <p className="text-4xl font-bold tracking-tight">Q {balance.toFixed(2)}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
              <Sparkles size={24} className="text-white" />
            </div>
          </div>
          
          <div className="relative z-10 flex justify-between items-end">
            <div className="space-y-0.5">
              <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Titular</p>
              <p className="font-bold tracking-wide">{cardData.name}</p>
            </div>
            <div className="bg-white text-primary p-2 rounded-xl shadow-lg">
              <QrCode size={28} />
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl" />
        </div>

        {/* Quick Actions (Independent Buttons) */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <Button 
            onClick={() => setShowRecharge(true)}
            variant="outline"
            className="h-16 rounded-2xl border-primary/20 text-primary font-bold shadow-soft flex flex-col gap-1 items-center justify-center hover:bg-primary/5 active:scale-95 transition-all"
          >
            <Plus size={20} />
            <span className="text-[12px]">Recargar</span>
          </Button>
          <Button 
            onClick={() => setShowQR(true)}
            className="h-16 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20 flex flex-col gap-1 items-center justify-center hover:bg-primary/90 active:scale-95 transition-all"
          >
            <QrCode size={20} />
            <span className="text-[12px]">Pagar con QR</span>
          </Button>
        </div>

        {/* Transaction History */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-bold flex items-center gap-2 text-foreground">
              <History size={18} className="text-primary" />
              Actividad reciente
            </h2>
            <button className="text-primary text-[11px] font-bold uppercase tracking-wider">Ver todo</button>
          </div>

          <div className="bg-white rounded-[28px] border border-muted/50 overflow-hidden">
            {history.length > 0 ? (
              <div className="divide-y divide-muted/30">
                {history.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-muted/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/10 p-2.5 rounded-xl text-green-600">
                        <Plus size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">{tx.type} de Saldo</p>
                        <p className="text-[11px] text-muted-foreground font-medium">{tx.date}</p>
                      </div>
                    </div>
                    <span className="font-bold text-green-600">+Q {tx.amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="bg-muted/50 p-4 rounded-full mb-4 text-muted-foreground/30">
                  <History size={32} />
                </div>
                <p className="text-muted-foreground font-medium text-sm">Aún no tienes movimientos</p>
                <p className="text-[11px] text-muted-foreground/60 mt-1">Tus recargas aparecerán aquí</p>
              </div>
            )}
          </div>
        </div>

        {/* Recharge Modal */}
        <Dialog open={showRecharge} onOpenChange={setShowRecharge}>
          <DialogContent className="max-w-[90%] rounded-[32px] p-8">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">¿Cuánto deseas recargar?</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-6">
              {[25, 50, 100, 200].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleRecharge(amount)}
                  className="h-16 rounded-2xl border-2 border-primary/10 hover:border-primary hover:bg-primary/5 font-bold text-lg text-foreground transition-all active:scale-95"
                >
                  Q {amount}
                </button>
              ))}
            </div>
            <p className="text-center text-[11px] text-muted-foreground">La recarga se aplicará a tu tarjeta vinculada finalizada en •••• 4520</p>
          </DialogContent>
        </Dialog>

        {/* QR Modal */}
        <Dialog open={showQR} onOpenChange={setShowQR}>
          <DialogContent className="max-w-[90%] rounded-[32px] p-8 flex flex-col items-center">
            <div className="bg-primary/5 p-6 rounded-[40px] mb-6 relative">
              <div className="bg-white p-4 rounded-3xl shadow-xl">
                <QrCode size={200} className="text-foreground" />
              </div>
              <div className="absolute -top-3 -right-3 bg-primary text-white p-3 rounded-full shadow-lg border-4 border-white">
                <Sparkles size={20} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-1 text-center text-foreground">{cardData.name}</h3>
            <div className="flex items-center gap-2 mb-8 bg-muted/40 px-4 py-1.5 rounded-full">
              <span className="text-muted-foreground font-bold text-xs uppercase tracking-widest">Saldo:</span>
              <span className="font-bold text-primary">Q {balance.toFixed(2)}</span>
            </div>

            <p className="text-center text-sm text-muted-foreground leading-relaxed mb-6 font-medium italic">
              "Presenta este código en cajas para realizar tus pagos de forma rápida y segura."
            </p>

            <DialogClose asChild>
              <Button className="w-full h-14 rounded-2xl bg-foreground text-white font-bold hover:bg-foreground/90 active:scale-95 transition-all">
                Cerrar
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </MobileContainer>
  );
}
