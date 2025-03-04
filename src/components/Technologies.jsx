import { RiReactjsLine } from 'react-icons/ri';
import { RiJavascriptFill } from 'react-icons/ri';
import { RiCss3Fill } from 'react-icons/ri';
import { SiMongodb, SiPostgresql } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiPhotoshop } from 'react-icons/di';
import { motion } from 'framer-motion';
import iconVariants from '../framer-motion/iconVariants';
import fadeIn from '../framer-motion/variants';
import ToolTip from './tooltip/Tooltip';

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <ToolTip tooltip="React">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-700" />
          </motion.div>
        </ToolTip>
        <ToolTip tooltip="Javascript">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiJavascriptFill className="text-7xl text-yellow-300" />
          </motion.div>
        </ToolTip>
        <ToolTip tooltip="CSS">
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiCss3Fill className="text-7xl text-cyan-400" />
          </motion.div>
        </ToolTip>
        <ToolTip tooltip="Mongodb">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
        </ToolTip>
        <ToolTip tooltip="PostgresSQL">
          <motion.div
            variants={iconVariants(6.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPostgresql className="text-7xl text-blue-500" />
          </motion.div>
        </ToolTip>
        <ToolTip tooltip="NodeJs">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl text-green-700" />
          </motion.div>
        </ToolTip>
        <ToolTip tooltip="Photoshop">
          <motion.div
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiPhotoshop className="text-7xl text-blue-600" />
          </motion.div>
        </ToolTip>
      </motion.div>
    </div>
  );
};

export default Technologies;
