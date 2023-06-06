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
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <div className="menu">
        <NavLink to="/" activeClassName="active">
          HOME
        </NavLink>
        <NavLink to="/books" activeClassName="active">
          BOOKS
        </NavLink>
        <NavLink to="/grammar" activeClassName="active">
          GRAMMAR
        </NavLink>
        <NavLink to="/videos" activeClassName="active">
          VIDEOS
        </NavLink>
        <NavLink to="/other" activeClassName="active">
          OTHER RESOURCES
        </NavLink>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
