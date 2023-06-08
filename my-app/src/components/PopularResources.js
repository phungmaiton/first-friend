import React from "react";
import OtherResourcesItem from "./OtherResourcesItem";

function PopularResources({ topThreeResources, linksArray, setLinksArray }) {
  return (
    <div className="container m-auto px-2 pt-10">
      <h2 className="home-divider">
        <span className="home-divider-textbox">Popular Resources</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 gap-10">
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
