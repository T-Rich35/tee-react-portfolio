import React from "react";
import Crop from "../../../static/assets/crop.png";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutMeBio">
        <h2 className="me"> About Me</h2>

        <p className="top">
          Thanks for scrolling this far. I am a Full-Stack graduate from
          <a href="https://bottega.edu/full-stack-development-certificate/">
            Bottega University
          </a>
          Also from <a href="#">Remintgon College </a> with a Associate Degree
          in Computer Technology.
        </p>

        <p className="bot">
          Other than coding, I spend most of my free time with family and
          reading a good book
        </p>
      </div>

      <div className="aboutMeImg">
        <div className="i-bg"></div>
        <img src={Crop} alt="" className="m-img"></img>
      </div>
    </div>
  );
}
