import { motion } from 'framer-motion';
import { Container, SectionHeading, Card, Tag, Button, Badge } from '@/components/ui';
import { featuredWorkItems } from '@/data/featuredWork';
import { Layers, Lightbulb, Target } from 'lucide-react';

export function FeaturedWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="featured-work" className="py-20 md:py-28 border-b border-[var(--color-border)] bg-[var(--color-surface-bg)]/30">
      <Container>
        <SectionHeading 
          title="Featured Work" 
          subtitle="Deep dives into my most impactful projects, showcasing architecture, challenges, and measurable outcomes."
          align="left"
        />

        <motion.div
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredWorkItems.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="flex flex-col lg:flex-row overflow-hidden border border-[var(--color-border)]" hover={false}>
                
                {/* Left Side: Header & Overview */}
                <div className="flex-1 p-8 lg:p-10 lg:border-r border-[var(--color-border)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text-primary)] leading-tight">
                        {project.title}
                      </h3>
                      <Badge 
                        label={project.status === 'completed' ? 'Completed' : 'In Progress'} 
                        variant={project.status === 'completed' ? 'success' : 'warning'} 
                      />
                    </div>
                    <p className="text-[var(--color-accent)] font-medium mb-6">{project.subtitle}</p>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3 text-[var(--color-text-primary)] font-semibold">
                        <Layers size={18} className="text-[var(--color-accent)]" />
                        <h4>Architecture Overview</h4>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {project.architectureOverview}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => (
                        <Tag key={idx} label={tag} />
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <Button href={project.github} label="Source Code" icon="Github" variant="secondary" size="sm" />
                      )}
                      {project.demo && (
                        <Button href={project.demo} label="Live Demo" icon="ExternalLink" variant="primary" size="sm" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Challenges & Results */}
                <div className="flex-1 p-8 lg:p-10 bg-[var(--color-surface-bg)]">
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4 text-[var(--color-text-primary)] font-semibold">
                      <Lightbulb size={20} className="text-amber-500" />
                      <h4>Key Challenges Solved</h4>
                    </div>
                    <ul className="space-y-4">
                      {project.challengesSolved.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4 text-[var(--color-text-primary)] font-semibold">
                      <Target size={20} className="text-emerald-500" />
                      <h4>Results & Outcomes</h4>
                    </div>
                    <ul className="space-y-4">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
