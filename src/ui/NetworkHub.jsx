import { useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../features/projects/useProjects';
import useBlogs from '../features/blogs/useBlogs';
import Spinner from './Spinner';
import OctagonFrame from './OctagonFrame';
import toast from 'react-hot-toast';
import { useGraphContext } from '../context/GraphContext';

// Same reserved-count as Hero.jsx (`featured.slice(0, 3)`) so hovering a
// project node here highlights the matching node in the hero's 3D graph.
const FEATURED_COUNT = 3;
const POST_COUNT = 2;

export default function NetworkHub() {
  const {
    allProjects,
    isFetching: fetchingProjects,
    error: projectsError,
  } = useProjects();
  const { posts, isFetching: fetchingPosts, error: postsError } = useBlogs();
  const { setActiveIndex } = useGraphContext();

  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const nodeRefs = useRef([]);
  const rafRef = useRef(null);

  const featuredProjects = useMemo(
    () =>
      (allProjects || []).filter((p) => p.featured).slice(0, FEATURED_COUNT),
    [allProjects],
  );
  const latestPosts = useMemo(
    () =>
      (posts || [])
        .slice()
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, POST_COUNT),
    [posts],
  );

  // Project nodes come first so their index lines up with Hero's reserved
  // graph-node indices (0, 1, ...).
  const nodes = useMemo(() => {
    const projectNodes = featuredProjects.map((p) => ({
      type: 'project',
      key: `project-${p.id}`,
      title: p.title,
      tags: p.category,
      image: p.image,
      to: `/projects/${p.id}`,
    }));
    const postNodes = latestPosts.map((p) => ({
      type: 'blog',
      key: `blog-${p.slug}`,
      title: p.title,
      tags: new Date(p.date).toLocaleDateString(),
      image: p.image,
      to: `/blog/${p.slug}`,
    }));
    return [...projectNodes, ...postNodes];
  }, [featuredProjects, latestPosts]);

  useEffect(() => {
    if (!nodes.length) return;

    function layout() {
      const container = containerRef.current;
      const svg = svgRef.current;
      if (!container || !svg) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.4;

      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.innerHTML = '';

      nodes.forEach((_, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        const el = nodeRefs.current[i];
        if (el) {
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        }

        const path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path',
        );
        path.setAttribute('d', `M ${cx} ${cy} L ${x} ${y}`);
        path.setAttribute('id', `hub-wire-${i}`);
        path.setAttribute('stroke', 'rgba(74,222,128,0.35)');
        path.setAttribute('stroke-width', '1.5');
        path.setAttribute('fill', 'none');
        svg.appendChild(path);

        const pulse = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'circle',
        );
        pulse.setAttribute('r', '3');
        pulse.setAttribute('fill', '#FFB454');
        pulse.setAttribute('id', `hub-pulse-${i}`);
        svg.appendChild(pulse);
      });
    }

    layout();
    window.addEventListener('resize', layout);

    function animate() {
      const t = performance.now() / 1000;
      nodes.forEach((_, i) => {
        const path = document.getElementById(`hub-wire-${i}`);
        const pulse = document.getElementById(`hub-pulse-${i}`);
        if (!path || !pulse) return;
        const len = path.getTotalLength();
        const offset = (t * 0.18 + i * 0.37) % 1;
        const pt = path.getPointAtLength(offset * len);
        pulse.setAttribute('cx', pt.x);
        pulse.setAttribute('cy', pt.y);
      });
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', layout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [nodes]);

  if (fetchingProjects || fetchingPosts) return <Spinner />;
  if (projectsError || postsError) {
    toast.error('Error loading network data');
    return null;
  }

  return (
    <section className="relative">
      <div className="text-center mb-6">
        <div className="font-mono text-xs text-[var(--sig-green)] mb-2">
          // SYSTEM MAP
        </div>
        <h2 className="font-display text-2xl text-[var(--sig-text)]">
          About me, and what connects to it
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto overflow-hidden"
        style={{ width: '100%', maxWidth: 1000, height: 700 }}
      >
        <div className="absolute inset-0 hub-bg-grid pointer-events-none" />
        <div className="absolute inset-0 hub-radial-glow pointer-events-none" />
        {['min(280px, 55vw)', 'min(460px, 80vw)', 'min(640px, 100vw)'].map(
          (size, i) => (
            <div
              key={size}
              className="radar-ring pointer-events-none"
              style={{
                width: size,
                height: size,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ),
        )}

        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        />

        {/* hub */}
        <div
          className="absolute text-center"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: 200,
          }}
        >
          <OctagonFrame
            size={176}
            accent="#FFB454"
            dim="rgba(255,180,84,0.35)"
            className="mx-auto mb-3"
          >
            <img
              src="/profileImg.jpg"
              alt="Ryan"
              className="w-full h-full object-cover object-top"
            />
          </OctagonFrame>
          <div className="font-display text-base text-[var(--sig-amber)]">
            Ryan
          </div>
          <div className="font-mono text-[11px] text-[var(--sig-muted)]">
            Full-stack Developer
          </div>
        </div>

        {/* satellite nodes */}
        {nodes.map((node, i) => (
          <Link
            key={node.key}
            to={node.to}
            ref={(el) => (nodeRefs.current[i] = el)}
            className="absolute text-center w-40 group"
            style={{ transform: 'translate(-50%,-50%)' }}
            onMouseEnter={() => node.type === 'project' && setActiveIndex(i)}
            onMouseLeave={() => node.type === 'project' && setActiveIndex(null)}
          >
            <OctagonFrame
              size={96}
              className="mx-auto mb-2 transition-transform duration-200 group-hover:scale-105 mt-12"
            >
              {node.image ? (
                <img
                  src={node.image}
                  alt={node.title}
                  className="w-full h-full object-cover opacity-90"
                />
              ) : (
                <div className="w-full h-full bg-[var(--sig-bg)] flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[var(--sig-green)] px-2">
                    {node.type === 'project' ? 'PROJECT' : 'BLOG'}
                  </span>
                </div>
              )}
            </OctagonFrame>
            <div className="font-mono text-[9px] tracking-widest text-[var(--sig-muted)] mb-1">
              {node.type === 'project' ? 'PROJECT' : 'BLOG'}
            </div>
            <div className="font-display text-sm text-[var(--sig-text)] truncate">
              {node.title}
            </div>
            <div className="font-mono text-[10px] text-[var(--sig-muted)]">
              {node.tags}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
