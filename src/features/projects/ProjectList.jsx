import { useProjects } from '../../features/projects/useProjects';
import Spinner from '../../ui/Spinner';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '../../ui/ProjectCard';
import Pagination from '../../ui/Pagination';
import Filter from '../../ui/Filter';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Project() {
  const {
    projects,
    totalPages,
    categories,
    selectedCategory,
    isFetching,
    error,
  } = useProjects();
  const navigate = useNavigate();

  if (isFetching) return <Spinner />;
  if (error) {
    toast.error(error);
    return null;
  }

  const handleCategorySelect = (category) => {
    navigate(`?category=${category}`);
  };

  return (
    <section>
      <h2 className="text-4xl text-white mb-8">Projects</h2>

      <Filter
        categories={categories}
        selected={selectedCategory}
        onSelect={handleCategorySelect}
      />
      <AnimatePresence mode="wait">
        <motion.div className="grid gap-6 sm:grid-cols-2 items-stretch">
          {projects?.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard projects={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination totalPages={totalPages} />
    </section>
  );
}

export default Project;
