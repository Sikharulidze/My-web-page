import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import language_geo from "./locales/geo.json";
import language_eng from "./locales/eng.json";
import language_rus from "./locales/rus.json";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout";

i18n.use(initReactI18next).init({
  resources: {
    eng: { translation: language_eng },
    geo: { translation: language_geo },
    rus: { translation: language_rus },
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
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
