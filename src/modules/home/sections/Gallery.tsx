import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// Carrossel removido temporariamente para evitar dependência de swiper até instalação correta

const images = [
  'gallery/1.jpg',
  'gallery/2.jpg',
  'gallery/3.jpg',
  'gallery/4.jpg',
  'gallery/5.jpg'
];

export function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  return (
    <section id="galeria" className="container mx-auto px-4 xs:px-6 max-w-7xl">
      <h2 className="text-fluid-section-title font-display font-semibold mb-6 md:mb-10 text-brand-green">Imagens Aéreas</h2>
  <div ref={ref} className="grid phone:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 auto-rows-fr">
        {images.map((src, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.06 }}
            key={src}
            className="relative aspect-video overflow-hidden rounded-lg shadow-soft group cursor-pointer"
            onClick={() => setOpenIndex(i)}
          >
            <img src={src} alt="Galeria" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-500 blur-sm will-change-transform" onLoad={e=>e.currentTarget.classList.remove('blur-sm')} />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </motion.div>
        ))}
      </div>
  <p className="text-xs sm:text-sm text-brand-dark/60 mt-4">Novas imagens serão incorporadas à medida que o cronograma avança.</p>
      {openIndex!==null && (
        <Lightbox open index={openIndex} close={() => setOpenIndex(null)} slides={images.map(src => ({ src }))} />
      )}
    </section>
  );
}
