import { motion } from 'framer-motion';
import { Container, SectionHeading, Card, Tag } from '@/components/ui';
import { aboutData, skills } from '@/data/about';
import { BookOpen, Code, Cpu, GraduationCap, Heart } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--color-border)]">
      <Container>
        <SectionHeading
          title="About & Interests"
          subtitle="A glimpse into my academic journey, core interests, and what drives me."
          align="left"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Bio Column */}
          <motion.div className="lg:col-span-2 flex flex-col gap-6" variants={itemVariants}>
            <Card className="p-8 h-full flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
                My Journey
              </h3>
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                {aboutData.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Sidebar Cards */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            {/* Current Learning */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Current Focus Areas</h3>
              </div>
              <ul className="space-y-3">
                {aboutData.learningAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Personal Interests */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
                  <Heart size={20} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Beyond Academics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutData.personalInterests.map((interest, idx) => (
                  <Tag key={idx} label={interest} />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Technical Skills - Full Width */}
          <motion.div className="lg:col-span-3 mt-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)] flex items-center gap-2">
              <Code size={24} className="text-[var(--color-accent)]" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup, idx) => (
                <Card key={idx} className="p-6" hover={false}>
                  <div className="flex items-center gap-3 mb-4 border-b border-[var(--color-border)] pb-3">
                    <Cpu size={18} className="text-[var(--color-text-secondary)]" />
                    <h4 className="font-semibold text-[var(--color-text-primary)]">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, sIdx) => (
                      <Tag key={sIdx} label={skill} />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
