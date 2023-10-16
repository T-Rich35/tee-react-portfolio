import React from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact">
      <div className="c-info">
        <h1 className="title">Let's Connect!</h1>
        <p>
          Just want to have a quick chat you can find me <br></br> on social
          media or you can send me a message here!
        </p>

        <ul className="socialIcons">
          <li>
            <a href="#" target="">
              <GitHub />
            </a>
          </li>
          <li>
            <a href="#" target="">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>
      <div className="c-form">
        <form>
          <input type="text" placeholder="Name" className="n" />
          <input type="text" placeholder="Email" className="e" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
