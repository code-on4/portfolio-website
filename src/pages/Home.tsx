import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import StatCard from '../components/ui/StatCard';
import ProjectCard from '../components/ui/ProjectCard';

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Companies', value: '3+' },
  { label: 'Frontend & Cloud', value: 'Full-Stack' },
  { label: 'Lagos, Nigeria', value: 'Remote' },
];

const featuredProjects = [
  {
    title: 'NIBSS CRM',
    description: 'Robust CRM solution for NIBSS optimizing customer relationship processes with real-time data updates and Microsoft Teams integration.',
    year: '2025',
    tech: ['React', 'TypeScript', 'Redux'],
  },
  {
    title: 'AI Resume Analyzer',
    description: 'AI-powered resume analysis tool that scans and evaluates resumes based on job descriptions, providing insights on keyword relevance and skill matching.',
    year: '2024',
    tech: ['React', 'AI', 'Tailwind'],
  },
];

export default function Home() {
  return (
    <div className="page-enter w-full max-w-7xl mx-auto px-6 pt-8 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--muted-foreground)] mb-6">
            <span className="availability-dot" />
            Available for new opportunities
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-3 leading-[1.1]"
        >
          Hi, I'm Michael Osaremen.
        </motion.h2>
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-sm lg:text-xl font-medium tracking-tight text-[var(--foreground)] mb-6 leading-[1.1]"
        >
          Software Developer
        </motion.h5>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl leading-relaxed mb-10"
        >
          Frontend Engineer with 4+ years' experience building production web applications
          using React, TypeScript, and modern frontend tools. AWS Certified with proven ability
          to deliver efficient interfaces and reliable features end-to-end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full text-sm font-medium hover:opacity-90 transition-all"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/AkpasubiMichael_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] rounded-full text-sm font-medium hover:border-[var(--muted-foreground)] transition-all"
          >
            Download CV
          </a>
        </motion.div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} index={i} />
        ))}
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </section>

      {/* Core Skills Preview */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'JavaScript', 'TypeScript', 'React', 'Nest JS','Next.js', 'Redux', 'Zustand',
              'Tailwind CSS', 'Node.js', 'AWS', 'Docker', 'Git', 'REST APIs'
            ].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-4 py-2 glass-card text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
