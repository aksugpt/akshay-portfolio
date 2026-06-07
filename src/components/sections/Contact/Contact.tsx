import { motion, Variants } from 'framer-motion';
import {
  Mail,
  GitBranch,
  Link2,
  MapPin,
  ExternalLink,
  Send,
  Sparkles,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';
import { Container, SectionHeading, Card, Tag, Badge } from '@/components/ui';
import { contactData } from '@/data/contact';

/* ─── Animation Variants ─────────────────────────────────────────────────── */
/* ─── Animation Variants ─────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const fromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function ContactInfoRow({
  icon: Icon,
  label,
  value,
  href,
  iconColor = 'text-[var(--color-accent)]',
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  iconColor?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 py-3.5 px-4 rounded-xl border border-transparent
                 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5
                 transition-all duration-250"
    >
      <div
        className={`p-2 rounded-lg bg-[var(--color-primary-bg)] border border-[var(--color-border)]
                    group-hover:border-[var(--color-accent)]/40 transition-colors shrink-0`}
      >
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-0.5">
          {label}
        </span>
        <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors truncate font-mono">
          {value}
        </span>
      </div>
      <ExternalLink
        className="w-3.5 h-3.5 text-[var(--color-text-tertiary)] ml-auto shrink-0
                   opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </a>
  );
}

function ActionButton({
  href,
  icon: Icon,
  label,
  sublabel,
  variant = 'secondary',
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  sublabel?: string;
  variant?: 'primary' | 'secondary';
}) {
  const isPrimary = variant === 'primary';
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center gap-4 w-full px-5 py-4 rounded-2xl border font-medium
                  transition-all duration-250 cursor-pointer
                  ${isPrimary
          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/40'
          : 'bg-[var(--color-surface-bg)] border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5'
        }`}
    >
      <div
        className={`p-2 rounded-lg shrink-0 ${isPrimary
          ? 'bg-white/20'
          : 'bg-[var(--color-primary-bg)] border border-[var(--color-border)]'
          }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold leading-tight">{label}</span>
        {sublabel && (
          <span
            className={`text-xs mt-0.5 font-mono truncate max-w-[200px] ${isPrimary ? 'text-white/70' : 'text-[var(--color-text-tertiary)]'
              }`}
          >
            {sublabel}
          </span>
        )}
      </div>
      <ExternalLink className="w-4 h-4 ml-auto shrink-0 opacity-60" />
    </motion.a>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────────── */

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 border-b border-[var(--color-border)] last:border-b-0 bg-[var(--color-primary-bg)] overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-[120px]" />
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] bg-purple-500 opacity-[0.05] rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          title="Let's Connect"
          subtitle={contactData.tagline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">

          {/* ── Left Column ─────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Availability Badge */}
            <div>
              <Badge label="Available for Opportunities" variant="success" dot={true} />
            </div>

            {/* Name & Identity */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-tight">
                {contactData.name}
              </h3>
              <div className="flex items-center gap-2 mt-3">
                <GraduationCap className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <p className="text-sm text-[var(--color-accent)] font-semibold">
                  {contactData.position} · {contactData.institutionShort}
                </p>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mt-1 font-medium">
                {contactData.department}
              </p>
            </div>

            {/* Intro */}
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base">
              {contactData.intro}
            </p>

            {/* Primary Action Buttons */}
            <motion.div
              className="flex flex-col gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.div variants={fadeUp}>
                <ActionButton
                  href={`mailto:${contactData.email}`}
                  icon={Send}
                  label="Send Email"
                  sublabel={contactData.email}
                  variant="primary"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ActionButton
                  href={contactData.github}
                  icon={GitBranch}
                  label="GitHub"
                  sublabel={`github.com/${contactData.githubHandle}`}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ActionButton
                  href={contactData.linkedin}
                  icon={Link2}
                  label="LinkedIn"
                  sublabel={`linkedin.com/in/${contactData.linkedinHandle}`}
                />
              </motion.div>
            </motion.div>

            {/* Open To */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                Open To
              </h4>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {contactData.openTo.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* ── Right Column ────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Contact Info Card */}
            <Card className="relative overflow-hidden p-0" hover={false}>
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-purple-500" />

              <div className="p-6 md:p-8 pt-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-5 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  Contact Information
                </h4>

                <div className="space-y-1">
                  <ContactInfoRow
                    icon={Mail}
                    label="Primary Email"
                    value={contactData.email}
                    href={`mailto:${contactData.email}`}
                    iconColor="text-[var(--color-accent)]"
                  />
                  <ContactInfoRow
                    icon={Mail}
                    label="Alternative Email"
                    value={contactData.altEmail}
                    href={`mailto:${contactData.altEmail}`}
                    iconColor="text-indigo-400"
                  />
                  <ContactInfoRow
                    icon={GitBranch}
                    label="GitHub"
                    value={`github.com/${contactData.githubHandle}`}
                    href={contactData.github}
                    iconColor="text-[var(--color-text-primary)]"
                  />
                  <ContactInfoRow
                    icon={Link2}
                    label="LinkedIn"
                    value={contactData.linkedinHandle}
                    href={contactData.linkedin}
                    iconColor="text-blue-400"
                  />
                  <ContactInfoRow
                    icon={MapPin}
                    label="Location"
                    value={contactData.location}
                    href={`https://maps.google.com/?q=${encodeURIComponent(contactData.location)}`}
                    iconColor="text-emerald-400"
                  />
                </div>
              </div>
            </Card>

            {/* Professional Interests Card */}
            <Card className="p-6 md:p-8" hover={false}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Professional Interests
              </h4>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {contactData.professionalInterests.map((interest) => (
                  <motion.div key={interest} variants={tagVariants}>
                    <Tag
                      label={interest}
                      className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/25
                                 hover:bg-[var(--color-accent)]/20 transition-colors cursor-default"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </Card>

            {/* CTA Footer Card */}
            <Card
              className="relative p-6 md:p-8 overflow-hidden border-[var(--color-accent)]/20
                         bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-purple-500/5"
              hover={false}
            >
              {/* Decorative ring */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-[var(--color-accent)]/10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-[var(--color-accent)]/15" />

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="text-[var(--color-text-primary)] font-bold text-lg leading-tight">
                    Ready to build something great?
                  </p>
                  <p className="text-[var(--color-text-secondary)] text-sm mt-1.5">
                    {contactData.tagline}
                  </p>
                </div>
                <motion.a
                  href={`mailto:${contactData.email}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white
                             font-semibold rounded-xl shadow-lg shadow-[var(--color-accent)]/25
                             hover:shadow-[var(--color-accent)]/40 transition-all duration-250 cursor-pointer shrink-0"
                >
                  <Send className="w-4 h-4" />
                  Get in Touch
                </motion.a>
              </div>
            </Card>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
