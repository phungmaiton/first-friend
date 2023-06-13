import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="footer">
      <p className="footer-text-left">
        Copyright © {new Date().getFullYear()} 첫친구 - Your First Friend
      </p>
      <div className="footer-content-right">
        <NavLink
          to="/first-friend"
          className="footer-menu"
          onClick={scrollToTop}
        >
          HOME
        </NavLink>
        <NavLink
          to="/first-friend/books"
          className="footer-menu"
          onClick={scrollToTop}
        >
          BOOKS
        </NavLink>
        <NavLink
          to="/first-friend/grammar"
          className="footer-menu"
          onClick={scrollToTop}
        >
          GRAMMAR
        </NavLink>
        <NavLink
          to="/first-friend/videos"
          className="footer-menu"
          onClick={scrollToTop}
        >
          VIDEOS
        </NavLink>
        <NavLink
          to="/first-friend/resources"
          className="footer-menu"
          onClick={scrollToTop}
        >
          OTHER RESOURCES
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
