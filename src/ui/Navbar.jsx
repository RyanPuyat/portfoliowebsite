import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const PATHS = ['/', '/projects', '/blog', '/about', '/contact'];

function label(path) {
  return path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
}

function Navbar({ onToggle, navOpen }) {
  return (
    <>
      <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide">
        {PATHS.map((path) => (
          <NavLink key={path} to={path} end={path === '/'} className="group relative py-1">
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? 'text-[var(--sig-green)]'
                      : 'text-[var(--sig-muted)] group-hover:text-[var(--sig-text)] transition-colors'
                  }
                >
                  {label(path)}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[1px] bg-[var(--sig-green)] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={onToggle}
          className="text-[var(--sig-text)] text-lg cursor-pointer transition-transform hover:scale-110"
          title="Menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </>
  );
}

export default Navbar;
