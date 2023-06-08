import React from "react";
import OtherResourcesItem from "./OtherResourcesItem";

function PopularResources({ topThreeResources, resourcesArray, setResourcesArray }) {
  return (
    <div className="container m-auto px-2 pt-10">
        <h2 className="home-divider">
            <span className="home-divider-textbox">Popular Resources</span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 gap-10">
        {topThreeResources.map((resource) => (
          <OtherResourcesItem
            resource={resource}
            link={resource.link}
            key={resource.id}
            id={resource.id}
            name={resource.name}
            description={resource.description}
            image={resource.image}
            likes={resource.likes}
            resourcesArray={resourcesArray}
            setResourcesArray={setResourcesArray}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularResources;
