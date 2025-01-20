import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <footer className="text-center text-lg-start text-light mt-5 pt-2" style={{backgroundColor:"#8D0B41"}}>
        <div className="container my-5 py-4" id="contact">
          <div className='row m-auto'>
            <h1 className='text-start text-md-center mb-3 py-md-4 contact fw-bold'>Contact</h1>
            <div className='col-md-7 text-md-center'>
              <div className='text-start text-md-center my-md-3 py-md-3'>
                <h4 className='py-2 mt-md-4'>Location</h4>
                <address>
                  No.11, Sanmuga nagar,
                  Nanjikottai,
                  Thanjavur
                </address>
                <h4 className='py-2'>Phone Number</h4>
                <p>+919003981071</p>
                <h4 className='py-2'>Email</h4>
                <a className="text-light" href="mailto:sathiya.4046@gmail.com"><p>sathiya.4046@gmail.com</p></a>
              </div>
            </div>
            <div className='col w-100 d-flex align-items-center'>
              <form className='text-start text-md-center d-flex flex-column w-100'>
                <h3 className="text-center">Send Us a Message</h3>
                <input 
                  className='mt-3 p-2 input' 
                  type="text" 
                  placeholder='Full Name' 
                  name='username'
                />
                <input 
                  className='mt-3 p-2 input' 
                  type="email" 
                  placeholder='Email'
                  name='email'
                />
                <textarea 
                  className='mt-3 p-2 input' 
                  placeholder='Message'
                  name='message'
                ></textarea>
                <button type="submit" className="btn btn-outline-info mt-3 p-2 w-50">Submit</button>
              </form>
            </div>
          </div> 
        </div>
        
          <div className="text-center p-3">
            Copyrights &copy; {new Date().getFullYear()} &rarr;
            <a className="text-light" href="#home"> Sathiyaseelan</a>
          </div>
        </footer>
  )
}

export default Contact