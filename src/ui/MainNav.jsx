import Navbar from './Navbar';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { useState } from 'react';

export default function MainNav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--sig-bg)]/80 backdrop-blur-md border-b border-[var(--sig-line)]">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 md:px-12 h-[72px]">
        <Logo />
        <Navbar navOpen={navOpen} onToggle={() => setNavOpen(!navOpen)} />
        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </nav>
  );
}
