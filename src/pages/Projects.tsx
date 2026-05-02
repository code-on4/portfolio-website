import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import BackButton from '../components/ui/BackButton';
import ProjectCard from '../components/ui/ProjectCard';

const projects = [
  {
    title: 'NIBSS CRM',
    description: 'Robust CRM solution optimizing customer relationship processes with real-time data updates and Microsoft Teams integration.',
    year: '2025',
    tech: ['React', 'TypeScript', 'Redux'],
  },
  {
    title: 'Choose Life Wellness',
    description: 'Responsive health and wellness platform for fitness tracking, meal planning, and mental wellness with personalized content delivery.',
    year: '2024',
    tech: ['React', 'Redux', 'APIs'],
  },
  {
    title: 'AI Resume Analyzer',
    description: 'AI-powered tool that evaluates resumes against job descriptions, providing keyword relevance insights and real-time feedback.',
    year: '2024',
    tech: ['React', 'AI Integration', 'Tailwind'],
  },
  {
    title: 'Qoonity',
    description: 'Platform for generating customized Kotlin code from user-defined entities and attributes with direct download functionality.',
    year: '2024',
    tech: ['React', 'TypeScript', 'Code Gen'],
  },
  {
    title: 'Travel Buddy',
    description: 'Travel planner with Google Maps integration for route planning, destination discovery, and NextAuth-secured user accounts.',
    year: '2023',
    tech: ['Next.js', 'NextAuth', 'Google Maps'],
  },
  {
    title: 'Inventory Management System',
    description: 'Linux-deployed inventory system with Bash automation, firewall configuration, access controls, and encryption.',
    year: '2023',
    tech: ['Linux', 'Bash', 'DevOps'],
  },
];

export default function Projects() {
  return (
    <div className="page-enter w-full max-w-5xl mx-auto px-6 pt-28 pb-20">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <FolderOpen className="w-8 h-8 text-[var(--muted-foreground)]" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">
            Projects
          </h1>
        </div>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
          A selection of projects I've built, from production apps to open-source tools.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </div>
  );
}
