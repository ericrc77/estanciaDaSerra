import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, MapPin } from 'lucide-react';

// Assets servidos via pasta public
const heroVideo = '/media/hero-placeholder.mp4';
const heroImage = '/media/hero.png';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simula carregamento e exibe conteúdo suavemente
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setShowContent(true), 300);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-18">
      {/* Background com imagem */}
      <div className="absolute inset-0 w-full h-full">
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
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      
      {/* Efeito de vinheta */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 100%)'
      }} />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full mx-auto mb-4 animate-spin" />
            <p className="text-white/80 text-sm font-light tracking-wider">CARREGANDO</p>
          </div>
        </div>
      )}

      {/* Content Principal */}
      <div className={`relative z-10 text-center px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)] transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Badge de localização */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300">
          <MapPin size={16} className="text-green-400" />
          <span className="text-white/90 text-sm font-medium tracking-wide">Minas Gerais</span>
        </div>

        {/* Logo Hero */}
        <div className="mb-8">
          <div className="logo-hero">
            <img 
              src="/media/logomaislarga.jpeg" 
              alt="Estância da Serra" 
              className="w-auto h-24 md:h-32 mx-auto object-contain filter drop-shadow-lg rounded-2xl"
            />
          </div>
        </div>

        {/* Título Principal */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none tracking-tight">
            <span className="block font-display">Onde a vida</span>
            <span className="block font-display text-green-400">encontra a natureza</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Descubra um novo conceito de viver bem
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a 
            href="#sobre" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            <span>Conhecer Projeto</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
          
          <a 
            href="#galeria" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform" />
            <span>Ver Galeria</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
