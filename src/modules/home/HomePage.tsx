import { Suspense, lazy, useEffect } from 'react';
import { Hero } from './sections/HeroFixed';
import { Architect } from './sections/Architect';

// Lazy loaded sections
const About = lazy(() => import('./sections/About').then(m => ({ default: m.About })));
const Highlights = lazy(() => import('./sections/Highlights').then(m => ({ default: m.Highlights })));
const LotsMapSection = lazy(() => import('./sections/LotsMapSection').then(m => ({ default: m.LotsMapSection })));
const Gallery = lazy(() => import('./sections/Gallery').then(m => ({ default: m.Gallery })));
const Timeline = lazy(() => import('./sections/Timeline').then(m => ({ default: m.Timeline })));
const Location = lazy(() => import('./sections/Location').then(m => ({ default: m.Location })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function SectionFallback() {
  return (
    <div className="w-full flex items-center justify-center py-20 text-sm text-brand-gray-500 animate-pulse">
      Carregando seção...
    </div>
  );
}

// Pré-carrega algumas seções após o idle
function useWarmup() {
  useEffect(() => {
    const cb = () => {
      // Dispara import assíncrono sem bloquear
      import('./sections/About');
      import('./sections/Highlights');
    };
    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(cb, { timeout: 2000 });
      return () => (window as any).cancelIdleCallback?.(id);
    } else {
  const t = setTimeout(cb, 1200);
  return () => clearTimeout(t);
    }
  }, []);
}

export function HomePage() {
  useWarmup();
  return (
    <main className="flex flex-col">
      <Hero />
      <Architect />
      <div className="snap-section">
        <Suspense fallback={<SectionFallback />}> <About /> </Suspense>
      </div>
      <div className="snap-section">
        <Suspense fallback={<SectionFallback />}> <Highlights /> </Suspense>
      </div>
      <div className="snap-section">
        <Suspense fallback={<SectionFallback />}> <LotsMapSection /> </Suspense>
      </div>
      <div className="snap-section">
        <Suspense fallback={<SectionFallback />}> <Gallery /> </Suspense>
      </div>
      <div className="snap-section">
        <Suspense fallback={<SectionFallback />}> <Timeline /> </Suspense>
      </div>
      <div className="snap-section">
        <Suspense fallback={<SectionFallback />}> <Location /> </Suspense>
      </div>
      <div className="snap-section">
        <Suspense fallback={<SectionFallback />}> <Contact /> </Suspense>
      </div>
    </main>
  );
}
