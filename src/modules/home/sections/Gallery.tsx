import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimateOnScroll, useStaggerChildren } from '../../../hooks/useAnimation';
import { Expand, Play, Image as ImageIcon } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: '/gallery/1.jpg', title: 'Vista Aérea Principal', type: 'image' },
  { src: '/gallery/2.jpg', title: 'Área de Preservação', type: 'image' },
  { src: '/gallery/3.jpg', title: 'Acesso Principal', type: 'image' },
  { src: '/gallery/4.jpg', title: 'Topografia do Terreno', type: 'image' },
  { src: '/gallery/5.jpg', title: 'Paisagem Natural', type: 'image' }
];

export function Gallery() {
  const { ref, controls, variants } = useAnimateOnScroll({ threshold: 0.2 });
  const { containerVariants, itemVariants } = useStaggerChildren(0.08);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const lightboxSlides = images.map(img => ({ src: img.src, title: img.title }));

  return (
    <section id="galeria" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        animate={controls}
        variants={variants}
        className="text-center mb-12"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 text-brand-green-600 mb-4"
        >
          <ImageIcon size={20} />
          <span className="text-fluid-sm font-semibold uppercase tracking-wider">Galeria</span>
        </motion.div>
        
        <motion.h2 
          variants={itemVariants}
          className="text-fluid-section-title font-display font-semibold mb-6 text-brand-green-700"
        >
          Imagens Aéreas do{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-500 to-brand-green-700">
            Empreendimento
          </span>
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-base text-brand-gray-600 max-w-2xl mx-auto"
        >
          Acompanhe o progresso através de registros aéreos que mostram a evolução da infraestrutura e o potencial da região.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            variants={itemVariants}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-soft-lg transition-all duration-500 ${
              index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setOpenIndex(index)}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
            }}
          >
            <div className={`relative ${index === 0 ? 'aspect-[4/3]' : 'aspect-video'} overflow-hidden`}>
              {/* Loading skeleton */}
              <div className="absolute inset-0 skeleton" />
              
              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  const skeleton = target.previousElementSibling as HTMLElement;
                  if (skeleton) skeleton.style.display = 'none';
                }}
              />

              {/* Overlay gradientes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover overlay com ícone */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="glass-effect text-white p-4 rounded-2xl backdrop-blur-md"
                    >
                      <Expand size={32} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content overlay */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: hoveredIndex === index ? 0 : 20, 
                  opacity: hoveredIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white"
              >
                <h3 className="font-semibold text-sm lg:text-base mb-1">
                  {image.title}
                </h3>
                <p className="text-xs lg:text-sm text-white/80">
                  Clique para visualizar em tamanho completo
                </p>
              </motion.div>

              {/* Badge do tipo */}
              <div className="absolute top-3 right-3 glass-effect text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm opacity-80">
                {image.type === 'video' ? '📹' : '📷'} {image.type === 'video' ? 'Vídeo' : 'Foto'}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="text-center mt-12"
      >
        <motion.p 
          className="text-sm text-brand-gray-500 mb-6"
        >
          Novas imagens serão incorporadas à medida que o cronograma de obras avança.
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-green-100 to-brand-green-200 dark:from-brand-green-900/30 dark:to-brand-green-800/30 text-brand-green-700 dark:text-brand-green-300 text-sm font-medium cursor-pointer hover:shadow-green transition-all duration-300"
        >
          <ImageIcon size={16} />
          Galeria será atualizada regularmente
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox 
            open 
            index={openIndex} 
            close={() => setOpenIndex(null)} 
            slides={lightboxSlides}
            animation={{ fade: 300 }}
            carousel={{ finite: true }}
            render={{
              buttonPrev: () => null,
              buttonNext: () => null,
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
