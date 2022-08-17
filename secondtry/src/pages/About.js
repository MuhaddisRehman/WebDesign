import React from 'react';
import avatar1 from '../Assets/images/AboutImages/avatar_g.jpg';
import avatar2 from '../Assets/images/AboutImages/me2.jpg';
import '../pages/About.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import * as fa from 'react-icons/fa';

function About() {
  let now = 95
  return ( 
    <div>
      <div className="container aboutContainer pb-5 pt-3">
        <div className="col-lg-12 row aboutImg">
          <div className="col-lg-6"><img src={avatar1} alt="" /></div>
          <div className="col-lg-6"><img src={avatar2} alt="" /></div>
        </div>
      <div className="aboutMe p-2 mb-4">
        <h3 className='font-weight-light'>About Me</h3>
        <p className='font-weight-light'>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      </div>
      <div className="technicalSkills">
        <h3>Technical Skills</h3>
        <p>Photography</p>
        <ProgressBar now={now } variant="info" label={`${now}%`} className="progressBar"/>
        <p>Web Design</p>
        <ProgressBar now={85 } variant="info" label={`${85}%`} className="progressBar"/>
        <p>Photoshop</p>
        <ProgressBar now={80 } variant="info" label={`${80}%`} className="progressBar"/>
        
      </div>
      <button className="bton"><fa.FaDownload/> <span className='ms-2'>Download Resume</span> </button>
      </div>
    </div>
  )
}

export default About