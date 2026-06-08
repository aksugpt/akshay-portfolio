import { motion } from 'framer-motion';
import { Container, SectionHeading, Card, Tag, Badge } from '@/components/ui';
import { Microscope, BrainCircuit, CheckCircle2, Award, Trophy, BookOpen, Zap } from 'lucide-react';

const researchInterests = [
  "Retrieval-Augmented Generation (RAG)",
  "Large Language Models (LLMs)",
  "Agentic AI & Multi-Agent Systems",
  "Generative AI Applications",
  "Machine Learning Systems",
  "Vector Databases & Semantic Search",
  "Knowledge Retrieval Systems",
  "AI System Evaluation",
  "Applied Artificial Intelligence"
];

const learningChecklist = [
  "Advanced RAG Architectures & Retrieval Strategies",
  "LangChain Ecosystem & AI Workflows",
  "ChromaDB & Vector Database Systems",
  "Agentic AI & Multi-Agent Frameworks",
  "Prompt Engineering & LLM Applications",
  "Open-Source LLM Deployment",
  "Hallucination Mitigation Techniques",
  "Model Evaluation & Benchmarking"
];

const researchHighlights = [
  {
    title: "Autonomous Dual-Band System for Selective Drone Detection & Immobilization via Wi-Fi Deauthentication",
    category: "Published Patent",
    icon: Award,
    description: "Published patent focused on drone detection and immobilization using Wi-Fi deauthentication techniques."
  },
  {
    title: "Neuro Robotics Hackathon 2026",
    category: "Secured 3rd Place",
    icon: Trophy,
    description: "Secured 3rd Place at Neuro Robotics Hackathon 2026, IIT Jodhpur."
  },
  {
    title: "M.Tech Research Focus",
    category: "Academic Research",
    icon: BookOpen,
    description: "Exploring Generative AI, Retrieval-Augmented Generation (RAG), and Intelligent Information Retrieval Systems."
  }
];

export function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="research" className="py-20 md:py-28 border-b border-[var(--color-border)] last:border-b-0 bg-[var(--color-surface-bg)]/30">
      <Container>
        <SectionHeading
          title="Research Interests & Current Learning"
          subtitle="My academic focus and continuous exploration in Generative AI, RAG, and Machine Learning systems."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Card: Research Interests */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full p-8 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <Microscope size={180} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <BrainCircuit className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Research Interests</h3>
                </div>
                
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  My academic interests focus on building intelligent systems that combine retrieval, reasoning, and real-world data to solve practical problems. I am particularly interested in Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Agentic AI systems, and scalable AI architectures.
                </p>

                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest, idx) => (
                    <Tag 
                      key={idx} 
                      label={interest} 
                      className="bg-[var(--color-primary-bg)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors cursor-default" 
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Card: Current Learning & Exploration */}
          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full p-8 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <Zap size={180} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Current Learning & Exploration</h3>
                </div>

                <div className="space-y-4 mb-8">
                  {learningChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-[var(--color-text-secondary)] group-hover/item:text-[var(--color-text-primary)] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto p-5 bg-[var(--color-primary-bg)] rounded-xl border border-[var(--color-border)] border-dashed">
                  <p className="text-sm text-[var(--color-text-secondary)] italic text-center leading-relaxed">
                    "Currently focused on strengthening both theoretical understanding and practical implementation of modern Generative AI systems."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Bottom Full-width Card: Research Highlights */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="p-8 md:p-10 relative overflow-hidden group">
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Research Highlights</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {researchHighlights.map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <div key={idx} className="bg-[var(--color-primary-bg)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all duration-300 hover:-translate-y-1 group/item">
                    <div className="flex items-center justify-between mb-4">
                      <Badge label={highlight.category} variant={idx === 0 ? "success" : idx === 1 ? "warning" : "info"} />
                      <Icon className="w-5 h-5 text-[var(--color-text-tertiary)] group-hover/item:text-[var(--color-accent)] transition-colors" />
                    </div>
                    <h4 className="text-[var(--color-text-primary)] font-bold mb-3" title={highlight.title}>
                      {highlight.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>

      </Container>
    </section>
  );
}
