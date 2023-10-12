import React from "react";
import { LinkedInIcon } from "@material-ui/icons";

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

          <div className="socialIcons"></div>
        </div>
        <div className="c-form"></div>
      </div>
    </div>
  );
}
