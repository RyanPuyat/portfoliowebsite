import aboutImg from '../assets/aboutImg.png';
import { ABOUT_TEXT } from '../constants';
// import { ABOUT_TEXT2 } from '../constants';
import { motion } from 'framer-motion';
import fadeIn from '../framer-motion/variants';

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="w-full lg:p-8"
        >
          <div className="flex justify-center">
            <div className="card-wrapper flex items-center justify-center w-[400px] h-400px] overflow-hidden rounded-full">
              <img
                className="w-[400px] h-[400px]  z-2 rounded-full"
                src={aboutImg}
                alt="aboutImg"
              />
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center text-center">
              <p className="my-2  py-6">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
