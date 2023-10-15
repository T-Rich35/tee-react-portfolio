import React from "react";
import Link from "../../../static/assets/link.png";
import Gith from "../../../static/assets/gith.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="c-wrapper">
        <div className="c-info">
          <h1 className="title">Let's Connect!</h1>
          <p>
            Just want to have a quick chat you can find me <br></br> on social
            media or you can send me a message here!
          </p>

          <ul className="socialIcons">
            <li>
              <a href="#" target="">
                <img src={Link} alt="" className="fa"></img>
              </a>
            </li>
            <li>
              <a href="#" target="">
                <img src={Gith} alt="" className="fa"></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="c-form"></div>
      </div>
    </div>
  );
}
