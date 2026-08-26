import { Link, useParams } from 'react-router-dom';
import { useProjectDetails } from './useProjectDetails';
import { FaArrowLeft } from 'react-icons/fa';
import Spinner from '../../ui/Spinner';
import toast from 'react-hot-toast';

export default function ProjectDetails() {
  const { id } = useParams();
  const { project, isFetching, error } = useProjectDetails(id);

  if (error) {
    toast.error(error);
    return null;
  }
  if (isFetching) return <Spinner />;

  return (
    <div className="bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-line)] px-6 sm:px-10 py-14">
      <Link to="/projects" className="font-mono flex items-center gap-2 text-sm text-[var(--sig-muted)] hover:text-[var(--sig-green)] mb-8 transition-colors">
        <FaArrowLeft /> back to projects
      </Link>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image || '/images/no-images.png'}
            alt={project.title || 'Untitled'}
            className="border border-[var(--sig-line)] opacity-90"
          />
        </div>
        <div>
          <h1 className="font-display text-2xl text-[var(--sig-green)] mb-3">
            {project.title}
          </h1>
          <p className="font-mono text-xs text-[var(--sig-muted)] mb-6">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>
          <p className="text-[var(--sig-text)] leading-relaxed mb-8">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--sig-panel)] border border-[var(--sig-line)] text-[var(--sig-green)] px-5 py-2.5 font-mono text-sm hover:border-[var(--sig-green)] transition-colors"
          >
            [ VIEW LIVE SITE ]
          </a>
        </div>
      </div>
    </div>
  );
}
