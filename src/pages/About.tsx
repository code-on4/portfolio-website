import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import BackButton from '../components/ui/BackButton';

const skills = [
  'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js',
  'Tailwind CSS', 'SASS', 'Redux Toolkit', 'RTK Query',
  'Zustand', 'Context API', 'Shadcn/ui',
  'Node.js', 'REST APIs', 'Prisma',
  'Git', 'GitHub', 'GitLab', 'Bitbucket',
  'Docker', 'Jenkins', 'GitHub Actions',
  'AWS (CCP & SAA)', 'MySQL', 'DynamoDB', 'Firebase',
  'Jira', 'Figma', 'Agile/Scrum',
];

const snapshots = [
  { label: 'Years of Experience', value: '4+' },
  { label: 'Professional Roles', value: '3+' },
  { label: 'Work Model', value: 'On-Site' },
  { label: 'Certifications', value: 'AWS CCP & SAA' },
];

export default function About() {
  return (
    <div className="page-enter w-full max-w-5xl mx-auto px-6 pt-28 pb-20">
      <BackButton />

      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-12 mb-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--muted-foreground)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Frontend Engineer
        </div>

        <div className="flex items-center gap-3 mb-8">
          <User className="w-8 h-8 text-[var(--muted-foreground)]" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">
            About
          </h1>
        </div>

        <div className="space-y-5 text-[var(--muted-foreground)] text-lg leading-relaxed max-w-3xl">
          <p>
            I'm a Frontend Engineer with 4+ years' hands-on experience building and maintaining 
            production web applications using React, TypeScript, Redux Toolkit, Tailwind, and modern 
            frontend tools. I have strong experience engineering production systems used by government 
            agencies, fintechs, and enterprise teams.
          </p>
          <p>
            AWS Certified (Cloud Practitioner & Solutions Architect Associate) with proven ability to 
            collaborate across design, backend, DevOps, and product teams. I'm passionate about building 
            efficient interfaces, driving UI performance, and delivering reliable features end-to-end.
          </p>
          <p>
            I hold a B.Sc. in Computer Science from the University of Benin, Nigeria. I enjoy solving 
            UI problems, simplifying complex flows, and making apps faster and easier to use.
          </p>
        </div>
      </motion.div>

      {/* Quick Snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
          <span className="text-lg">🌐</span> Quick Snapshot
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {snapshots.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="glass-card p-5"
            >
              <p className="text-xs text-[var(--muted-foreground)] mb-1">{item.label}</p>
              <p className="text-lg font-bold text-[var(--foreground)]">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          Core Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="px-4 py-2 glass-card text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Awards & Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          Awards & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'AWS Solutions Architect – Associate', year: '2025', desc: 'Validates comprehensive understanding of AWS cloud architecture and services.' },
            { title: 'AWS Certified Cloud Practitioner', year: '2024', desc: 'Foundational AWS certification covering cloud computing fundamentals.' },
            { title: 'MTN Science & Technology Scholarship', year: '2021', desc: 'Annual scholarship for outstanding students in science and technology.' },
            { title: 'Byinks Foundation Scholarship', year: '2019', desc: 'Merit-based scholarship for undergraduates at leading universities.' },
          ].map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[var(--foreground)]">{award.title}</h3>
                <span className="text-xs text-[var(--muted-foreground)] bg-[var(--accent)] px-2.5 py-1 rounded-full shrink-0 ml-3">
                  {award.year}
                </span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)]">{award.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
