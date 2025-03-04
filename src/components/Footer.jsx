// import logo from '../assets/RP.png';
import { Link } from 'react-scroll';
import { links } from '../constants';
import { filterLinks } from '../constants';

// const links = [
//   { link: 'About Me', section: 'about' },
//   { link: 'Skills', section: 'skills' },
//   { link: 'Experience', section: 'experience' },
//   { link: 'Projects', section: 'projects' },
//   { link: 'Contact', section: 'contact' },
// ];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-neutral-900 mt-24"></div>
      <div className="md:flex sm:hidden justify-center mt-4 ">
        {/* <p className="hidden md:flex text-2xl py-4">Ryan Puyat</p> */}
        {/* <img className="hidden md:flex py-4 w-20 h-25" src={logo} alt="logo" /> */}
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer py-4 ">
          {filterLinks(links, true).map((link, i) => (
            <FooterItem key={i} link={link} />
          ))}
        </ul>
      </div>
      <p className="text-center md:text-text-center max-w-full mx-auto  mt-2 mb-12 text-sm ">
        &copy;{currentYear} All Rights Reserved.
      </p>
    </div>
  );
};

const FooterItem = ({ link }) => {
  return (
    <li className="group">
      <Link
        className="cursor-pointer hover:text-purple-500 transition-all duration-500"
        to={link.section}
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
      >
        {link.link}
      </Link>
      <div className="mx-auto bg-purple-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
    </li>
  );
};

export default Footer;
