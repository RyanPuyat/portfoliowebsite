import { PROJECTS } from '../constants';
import fadeIn from '../framer-motion/variants';
import { motion } from 'framer-motion';

const Projects = () => {
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
      <div>
        {PROJECTS.map((project, i) => (
          <ProjectsItem key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectsItem = ({ project }) => {
  const { title, image, description, technologies } = project;
  return (
    <div id="projects" className="mb-8 flex flex-wrap lg:justify-center">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="w-full lg:w-1/4"
      >
        <img
          className="mb-6 rounded"
          src={image}
          width={150}
          height={150}
          alt={title}
        />
      </motion.div>
      <div className="w-full max-w-xl lg:w-3/4">
        <motion.h6
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="mb-2 font-semibold"
        >
          {title}
        </motion.h6>
        <motion.p
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="mb-4 text-neutral-400"
        >
          {description}
        </motion.p>
        {technologies.map((technology, i) => (
          <motion.span
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="mr-2 mt-4 text-sm font-medium text-neutral-800 rounded bg-purple-400 px-2 py-1
          "
            key={i}
          >
            {technology}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
