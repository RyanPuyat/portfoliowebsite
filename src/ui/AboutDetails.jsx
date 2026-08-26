import IconCloudDemo from './TechSphere';
import TechTagCloud from './TagCloud';
import ProfilePhoto from './ProfileImage';

export default function AboutPage() {
  return (
    <div className="bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-line)] max-w-[1300px] mx-auto px-6 sm:px-10 py-14">
      <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-14">
        <ProfilePhoto />
        <div className="max-w-2xl">
          <h1 className="font-display text-2xl text-[var(--sig-green)] mb-3">
            Hey, I'm Ryan 👋
          </h1>
          <p className="text-[var(--sig-text)] text-[15px] leading-relaxed">
            I'm a web developer based in South Korea who loves bringing ideas
            to life online. I enjoy building websites and apps that look
            great and actually work — from the layout and design all the way
            to the behind-the-scenes logic. Whether I'm creating smooth user
            experiences or solving tricky backend challenges, I get excited
            about turning complex problems into simple, useful tools that
            people enjoy using.
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--sig-line)] pt-10 mb-14">
        <h2 className="font-mono text-sm text-[var(--sig-amber)] mb-4">
          [ MISSION ]
        </h2>
        <p className="text-[var(--sig-text)] leading-relaxed max-w-2xl text-[15px]">
          My mission is to build websites that feel good to use and make life
          a little easier. I love turning ideas into real, working web
          applications — from the first pixel on the screen to the last line
          of backend logic. Whether it's helping someone launch their dream
          project or creating tools that solve everyday problems, I'm here to
          make the web more useful, more beautiful, and more fun.
        </p>
      </div>

      <div className="border-t border-[var(--sig-line)] pt-10">
        <h2 className="font-mono text-sm text-[var(--sig-amber)] mb-6">
          [ TECH STACK ]
        </h2>
        <div className="border border-[var(--sig-line)] bg-[var(--sig-bg)] p-6">
          <IconCloudDemo />
          <div className="mt-4">
            <TechTagCloud />
          </div>
        </div>
      </div>
    </div>
  );
}
