import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  date: string;
  description: string[];
  index?: number;
}

export default function ExperienceCard({ title, company, location, date, description, index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="timeline-dot absolute left-0 top-2" />
      {/* Timeline line — hidden on the last item via parent */}
      <div className="timeline-line" />

      <div className="glass-card p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-[var(--foreground)]">{title}</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              {company}{location ? ` · ${location}` : ''}
            </p>
          </div>
          <span className="text-xs font-medium text-[var(--muted-foreground)] bg-[var(--accent)] px-3 py-1.5 rounded-full shrink-0 self-start">
            {date}
          </span>
        </div>

        <div className="space-y-2 mt-4">
          {description.map((desc, i) => (
            <p key={i} className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
