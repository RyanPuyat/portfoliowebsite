import Social from './Social';

function Footer() {
  return (
    <footer className="font-mono text-xs border-t border-[var(--sig-line)] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[var(--sig-muted)]">
      <span className="flex items-center gap-2">
        <span className="status-dot" /> SYSTEM LOG — Ryan, {new Date().getFullYear()}
      </span>
      <Social size={16} />
    </footer>
  );
}

export default Footer;
