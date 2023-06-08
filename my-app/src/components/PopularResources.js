import React from "react";
import OtherResourcesItem from "./OtherResourcesItem";

function PopularResources({ topThreeResources, linksArray, setLinksArray }) {
  return (
    <div className="main-div">
      <h2 className="home-divider">
        <span className="home-divider-textbox">Popular Resources</span>
      </h2>
      <div className="column-div">
        {topThreeResources.map((link) => (
          <OtherResourcesItem
            link={link}
            key={link.id}
            id={link.id}
            name={link.name}
            description={link.description}
            image={link.image}
            likes={link.likes}
            setLinksArray={setLinksArray}
            linksArray={linksArray}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularResources;
