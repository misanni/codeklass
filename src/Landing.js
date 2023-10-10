import React from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

function Landing() {
  return (
    <div className="Landing-text">
      <h1>WELCOME TO FREE CODE CLASS</h1>
      <p className="p1">your one stop tech solution...</p>
      <Welcome />

      <div className="grid-container">
        <div className="grid-item">
          <img src="./html.jpg" alt="html 1" />
        </div>
        <div className="grid-item">
          <img src="./css.jpg" alt="html 1" />
        </div>
        <div className="grid-item">
          <img src="./javascript.jpg" alt="html 1" />
        </div>
        <div className="grid-item">
          <img src="./bootstrap.jpg" alt="html 1" />
        </div>
        <div className="grid-item">
          <img src="./react.jpg" alt="html 1" />
        </div>
        <div className="grid-item">
          <img src="./node.jpg" alt="html 1" />
        </div>
      </div>

      <div>
        <Link to="/Login">Login</Link>
        <div>
          <Link to="/RegistrationForm">SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
