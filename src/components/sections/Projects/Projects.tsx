import { motion } from 'framer-motion';
import { Container, SectionHeading, Card, Badge, Tag, Button } from '@/components/ui';

const professionalProjects = [
  {
    id: "npl",
    title: "National Pharmaceutical Laboratory (NPL) Website & CMS Platform",
    status: "Completed",
    description: "Developed a custom content management system and official website platform for National Pharmaceutical Laboratory.",
    highlights: [
      "Built custom CMS from scratch",
      "Dynamic content management",
      "Product search functionality",
      "Improved accessibility and usability",
      "Production deployment"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://npl.com.np/"
  },
  {
    id: "appn",
    title: "Association of Pharmaceutical Producers of Nepal Portal",
    status: "Completed",
    description: "Designed and developed a management portal and website for the Association of Pharmaceutical Producers of Nepal.",
    highlights: [
      "Dashboard management system",
      "Content publishing workflows",
      "Regulatory information management",
      "Administrative controls",
      "Industry communication platform"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://appon.org.np/"
  },
  {
    id: "click-vision",
    title: "Click Vision International Website",
    status: "Completed",
    description: "Developed and maintained the company website for Click Vision International.",
    highlights: [
      "Frontend development",
      "Responsive web design",
      "Product information management",
      "Business website implementation"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    link: "http://www.clickvisioninternational.com/"
  }
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[var(--color-border)] last:border-b-0 bg-[var(--color-surface-bg)]/30">
      <Container>
        <SectionHeading 
          title="Professional Projects & Industry Experience" 
          subtitle="A showcase of my industry experience building production-ready portals, custom content management systems, and corporate websites."
        />

        <motion.div 
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {professionalProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col p-8 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col justify-between items-start mb-6 gap-4">
                  <div className="flex w-full justify-between items-start gap-4">
                    <h4 className="font-bold text-[var(--color-text-primary)] text-xl leading-tight">
                      {project.title}
                    </h4>
                    <Badge 
                      label={project.status} 
                      variant="success"
                      className="shrink-0"
                    />
                  </div>
                </div>

                <p className="text-[var(--color-text-secondary)] mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h5 className="text-xs font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4 opacity-80">Highlights</h5>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[var(--color-text-secondary)] group/item">
                        <span className="mr-3 text-blue-500/70 mt-0.5 group-hover/item:text-blue-500 transition-colors">•</span>
                        <span className="group-hover/item:text-[var(--color-text-primary)] transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6 mt-auto pt-6 border-t border-[var(--color-border)]/50">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tag, idx) => (
                      <Tag key={idx} label={tag} className="text-xs bg-[var(--color-surface-bg)] border-[var(--color-border)] text-[var(--color-text-secondary)]" />
                    ))}
                  </div>
                  
                  <div className="flex justify-end w-full">
                    <Button 
                      href={project.link} 
                      label="Visit Website" 
                      icon="ExternalLink" 
                      variant="primary" 
                      size="sm"
                    />
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
