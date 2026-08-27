import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[60vh] font-mono">
      <div className="bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-amber)] max-w-md w-full p-6 text-left text-sm">
        <div className="text-[var(--sig-amber)] mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--sig-amber)] shadow-[0_0_8px_var(--sig-amber)]" />
          SIGNAL LOST
        </div>
        <p className="text-[var(--sig-text)] mb-1">
          No node found at <span className="text-[var(--sig-green)]">{window.location.pathname}</span>
        </p>
        <p className="text-[var(--sig-muted)]">404 — connection could not be established</p>
      </div>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-[var(--sig-panel)] border border-[var(--sig-line)] text-[var(--sig-green)] px-5 py-2.5 text-sm transition-all duration-200 hover:border-[var(--sig-green)] hover:shadow-[0_0_14px_var(--sig-green-dim)] hover:scale-[1.03]"
      >
        [ RECONNECT — GO HOME ]
      </Link>
    </div>
  );
}

export default PageNotFound;
