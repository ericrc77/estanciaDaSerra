import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from '../../../components/Logo';

// Assets servidos via pasta public
const heroVideo = '/media/hero-placeholder.mp4';
const heroImage = '/media/hero.png';
const logo = '/media/logo-provisoria.jpeg';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    // Preload da imagem hero
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setImageError(true);
      console.log('hero.png não encontrada, usando vídeo');
    };
    img.src = heroImage;
    
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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] h-[100dvh] xl:h-[95vh] w-full flex items-center justify-center overflow-hidden pb-safe pt-1">
      {/* Background com Parallax - Imagem prioritária */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        {/* Imagem de fundo principal - só aparece se carregou com sucesso */}
        {imageLoaded && !imageError && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full hero-background-image brightness-[0.7]"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        
        {/* Vídeo como fallback - aparece se imagem falhou ou enquanto carrega */}
        {(imageError || !imageLoaded) && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.65] scale-105" 
            poster={logo}
            onLoadedData={() => !imageLoaded && setIsLoaded(true)}
            onError={(e) => {
              (e.currentTarget as HTMLVideoElement).style.display = 'none';
              const fallback = document.querySelector('.hero-fallback') as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
        
        {/* Fallback final com imagem da galeria */}
        <div 
          className="hero-fallback absolute inset-0 hidden bg-center bg-cover brightness-[0.65] scale-105" 
          style={{ backgroundImage: 'url(/gallery/1.jpg)' }} 
        />
      </motion.div>

      {/* Gradient Overlay Sofisticado - Otimizado para a imagem com pessoas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-900/15 via-transparent to-brand-orange-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-brand-gray-900 flex items-center justify-center z-20">
          <motion.div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-brand-green-400 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-white text-sm">
              {imageLoaded ? 'Carregando...' : imageError ? 'Carregando vídeo...' : 'Carregando imagem...'}
            </p>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 xs:px-6 max-w-5xl mx-auto w-full"
      >
        <Logo size="xl" animated className="mx-auto mb-6 md:mb-8" />

        <motion.h1 
          variants={itemVariants}
          className="text-fluid-hero md:text-5xl lg:text-6xl font-display font-semibold text-white max-w-4xl mx-auto leading-tight word-break-keep"
        >
          Um Condomínio em Construção no{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-300 to-brand-orange-400">
            Coração da Natureza
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg xs:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mt-6 md:mt-8 leading-relaxed font-light word-break-keep px-2"
        >
          A Estância da Serra está ganhando forma: estradas internas em finalização e preparação do terreno. 
          Acompanhe a evolução e garanta prioridade nas próximas etapas.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col phone:flex-row gap-4 sm:gap-6 justify-center mt-10 md:mt-12"
        >
          <motion.a 
            href="#progresso" 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(102, 122, 43, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 phone:px-9 sm:px-10 py-4 phone:py-4 sm:py-5 rounded-full bg-gradient-to-r from-brand-green-600 to-brand-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm xs:text-base group"
          >
            Ver Progresso
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
          
          <motion.a 
            href="#contato" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 phone:px-9 sm:px-10 py-4 phone:py-4 sm:py-5 rounded-full bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-orange-400/30 text-sm xs:text-base"
          >
            Entre em Contato
          </motion.a>
        </motion.div>

        {/* Scroll Indicator - Agora embaixo dos botões */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-16 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/70 cursor-pointer"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2 font-medium">Role para baixo</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
