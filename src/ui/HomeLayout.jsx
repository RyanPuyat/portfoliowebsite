import { Outlet } from 'react-router-dom';
import Hero from './Hero';

export default function HomeLayout() {
  return (
    <>
      <div className="pt-[72px]">
        <Hero />
      </div>
      <section className="max-w-[1300px] mx-auto px-6 py-16 space-y-16">
        <Outlet />
      </section>
    </>
  );
}
