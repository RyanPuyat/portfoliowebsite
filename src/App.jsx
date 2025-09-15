import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './ui/HomeLayout';
import MainLayout from './ui/MainLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
import { Toaster } from 'react-hot-toast';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<HomeLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<Project />} />
              <Route path="blog" element={<Blogs />} />
              <Route path="blog/:slug" element={<Blog />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
