import { Navbar, Footer, ScrollProgress } from '@/components/layout';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Research } from '@/components/sections/Research';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-primary-bg)]">
      <ScrollProgress />
      <Navbar />
      
      <main>
        {/* We use specific IDs that match our navigation data */}
        <Hero />
        <About />
        <FeaturedWork />
        <Research />
        <Projects />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
