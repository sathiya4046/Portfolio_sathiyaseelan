import './index.css';
import React  from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]); 

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Nav
          toggleTheme ={toggleTheme}
      />
      <Home/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
