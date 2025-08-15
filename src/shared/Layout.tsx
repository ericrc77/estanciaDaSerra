import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Phone, Map as MapIcon, Images, Home, MessageCircle } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* Barra inferior mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 dark:bg-brand-dark/80 backdrop-blur border-t border-black/10 dark:border-white/10 flex justify-around py-2 text-xs">
        <a href="#inicio" className="flex flex-col items-center gap-0.5 text-brand-dark dark:text-white"><Home size={18}/>Início</a>
        <a href="#sobre" className="flex flex-col items-center gap-0.5"><MapIcon size={18}/>Sobre</a>
        <a href="#galeria" className="flex flex-col items-center gap-0.5"><Images size={18}/>Galeria</a>
        <a href="#contato" className="flex flex-col items-center gap-0.5"><Phone size={18}/>Contato</a>
      </nav>
      {/* Botão flutuante WhatsApp */}
      <a href="https://wa.me/5500000000000" target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 group">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-40" />
          <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-green text-white shadow-soft group-hover:scale-105 transition">
            <MessageCircle size={26}/>
          </span>
        </div>
      </a>
      <Footer />
    </div>
  );
}
