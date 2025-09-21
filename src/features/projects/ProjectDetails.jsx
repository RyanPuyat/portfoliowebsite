import { Link, useParams } from 'react-router-dom';
import { useProjectDetails } from './useProjectDetails';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Spinner from '../../ui/Spinner';
import toast from 'react-hot-toast';

export default function ProjectDetails() {
  const { id } = useParams();
  const { project, isFetching, error } = useProjectDetails(id);
  // console.log(project);

  if (error) {
    toast.error(error);
    return null;
  }

  if (isFetching) return <Spinner />;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-purple-500 hover:text-purple-700 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" />
        Back to projects
      </Link>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image || '/images/no-images.png'}
            alt={project.title || 'Untitled'}
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-purple-500 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>

          <p className="text-gray-200 mb-6">{project.description}</p>

          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded transition mb-6"
          >
            View Live Site{' '}
          </a>

          <Link
            to="/blog"
            className="flex items-center text-purple-500 hover:text-purple-700 mb-6 transition"
          >
            Go to blog
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
