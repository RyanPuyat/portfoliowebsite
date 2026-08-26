import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2">
      <img className="h-9 w-9" src="/logo.png" alt="" />
      <span className="font-mono text-xs text-[var(--sig-green)] flex items-center gap-2">
        <span className="status-dot" /> ONLINE
      </span>
    </NavLink>
  );
}
export default Logo;
