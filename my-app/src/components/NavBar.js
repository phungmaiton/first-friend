import React from "react";
function NavBar() {
  return (
    <nav class="topnav">
      <div class="container m-auto px-2">
        <img id="logo" src="./main-logo.png" alt="logo" />
        <a href="">HOME</a>
        <a href="">BOOKS</a>
        <a href="">GRAMMAR</a>
        <a href="">VIDEO</a>
        <a href="">OTHER RESOURCES</a>
      </div>
    </nav>
  );
}

export default NavBar;
