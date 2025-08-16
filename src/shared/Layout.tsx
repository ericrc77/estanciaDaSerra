
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Phone, Map as MapIcon, Images, Home } from 'lucide-react';
import FloatingAgendarButton from '../components/FloatingAgendarButton';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* Barra inferior mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur border-t border-black/10 flex justify-around py-2 text-xs">
        <a href="#inicio" className="flex flex-col items-center gap-0.5 text-gray-800"><Home size={18}/>Início</a>
        <a href="#sobre" className="flex flex-col items-center gap-0.5 text-gray-800"><MapIcon size={18}/>Sobre</a>
        <a href="#galeria" className="flex flex-col items-center gap-0.5 text-gray-800"><Images size={18}/>Galeria</a>
        <a href="#contato" className="flex flex-col items-center gap-0.5"><Phone size={18}/>Contato</a>
      </nav>
  {/* Botão flutuante de atendimento (ChatBot) */}
  {/* ChatBot removido */}
      <Footer />
    </div>
  );
}
