import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  tech?: string[];
  link?: string;
  index?: number;
}

export default function ProjectCard({ title, description, year, tech, link, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
            {title}
          </h3>
          <span className="text-xs font-medium text-[var(--muted-foreground)] bg-[var(--accent)] px-3 py-1 rounded-full shrink-0 ml-4">
            {year}
          </span>
        </div>
        <p className="text-[var(--muted-foreground)] leading-relaxed text-sm mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        {tech && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-[var(--muted-foreground)] bg-[var(--accent)] px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            View
          </a>
        )}
      </div>
    </motion.div>
  );
}
