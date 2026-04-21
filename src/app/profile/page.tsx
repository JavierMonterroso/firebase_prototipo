
"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Settings, CreditCard, Bell, Shield, HelpCircle, ChevronRight } from 'lucide-react';
import { MobileContainer } from '@/components/layout/MobileContainer';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  const menuItems = [
    { icon: Settings, label: 'Ajustes de cuenta', color: 'text-slate-600' },
    { icon: CreditCard, label: 'Métodos de pago', color: 'text-slate-600' },
    { icon: Bell, label: 'Notificaciones', color: 'text-slate-600' },
    { icon: Shield, label: 'Privacidad y Seguridad', color: 'text-slate-600' },
    { icon: HelpCircle, label: 'Centro de ayuda', color: 'text-slate-600' },
  ];

  return (
    <MobileContainer className="pb-32" noPadding>
      <div className="pt-12 px-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-8">Mi Perfil</h1>
        
        <div className="flex items-center gap-4 mb-10">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="https://picsum.photos/seed/user123/200/200" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Juan Pérez</h2>
            <p className="text-slate-500 font-medium">juan.perez@email.com</p>
            <div className="mt-1 bg-irtra-blue/10 text-irtra-blue text-[11px] font-bold px-2 py-0.5 rounded-full inline-block">
              EXPLORADOR NIVEL 5
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] shadow-soft border border-slate-50 overflow-hidden mb-6">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors active:bg-slate-100">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl bg-irtra-bg ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <span className="text-slate-700 font-semibold text-[15px]">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </button>
              {index < menuItems.length - 1 && <Separator className="bg-slate-50 mx-4 w-auto" />}
            </React.Fragment>
          ))}
        </div>

        <Button 
          onClick={handleLogout}
          variant="outline" 
          className="w-full h-14 rounded-2xl border-red-50 text-red-500 font-bold bg-red-50/30 hover:bg-red-50 hover:text-red-600 transition-all flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          Cerrar sesión
        </Button>
      </div>

      <BottomNav />
    </MobileContainer>
  );
}
