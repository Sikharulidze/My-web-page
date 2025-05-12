import React from "react";
import profileImg from "../images/profile.png";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="contact-page-container">
      <div className="first-div">
        <img
          src={profileImg}
          alt="Mariam Sikharulidze"
          className="profile-img"
        />
        <div className="first-div-text">
          <h1>Mariam Sikharulidze</h1>
          <p>Web Developer</p>
        </div>
      </div>

      <div className="left-div">
        <h2>Contact Details</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
            <p className="contact-p">Mariam.sikha.22@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt size={20} />
            <p className="contact-p"> +995 593 41 55 88</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={20} />
            <p className="contact-p"> Tbilisi, Georgia</p>
          </div>
        </div>
        
        <h2 className="education-header">Education</h2>
        <div className="education-container">
          <div className="education-dot-line">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <p className="contact-p">Bachelor of Law - Caucasus International University</p>
           <p className="contact-p">Master's degree in law - Caucasus International University</p>

        
        
        </div>
      </div>
    </div>
  );
}

export default Contact;
