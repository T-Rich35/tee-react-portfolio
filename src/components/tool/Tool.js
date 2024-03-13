import React from "react";
import Css from "../../../static/assets/css.png";
import Htm from "../../../static/assets/htm.png";
import Sass from "../../../static/assets/sass.png";
import Java from "../../../static/assets/java.png";
import Read from "../../../static/assets/read.png";
import Pyt from "../../../static/assets/pyt.png";
import Gith from "../../../static/assets/gith.png";

export default function Tool() {
  return (
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
  );
}
