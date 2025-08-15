import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { LotsMapSection } from './sections/LotsMapSection';
import { Gallery } from './sections/Gallery';
import { Contact } from './sections/Contact';
import { Timeline } from './sections/Timeline';

export function HomePage() {
  return (
    <main className="flex flex-col gap-32">
      <Hero />
      <About />
      <LotsMapSection />
  <Gallery />
  <Timeline />
      <Contact />
    </main>
  );
}
