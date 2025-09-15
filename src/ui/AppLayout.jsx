import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
