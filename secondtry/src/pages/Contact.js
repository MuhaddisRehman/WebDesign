import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import '../pages/Contact.css';

function Contact() {
  
  return (
    
    <div className='container outerContainer'>
      <h3>Contact Me</h3>
      <div className="container  d-flex iconSection">
        <div className='icons'><FontAwesomeIcon icon={faEnvelope} />
        email@email.com</div>
        <div className='icons locationDot'><FontAwesomeIcon icon={faLocationDot } />Chicago, US</div>
        <div className='icons'><FontAwesomeIcon icon={faPhone} />512312311</div>
      </div>
      <form className=''>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputMessage" class="form-label">Message</label>
          <input type="text" class="form-control" id="exampleInputMessage"/>
        </div>
        <button type="submit" class="btn btn-dark p-2 pe-4 ps-4"><FontAwesomeIcon  className='me-3' icon={faPaperPlane} />Send Message</button>
      </form>
    </div>
    
  )
}
export default Contact;