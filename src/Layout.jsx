import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

  // Map lang to flag image URL (imported)
  const flagMap = {
    eng: gbFlag,
    geo: geFlag,
    rus: ruFlag,
  };

  return (
    <div>
      <div className="home-top" style={{ position: "relative" }}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "home-links active" : "home-links"
          }
        >
          {t("nav.home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "home-links active" : "home-links"
          }
        >
          {t("nav.about")}
        </NavLink>
        <NavLink
          to="/bio"
          className={({ isActive }) =>
            isActive ? "home-links active" : "home-links"
          }
        >
          {t("nav.bio")}
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "home-links active" : "home-links"
          }
        >
          {t("nav.community")}
        </NavLink>

        {/* Language Select */}
        <select
          name="language"
          id="language"
          onChange={languageChangeHandler}
          value={currentLang}
          aria-label="Select language"
          style={{
            position: "absolute",
            top: 10,
            right: 8,
            width: 70,
            height: 30,
            cursor: "pointer",
            paddingRight: 0,
            paddingLeft: 0,
            fontSize: 0,
            backgroundImage: `url(${flagMap[currentLang]})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "24px 16px",
            borderRadius: 4,
            border: "1px solid #ccc",
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        >
          <option value="eng" style={{ fontSize: "14px" }}>
            ENG
          </option>
          <option value="geo" style={{ fontSize: "14px" }}>
            GEO
          </option>
          <option value="rus" style={{ fontSize: "14px" }}>
            RUS
          </option>
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
