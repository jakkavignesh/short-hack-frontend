import React from 'react';
import './About.css';
import emailLogo from './email-png.png';
 
const About = () => {
  const emailAddress = 'drivetogether@gmail.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="aboutus-container">
      <h1>About Us</h1>
      <p className='aboutp'>We're making ride sharing accessible to everyone. Join us and start sharing!</p>
      <div className = "grid_block">
          <div className = 'box'>
              <h3>We are a team dedicated to providing convenient transportation solutions for our employees.</h3>
              <p>Drive Together, a platform designed to make your daily commute more convenient, cost-effective, and environmentally friendly. Our mission is to connect people who share similar routes and schedules, reducing traffic congestion and promoting sustainable transportation.</p>
          </div>
          <div className='Drive_Image'>
              <img src="https://img.freepik.com/free-vector/carpool-concept-illustration_114360-9268.jpg" alt="Your Image" />
          </div>
      </div>
    <p><b>Developed by COD-Cloud Team</b></p>
    <p >Contact us : <span className="email-link" onClick={handleEmailClick}><img src={emailLogo} alt="Email Logo" className="email-logo" /></span></p>
   
    </div>
   
  );
}
 
export default About;