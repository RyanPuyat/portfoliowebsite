import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[60vh] font-jbmono">
      <div className="bg-[var(--ide-sidebar)] border border-[#F14C4C] max-w-lg w-full p-6 text-left text-sm">
        <div className="text-[#F14C4C] mb-2">✕ ERROR</div>
        <p className="text-[var(--ide-text)] mb-1">
          Cannot resolve module{' '}
          <span className="text-[var(--ide-string)]">'{window.location.pathname}'</span>
        </p>
        <p className="text-[var(--ide-muted)]">404 — page not found</p>
      </div>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-[#2A2D2E] border border-[var(--ide-line)] text-[var(--ide-type)] px-5 py-2.5 text-sm hover:border-[var(--ide-type)] transition-colors"
      >
        ▶ Run — Go home
      </Link>
    </div>
  );
}

export default PageNotFound;
