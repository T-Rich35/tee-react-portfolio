import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";

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
          <img src="assets/Tee.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Tarrance </h1>
          <h3>
            {/* Freelance */}
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
