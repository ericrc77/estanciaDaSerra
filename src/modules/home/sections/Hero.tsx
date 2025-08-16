import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Play, MapPin } from 'lucide-react';
import { Logo } from '../../../components/Logo';

// Assets servidos via pasta public
const heroVideo = '/media/hero-placeholder.mp4';
const heroImage = '/media/hero.png';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);

  useEffect(() => {
    // Simula carregamento e exibe conteúdo suavemente
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setShowContent(true), 300);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.5
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-18">
      {/* Background com Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Imagem de fundo */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.6) contrast(1.1)'
          }}
        />
        
        {/* Vídeo como fallback */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          style={{ mixBlendMode: 'overlay' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays sofisticados */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      
      {/* Efeito de vinheta sutil */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 100%)'
      }} />

      {/* Loading State Minimalista */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full mx-auto mb-4"
            />
            <p className="text-white/80 text-sm font-light tracking-wider">CARREGANDO</p>
          </motion.div>
        </div>
      )}

      {/* Content Principal */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)]"
      >
        {/* Stats flutuantes */}
        <motion.div
          variants={itemVariants}
          className="absolute top-1/4 right-8 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
          >
            <div className="text-white/90 text-sm font-medium">Lotes disponíveis</div>
            <div className="text-green-400 text-2xl font-bold">120+</div>
          </motion.div>
        </motion.div>

        {/* Badge de localização */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300"
        >
          <MapPin size={16} className="text-green-400" />
          <span className="text-white/90 text-sm font-medium tracking-wide">Serras de Minas Gerais</span>
        </motion.div>

        {/* Título principal */}
        <motion.h1 
          variants={itemVariants}
          className="text-white mb-6 max-w-5xl mx-auto leading-tight"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}
        >
          Um refúgio planejado em meio às{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              serras de Minas
            </span>
            {/* Linha decorativa sob o texto em destaque */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-70"
            />
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          variants={itemVariants}
          className="text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}
        >
          Infraestrutura em evolução. Natureza preservada. Um projeto que nasce agora para valorizar no tempo. 
          <br className="hidden md:block" />
          Descubra cada etapa desta jornada única.
        </motion.p>

        {/* Botões de ação */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg overflow-hidden"
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Explorar Projeto
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden">
            {/* Efeito shimmer sutil */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              Ver Vídeo
            </span>
          </button>
        </motion.div>

        {/* Logo */}
        <motion.div 
          variants={logoVariants}
          className="mb-16"
        >
          <div className="relative">
            <Logo size="xl" animated className="mx-auto filter drop-shadow-lg" />
            {/* Efeito de brilho sutil atrás da logo */}
            <div className="absolute inset-0 -z-10 bg-white/5 rounded-full blur-3xl scale-150" />
          </div>
        </motion.div>

        {/* Scroll Indicator Elegante */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center text-white/70 hover:text-white transition-all duration-300"
            aria-label="Rolar para baixo"
          >
            {/* Linha animada */}
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent mb-4 relative overflow-hidden">
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-white to-transparent"
              />
            </div>
            
            <span className="text-xs tracking-widest uppercase font-medium mb-2 opacity-80">
              Role para baixo
            </span>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>

      {/* Partículas flutuantes sofisticadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partículas grandes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-white/15 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Partículas médias */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute w-1.5 h-1.5 bg-green-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
            }}
            animate={{
              y: -50,
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Partículas pequenas */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 30,
            }}
            animate={{
              y: -30,
              opacity: [0, 0.4, 0],
              x: [`${Math.random() * window.innerWidth}px`, `${Math.random() * window.innerWidth}px`],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Efeito de orbes flutuantes nos cantos */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-green-400/5 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            opacity: [0.05, 0.2, 0.05],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-40 h-40 bg-blue-400/5 rounded-full blur-xl"
        />
      </div>
    </section>
  );
}
