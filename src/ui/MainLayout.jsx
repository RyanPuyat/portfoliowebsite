import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="pt-[72px]">
      <section className="max-w-[1300px] mx-auto px-6 py-16">
        <Outlet />
      </section>
    </div>
  );
}
