import './index.css';
import React  from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div>
      <Nav/>
      <Home/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
