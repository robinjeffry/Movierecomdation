import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🎬 Movie App</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Genres</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
