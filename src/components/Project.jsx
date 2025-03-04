import { PROJECTS } from '../constants';
import { FaGithub } from 'react-icons/fa';
import fadeIn from '../framer-motion/variants';
import { motion } from 'framer-motion';
import ToolTip from './tooltip/Tooltip';

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div
        id="projects"
        className="flex flex-col justify-center lg:flex-row lg:flex-wrap lg:items-start lg:gap-6"
      >
        {PROJECTS.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectItem = ({ project }) => {
  const { title, image, website, description, technologies } = project;
  return (
    <div className="mb-8 lg:justify-center">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="group relative overflow-hidden border-4 border-neutral-300 rounded-2xl"
      >
        <div className="group-hover:bg-blue-950/80 w-full h-full absolute z-40 transition-all duration-300"></div>
        <img
          className="group-hover:scale-200 transition-all duration-500 mb-6 rounded-t-lg mx-auto w-full h-full"
          src={image}
          alt={title}
          // width={600}
          // height={600}
        />
        <p className="absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-400 z-50 font-semibold">
          <span className="text-white my-5 block">{description}</span>
        </p>
        <h6 className="absolute -bottom-full left-12 group-hover:bottom-34 transition-all duration-300 z-50 font-semibold">
          <span className="text-white text-2xl my-5 block">{title}</span>
        </h6>
        <p className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 font-semibold">
          <a href={website} target="_blank">
            <span className="text-white my-5 block">Visit {title}</span>{' '}
          </a>
        </p>

        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 font-semibold">
          <span className="text-white border-white my-2 inline-block">
            <ToolTip tooltip="Github">
              <a href="https://github.com/" target="_blank">
                <FaGithub size={40} />
              </a>
            </ToolTip>
          </span>
        </div>

        {technologies.map((technology, i) => (
          <span
            className="ml-2 mb-4 text-sm font-medium text-neutral-800 rounded bg-purple-400 px-2 py-1 inline-block"
            key={i}
          >
            {technology}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
export default Project;
