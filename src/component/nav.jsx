import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //router dom $npm install react-router-dom
import Home from "./Routes/home";
import About from "./Routes/about";
import Logo from "./logo";
import Skill from "./Routes/skill";
import Project from "./Routes/project";

export default function Nav() {
  return (
    <Router>
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skill">Skill</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>

        <hr />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}
