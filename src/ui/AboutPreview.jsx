import { Link } from 'react-router-dom';
import ProfilePhoto from './ProfileImage';

function AboutPreview() {
  return (
    <section className="bg-[var(--ide-sidebar)] border border-[var(--ide-line)] p-10 flex flex-col lg:flex-row items-center gap-10">
      <div>
        <ProfilePhoto />
      </div>
      <div className="font-jbmono">
        <div className="text-xs text-[var(--ide-muted)] mb-2">~/about.md</div>
        <h2 className="text-lg text-[var(--ide-type)] mb-3">## About Me</h2>
        <p className="text-[var(--ide-text)] mb-4 line-clamp-2 font-sans text-[15px]">
          I'm a web developer based in South Korea who loves bringing ideas to
          life online. I enjoy building websites and apps that look great and
          actually work — from the layout and design all the way to the
          behind-the-scenes logic. Whether I'm creating smooth user experiences
          or solving tricky backend challenges, I get excited about turning
          complex problems into simple, useful tools that people enjoy using.
        </p>
        <Link
          to="/about"
          className="inline-block text-[var(--ide-accent)] hover:underline text-sm"
        >
          // learn more →
        </Link>
      </div>
    </section>
  );
}

export default AboutPreview;
