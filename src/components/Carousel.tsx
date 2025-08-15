import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// Removed unused import for LazyLoadImage

interface CarouselProps { images: string[]; }

export function Carousel({ images }: CarouselProps) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1.05}
      centeredSlides
      className="w-full max-w-xl"
      breakpoints={{
        640: { slidesPerView: 2.2, centeredSlides: false },
        1024: { slidesPerView: 3.2 }
      }}
    >
      {images.map(src => (
        <SwiperSlide key={src} className="h-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-soft">
            <img src={src} alt="Imagem" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
