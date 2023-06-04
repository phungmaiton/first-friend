import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function NavBar() {
  return (
    <nav className="topnav">
      <div className="container m-auto px-2">
        <img id="logo" src="./main-logo.png" alt="logo" />
        <div className="topnav-right">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/books">BOOKS</NavLink>
          <NavLink to="/grammar">GRAMMAR</NavLink>
          <NavLink to="/videos">VIDEOS</NavLink>
          <NavLink to="/other">OTHER RESOURCES</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
