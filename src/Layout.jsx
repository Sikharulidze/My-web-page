import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Layout({ children }) {
  const { t } = useTranslation();
  const location = useLocation();

  const languageChangeHandler = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <div className="home-top">
        <Link to="/" className="home-links">
          {t("nav.home")}
        </Link>

        {}
        {location.pathname !== "/about" && (
          <Link to="/about" className="home-links">
            {t("nav.about")}
          </Link>
        )}
        {location.pathname !== "/contact" && (
          <Link to="/contact" className="home-links">
            {t("nav.contact")}
          </Link>
        )}

        <select
          name="language"
          id="language"
          onChange={languageChangeHandler}
          value={i18n.language}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <option value="eng">Eng</option>
          <option value="geo">GEO</option>
          <option value="rus">RUS</option>
        </select>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
