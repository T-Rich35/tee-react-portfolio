// import React, { Component } from "react";
import React from "react";
import Topbar from "../components/topbar/Topbar";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Projects from "../components/portjects/Portjects";
import Contact from "../components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
