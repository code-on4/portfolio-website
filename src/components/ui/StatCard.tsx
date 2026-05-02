import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  index?: number;
}

export default function StatCard({ label, value, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="glass-card p-10 text-center"
    >
      <p className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
        {value}
      </p>
      <p className="text-sm text-[var(--muted-foreground)] mt-1">{label}</p>
    </motion.div>
  );
}
