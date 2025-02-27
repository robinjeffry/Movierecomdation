import React from "react";
import "./Navbar.css";

const Navbar = ({ setShowLogin, setShowSignup, setActivePage }) => {
  return (
    <nav className="navbar">
      <div className="logo">🎬 Movie App</div>
      <ul className="nav-links">
        <li><button onClick={() => setActivePage("home")}>Home</button></li>
        <li><button onClick={() => setActivePage("movies")}>Movies</button></li>
        <li><a href="#">About</a></li>
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowSignup(true)}>Signup</button>
      </ul>
    </nav>
  );
};

export default Navbar;
