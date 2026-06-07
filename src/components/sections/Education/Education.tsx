import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Container, SectionHeading, Card, Badge, Tag } from '@/components/ui';
import { educationItems } from '@/data/education';

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-20 md:py-28 border-b border-[var(--color-border)] last:border-b-0 bg-[var(--color-surface-bg)]/30">
      <Container>
        <SectionHeading 
          title="Education" 
          subtitle="My academic background, focusing on data science, machine learning, and computational research."
        />

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 md:gap-12"
          >
            {educationItems.map((edu) => {
              const isCurrent = edu.endYear === 'Present';
              
              return (
                <motion.div key={edu.id} variants={itemVariants} className="relative pl-12 md:pl-20">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 md:left-4 top-6 w-8 h-8 -translate-x-1/2 rounded-full border-4 border-[var(--color-primary-bg)] flex items-center justify-center z-10
                    ${isCurrent ? 'bg-[var(--color-accent)]' : 'bg-[#1C1C27]'}
                  `}>
                    <GraduationCap className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-[var(--color-text-secondary)]'}`} />
                  </div>

                  <Card 
                    className={`p-6 md:p-8 ${isCurrent ? 'border-[var(--color-accent)]/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : ''}`}
                    hover={false}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] leading-tight">
                            {edu.degree}
                          </h3>
                          {isCurrent && (
                            <Badge label="Current" variant="success" />
                          )}
                        </div>
                        <p className="text-lg font-medium text-[var(--color-text-secondary)]">
                          {edu.institute}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm font-medium text-[var(--color-text-tertiary)] md:items-end whitespace-nowrap shrink-0">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {edu.startYear} – {edu.endYear}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {(edu.cgpa || (edu.courses && edu.courses.length > 0)) && (
                      <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                        {edu.cgpa && (
                          <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] mb-4">
                            <Award className="w-4 h-4 text-[var(--color-accent)]" />
                            <span>CGPA / Score: <span className="text-[var(--color-text-primary)]">{edu.cgpa}</span></span>
                          </div>
                        )}
                        
                        {edu.courses && edu.courses.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                              Key Coursework & Focus Areas
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, idx) => (
                                <Tag key={idx} label={course} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
