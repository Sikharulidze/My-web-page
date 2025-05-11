import React from "react";
import { useTranslation } from "react-i18next";

// ✅ Import all images from src/images/

import cloudImg from "../images/cloud.png";
import mountainImg from "../images/mountain.png";
import giphyImg from "../images/giphy.png";
import donutImg from "../images/donut.png";

function About() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="top-container">
        <img className="top-cloud" src={cloudImg} alt="cloud" />
        <div className="title-text">
          <h1 className="erti">I'm Mariami.</h1>
          <h2 className="ori">
            a <span className="pro">pro</span>grammer.
          </h2>
        </div>
        <img className="bottom-cloud" src={cloudImg} alt="cloud" />
        <img className="mountain" src={mountainImg} alt="mountain-img" />
      </div>

      <div className="middle-container">
        <div className="profile">
          <h2 className="ori">Hello.</h2>
          <p className="intro">I am a junior developer.</p>
        </div>
        <hr />

        <div className="skills">
          <h2 className="ori">My Skills.</h2>
          <div className="skill-row">
            <img className="code-img" src={giphyImg} alt="code-img" />
            <h3 className="sami">Design & Development</h3>
            <p className="text">
              I started learning to code when I was 24 years old because working
              from home is comfortable. It is also a progressive and valued
              field.
            </p>
          </div>

          <div className="skill-row">
            <img className="donut" src={donutImg} alt="donut" />
            <h3 className="sami">Donut Challenge</h3>
            <p className="text">
              But my best skill is actually in eating donuts. I am the
              undisputed queen of donut-eating challenges. Donuts with Nutella
              are my favorite.
            </p>
          </div>
        </div>

        <hr className="xazi" />

        <div className="contact-me">
          <h2 className="ori">Get In Touch</h2>
          <h3 className="sami">If you love donuts as much as I do</h3>
          <p className="contact-message">
            Love donuts as much as I do? Let's talk about how awesome they are!
            We can code while we eat donuts!
          </p>
          <a className="meili" href="mailto:mariam.sikha.22@gmail.com">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
