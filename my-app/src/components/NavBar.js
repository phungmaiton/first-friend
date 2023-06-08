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
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/books">BOOKS</NavLink>
        <NavLink to="/grammar">GRAMMAR</NavLink>
        <NavLink to="/videos">VIDEOS</NavLink>
        <NavLink to="/resources">OTHER RESOURCES</NavLink>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
