import { HERO_CONTENT } from '../constants';
// import profilePic from '../assets/hero.png';
import fadeIn from '../framer-motion/variants';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';

<index className="css"></index>;
const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-30 mt-40 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="pb-10 text-5xl font-light tracking-tight lg:mt-16 lg:text-8xl"
            >
              Hi I&apos;m Ryan Puyat
            </motion.h1>
            <motion.span
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="bg-gradient-to-r from-purple-300 via-slate-400 to-blue-500 bg-clip-text text-5xl lg:text-7xl mb-4 pb-5 tracking-tight text-transparent"
            >
              I am a
              <TypeAnimation
                sequence={[' Developer', 2000, ' Designer', 2000]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
              />
            </motion.span>
            <motion.span
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="font-light tracking-tighter text-2xl lg:text-6xl mt-5"
            >
              {HERO_CONTENT}
            </motion.span>

            <ScrollLink to="contact" smooth={true} duration={500}>
              <motion.div
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className="gradient-border mt-14 lg:mt-18 p-5"
              >
                <button className="bg-gradient-to-r from-[#3e1f90] to-[#2c1468] hover:from-[#2c1468] hover:to-[#3e1f90] text-white font-bold py-2 px-4 rounded-2xl transition-colors duration-300 border-0 shadow-neutral-700 glow-effect">
                  {' '}
                  Let&apos;s Talk
                </button>
              </motion.div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
