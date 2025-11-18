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
          
        </div>
      </div>
    </>
  );
};


export default App