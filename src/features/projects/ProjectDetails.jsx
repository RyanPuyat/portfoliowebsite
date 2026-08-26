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
    <div className="bg-[var(--ide-sidebar)] border border-[var(--ide-line)] px-6 sm:px-10 py-14">
      <Link
        to="/projects"
        className="font-jbmono flex items-center gap-2 text-sm text-[var(--ide-muted)] hover:text-[var(--ide-accent)] mb-8 transition-colors"
      >
        <FaArrowLeft />
        back to projects
      </Link>

      <div className="text-xs font-jbmono text-[var(--ide-muted)] mb-6">
        ~/projects/{id}
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image || '/images/no-images.png'}
            alt={project.title || 'Untitled'}
            className="border border-[var(--ide-line)] opacity-90"
          />
        </div>

        <div>
          <h1 className="font-jbmono text-2xl text-[var(--ide-type)] mb-3">
            {project.title}
          </h1>
          <p className="font-jbmono text-xs text-[var(--ide-muted)] mb-6">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>

          <p className="text-[var(--ide-text)] leading-relaxed mb-8">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#2A2D2E] border border-[var(--ide-line)] text-[var(--ide-type)] px-5 py-2.5 font-jbmono text-sm hover:border-[var(--ide-type)] transition-colors"
          >
            ▶ Run — View live site
          </a>
        </div>
      </div>
    </div>
  );
}
