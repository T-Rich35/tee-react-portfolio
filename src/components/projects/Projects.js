import React from "react";

export default function Porjects() {
  return (
    <div className="projects" id="projects">
      <p className="pro">hover over projects to learn more</p>
      <ul>
        {/* <li className="active">Featured</li>
        <li>Blog</li>
        <li>Appointment App</li>
        <li>Fries </li> */}
      </ul>
      <div className="firstRow">
        <div className="item1">
          <img
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMf4CEpg1wItoNcHURgrY14zg7vlXDyBKr4w&usqp=CAU"
            alt=""
          />
          <h3>Banking App</h3>

          <p className="p">
            A simple React banking app to keep track of your daily spending
            habits.
          </p>

          <div className="view">
            <a href="#" target="" className="button">
              view live
            </a>
            <a href="#" target="" className="button">
              github
            </a>
          </div>
        </div>
        <div className="item2">
          <img
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMf4CEpg1wItoNcHURgrY14zg7vlXDyBKr4w&usqp=CAU"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
