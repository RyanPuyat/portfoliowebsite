import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import fadeIn from '../framer-motion/variants';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, i) => (
          <ExpList key={i} experience={experience} />
        ))}
      </div>
    </div>
  );
};

const ExpList = ({ experience }) => {
  const { year, role, company, description, technologies } = experience;

  return (
    <div id="experience" className="mb-8 flex flex-wrap lg:justify-center">
      <div className="w-full lg:w-1/4">
        <motion.p
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="mb-2 text-sm text-neutral-400"
        >
          {year}
        </motion.p>
      </div>
      <div className="w-full max-w-xl lg:w-3/4">
        <motion.h6
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="mb-2 font-semibold"
        >
          {role} - <span className="text-sm text-purple-100">{company}</span>
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
            className="mr-2 mt-4 text-sm text-neutral-800 rounded bg-purple-400 px-2 py-1 inline-block
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

export default Experience;
