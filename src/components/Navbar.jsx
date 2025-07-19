import { useState } from 'react';
import logo from '../assets/RP.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { LuHexagon } from 'react-icons/lu';
import { links } from '../constants';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[1300px] mx-auto  flex justify-between
        text-md items-center px-12 md:px-0 h-20"
      >
        <a href="#" className="flex items-center justify-center">
          <motion.img className="mx-2 h-20 w-20" src={logo} alt="logo" />
          <div className=" absolute -z-10 flex justify-center items-center animate-pulse">
            <LuHexagon className="w-20 h-20 text-purple-500 blur-md animate-[spin_20s_linear_infinite]" />
          </div>
        </a>
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer px-5">
          {links.map((link, i) => (
            <LinkItems key={i} link={link} onClick={closeNav} />
          ))}
        </ul>
        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>{' '}
        <div
          className={`${
            nav ? 'flex' : 'hidden'
          } fixed left-0 top-0 w-full min-h-screen z-40 flex-col items-center justify-center`}
        >
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

          <ul className="font-semibold text-2xl space-y-6 text-center">
            {links.map((link, i) => (
              <LinkItems key={i} link={link} onClick={closeNav} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const LinkItems = ({ link, onClick }) => {
  return (
    <li className="group">
      <Link
        className="cursor-pointer hover:text-purple-500 transition-all duration-500"
        to={link.section}
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        onClick={onClick}
      >
        {link.link}
        <div className="mx-auto bg-purple-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
      </Link>
    </li>
  );
};

export default Navbar;
