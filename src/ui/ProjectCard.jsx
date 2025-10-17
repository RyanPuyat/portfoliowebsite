import { Link } from 'react-router-dom';

function ProjectCard({ projects }) {
  return (
    <Link
      className="block transform transition duration-300 hover:scale-[1.02]"
      to={`/projects/${projects.id}`}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/30  h-full overflow-hidden shadow-sm transition hover:shadow-md">
        <img
          src={projects.image}
          alt={projects.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-5">
          <h3 className="text-3xl font-semibold text-purple-500 mb-1">
            {' '}
            {projects.title}
          </h3>
          <p className="text-sm text-gray-300 mb-2 line-clamp-1">
            {projects.description}
          </p>
          <span className="text-purple-400 hover:underline text-sm">
            Read more
          </span>

          <div className="flex justify-between items-center-text-sm text-gray-400">
            <span>{projects.category}</span>
            <span>{new Date(projects.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
