import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import lightDark from "./store/lightDark";

function Layout({ children }) {
  const { t } = useTranslation();
  const location = useLocation();

  const dark = lightDark((state) => state.dark);
  const switchMode = lightDark((state) => state.switchMode);

  const languageChangeHandler = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <div className="home-top">
        <Link to="/" className="home-links">{t("nav.home")}</Link>
        {location.pathname !== "/about" && (
          <Link to="/about" className="home-links">{t("nav.about")}</Link>
        )}
        {location.pathname !== "/contact" && (
          <Link to="/contact" className="home-links">{t("nav.contact")}</Link>
        )}

        {/* Language Dropdown */}
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

        {/* Dark Mode Button */}
        <button
          onClick={switchMode}
          style={{
            position: "absolute",
            top: "60px",
            left: "20px",
            padding: "0.5rem 1rem",
            backgroundColor: dark ? "#444" : "#f1f1f1",
            color: dark ? "#fff" : "#000",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
