import "./App.css";
import { Route, Routes } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import language_geo from "./locales/geo.json";
import language_eng from "./locales/eng.json";

import Home from "./pages/Home";
import About from "./pages/About";
import Bio from "./pages/Bio";
import Community from "./pages/Community";
import Layout from "./Layout";
import ThemeManager from "./ThemeManager";

i18n.use(initReactI18next).init({
  resources: {
    eng: { translation: language_eng },
    geo: { translation: language_geo },
  },
  lng: "eng",
  fallbackLng: "eng",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  useTranslation();

  return (
    <>
      <ThemeManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
