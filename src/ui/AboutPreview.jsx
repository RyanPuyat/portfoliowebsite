import { Link } from 'react-router-dom';
import ProfilePhoto from './ProfileImage';

function AboutPreview() {
  return (
    <section className="bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-line)] p-10 flex flex-col lg:flex-row items-center gap-10">
      <div>
        <ProfilePhoto />
      </div>
      <div>
        <h2 className="font-mono text-sm text-[var(--sig-amber)] mb-3">
          [ ABOUT ME ]
        </h2>
        <p className="text-[var(--sig-text)] mb-4 line-clamp-2 text-[15px]">
          I'm a web developer based in South Korea who loves bringing ideas to
          life online. I enjoy building websites and apps that look great and
          actually work — from the layout and design all the way to the
          behind-the-scenes logic. Whether I'm creating smooth user experiences
          or solving tricky backend challenges, I get excited about turning
          complex problems into simple, useful tools that people enjoy using.
        </p>
        <Link
          to="/about"
          className="font-mono text-xs text-[var(--sig-green)] hover:underline"
        >
          [ LEARN MORE ]
        </Link>
      </div>
    </section>
  );
}

export default AboutPreview;
