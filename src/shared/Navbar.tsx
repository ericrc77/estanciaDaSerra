import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#mapa', label: 'Mapa' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const active = useScrollSpy(links.map(l=>l.href.replace('#','')));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur bg-white/80 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-display text-lg font-semibold text-brand-green tracking-wide">ESTÂNCIA DA SERRA</a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(l => <a key={l.href} href={l.href} className={"transition " + (active===l.href.replace('#','')? 'text-brand-green font-semibold':'hover:text-brand-green')}>{l.label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(d=>!d)} className="p-2 rounded-md hover:bg-black/5 text-brand-dark dark:text-white" aria-label="Alternar tema">
            {dark ? <Sun size={20}/> : <Moon size={20}/>}
          </button>
          <button onClick={() => setOpen(o=>!o)} className="md:hidden p-2 rounded-md hover:bg-black/5" aria-label="Menu">
          {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 pb-6 flex flex-col gap-4">
          {links.map(l => <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className={"pt-4 border-b pb-2 border-black/10 " + (active===l.href.replace('#','')? 'text-brand-green font-semibold':'')}>{l.label}</a>)}
        </div>
      )}
    </header>
  );
}
