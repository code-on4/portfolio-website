import { motion } from 'framer-motion';
import { Briefcase, Download } from 'lucide-react';
import BackButton from '../components/ui/BackButton';
import ExperienceCard from '../components/ui/ExperienceCard';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Nigeria Inter-Bank Settlement Scheme (NIBSS)',
    location: 'Lagos',
    date: 'June 2025 – Present',
    description: [
      'Optimized external and internal frontend applications for log searching automation and controlled database access used by 200+ staff and partner agencies.',
      'Improved log search automation and reduced manual checks by 40%+. Resolved 90% of assigned issues within SLA.',
      'Maintained dashboards, forms, tables, role-based access screens, and real-time data views using React-TypeScript with Redux state management.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Qucoon Limited',
    location: 'Lagos',
    date: 'May 2024 – June 2025',
    description: [
      'Built and shipped core features across CRM, Maker-Checker, and Wellness platforms using React, TypeScript, and Redux — improving workflow speed and user engagement by 20–30%.',
      'Integrated multiple backend services and reduced API-related errors by ~40% through strict request validation and response handling.',
      'Played a key role in building responsive UI/UX designs ensuring accessibility and seamless user experience.',
    ],
  },
  {
    title: 'Application Dev Support',
    company: 'ipNX Nigeria Limited',
    location: 'Lagos',
    date: 'March – November 2022',
    description: [
      'Resolved 100+ support tickets by identifying bugs and coordinating with developers.',
      'Improved documentation clarity, decreasing repeat user issues by 15–20%.',
      'Participated in testing, quality assurance, and routine application maintenance.',
    ],
  },
];

export default function Experience() {
  return (
    <div className="page-enter w-full max-w-5xl mx-auto px-6 pt-28 pb-20">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-[var(--muted-foreground)]" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">
              Experience
            </h1>
          </div>
          <a
            href="/AkpasubiMichael_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full text-sm font-medium hover:opacity-90 transition-all"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>
        <p className="text-lg text-[var(--muted-foreground)]">
          My professional journey through various roles and companies.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className={`relative ${i === experiences.length - 1 ? '[&_.timeline-line]:hidden' : ''}`}>
            <ExperienceCard {...exp} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
