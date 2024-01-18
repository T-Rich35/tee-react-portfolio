import React from "react";
import Crop from "../../../static/assets/crop.png";
import Css from "../../../static/assets/css.png";
import Htm from "../../../static/assets/htm.png";
import Sass from "../../../static/assets/sass.png";
import Java from "../../../static/assets/java.png";
import Read from "../../../static/assets/read.png";
import Pyt from "../../../static/assets/pyt.png";
import Gith from "../../../static/assets/gith.png";

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
        <img src={Crop} alt="" className="m-img"></img>
        <div className="tool">
          <h2 className="m-tool">My Toolkit 💻</h2>
          <ul className="skills">
            <li>
              <img className="icon" src={Htm} alt=""></img>
              HTML5
            </li>
            <li>
              <img className="icon" src={Css} alt=""></img>
              CSS3
            </li>
            <li>
              <img className="icon" src={Sass} alt=""></img>
              Sass
            </li>
            <li>
              <img className="icon" src={Java} alt=""></img>
              Javascript
            </li>
            <li>
              <img className="icon" src={Read} alt=""></img>
              React
            </li>
            <li>
              <img className="icon" src={Pyt} alt=""></img>
              Python
            </li>
            <li>
              <img className="icon" src={Gith} alt=""></img>
              Github
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
