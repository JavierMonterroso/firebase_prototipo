
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Sparkles } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <MobileContainer noPadding className="bg-background">
      {/* Visual Top Section */}
      <div className="relative h-[30vh] w-full overflow-hidden flex flex-col justify-end px-6 pb-10 hero-gradient">
        <div className="absolute top-8 left-5">
          <Link href="/login" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-foreground active:scale-90 transition-transform">
            <ArrowLeft size={20} />
          </Link>
        </div>
        
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-primary">
            <Sparkles size={28} />
          </div>
          <h1 className="text-4xl font-bold text-foreground leading-tight">Únete a nosotros</h1>
          <p className="text-muted-foreground font-medium mt-1">Crea tu cuenta de explorador</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Card Form */}
      <div className="flex-1 bg-white rounded-t-[40px] px-6 pt-10 -mt-8 shadow-[0_-20px_50px_rgba(45,30,23,0.1)] relative z-20">
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-semibold ml-1">Nombre completo</Label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={18} />
              <Input 
                id="name"
                type="text" 
                placeholder="Juan Pérez" 
                required
                className="h-14 pl-12 rounded-2xl bg-muted/30 border-transparent focus:bg-white focus:border-primary/30 transition-all shadow-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-semibold ml-1">Correo electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={18} />
              <Input 
                id="email"
                type="email" 
                placeholder="tu@correo.com" 
                required
                className="h-14 pl-12 rounded-2xl bg-muted/30 border-transparent focus:bg-white focus:border-primary/30 transition-all shadow-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-semibold ml-1">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" size={18} />
              <Input 
                id="password"
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                required
                className="h-14 pl-12 pr-12 rounded-2xl bg-muted/30 border-transparent focus:bg-white focus:border-primary/30 transition-all shadow-none"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button 
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 opacity-100 visible"
          >
            {loading ? "Creando magia..." : "Crear cuenta"}
          </Button>
        </form>

        <div className="mt-10 text-center pb-8">
          <p className="text-muted-foreground font-medium">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-primary font-bold">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </MobileContainer>
  );
}
