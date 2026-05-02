import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import BackButton from '../components/ui/BackButton';

const socials = [
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: 'https://www.linkedin.com/in/michael-akpasubi-239b18226',
  },
  {
    name: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
    href: '#',
  },
];

export default function Contact() {
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
          <Mail className="w-8 h-8 text-[var(--muted-foreground)]" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">
            Contact
          </h1>
        </div>
        <p className="text-lg text-[var(--muted-foreground)]">
          Open to interesting projects and collaborations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <a
              href="mailto:akpasubimichael@gmail.com"
              className="glass-card p-5 flex items-center gap-4 group hover:border-[var(--muted-foreground)] block"
            >
              <div className="p-3 rounded-xl bg-[var(--accent)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[var(--muted-foreground)]">Email</p>
                <p className="font-medium text-[var(--foreground)]">akpasubimichael@gmail.com</p>
              </div>
            </a>
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[var(--accent)]">
                <MapPin className="w-5 h-5 text-[var(--muted-foreground)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--muted-foreground)]">Location</p>
                <p className="font-medium text-[var(--foreground)]">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Connect</h2>
          <div className="grid grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)] transition-all"
              >
                {social.icon}
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 pt-8 border-t border-[var(--card-border)]"
      >
        <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
          <span className="availability-dot" />
          Currently available for full-time opportunities
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-[var(--card-border)] text-center">
        <p className="text-sm text-[var(--muted-foreground)]">
          Designed & Built by Michael Akpasubi &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
