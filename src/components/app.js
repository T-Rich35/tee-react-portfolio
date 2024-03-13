// import React, { Component } from "react";
import React, { useState } from "react";

import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Tool from "./tool/tool";
import Menu from "./menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <About />
        <Tool />
        <Contact />
      </div>
    </div>
  );
}

export default App;
