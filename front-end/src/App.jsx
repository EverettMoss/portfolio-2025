import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Experience from './components/Experience'
import About from './components/About'
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {

  return (
    <>
      <div className="relative">
        <NavBar />
        <div className="px-6 pt-30 md:container md:mx-auto">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

          <footer className="mt-16 pb-8 border-t border-black/10 pt-6 flex flex-wrap gap-4 text-sm text-black/50">
            <a href="mailto:everettmoss.cs@gmail.com" className="hover:text-black transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/everettmoss/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="https://github.com/EverettMoss" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          </footer>

        </div>
      </div>
    </>
  );
};


export default App