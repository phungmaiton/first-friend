import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../App.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="topnav">
      <NavLink to="/first-friend/">
        <img id="logo" src="./main-logo.png" alt="logo" />
      </NavLink>
      <input
        id="menu-toggle"
        type="checkbox"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/first-friend/" onClick={closeMenu}>
          HOME
        </NavLink>
        <NavLink to="/first-friend/books" onClick={closeMenu}>
          BOOKS
        </NavLink>
        <NavLink to="/first-friend/grammar" onClick={closeMenu}>
          GRAMMAR
        </NavLink>
        <NavLink to="/first-friend/videos" onClick={closeMenu}>
          VIDEOS
        </NavLink>
        <NavLink to="/first-friend/resources" onClick={closeMenu}>
          OTHER RESOURCES
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
