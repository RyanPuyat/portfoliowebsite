import { useLocation } from 'react-router-dom';
import { matchNavItem } from './ideNav';

export default function StatusBar() {
  const location = useLocation();
  const active = matchNavItem(location.pathname);

  return (
    <div className="font-jbmono text-xs text-white bg-[var(--ide-statusbar)] flex items-center justify-between px-4 py-1.5 sticky bottom-0 z-30">
      <div className="flex items-center gap-4">
        <span>⎇ main</span>
        <span className="hidden sm:inline">✓ 0 problems</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">UTF-8</span>
        <span>{active?.lang ?? 'Plain Text'}</span>
      </div>
    </div>
  );
}
