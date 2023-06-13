import React from "react";
import OtherResourcesItem from "./OtherResourcesItem";
import BarLoader from "react-spinners/BarLoader";

function PopularResources({
  topThreeResources,
  resourcesArray,
  setResourcesArray,
  isLoading,
}) {
  return (
    <div className="main-div">
      <h2 className="home-divider">
        <span className="home-divider-textbox">Popular Resources</span>
      </h2>
      <div className="column-div">
        {isLoading ? (
          <BarLoader color="#778ac6" />
        ) : (
          topThreeResources.map((resource) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default PopularResources;
