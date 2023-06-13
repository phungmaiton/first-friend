import React from "react";
import { useLocation } from "react-router-dom";

function Banner({ pageTitle, subTitle, background }) {
  const location = useLocation();
  return (
    <div
      className="banner bg-center"
      style={{
        backgroundImage: `url(${background}`,
      }}
    >
      <h1>{pageTitle}</h1>
      <h3>{subTitle}</h3>
      {location.pathname === "/first-friend/" ? null : (
        <a href="#contribute">
          <button>Contribute</button>
        </a>
      )}
    </div>
  );
}

export default Banner;
