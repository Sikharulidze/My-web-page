import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import lightDark from "./store/lightDark";
import { FaSun, FaMoon } from "react-icons/fa";

import gbFlag from "./images/gb.png";
import geFlag from "./images/geo.png";
import ruFlag from "./images/rus.png";

function Layout({ children }) {
  const { t } = useTranslation();

  const dark = lightDark((state) => state.dark);
  const switchMode = lightDark((state) => state.switchMode);

  
  const normalizeLang = (lng) => {
    if (!lng) return "eng";
    if (lng.startsWith("en")) return "eng";
    if (lng.startsWith("ka")) return "geo";
    if (lng.startsWith("ru")) return "rus";
    return "eng";
  };

  
  const [currentLang, setCurrentLang] = useState(normalizeLang(i18n.language));

  useEffect(() => {
    const onLanguageChanged = (lng) => {
      setCurrentLang(normalizeLang(lng));
    };
    i18n.on("languageChanged", onLanguageChanged);

    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  }, []);

  const languageChangeHandler = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    setCurrentLang(selectedLang);
  };

  const getFlagIcon = (lang) => {
    switch (lang) {
      case "eng":
        return gbFlag;
      case "geo":
        return geFlag;
      case "rus":
        return ruFlag;
      default:
        return gbFlag;
    }
  };

  return (
    <div>
      <div className="home-top" style={{ position: "relative" }}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "home-links active" : "home-links")}
        >
          {t("nav.home")}
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "home-links active" : "home-links")}
        >
          {t("nav.about")}
        </NavLink>

        <NavLink
          to="/bio"
          className={({ isActive }) => (isActive ? "home-links active" : "home-links")}
        >
          {t("nav.bio")}
        </NavLink>

        {/* Language Flag */}
        <img
          src={getFlagIcon(currentLang)}
          alt={`${currentLang} flag`}
          style={{
            position: "absolute",
            top: 12,
            right: 60,
            width: 24,
            height: 16,
            objectFit: "cover",
            borderRadius: 2,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        {/* Language Dropdown */}
        <select
          name="language"
          id="language"
          onChange={languageChangeHandler}
          value={currentLang}
          style={{
            position: "absolute",
            top: 10,
            right: 8,
            paddingRight: 30,
            cursor: "pointer",
          }}
          aria-label="Select language"
        >
          <option value="eng">Eng</option>
          <option value="geo">GEO</option>
          <option value="rus">RUS</option>
        </select>

        {/* Dark Mode Button */}
        <button
          onClick={switchMode}
          style={{
            width: 60,
            height: 30,
            backgroundColor: dark ? "#444" : "#ccc",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            padding: 4,
            position: "absolute",
            top: 10,
            right: 120,
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            border: "none",
          }}
          aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: dark ? "#000" : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: dark ? "translateX(30px)" : "translateX(0)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
            }}
          >
            {dark ? (
              <FaMoon size={14} color="#f1c40f" />
            ) : (
              <FaSun size={14} color="#f39c12" />
            )}
          </div>
        </button>
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
