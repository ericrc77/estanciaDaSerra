import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg'
];

export function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  return (
    <section id="galeria" className="container mx-auto px-6 max-w-7xl">
      <h2 className="text-3xl font-display font-semibold mb-10 text-brand-green">Imagens Aéreas</h2>
      <div ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.08 }}
            key={src}
            className="relative aspect-video overflow-hidden rounded-lg shadow-soft group"
            onClick={() => setOpenIndex(i)}
          >
            <img src={src} alt="Galeria" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-brand-dark/60 mt-4">Novas imagens serão adicionadas conforme a evolução das obras.</p>
      {openIndex!==null && (
        <Lightbox open index={openIndex} close={() => setOpenIndex(null)} slides={images.map(src => ({ src }))} />
      )}
    </section>
  );
}
