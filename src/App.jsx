import { Routes } from "react-router-dom";
import "./App.css";
import profilePic from "./assets/me.png";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="home-top">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
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
      </div>

      <Routes>
        <Route path="/" element={<home />}>Home</Route>
        <Route path="/about" element={<about />}>About</Route>
        <Route path="/contact" element={<contact />}>Contact</Route>

      </Routes>
    </div>
  );
}

export default App;
