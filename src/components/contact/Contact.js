import React, { useRef, useState } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact">
      <div className="c-info">
        <h1 className="title">Let's Connect!</h1>
        <p>
          Just want to have a quick chat you can find me on social media or you
          can send me a message here!
        </p>

        <ul className="socialIcons">
          <li>
            <a href="#" target="">
              <GitHub className="icons" />
            </a>
          </li>
          <li>
            <a href="#" target="">
              <LinkedIn className="icons" />
            </a>
          </li>
        </ul>
      </div>
      <div className="c-form">
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            className="n"
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            className="e"
          />
          <textarea rows="5" placeholder="Message" name="message"></textarea>
          <button type="submit">Send Message</button>
          {message && <span>Thanks, I'll reply ASAP </span>}
        </form>
      </div>
    </div>
  );
}
