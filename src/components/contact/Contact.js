import React, { useRef, useState } from "react";
import { Email, LinkedIn } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log("SUCCESS!");

    // emailjs
    //   .send("service_podb0lj", "template_s4etgwb", e.target, {
    //     publicKey: "pwVuQwLNINYIgDM-r",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       setMessage(true);
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
    // e.target.reset();
  };
  return (
    <div className="contact">
      <div className="c-info">
        <h1 className="title">Let's Connect!</h1>
        <p>Your Best Candidate For Software Development.</p>

        <ul className="socialIcons">
          <li>
            <button type="submit">
              <a href="mailto:25teerich@gmail.com" target="">
                <Email className="icons" />
              </a>
            </button>
          </li>
          <li>
            <button type="submit">
              <a
                href="https://www.linkedin.com/in/tarrance-richardson/"
                target="#"
              >
                <LinkedIn className="icons" />
              </a>
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="c-form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            required
            name="user_name"
            className="n"
          />
          <input
            type="text"
            placeholder="Email"
            required
            name="user_email"
            className="e"
          />
          <textarea
            rows="5"
            placeholder="Message"
            required
            name="message"
          ></textarea>
          

          {message && <span>Thanks, I'll reply ASAP </span>}
        </form>
      </div> */}
    </div>
  );
}
