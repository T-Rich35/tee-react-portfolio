import React from "react";
import Crop from "../../../static/assets/crop.png";
import Css from "../../../static/assets/css.png";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutMeBio">
        <h2 className="me"> About Me</h2>

        <p className="top">
          Thanks for scrolling this far. I am a Full-Stack graduate from
          <a href="#"> Bottega University</a> Also from Remintgon College with a
          Assocaite Degree in Computer Technology.
        </p>

        <p className="bot">
          Other than coding, I spend most of my free time with family and
          reading a good book
        </p>
      </div>

      <div className="aboutMeImg">
        <div className="i-bg"></div>
        <img src={Crop} alt=""></img>
      </div>

      <div className="tool">
        {" "}
        <h2>My Toolkit 💻</h2>
        <ul className="skills">
          <li>hello</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
}
