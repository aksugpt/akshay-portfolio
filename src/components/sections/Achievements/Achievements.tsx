import { motion } from 'framer-motion';
import { Award, FileText, Lightbulb, BookOpen, Calendar, Hash } from 'lucide-react';
import { Container, SectionHeading, Card, Badge, Tag } from '@/components/ui';
import { achievementItems } from '@/data/achievements';

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'patent': return <FileText className="w-6 h-6 text-amber-500" />;
      case 'award': return <Award className="w-6 h-6 text-emerald-500" />;
      case 'academic': return <BookOpen className="w-6 h-6 text-blue-500" />;
      case 'research': return <Lightbulb className="w-6 h-6 text-purple-500" />;
      default: return <Award className="w-6 h-6 text-[var(--color-accent)]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-[var(--color-border)] last:border-b-0 bg-[var(--color-primary-bg)]">
      <Container>
        <SectionHeading 
          title="Achievements & Milestones" 
          subtitle="Key milestones, research focus, and recognition across my academic and professional journey."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {achievementItems.map((item) => {
            const isPatent = item.type === 'patent';
            const isHackathon = item.type === 'award';
            const isResearch = item.type === 'research';
            
            let colSpan = "col-span-1";
            if (isPatent) colSpan = "col-span-1 md:col-span-2 lg:col-span-3";
            else if (isHackathon) colSpan = "col-span-1 md:col-span-2 lg:col-span-2";
            else if (isResearch) colSpan = "col-span-1 md:col-span-2 lg:col-span-3";

            return (
              <motion.div key={item.id} variants={itemVariants} className={colSpan}>
                <Card 
                  className={`h-full p-6 md:p-8 flex flex-col 
                    ${isPatent ? 'border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.15)] bg-gradient-to-br from-amber-500/5 to-transparent' : ''}
                    ${isHackathon ? 'border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] bg-gradient-to-br from-emerald-500/5 to-transparent' : ''}
                  `}
                  hover={true}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-[var(--color-primary-bg)] border border-[var(--color-border)] shrink-0
                      ${isPatent ? 'border-amber-500/30' : ''}
                      ${isHackathon ? 'border-emerald-500/30' : ''}
                    `}>
                      {getIcon(item.type)}
                    </div>
                    {item.status && (
                      <Badge 
                        label={item.status} 
                        variant={isPatent ? 'warning' : 'info'} 
                      />
                    )}
                    {item.highlight && (
                      <Badge 
                        label={item.highlight} 
                        variant="success" 
                      />
                    )}
                  </div>

                  <h3 className={`font-bold text-[var(--color-text-primary)] mb-2 leading-tight
                    ${isPatent ? 'text-2xl md:text-3xl' : 'text-xl'}
                  `}>
                    {item.title}
                  </h3>
                  
                  <p className="text-[var(--color-text-secondary)] font-medium mb-4 flex flex-wrap items-center gap-2">
                    {item.issuer} 
                    {item.year && <span className="text-[var(--color-text-tertiary)] hidden md:inline">• {item.year}</span>}
                  </p>

                  {item.description && (
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 text-sm md:text-base">
                      {item.description}
                    </p>
                  )}

                  {isPatent && (
                    <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[var(--color-primary-bg)] border border-amber-500/20">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-[var(--color-text-tertiary)] uppercase font-semibold tracking-wider">Application No.</span>
                        <div className="flex items-center gap-2 text-sm text-[var(--color-text-primary)] font-mono">
                          <Hash className="w-3.5 h-3.5 text-amber-500" />
                          {item.applicationNo}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-[var(--color-text-tertiary)] uppercase font-semibold tracking-wider">Publication Date</span>
                        <div className="flex items-center gap-2 text-sm text-[var(--color-text-primary)] font-mono">
                          <Calendar className="w-3.5 h-3.5 text-amber-500" />
                          {item.publicationDate}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
