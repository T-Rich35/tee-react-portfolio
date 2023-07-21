import React from "react";
import { Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Tarrance.dev
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>richistee@gmail.com</span>
          </div>
        </div>
        <div className="right">right side of page</div>
      </div>
    </div>
  );
}
