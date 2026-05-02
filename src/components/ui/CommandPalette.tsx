import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Search, Home, User, FolderOpen, Briefcase, Mail, Sun, Moon } from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'pages' | 'actions';
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { resolvedTheme, setTheme } = useTheme();

  const items: CommandItem[] = [
    // Pages
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" />, action: () => navigate('/'), category: 'pages' },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" />, action: () => navigate('/about'), category: 'pages' },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" />, action: () => navigate('/projects'), category: 'pages' },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" />, action: () => navigate('/experience'), category: 'pages' },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" />, action: () => navigate('/contact'), category: 'pages' },
    // Actions
    {
      id: 'theme',
      label: 'Toggle theme',
      icon: resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />,
      action: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      category: 'actions',
    },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const pages = filtered.filter((i) => i.category === 'pages');
  const actions = filtered.filter((i) => i.category === 'actions');
  const allFiltered = [...pages, ...actions];

  const runItem = useCallback((item: CommandItem) => {
    item.action();
    setOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  // Keyboard shortcut to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery('');
        setSelectedIndex(0);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, allFiltered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (allFiltered[selectedIndex]) {
          runItem(allFiltered[selectedIndex]);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, selectedIndex, allFiltered, runItem]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!open) return null;

  let globalIndex = 0;

  return (
    <div className="command-overlay" onClick={() => setOpen(false)}>
      <div
        className="command-modal animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4">
          <Search className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search..."
            className="command-input !border-b-0 !px-0"
            autoFocus
          />
          <kbd className="text-xs text-[var(--muted-foreground)] bg-[var(--accent)] px-2 py-0.5 rounded shrink-0">
            Esc
          </kbd>
        </div>
        <div className="h-px bg-[var(--card-border)]" />

        {/* Results */}
        <div className="py-2 max-h-72 overflow-y-auto">
          {pages.length > 0 && (
            <>
              <div className="command-category">Pages</div>
              {pages.map((item) => {
                const idx = globalIndex++;
                return (
                  <div
                    key={item.id}
                    className={`command-item ${idx === selectedIndex ? 'selected' : ''}`}
                    onClick={() => runItem(item)}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                );
              })}
            </>
          )}
          {actions.length > 0 && (
            <>
              <div className="command-category">Actions</div>
              {actions.map((item) => {
                const idx = globalIndex++;
                return (
                  <div
                    key={item.id}
                    className={`command-item ${idx === selectedIndex ? 'selected' : ''}`}
                    onClick={() => runItem(item)}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                );
              })}
            </>
          )}
          {allFiltered.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-[var(--muted-foreground)]">
              No results found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
