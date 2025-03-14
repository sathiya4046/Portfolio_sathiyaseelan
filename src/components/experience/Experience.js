import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <div className='container'>
      <div className="my-sm-4 p-4 d-flex flex-column" id="course">
          <h1 className='text-center my-sm-4 pt-5 course fw-bold'>Experience & Course</h1>
            <div className=" experience row row-cols-1 row-cols-md-3">
                <dl className="exp col-12 col-md-6 mt-3 p-md-4 mx-auto text-center p-4">
                  <dt className="p-md-2"><h5 className="fw-bold">Jaya info-soft Pvt ltd, Chennai</h5> </dt>
                  <dd className="p-md-2">Frontend Developer </dd>
                  <dd className="p-md-2"> Apr 2023 - Present </dd>
                  <hr/>
                  <dd>
                  <ul>
                      <li className="mb-2 text-start">Designing and developing responsive and visually appealing user interfaces for web applications using HTML, CSS, and JavaScript.  </li>
                      <li className="mb-2 text-start">Working closely with backend developers to integrate APIs, ensuring smooth data flow and functionality between frontend and backend systems. </li>
                      <li className="mb-2 text-start">Creating RESTful integrations and handling asynchronous requests using Axios or Fetch.</li>
                      <li className="mb-2 text-start"> Maintaining and updating websites by adding new features, improving performance, and fixing bugs.  </li>
                      <li className="mb-2 text-start">  Developing applications using modern JavaScript frameworks such as React </li>
                      <li className="mb-2 text-start"> Utilizing Git for version control and managing code in repositories such as GitHub </li>
                    </ul>
                  </dd>
                </dl>
                <dl className="exp col-12 col-md-5 mt-3 mx-auto p-md-4 text-center p-4">
                  <dt className="p-md-2"><h5 className="fw-bold">Full Stack Development Bootcamp - Udemy</h5></dt>
                  <dd className="p-md-2">Sep 2023 - Mar 2024</dd>
                  <hr/>
                  <dd>
                  <ul>
                    <li className="mb-2 text-start">Learn the fundamentals of creating and styling web pages.</li>
                    <li className="mb-2 text-start">Gain skills in scripting to add interactivity and dynamic content.</li>
                    <li className="mb-2 text-start">Learn React Framework for building modern, scalable front-end applications.</li>
                    <li className="mb-2 text-start">Understand server-side development using JavaScript with Node.js.</li>
                    <li className="mb-2 text-start">Learn how to build web applications and APIs using this popular Node.js framework.</li>
                    <li className="mb-2 text-start">Work with databases like MySql to manage data storage and retrieval.</li>
                    </ul>
                  </dd>
                </dl>
                </div>
            
        </div>
    </div>
  )
}

export default Experience