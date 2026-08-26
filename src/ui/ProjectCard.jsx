import { Link } from 'react-router-dom';

function ProjectCard({ projects }) {
  return (
    <Link className="block h-full" to={`/projects/${projects.id}`}>
      <div className="h-full bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-line)] overflow-hidden hover:border-[var(--sig-green-dim)] transition-colors">
        <img
          src={projects.image}
          alt={projects.title}
          className="w-full h-40 object-cover opacity-90"
        />
        <div className="p-5">
          <div className="w-2 h-2 rounded-full bg-[var(--sig-amber)] shadow-[0_0_8px_var(--sig-amber)] mb-3" />
          <h3 className="font-display text-lg text-[var(--sig-text)] mb-2 truncate">
            {projects.title}
          </h3>
          <p className="text-sm text-[var(--sig-muted)] mb-3 line-clamp-1">
            {projects.description}
          </p>
          <span className="font-mono text-xs text-[var(--sig-green)]">
            [ VIEW ]
          </span>
          <div className="flex justify-between items-center font-mono text-[11px] text-[var(--sig-muted)] mt-3 pt-3 border-t border-[var(--sig-line)]">
            <span>{projects.category}</span>
            <span>{new Date(projects.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
