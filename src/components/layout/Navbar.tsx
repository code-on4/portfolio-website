import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const openCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4"
    >
      <nav className="nav-pill flex items-center gap-1 px-2 py-1.5 rounded-full shadow-nav max-w-fit">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={() => {
                const isActive = location.pathname === item.path;
                return `nav-item ${isActive ? 'active' : ''}`;
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-[var(--card-border)] mx-1" />

        {/* Actions */}
        <button
          onClick={openCommandPalette}
          className="p-2 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-all cursor-pointer"
          aria-label="Search"
          title="Search (⌘K)"
        >
          <Search className="w-[18px] h-[18px]" />
        </button>
        <ThemeToggle />
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 left-4 right-4 nav-pill rounded-2xl p-3 shadow-nav md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={() => {
                  const isActive = location.pathname === item.path;
                  return `nav-item block text-center ${isActive ? 'active' : ''}`;
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
