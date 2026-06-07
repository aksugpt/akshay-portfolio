import { Navbar, Footer, ScrollProgress } from '@/components/layout';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';
import { Container, SectionHeading } from '@/components/ui';

// Placeholder section component
function SectionPlaceholder({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="py-20 md:py-28 min-h-[50vh] flex flex-col justify-center border-b border-[var(--color-border)] last:border-b-0">
      <Container>
        <SectionHeading title={title} />
        <div className="bg-[var(--color-surface-bg)] border border-dashed border-[var(--color-border)] rounded-xl h-64 flex items-center justify-center">
          <p className="text-[var(--color-text-secondary)] font-mono text-sm">
            // TODO: Implement {title} section
          </p>
        </div>
      </Container>
    </section>
  );
}

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

        <SectionPlaceholder id="research" title="Research Interests & Current Learning" />
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
