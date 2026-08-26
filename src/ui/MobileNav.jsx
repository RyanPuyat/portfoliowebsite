import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const PATHS = ['/', '/projects', '/blog', '/about', '/contact'];

function label(path) {
  return path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
}

function MobileNav({ navOpen, setNavOpen }) {
  useEffect(() => {
    if (!navOpen) return;
    const close = () => setNavOpen(false);
    window.addEventListener('scroll', close);
    return () => window.removeEventListener('scroll', close);
  }, [navOpen, setNavOpen]);

  if (!navOpen) return null;

  return (
    <div className="absolute top-[72px] left-0 w-full z-50 bg-[var(--sig-bg)] border-b border-[var(--sig-line)] px-6 py-5 space-y-4 text-center md:hidden font-mono text-sm">
      {PATHS.map((path) => (
        <NavLink key={path} to={path} onClick={() => setNavOpen(false)} className="block">
          {({ isActive }) => (
            <span className={isActive ? 'text-[var(--sig-green)]' : 'text-[var(--sig-muted)]'}>
              {label(path)}
            </span>
          )}
        </NavLink>
      ))}
    </div>
  );
}

export default MobileNav;
