import React from 'react';
import './projects.css';
import ecom from './images/ecom.png'
import chat from './images/chat.png'
import netflix from './images/netflix.png'
import notes from './images/notes thumbnail.png'
import xClone from './images/x-clone.png'

function Projects() {

  return (
    <div className='container' id='projects'>
    <div className="m-md-3 p-md-3">
      <h1 className='text-center mb-4 py-2 fw-bold'>Personal Projects</h1>
      <div className='cards row m-3 gap-3'>
      <div className='col-12 col-lg-5 mx-auto cards-item'>
                <img src={xClone} alt="Sathiya"/>
                <div class='info'>
                  <h1 class='name'>Twitter Clone</h1>
                  <b class='role'>Reactjs,Material UI, Bootstrap, Nodejs, Expressjs, MongoDB, JWT, TanStack Query</b>
                </div>
                <div className="para">
                <ul class="gap-4">
                  <li class="mb-2 text-start">Developed a MERN complete full stack social media website, user can do crud operation with the help of tanstack</li>
                  <li class="mb-2 text-start">Dynamic and responsive user interfaces using React.js, Material UI and Bootstrap ensuring compatibility across various devices and screen sizes.</li>
                  <li class="mb-2 text-start">Managed application state using React’s built-in state management and hooks for efficient data handling and component updates.</li>
                  <li class="mb-2 text-start">Enabled user login with authentication checks and session management.</li>
                </ul>
                </div>
                <a href="https://x-clone-dnl2.onrender.com/" class="btn w-100">View</a>  
            </div>
            <div className='col-12 col-lg-5 mx-auto cards-item'>
                <img src={notes} alt="Sathiya"/>
                <div className='info'>
                  <h1 className='name'>Notes App</h1>
                  <b className='role'>Reactjs, Bootstrap, Nodejs, Expressjs, MySql, MongoDB, JWT</b>
                </div>
                <div className="para">
                  <ul className="gap-4">
                    <li className="mb-2 text-start">Facilitated user registration with input validation and secure data handling.</li>
                    <li className="mb-2 text-start">Enabled user login with authentication checks and session management.</li>
                    <li className="mb-2 text-start">Enabled users to create, read, update, and delete notes with a responsive and intuitive interface.</li>
                    <li className="mb-2 text-start">Designed and implemented a MySQL database schema for efficient storage and retrieval of user notes.</li>
                    <li className="mb-2 text-start">Implemented secure user registration and login functionality using JWT for authentication and session management.</li>
                    <li className="mb-2 text-start">Developed RESTful APIs to handle data operations between the frontend and backend efficiently.</li>
                  </ul>
                </div>
                    <a href="https://notes-mern-hlxh.onrender.com/" className="btn w-100">View</a>   
            </div>
            <div className='col-12 col-lg-5 mx-auto cards-item'>
                <img src={netflix} alt="Sathiya"/>
                <div className='info'>
                  <h1 className='name'>Netflix-Clone</h1>
                  <b className='role'>Reactjs,Bootstrap,Css</b>
                </div>
                <div className="para">
                <ul className="gap-4">
                  <li className="mb-2 text-start">Built the entire user interface using React.js, focusing on dynamic rendering</li>
                  <li className="mb-2 text-start">Designed a responsive UI using CSS and media queries, ensuring a seamless experience across mobile, tablet, and desktop devices.</li>
                  <li className="mb-2 text-start">Focused on optimizing user experience with smooth transitions, animations, and loading optimizations.</li>
                  <li className="mb-2 text-start">Later i will update on the backend process</li>
                </ul>
                </div>
                <a href="https://netflix-clone-eight-nu-57.vercel.app/" className="btn w-100">View</a>
            </div>
            <div className='col-12 col-lg-5 mx-auto cards-item'>
                <img src={chat} alt="Sathiya"/>
                <div className='info'>
                  <h1 className='name'>Chat_app</h1>
                  <b className='role'>Reactjs, Bootstrap, Nodejs, Expressjs, MongoDB,Socket.io, JWT</b>
                </div>
                <div className="para">
                <ul className="gap-4">
                  <li className="mb-2 text-start">Implemented secure user registration and login functionality using JWT for authentication and session management. </li>
                  <li className="mb-2 text-start">Enabled users to create chat with participants and intuitive interface.</li>
                  <li className="mb-2 text-start">Designed and implemented a MySQL database schema for efficient storage and retrieval of user notes.</li>
                  <li className="mb-2 text-start">Using a socket.io for real time chat application</li>
                  <li className="mb-2 text-start">Developed RESTful APIs to handle data operations between the frontend and backend efficiently.</li>
                </ul>
                </div>
                <a href="https://chat-app-1vjm.onrender.com" className="btn w-100">View</a>
            </div>
            <div className='col-12 col-lg-5 mx-auto cards-item'>
                <img src={ecom} alt="Sathiya"/>
                <div className='info'>
                  <h1 className='name'>E-commerce</h1>
                  <b className='role'>Reactjs,Bootstrap,Css</b>
                </div>
                <div className="para">
                <ul className="gap-4">
                  <li className="mb-2 text-start">Designed and implemented dynamic and responsive user interfaces using React.js and Bootstrap, ensuring compatibility across various devices and screen sizes.</li>
                  <li className="mb-2 text-start">Managed application state using React’s built-in state management and hooks for efficient data handling and component updates.</li>
                  <li className="mb-2 text-start">Enabled user login with authentication checks and session management.</li>
                </ul>
                </div>
                <a href="https://e-commerce-fgki.onrender.com/" className="btn w-100">View</a>
            </div>
      </div>
    </div>
  </div>
  );
}

export default Projects;
