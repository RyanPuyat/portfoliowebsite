// import IconCloudDemo from './TechSphere';
// import TechTagCloud from './TagCloud';
// import ProfilePhoto from './ProfileImage';

// export default function AboutPage() {
//   return (
//     <div className="bg-[var(--ide-sidebar)] border border-[var(--ide-line)] max-w-[1300px] mx-auto px-6 py-16">
//       <div className="text-xs font-jbmono text-[var(--ide-muted)] mb-8">
//         ~/about.md
//       </div>

//       <div className="flex flex-col xl:flex-row xl:items-start items-center gap-10 mb-12">
//         <div>
//           <ProfilePhoto />
//         </div>

//         <div>
//           <h1 className="font-jbmono text-2xl text-[var(--ide-type)] mb-3">
//             # Hey, I'm Ryan 👋
//           </h1>
//           <p className="text-[var(--ide-text)] text-base leading-relaxed">
//             I'm a web developer based in South Korea who loves bringing ideas to
//             life online. I enjoy building websites and apps that look great and
//             actually work — from the layout and design all the way to the
//             behind-the-scenes logic. Whether I'm creating smooth user
//             experiences or solving tricky backend challenges, I get excited
//             about turning complex problems into simple, useful tools that people
//             enjoy using.
//           </p>
//         </div>
//       </div>

//       <div className="mb-12">
//         <h2 className="font-jbmono text-xl text-[var(--ide-type)] mb-4">
//           ## My Mission
//         </h2>
//         <p className="text-[var(--ide-text)] leading-relaxed">
//           My mission is to build websites that feel good to use and make life a
//           little easier. I love turning ideas into real, working web
//           applications — from the first pixel on the screen to the last line of
//           backend logic. Whether it's helping someone launch their dream
//           project or creating tools that solve everyday problems, I'm here to
//           make the web more useful, more beautiful, and more fun.
//         </p>
//       </div>

//       <h2 className="font-jbmono text-xl text-[var(--ide-type)] mb-4">
//         ## Tech I Use
//       </h2>
//       <div className="my-10">
//         <IconCloudDemo />
//       </div>

//       <TechTagCloud />
//     </div>
//   );
// }
import IconCloudDemo from './TechSphere';
import TechTagCloud from './TagCloud';
import ProfilePhoto from './ProfileImage';

export default function AboutPage() {
  return (
    <div className="bg-[var(--ide-sidebar)] border border-[var(--ide-line)] max-w-[1300px] mx-auto px-6 sm:px-10 py-14">
      <div className="text-xs font-jbmono text-[var(--ide-muted)] mb-10">
        ~/about.md
      </div>

      {/* Intro */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-14">
        <ProfilePhoto />
        <div className="max-w-2xl">
          <h1 className="font-jbmono text-2xl text-[var(--ide-type)] mb-3">
            # Hey, I'm Ryan 👋
          </h1>
          <p className="text-[var(--ide-text)] text-[15px] leading-relaxed">
            I'm a web developer based in South Korea who loves bringing ideas to
            life online. I enjoy building websites and apps that look great and
            actually work — from the layout and design all the way to the
            behind-the-scenes logic. Whether I'm creating smooth user
            experiences or solving tricky backend challenges, I get excited
            about turning complex problems into simple, useful tools that people
            enjoy using.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="border-t border-[var(--ide-line)] pt-10 mb-14">
        <h2 className="font-jbmono text-sm text-[var(--ide-accent)] mb-4 flex items-center gap-2">
          <span className="text-[var(--ide-muted)]">//</span> Mission
        </h2>
        <p className="text-[var(--ide-text)] leading-relaxed max-w-2xl text-[15px]">
          My mission is to build websites that feel good to use and make life a
          little easier. I love turning ideas into real, working web
          applications — from the first pixel on the screen to the last line of
          backend logic. Whether it's helping someone launch their dream project
          or creating tools that solve everyday problems, I'm here to make the
          web more useful, more beautiful, and more fun.
        </p>
      </div>

      {/* Tech */}
      <div className="border-t border-[var(--ide-line)] pt-10">
        <h2 className="font-jbmono text-sm text-[var(--ide-accent)] mb-6 flex items-center gap-2">
          <span className="text-[var(--ide-muted)]">//</span> Tech I use
        </h2>
        <div className="border border-[var(--ide-line)] bg-[#1E1E1E] p-6">
          <IconCloudDemo />
          <div className="mt-4">
            <TechTagCloud />
          </div>
        </div>
      </div>
    </div>
  );
}
