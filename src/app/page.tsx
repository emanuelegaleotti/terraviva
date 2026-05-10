import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Hero } from '@/components/sections/Hero/Hero';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip/MarqueeStrip';
import { Manifesto } from '@/components/sections/Manifesto/Manifesto';
import { About } from '@/components/sections/About/About';
import { Seasons } from '@/components/sections/Seasons/Seasons';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <MarqueeStrip />
        <Manifesto />
        <About />
        <Seasons />
      </main>
      <Footer />
    </>
  );
}
