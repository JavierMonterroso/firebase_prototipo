
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de delay de red
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <MobileContainer noPadding className="bg-white">
      <div className="px-6 pt-12 pb-8">
        <Link href="/" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-irtra-bg text-slate-800 mb-8 active:scale-90 transition-transform">
          <ArrowLeft size={20} />
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Iniciar sesión</h1>
          <p className="text-slate-500 font-medium">¡Qué alegría verte de nuevo por aquí!</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700 font-semibold ml-1">Correo electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                id="email"
                type="email" 
                placeholder="tu@correo.com" 
                required
                className="h-14 pl-12 rounded-2xl bg-irtra-bg border-transparent focus:bg-white focus:border-irtra-blue/30 transition-all shadow-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <Label htmlFor="password" className="text-slate-700 font-semibold">Contraseña</Label>
              <button type="button" className="text-irtra-blue text-[13px] font-bold">¿Olvidaste tu contraseña?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                id="password"
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                required
                className="h-14 pl-12 pr-12 rounded-2xl bg-irtra-bg border-transparent focus:bg-white focus:border-irtra-blue/30 transition-all shadow-none"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button 
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-irtra-blue text-white font-bold text-lg shadow-lg shadow-irtra-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
          >
            {loading ? "Cargando..." : "Ingresar"}
          </Button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-slate-500 font-medium">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="text-irtra-blue font-bold">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </MobileContainer>
  );
}
