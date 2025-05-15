import { useTranslation } from "react-i18next";
import cloudImg from "../images/cloud.png";
import giphyImg from "../images/giphy.png";
import donutImg from "../images/donut.png";
import proggraming1 from "../images/proggraming1.png";
import proggraming2 from "../images/proggraming2.png";
import proggraming3 from "../images/proggraming3.png";
import proggraming4 from "../images/proggraming4.png";
import { Link } from "react-router-dom";

function About() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="top-container">
        <img className="top-cloud" src={cloudImg} alt="cloud" />

        <h1 className="erti">{t("about.title")}</h1>
        <h2 className="ori">{t("about.subtitle")}</h2>

        <img className="bottom-cloud" src={cloudImg} alt="cloud" />

        <div className="images-container">
          <img
            src={proggraming1}
            alt="proggraming1"
            className="proggraming-img"
          />
          <img
            src={proggraming2}
            alt="proggraming2"
            className="proggraming-img"
          />
          <img
            src={proggraming3}
            alt="proggraming3"
            className="proggraming-img"
          />
          <img
            src={proggraming4}
            alt="proggraming4"
            className="proggraming-img"
          />
        </div>
      </div>

      <div className="middle-container">
        <div className="profile"></div>
        <hr />

        <div className="skills">
          <h2 className="ori">{t("about.skills")}</h2>

          <div className="skill-row">
            <img className="code-img" src={giphyImg} alt="code-img" />
            <div className="text-block">
              <h3 className="sami">{t("about.designTitle")}</h3>
              <p className="text">{t("about.designDesc")}</p>
            </div>
          </div>

          <div className="skill-row">
            <img className="donut" src={donutImg} alt="donut" />
            <div className="text-block">
              <h3 className="sami">{t("about.donutTitle")}</h3>
              <p className="text">{t("about.donutDesc")}</p>
            </div>
          </div>
        </div>

        <hr className="xazi" />

        <div className="contact-me">
          <h2 className="otxi">{t("about.contactTitle")}</h2>
          <h3 className="sami">{t("about.contactSubtitle")}</h3>
          <p className="contact-message">{t("about.contactDesc")}</p>
          <Link to="/community" className="meili">
            {" "}
            {t("about.contactBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
