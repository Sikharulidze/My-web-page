import "./App.css";
import profilePic from "./assets/me.png";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="home-top">
        <Link to={"/"} className="home-links">
          Home
        </Link>
        <Link to={"/about"} className="home-links">
          About
        </Link>
        <Link to={"/contact"} className="home-links">
          Contact
        </Link>
      </div>

      <div className="My-picture">
        <img src={profilePic} alt="Mariam" />
      </div>

      <div className="home-bottom">
        <h1 className="bottom-text">Welcome!</h1>
        <p className="bottom-p">
          I'm Mariam Sikharulidze, a web developer with a focus on{" "}
          <span>creating clean and functional websites.</span>
        </p>

        <div className="copyright">
          <p>© {currentYear} Mariam Sikharulidze.</p>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<home />}>
          Home
        </Route>
        <Route path="/about" element={<about />}>
          About
        </Route>
        <Route path="/contact" element={<contact />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
}

export default App;
