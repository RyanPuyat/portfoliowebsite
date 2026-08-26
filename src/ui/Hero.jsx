import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import NetworkGraph from './NetworkGraph';

const Hero = ({ name = 'Ryan', role = 'Full-stack Engineer' }) => {
  return (
    <section className="relative min-h-[86vh] flex flex-col justify-center px-6 sm:px-12 overflow-hidden border-b border-[var(--sig-line)]">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 26], fov: 55 }}>
          <NetworkGraph />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[1300px] w-full mx-auto">
        <div className="font-mono text-xs text-[var(--sig-green)] tracking-widest mb-5">
          <span className="text-[var(--sig-muted)]">{'>'}</span> {role.toUpperCase()}
        </div>

        <h1 className="font-display font-semibold text-[clamp(40px,6vw,76px)] leading-[1.05] mb-6 max-w-3xl">
          Mapping ideas into<br />
          <span className="text-[var(--sig-green)]">working systems.</span>
        </h1>

        <p className="font-mono text-sm text-[var(--sig-muted)] max-w-md leading-relaxed mb-10">
          I'm {name} — I design and build products end to end, tracing every
          connection from schema to pixel until the whole thing holds together.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="font-mono text-xs px-6 py-3 border border-[var(--sig-green-dim)] bg-[var(--sig-panel)] backdrop-blur text-[var(--sig-green)] hover:border-[var(--sig-green)] transition-colors"
          >
            [ VIEW PROJECTS ]
          </Link>
          <Link
            to="/contact"
            className="font-mono text-xs px-6 py-3 border border-[var(--sig-line)] bg-[var(--sig-panel)] backdrop-blur text-[var(--sig-text)] hover:border-[var(--sig-green)] hover:text-[var(--sig-green)] transition-colors"
          >
            [ CONTACT ]
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
