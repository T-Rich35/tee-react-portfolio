import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Tee from "../../../static/assets/tee.png";

export default function intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["A Passionate Full-Stack Developer"],
    });
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Tee} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hi There, I'm</h1>
          <h2>Tarrance Richardson</h2>
          <h3>
            <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#projects">
          <img src="assets/Down.png" />
        </a>
      </div>
    </div>
  );
}
