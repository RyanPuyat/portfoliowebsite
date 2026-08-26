import { useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { matchNavItem } from './ideNav';

export default function TabBar({ sidebarOpen, onToggleSidebar }) {
  const location = useLocation();
  const active = matchNavItem(location.pathname) ?? {
    file: 'untitled',
    color: 'var(--ide-muted)',
  };

  return (
    <div className="font-jbmono text-sm flex items-center bg-[var(--ide-sidebar)] border-b border-[var(--ide-line)] sticky top-0 z-30">
      <button
        onClick={onToggleSidebar}
        className="md:hidden px-4 py-3 text-[var(--ide-text)]"
        title="Toggle file tree"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="flex items-center gap-2 px-4 py-2.5 bg-[var(--ide-tab-active)] border-r border-[var(--ide-line)] text-[var(--ide-text)]">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: active.color }} />
        {active.file}
      </div>

      <Link
        to="/"
        className="ml-auto mr-4 text-xs text-[var(--ide-muted)] hover:text-[var(--ide-accent)] transition-colors"
      >
        ~/portfolio
      </Link>
    </div>
  );
}
