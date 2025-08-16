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
  const [pageFullyLoaded, setPageFullyLoaded] = useState(false);
  const [blurLevel, setBlurLevel] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Aguarda a página estar totalmente carregada
    const handlePageLoad = () => {
      setPageFullyLoaded(true);
    };

    if (document.readyState === 'complete') {
      setPageFullyLoaded(true);
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    // Preload otimizado da imagem hero
    const img = new Image();
    img.loading = 'eager';
    img.fetchPriority = 'high';
    
    img.onload = () => {
      setImageLoaded(true);
      
      // Só inicia o blur quando a página estiver totalmente carregada
      const checkAndStartBlur = () => {
        if (pageFullyLoaded) {
          startBlurAnimation();
        } else {
          // Verifica novamente em 100ms
          setTimeout(checkAndStartBlur, 100);
        }
      };
      
      setTimeout(checkAndStartBlur, 1000); // Aguarda 1s após a imagem carregar
    };
    
    img.onerror = () => {
      setImageError(true);
      console.log('hero.png não encontrada, usando vídeo');
      
      const checkAndStartBlur = () => {
        if (pageFullyLoaded) {
          startBlurAnimation();
        } else {
          setTimeout(checkAndStartBlur, 100);
        }
      };
      
      setTimeout(checkAndStartBlur, 1500);
    };
    
    img.src = heroImage;

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, [pageFullyLoaded]);

  const startBlurAnimation = () => {
    const startTime = Date.now();
    const duration = 3000; // 3 segundos para o blur completo
    
    const animateBlur = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Função de easing suave
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setBlurLevel(easeOutCubic * 3); // Máximo de 3px de blur
      
      // Inicia o conteúdo quando o blur está em 40%
      if (progress >= 0.4 && !isLoaded) {
        setIsLoaded(true);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateBlur);
      }
    };
    
    requestAnimationFrame(animateBlur);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.8,
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
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
            style={{ 
              backgroundImage: `url(${heroImage})`,
              filter: `blur(${blurLevel}px)`,
              transition: 'filter 0.1s ease-out'
            }}
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
            style={{
              filter: `blur(${blurLevel}px)`,
              transition: 'filter 0.1s ease-out'
            }}
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
          style={{ 
            backgroundImage: 'url(/gallery/1.jpg)',
            filter: `blur(${blurLevel}px)`,
            transition: 'filter 0.1s ease-out'
          }} 
        />
      </motion.div>

      {/* Gradient Overlay Sofisticado - Otimizado para logo na parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

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
        className="relative z-10 text-center px-4 xs:px-6 max-w-6xl mx-auto w-full flex flex-col justify-center items-center min-h-[100vh] py-20 lg:py-16"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-fluid-hero font-black text-white max-w-4xl mx-auto leading-tight break-words hyphens-auto safe-margins overflow-safe order-1 mb-6 lg:mb-8"
        >
          Um Condomínio em Construção no{' '}
          <span className="bg-gradient-to-r from-emerald-200 via-green-300 to-orange-300 bg-clip-text text-transparent font-black">
            Coração da Natureza
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-fluid-base text-white max-w-3xl mx-auto mt-4 md:mt-6 lg:mt-8 leading-relaxed font-medium break-words hyphens-auto safe-margins overflow-safe order-2 mb-8 lg:mb-10"
        >
          A Estância da Serra está ganhando forma: estradas internas em finalização e preparação do terreno. 
          Acompanhe a evolução e garante prioridade nas próximas etapas.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col phone:flex-row gap-4 sm:gap-6 justify-center mt-6 md:mt-8 lg:mt-10 order-3 mb-8"
        >
          <motion.a 
            href="#progresso" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary-responsive"
          >
            Ver Progresso
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
          
          <motion.a 
            href="#contato" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary-responsive"
          >
            Entre em Contato
          </motion.a>
        </motion.div>

        {/* Logo posicionada por último para não cobrir pessoas */}
        <motion.div 
          variants={logoVariants}
          className="mt-12 md:mt-16 order-4"
        >
          <Logo size="xl" animated className="mx-auto" />
        </motion.div>

        {/* Scroll Indicator - Abaixo da logo */}
        <motion.div
          variants={itemVariants}
          className="mt-6 md:mt-8 flex flex-col items-center order-5"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/80 cursor-pointer hover:text-white transition-colors duration-300 group"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs md:text-sm mb-3 font-light tracking-wide">Role para descobrir</span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300"
            >
              <ChevronDown size={20} className="md:w-6 md:h-6" />
            </motion.div>
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
