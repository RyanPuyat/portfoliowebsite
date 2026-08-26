import ProjectCard from '../../ui/ProjectCard';
import { useProjects } from '../projects/useProjects';
import toast from 'react-hot-toast';
import Spinner from '../../ui/Spinner';

function FeaturedProjects() {
  const { allProjects, isFetching, error } = useProjects();
  const count = 2;

  if (error) { toast.error('Error Loading Projects'); return null; }

  const featured = allProjects?.filter((p) => p.featured)?.slice(0, count);
  if (featured?.length === 0) return null;

  return (
    <section>
      <h2 className="font-mono text-sm text-[var(--sig-amber)] mb-6">[ FEATURED PROJECTS ]</h2>
      <div className="relative">
        {isFetching ? (
          <div className="absolute inset-0 flex justify-center items-center"><Spinner /></div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 z-10">
            {featured.map((project) => <ProjectCard key={project.id} projects={project} />)}
          </div>
        )}
      </div>
    </section>
  );
}
export default FeaturedProjects;
