import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <section className="max-w-[1300px] mx-auto px-6 py-10">
        <Outlet />
      </section>
    </div>
  );
}
