import { FaEnvelope } from 'react-icons/fa';
import { IoMdSquareOutline } from 'react-icons/io';
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';

import iconVariants from '../../framer-motion/iconVariants';
import { motion } from 'framer-motion';

const ContactRight = () => {
  return (
    <div className="flex flex-col items-center pt-15 px-5 justify-center gap-6 max-w-full overflow-hidden lg:pt-5">
      <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center"
        // className="rounded-2xl border-4 border-neutral-800 p-4 w-32 h-32 flex items-center justify-center"
      >
        <FaEnvelope className="text-7xl text-blue-500" />
        <div className=" absolute -z-10 flex justify-center items-center animate-pulse">
          <IoMdSquareOutline className="w-32 h-32 text-blue-500 blur-md animate-[spin_20s_linear_infinite]" />
        </div>
      </motion.div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactRight;
