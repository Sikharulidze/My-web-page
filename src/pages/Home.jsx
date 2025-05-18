import React from "react";
import profilePic from "../images/me.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const currentLang = i18n.language;
  const isGeo = currentLang === "geo";

  return (
    <div className="home-page">
      <div className="My-picture">
        <img src={profilePic} alt="Mariam" />
      </div>

      <div className="home-bottom">
        <h1 className={`bottom-text ${isGeo ? "geo-font" : ""}`}>
          {t("home.welcome")}
        </h1>

        <p className={`bottom-p ${isGeo ? "geo-font" : ""}`}>
          {t("home.description", { emphasis: t("home.emphasis") })}
        </p>

        <div className="copyright">
          <p>{t("copyright", { year: currentYear })}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
