import React from "react";
import "../Styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
          {/* Hamburger menu checkbox */}
          <input type="checkbox" id="toggle-menu" aria-label="Toggle navigation" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          {/* Navigation menu */}
          <ul className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Parking space</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">wallet</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          {/* Logo */}
          <h1 className="logo">Navbar</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;