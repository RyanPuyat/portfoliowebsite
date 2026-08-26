import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from './ideNav';

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* mobile scrim */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`font-jbmono text-sm bg-[var(--ide-sidebar)] border-r border-[var(--ide-line)]
        fixed md:sticky top-0 h-screen w-[220px] z-50 flex-shrink-0
        transition-transform duration-200
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="px-5 py-5 border-b border-[var(--ide-line)] flex items-center gap-2">
          <img src="/logo.png" alt="" className="h-6 w-6 rounded-sm" />
          <span className="text-[var(--ide-type)] font-semibold">RYAN.DEV</span>
        </div>

        <div className="px-5 pt-4 text-[var(--ide-muted)] text-xs tracking-wide">
          ▾ portfolio
        </div>

        <nav className="mt-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2 pl-9 pr-4 py-2 border-l-2 transition-colors ${
                  isActive
                    ? 'bg-[#2A2D2E] border-[var(--ide-accent)] text-[var(--ide-accent)]'
                    : 'border-transparent text-[var(--ide-muted)] hover:text-[var(--ide-text)]'
                }`
              }
            >
              <span
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: item.color }}
              />
              {item.file}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
