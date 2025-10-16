import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';
import Particles from './Particles';

export default function AppLayout() {
  return (
    // <div className="flex flex-col min-h-screen">
    <div className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      <Particles id="particles" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <MainNav />
        <main className="flex-grow">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>

      {/* <MainNav />
      <main className="flex-grow">
        <Outlet />
      </main> */}
    </div>
  );
}
