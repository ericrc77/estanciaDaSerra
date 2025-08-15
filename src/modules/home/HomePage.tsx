import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { LotsMapSection } from './sections/LotsMapSection';
import { Gallery } from './sections/Gallery';
import { Contact } from './sections/Contact';
import { Timeline } from './sections/Timeline';
import { Highlights } from './sections/Highlights';
import { Location } from './sections/Location';

export function HomePage() {
  return (
    <main className="flex flex-col gap-24 phone:gap-28 md:gap-32">
      <Hero />
      <About />
      <Highlights />
      <LotsMapSection />
      <Gallery />
      <Timeline />
      <Location />
      <Contact />
    </main>
  );
}
