import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Container, SectionHeading, Card, Badge, Tag, Button } from '@/components/ui';
import { projectItems } from '@/data/projects';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[var(--color-border)] last:border-b-0">
      <Container>
        <SectionHeading 
          title="Other Projects" 
          subtitle="A selection of my technical projects and experiments across software engineering and machine learning."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12"
        >
          {projectItems.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col p-6 md:p-8">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] leading-tight">
                    {project.title}
                  </h3>
                  <Badge 
                    label={project.status} 
                    variant={project.status === 'Completed' ? 'success' : 'info'} 
                  />
                </div>

                <p className="text-[var(--color-text-secondary)] mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[var(--color-text-secondary)]">
                        <span className="mr-2 text-[var(--color-accent)] mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <Tag key={idx} label={tag} />
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--color-border)]">
                  {project.duration ? (
                    <div className="flex items-center text-sm text-[var(--color-text-tertiary)]">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="flex gap-3 ml-auto">
                    {project.github && (
                      <Button href={project.github} label="Code" icon="Github" variant="secondary" size="sm" />
                    )}
                    {project.demo && (
                      <Button href={project.demo} label="Live Demo" icon="ExternalLink" variant="primary" size="sm" />
                    )}
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
