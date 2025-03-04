import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Project from './components/Project';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { HERO_CONTENT } from './constants';

const App = () => {
  return (
    <div className="overflow-x-hidden overflow-y-auto text-neutral-300 antialiased selection:bg-purple-300 selection:text-gray-900">
      <div className="fixed top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero>{HERO_CONTENT}</Hero>
        <About />
        <Technologies />
        <Project />
        <Experience />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
