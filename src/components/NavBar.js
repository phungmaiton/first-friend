import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";
function NavBar() {
  return (
    <nav className="topnav">
      {/* <div className="container m-auto px-2"> */}
      <NavLink to="/">
        <img id="logo" src="./main-logo.png" alt="logo" />
      </NavLink>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="menu">
        <NavLink to="/first-friend/">HOME</NavLink>
        <NavLink to="/first-friend/books">BOOKS</NavLink>
        <NavLink to="/first-friend/grammar">GRAMMAR</NavLink>
        <NavLink to="/first-friend/videos">VIDEOS</NavLink>
        <NavLink to="/first-friend/resources">OTHER RESOURCES</NavLink>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
