import Social from './Social';

function Footer() {
  return (
    <footer className="font-jbmono text-xs border-t border-[var(--ide-line)] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[var(--ide-muted)]">
      <span>// built by Ryan — {new Date().getFullYear()}</span>
      <Social size={16} />
    </footer>
  );
}

export default Footer;
