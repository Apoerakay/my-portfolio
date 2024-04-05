import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './components/about/about.js';
import Home from './pages/homePage.js';
import Achievement from './components/achievement/achievement.js';
import Contact from './components/contact/contact.js';
import Experience from './pages/experiencePage.js' ;
import Posts from './components/posts/posts.js';
import Projects from './components/project/project.js';
import Skills from './components/skills/skills.js';
import Admin from './pages/admin.js';
import './index.css'
import Singlepost from './components/singlepost/singlepost.js';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/achievement' element={<Achievement />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          {/* <Route path='/posts' element={<Posts />} /> */}
          <Route path='/project' element={<Projects />} />
          {/* <Route path='/skills' element={<Skills />} /> */}
          <Route path='/admin' element={<Admin />} />
          <Route path='/singlepost' element={<Singlepost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
