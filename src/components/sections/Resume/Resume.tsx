import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Code2, BrainCircuit } from 'lucide-react';
import { Container, SectionHeading, Card, Button, Tag } from '@/components/ui';
import { resumeData } from '@/data/resume';

export function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="resume" className="py-20 md:py-28 border-b border-[var(--color-border)] last:border-b-0 bg-[var(--color-surface-bg)]/30">
      <Container>
        <SectionHeading
          title="Resume & Overview"
          subtitle="A quick snapshot of my professional journey, skills, and technical background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">

          {/* Left Column: Summary & Actions */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
              {resumeData.summary}
            </motion.p>

            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-[var(--color-text-primary)] font-bold text-xl mb-4">Quick Highlights</h3>
              <ul className="space-y-3">
                {resumeData.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <Sparkles className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button href="/resume.pdf" label="Download Resume" icon="Download" variant="primary" />
              <Button href="/resume.pdf" label="View Full Resume" icon="ExternalLink" variant="secondary" />
            </motion.div>
          </motion.div>

          {/* Right Column: Resume Preview Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full p-8 md:p-10 border-[var(--color-border)] bg-[var(--color-primary-bg)] shadow-2xl relative overflow-hidden" hover={false}>

              {/* Decorative top bar mimicking a document */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-accent)] to-purple-500" />

              <div className="space-y-10 pt-2">

                {/* Experience Preview */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Professional Experience</h3>
                  </div>
                  <div className="space-y-6">
                    {resumeData.experience.map((exp, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-l-2 border-[var(--color-border)] pl-4 hover:border-[var(--color-accent)] transition-colors">
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)]">{exp.role}</h4>
                          <p className="text-sm text-[var(--color-text-secondary)]">{exp.company}</p>
                        </div>
                        <span className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-surface-bg)] px-3 py-1 rounded-full w-fit">
                          {exp.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI / ML Skills Preview */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BrainCircuit className="w-5 h-5 text-purple-500" />
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">AI & Machine Learning</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.ai.map(skill => (
                      <Tag key={skill} label={skill} className="bg-purple-500/10 text-purple-400 border-purple-500/20" />
                    ))}
                  </div>
                </div>

                {/* Tech & Tools Preview */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-blue-500" />
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Languages & Web Tech</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...resumeData.skills.languages, ...resumeData.skills.web, ...resumeData.skills.tools].map(skill => (
                      <Tag key={skill} label={skill} />
                    ))}
                  </div>
                </div>

              </div>
            </Card>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
