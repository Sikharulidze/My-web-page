import React from "react";
import profileImg from "../images/profile.png";
import { useTranslation } from "react-i18next";

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

function Bio() {
  const { t } = useTranslation();
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
           <h1>{t("bio.name")}</h1>
          <p>{t("bio.title")}</p>
        </div>
      </div>

      <div className="left-right-container">
        <div className="left-div">
           <h2>{t("bio.contactDetails")}</h2>
          <div className="contact-info">
          
            <div className="contact-item">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "10px", fontSize: "15px" }}
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
              info={t("bio.locationInfo")}
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

          <h2>{t("bio.education.title")}</h2>
          <div className="education-container">
            <div className="education-content">
              <div className="education-dot-line">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="education-text">
                <p className="contact-p">
                  {t("bio.education.bachelor")}
                </p>

                <p className="contact-p">
                 {t("bio.education.master")}
                </p>
              </div>
            </div>
          </div>

          <h2>{t("bio.skills.techTitle")}</h2>

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

           <h2>{t("bio.skills.softTitle")}</h2>

          <ul className="contact-ul">
             <li>{t("bio.softSkills.learnability")}</li>
            <li>{t("bio.softSkills.detail")}</li>
            <li>{t("bio.softSkills.flexibility")}</li>
            <li>{t("bio.softSkills.problemSolving")}</li>
            <li>{t("bio.softSkills.curiosity")}</li>
            <li>{t("bio.softSkills.helping")}</li>
          </ul>
        </div>

        <div className="right-div">
         <h3>{t("bio.summary.title")}</h3>
           {["1", "2", "3", "4", "5", "6"].map(key => (
            <p className="right-p" key={key}>
              {t(`bio.summary.${key}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bio;
