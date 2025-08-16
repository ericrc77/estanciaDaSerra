import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface CarouselProps { 
  images: string[];
  onImageClick?: (index: number) => void;
}

export function Carousel({ images, onImageClick }: CarouselProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-6xl mx-auto"
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            effect: 'slide',
            coverflowEffect: { rotate: 0, depth: 0 }
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 24,
            effect: 'slide',
            coverflowEffect: { rotate: 0, depth: 0 }
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            effect: 'coverflow'
          }
        }}
        className="gallery-swiper pb-12"
      >
        {images.map((src, index) => (
          <SwiperSlide key={src} className="!w-auto max-w-sm">
            <motion.div 
              className="relative aspect-video rounded-2xl overflow-hidden shadow-soft-lg group cursor-pointer"
              onClick={() => onImageClick?.(index)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img 
                src={src} 
                alt={`Galeria ${index + 1}`} 
                loading="lazy" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">Vista {index + 1}</p>
                <p className="text-xs opacity-80">Clique para ampliar</p>
              </div>

              {/* Loading placeholder */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 skeleton" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
