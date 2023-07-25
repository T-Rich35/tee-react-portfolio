import React from "react";
import { ExpandMore } from "@material-ui/icons";

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Tee.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Tarrance </h1>
          <span></span>
        </div>
        <a href="projects">
          <ExpandMore className="down" />
        </a>
      </div>
    </div>
  );
}
