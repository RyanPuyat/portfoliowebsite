import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import NetworkGraph from './NetworkGraph';
import { useProjects } from '../features/projects/useProjects';

const Hero = ({ name = 'Ryan', role = 'Full-stack Developer' }) => {
  const { allProjects } = useProjects();
  const projectNodes = (allProjects || [])
    .filter((p) => p.featured)
    .slice(0, 3)
    .map((p) => ({ id: p.id, title: p.title }));

  return (
    <section className="relative min-h-[86vh] flex flex-col justify-center px-6 sm:px-12 overflow-hidden border-b border-[var(--sig-line)]">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 26], fov: 55 }}>
          <NetworkGraph projectNodes={projectNodes} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[1300px] w-full mx-auto pointer-events-none">
        <div className="font-mono text-xs text-[var(--sig-green)] tracking-widest mb-5">
          <span className="text-[var(--sig-muted)]">{'>'}</span>{' '}
          {role.toUpperCase()}
        </div>

        <h1 className="font-display font-semibold text-[clamp(40px,6vw,76px)] leading-[1.05] mb-6 max-w-3xl">
          Mapping ideas into
          <br />
          <span className="text-[var(--sig-green)]">working systems.</span>
        </h1>

        <p className="font-mono text-sm text-[var(--sig-muted)] max-w-md leading-relaxed mb-10">
          I'm {name} — I design and build products end to end, tracing every
          connection from schema to pixel until the whole thing holds together.
        </p>

        <div className="flex flex-wrap gap-3 pointer-events-auto">
          <Link
            to="/projects"
            className="font-mono text-xs px-6 py-3 border border-[var(--sig-green-dim)] bg-[var(--sig-panel)] backdrop-blur text-[var(--sig-green)] transition-all duration-200 hover:border-[var(--sig-green)] hover:scale-[1.04] hover:shadow-[0_0_16px_var(--sig-green-dim)]"
          >
            [ VIEW PROJECTS ]
          </Link>
          <Link
            to="/contact"
            className="font-mono text-xs px-6 py-3 border border-[var(--sig-line)] bg-[var(--sig-panel)] backdrop-blur text-[var(--sig-text)] transition-all duration-200 hover:border-[var(--sig-green)] hover:text-[var(--sig-green)] hover:scale-[1.04]"
          >
            [ CONTACT ]
          </Link>
        </div>

        <p className="font-mono text-[10px] text-[var(--sig-muted)] mt-8">
          drag to rotate · hover a node
        </p>
      </div>
    </section>
  );
};

export default Hero;
