// import project1 from '../assets/projects/project-1.jpg';
// import project2 from '../assets/projects/project-2.jpg';
// import project3 from '../assets/projects/project-3.jpg';
// import project4 from '../assets/projects/calorietracker.jpg';

export const links = [
  { link: 'About Me', section: 'about' },
  { link: 'Skills', section: 'skills' },
  // { link: 'Experience', section: 'experience' },
  { link: 'Projects', section: 'projects' },
  { link: 'Contact', section: 'contact' },
];
export const filterLinks = (links, hideContact) => {
  return hideContact ? links.filter((link) => link.link !== 'Contact') : links;
};

export const HERO_CONTENT = `Welcome to my digital playground.`;

export const ABOUT_TEXT = `I'm a dynamic Full Stack web developer with a bachelor's degree in computer science, skilled in Node.js, JavaScript, React, and MongoDB, which allows me to create robust and scalable web applications. With a strong background in graphic design and proficiency in Photoshop, I aim to deliver solutions that exceed expectations by integrating design artistry with programming science.`;

// export const EXPERIENCES = [
//   {
//     year: '2018 - 2025',
//     role: 'Full Stack Developer',
//     company: 'Soomin Corp. -South Korea',
//     description: `Played a key role in a team responsible for developing and maintaining web applications utilizing JavaScript, React.js, and Node.js.Implemented RESTful APIs and integrated MongoDB databases successfully. Contributed to defining project requirements and establishing timelines with the team.`,
//     technologies: ['Javascript', 'React.js', 'mongoDB'],
//   },
//   {
//     year: '2016 - 2018',
//     role: 'Frontend Developer',
//     company: 'AnysealTech Corp.-South Korea',
//     description: `Contributed significantly to the front-end development team by leveraging expertise in HTML, CSS, JavaScript, and Photoshop to create visually appealing and responsive user interfaces. Assisted in translating design mockups into interactive web pages and ensured cross-browser compatibility and optimized performance.`,
//     technologies: ['HTML', 'CSS', 'Javascript', 'Photoshop'],
//   },
//   {
//     year: '2012- 2015',
//     role: 'IT Technician',
//     company: 'Producers Savings Bank Corporation -Philippines',
//     description: `As an IT Technician, I maintain the organization's technology infrastructure, ensuring that computer systems, networks, and other technology assets function smoothly and efficiently. My role involves installing, configuring, and troubleshooting hardware and software and providing technical support to staff members.`,
//     technologies: [
//       'Hardware Knowledge',
//       'Operating Systems',
//       'Network Management',
//       'Software Installation and Configuration',
//       'Troubleshooting',
//     ],
//   },
//   {
//     year: '2009 - 2011',
//     role: 'Graphic Artist',
//     company: 'RL Vercons Merchant Corp. -Philippines',
//     description: `As a Graphic Artist, I specialized in creating promotional materials and various graphics for companies. Using Photoshop and CorelDRAW, I designed visually appealing content that enhanced brand identity and engaged audiences. My work included marketing collateral, digital illustrations, and social media graphics.`,
//     technologies: ['Corel Draw', 'Photoshop'],
//   },
// ];

export const PROJECTS = [
  {
    title: 'EPS-Project',
    image:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1741079044/epsmockup_gde9ei.jpg',
    website: 'https://epscorner.onrender.com/index.html',
    description:
      'This is a fully functional Mock Examination website featuring practice exercises, designed to assist individuals aiming to work under the Employment Permit System (EPS) in South Korea.',
    technologies: ['HTML', 'CSS', 'JavasCript', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Barneys Burger',
    image:
      'https://res.cloudinary.com/dyozmymsf/image/upload/barneys_k544g5.png',
    website: 'https://barneysburger.vercel.app/',
    description:
      'A straightforward website where customers can browse and order burgers.',
    technologies: ['HTML', 'CSS', 'React', 'Express'],
  },
  // {
  //   title: 'StudentMasterfiles',
  //   image:
  //     'https://res.cloudinary.com/dyozmymsf/image/upload/v1741078353/stdmaster_nzk6eg.jpg',
  //   website: 'https://studentmasterfiles.vercel.app/',
  //   description:
  //     'Student Masterfiles is a simple student management system built with PostgreSQL as its database backbone. This project allows for efficient CRUD (Create, Read, Update, Delete) operations on student records',
  //   technologies: ['HTML', 'CSS', 'React', 'Postgres'],
  // },
  {
    title: 'Portfolio Website',
    image:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1738472612/portfolio-mockup_yug4mr.jpg',
    website: '#',
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'React', 'TailwindCss'],
  },
  {
    title: 'Calorie Tracker',
    image:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1738464486/calorie-mockup_rya1hk.jpg',
    website: 'https://dietdash.netlify.app/',
    description:
      'Calorie Tracker helps manage your daily calories. Set a limit, log meals and exercises, and see your intake and expenditure.',
    technologies: ['HTML', 'Javascript', 'BootstrapCss'],
  },
];

export const CONTACT = {
  address: 'Gyeonggido-Siheung-Si South Korea',

  // phoneNo: '(+82)10-5801-3734 ',

  email: 'ryanpeefreelancer@gmail.com',
};
