import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import lightDark from "./store/lightDark";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import GeorgiaSvg from "./svg/GeorgiaSvg";
import UkSvg from "./svg/UkSvg";
import RussiaSvg from "./svg/RussiaSvg";

function Layout({ children }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const dark = lightDark((state) => state.dark);
  const switchMode = lightDark((state) => state.switchMode);

  const [currentLang, setCurrentLang] = useState(i18n.language || "eng");
  const languageChangeHandler = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setOpen(false);
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

        {/* Language selector container */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 8,
            width: 80,
            height: 100,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {/* Flag container */}
          <div
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Select language"
            style={{
              width: "100%",
              height: 36,
              border: "none",
              padding: 0,
              margin: 0,
              borderRadius: 0,
              overflow: "hidden",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {currentLang === "eng" ? (
              <UkSvg width="60px" height="36px" />
            ) : currentLang === "geo" ? (
              <GeorgiaSvg width="60px" height="36px" />
            ) : (
              <RussiaSvg width="60px" height="36px" />
            )}
          </div>

          {/* Dropdown menu */}
          {open && (
            <div
              style={{
                position: "absolute",
                top: 40,
                left: "50%",
                transform: "translateX(-50%)",
                width: 50,
                backgroundColor: "#fff",
                borderRadius: 4,
                border: "1px solid #ccc",
                cursor: "pointer",
                zIndex: 1000,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            >
              <div
                onClick={() => languageChangeHandler("eng")}
                style={{ padding: "6px 10px" }}
              >
                <UkSvg />
              </div>
              <div
                onClick={() => languageChangeHandler("geo")}
                style={{ padding: "6px 10px" }}
              >
                <GeorgiaSvg />
              </div>
              <div
                onClick={() => languageChangeHandler("rus")}
                style={{ padding: "6px 10px" }}
              >
                <RussiaSvg />
              </div>
            </div>
          )}
        </div>

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
