import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="relative min-h-screen bg-[var(--sig-bg)] text-[var(--sig-text)] overflow-hidden">
      <div className="scanlines" />
      <div className="vignette" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <MainNav />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
