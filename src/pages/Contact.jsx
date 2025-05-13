import React from "react";
import profileImg from "../images/profile.png";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactItem = ({ Icon, info }) => (
  <div className="contact-item">
    <Icon size={15} style={{ marginRight: "10px" }} />
    <p className="contact-p">{info}</p>
  </div>
);

function Contact() {
  const socialLinks = [
    {
      Icon: FaGithub,
      label: "GitHub.com/Sikharulidze",
      url: "https://github.com/Sikharulidze",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn.com/mariami",
      url: "https://www.linkedin.com/in/mariam-sikharulidze-094a2a351/",
    },
    {
      Icon: FaInstagram,
      label: "Instagram.com/sikharulidzemariamii",
      url: "https://www.instagram.com/sikharulidzemariamii/",
    },
    {
      Icon: FaFacebook,
      label: "Facebook.com/mariam.sixarulidze.73",
      url: "https://www.facebook.com/mariam.sikharulidze.73",
    },
  ];

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

      <div className="left-right-container">
        <div className="left-div">
          <h2>Contact Details</h2>
          <div className="contact-info">
          
            <div className="contact-item">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "10px", fontSize: "15px" }} // Custom styling for the email icon
              />
              <p className="contact-p">Mariam.sikha.22@gmail.com</p>
            </div>

           
            <ContactItem
              Icon={FaPhoneAlt}
              label="Phone"
              info="+995 593 41 55 88"
            />
            <ContactItem
              Icon={FaMapMarkerAlt}
              label="Location"
              info="Tbilisi, Georgia"
            />

            {socialLinks.map(({ Icon, label, url }) => (
              <div className="social-container" key={label}>
                <Icon size={32} style={{ marginRight: "30px", marginTop: "15px" }} className="social-icon" />
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {label}
                </a>
              </div>
            ))}
          </div>

          <h2>Education</h2>
          <div className="education-container">
            <div className="education-content">
              <div className="education-dot-line">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="education-text">
                <p className="contact-p">
                  Bachelor of Law - Caucasus International University
                </p>

                <p className="contact-p">
                  Master's degree in law - Caucasus International University
                </p>
              </div>
            </div>
          </div>

          <h2>Skills</h2>

          <ul className="contact-ul">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>Node.js</li>
            <li>EJS</li>
          </ul>

          <h2>Soft Skills</h2>

          <ul className="contact-ul">
            <li>High learnability</li>
            <li>Attention to detail</li>
            <li>Flexibility</li>
            <li>Problem solving</li>
            <li>Curiosity</li>
            <li>Interest in helping others</li>
          </ul>
        </div>

        <div className="right-div">
          <h3>Summary</h3>
          <p className="right-p">
            I am Passionate about web development, eager to work with
            cutting-edge technologies like React, Node.js, and other modern
            frameworks to build impactful applications.
          </p>
          <p className="right-p">
            Constantly striving to enhance my skills by exploring new tools and
            technologies, with a focus on delivering efficient and scalable
            solutions.
          </p>
          <p className="right-p">
            Excited to collaborate with innovative teams that embrace agile
            methodologies and encourage continuous learning and growth in the
            tech industry.
          </p>
          <p className="right-p">
            Open to challenges that require adaptability and a willingness to
            learn new programming languages and development frameworks to stay
            ahead of industry trends. Motivated by opportunities to work on
            diverse projects and eager to contribute to teams building
            high-quality, user-friendly applications.
          </p>
          <p className="right-p">
            Looking for opportunities to join a forward-thinking company where I
            can apply my current skills and learn from experienced developers in
            a collaborative environment. Passionate about problem-solving and
            excited to take on projects that allow me to expand my knowledge of
            full-stack development and new technologies.
          </p>
          <p className="right-p">
            Focused on delivering optimal user experiences through modern,
            responsive web design and a strong understanding of both front-end
            and back-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
