import { Outlet } from 'react-router-dom';
import Hero from './Hero';

export default function HomeLayout() {
  return (
    <>
      <Hero />
      <section className="max-w-[1300px] mx-auto px-6 py-10 space-y-16">
        <Outlet />
      </section>
    </>
  );
}
