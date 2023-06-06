import Topbar from "./components/top/Topbar";
import Intro from "./components/intro/Intro";
import Work from "./components/work/Work";
import Profiles from "./components/profiles/Profiles";
import Contacts from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Progress from "./components/progress/Progress";
import Landing from "./components/landing/Landing";
import Project from "./components/projects/Project";
import "./app.scss";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Landing />
        <Intro />
        <Project />
        <Work />
        <Progress />
        <Profiles />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
