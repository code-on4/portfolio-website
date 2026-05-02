import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-all cursor-pointer"
      aria-label={`Current theme: ${theme}. Click to cycle.`}
      title={`Theme: ${theme}`}
    >
      {theme === 'light' && <Sun className="w-[18px] h-[18px]" />}
      {theme === 'dark' && <Moon className="w-[18px] h-[18px]" />}
      {theme === 'system' && <Monitor className="w-[18px] h-[18px]" />}
    </button>
  );
}
