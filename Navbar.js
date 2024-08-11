import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="logo"></div>
        <div className="navlist">
          <li className="nav ">Home</li>
          <li className="nav">About</li>
          <li className="nav">Time Line</li>
          <li className="nav">Projects</li>
          <li className="nav">Contact Us</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Default export
