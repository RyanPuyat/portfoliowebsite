import { Link } from 'react-router-dom';

function ProjectCard({ projects }) {
  return (
    <Link
      className="block h-full transition-colors"
      to={`/projects/${projects.id}`}
    >
      <div className="h-full bg-[var(--ide-sidebar)] border border-[var(--ide-line)] overflow-hidden hover:border-[var(--ide-type)] transition-colors">
        <img
          src={projects.image}
          alt={projects.title}
          className="w-full h-40 object-cover opacity-90"
        />
        <div className="p-5 font-jbmono">
          <div className="text-xs text-[var(--ide-muted)] mb-2">
            ~/projects/{projects.id}
          </div>
          <h3 className="text-lg text-[var(--ide-type)] mb-2 truncate">
            {projects.title}
          </h3>
          <p className="text-sm text-[var(--ide-muted)] mb-3 line-clamp-1 font-sans">
            {projects.description}
          </p>
          <span className="text-[var(--ide-accent)] text-sm">// open →</span>

          <div className="flex justify-between items-center text-xs text-[var(--ide-muted)] mt-3 pt-3 border-t border-[var(--ide-line)]">
            <span>{projects.category}</span>
            <span>{new Date(projects.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
