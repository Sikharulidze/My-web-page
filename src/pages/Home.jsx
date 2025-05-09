import React from "react";
import profilePic from "../assets/me.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="My-picture">
        <img src={profilePic} alt="Mariam" />
      </div>

      <div className="home-bottom">
        <h1 className="bottom-text">{t("home.welcome")}</h1>
        <p className="bottom-p">
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
