import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-xl fixed-top" style={{backgroundColor:"#8D0B41"}} id="navbar">
          <div className="container">
            <a className="navbar-brand ms-5 text-uppercase fs-1 text-light" href="#home">Sathiyaseelan</a>
            <button className="navbar-toggler text-light border border-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav w-100 d-flex justify-content-end gap-3">
                <a className="nav-link me-lg-2 p-lg-3 text-light" aria-current="page" href="#home">Home</a>
                <a className="nav-link mx-lg-2 p-lg-3 text-light" href="#course">Experience</a>
                <a className="nav-link mx-lg-2 p-lg-3 text-light" href="#projects">Projects</a>
                <a className="nav-link mx-lg-2 p-lg-3 text-light" href="#education">Education</a>
                <a className="nav-link ms-lg-2 p-lg-3 text-light" href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Nav