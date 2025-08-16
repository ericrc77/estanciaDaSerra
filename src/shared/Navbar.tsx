import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X } from 'lucide-react';
import { Logo } from '../components/Logo';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#mapa', label: 'Mapa' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const active = useScrollSpy(links.map(l => l.href.replace('#', '')));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Detecta se o hero ainda está visível
      // Se rolou menos que 70% da altura da tela, hero ainda está visível
      const heroThreshold = window.innerHeight * 0.7;
      setHeroVisible(scrollY < heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  const linkVariants = {
    inactive: { 
      color: '#1f2937', // Preto mais suave mas bem legível
      scale: 1,
      transition: { duration: 0.2 }
    },
    active: { 
      color: '#059669', // Verde vibrante que combina com o hover
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    hover: {
      color: '#059669', // Mesmo verde para consistência visual
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Barra decorativa superior estilosa */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 decorative-bar">
        <div className="h-full decorative-bar-inner"></div>
      </div>
      
      <motion.header 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 h-16 md:h-18`}
      >
        <div className={`navbar-creative-border h-full transition-all duration-500 ${
          scrolled ? 'navbar-scrolled' : ''
        }`}>
          <nav className="mx-auto max-w-7xl pl-4 pr-4 xs:pr-5 phone:pr-6 md:pr-8 h-full flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.a 
              href="#inicio" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 truncate max-w-[70%] relative transition-all duration-300 ${
                scrolled ? 'navbar-logo-glow' : ''
              }`}
            >
              <Logo size="xs" showText={false} />
            </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={linkVariants}
              initial="inactive"
              animate={active === link.href.replace('#', '') ? "active" : "inactive"}
              whileHover="hover"
              className="relative py-2 transition-colors duration-200"
            >
              {link.label}
              {active === link.href.replace('#', '') && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green-500 to-brand-orange-500 rounded-full"
                  initial={false}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setOpen(o => !o)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2.5 rounded-xl hover:bg-black/5 transition-colors duration-200 focus-ring"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden glass-effect border-t border-black/5 px-4 xs:px-5 phone:px-6 overflow-hidden"
          >
            <div className="py-4 space-y-1">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === link.href.replace('#', '')
                      ? 'text-green-700 bg-green-50 font-semibold'
                      : 'text-gray-800 hover:text-green-600 hover:bg-green-50 font-medium'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
