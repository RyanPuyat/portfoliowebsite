import { Link } from 'react-router-dom';

const Hero = ({ name = 'Ryan', role = 'Full-stack Developer' }) => {
  return (
    <section className="border-b border-[var(--ide-line)]">
      <div className="max-w-[1300px] mx-auto px-6 py-20 font-jbmono text-[15px] leading-loose">
        <div className="flex gap-6">
          <div className="hidden sm:block text-right text-[var(--ide-muted)] select-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          <pre className="whitespace-pre-wrap">
            <span className="text-[var(--ide-keyword)]">import</span>{' '}
            {'{ Developer }'}{' '}
            <span className="text-[var(--ide-keyword)]">from</span>{' '}
            <span className="text-[var(--ide-string)]">&quot;./core&quot;</span>
            ;{'\n\n'}
            <span className="text-[var(--ide-keyword)]">
              export default function
            </span>{' '}
            <span className="text-[var(--ide-func)]">{name}</span>() {'{\n'}
            {'  '}
            <span className="text-[var(--ide-keyword)]">return</span> ({'\n'}
            {'    '}&lt;
            <span className="text-[var(--ide-type)]">Developer</span>
            {'\n'}
            {'      '}role=
            <span className="text-[var(--ide-string)]">&quot;{role}&quot;</span>
            {'\n'}
            {'      '}stack={'{['}
            <span className="text-[var(--ide-string)]">
              &quot;React&quot;
            </span>,{' '}
            <span className="text-[var(--ide-string)]">&quot;Node&quot;</span>,{' '}
            <span className="text-[var(--ide-string)]">
              &quot;PostgreSQL&quot;
            </span>
            {']}'}
            {'\n'}
            {'      '}based=
            <span className="text-[var(--ide-string)]">
              &quot;South Korea&quot;
            </span>
            {'\n'}
            {'      '}status=
            <span className="text-[var(--ide-string)]">
              &quot;open-to-work&quot;
            </span>
            {'\n'}
            {'    '}/&gt;
            <span className="ide-cursor" />
            {'\n'}
            {'  '});{'\n'}
            {'}'}
          </pre>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 ml-0 sm:ml-14">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-[#2A2D2E] border border-[var(--ide-line)] text-[var(--ide-type)] px-4 py-2 text-sm hover:border-[var(--ide-type)] transition-colors"
          >
            ▶ Run — View projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2A2D2E] border border-[var(--ide-line)] text-[var(--ide-text)] px-4 py-2 text-sm hover:border-[var(--ide-accent)] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
