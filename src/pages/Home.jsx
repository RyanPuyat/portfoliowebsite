import AboutPreview from '../ui/AboutPreview';
import FeaturedProjects from '../features/projects/FeaturedProjects';
import BlogPreview from '../features/blogs/BlogPreview';

function Home() {
  return (
    <>
      <FeaturedProjects />
      <AboutPreview />
      <BlogPreview />
    </>
  );
}

export default Home;
