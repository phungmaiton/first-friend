import React, { useState } from "react";
import Banner from "./Banner";
import Pagination from "./Pagination";
import OtherResourcesItem from "./OtherResourcesItem";
import OtherResourcesForm from "./OtherResourcesForm";
import PageTransition from "./PageTransition";
import SearchSort from "./SearchSort";

function OtherResourcesPage({ 
  resourcesArray, 
  setResourcesArray, 
  searchTerm, 
  setSearchTerm,
  dropDown,
  setDropDown,
  sort,
  setSort
}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resourcesArray.slice(indexOfFirstPost, indexOfLastPost);



  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const filteredItems = currentPosts.filter((resource) => {
    return (
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });


  const sortedItems= filteredItems.sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    }
    // else if (sort === 'likes')
    //   return a.likes.localeCompare(b.likes)
  })

  return (
    <PageTransition>
      <Banner
        pageTitle="Other Resources"
        subTitle="Elevate your Korean language skills with various resources."
        background="https://a.cdn-hotels.com/gdcs/production81/d60/e414d9a4-df1b-4e19-976f-b83e8a1b2c8d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
      />
      <div>
        <SearchSort 
          setSearchTerm={setSearchTerm} 
          dropDown={dropDown}
          setDropDown= {setDropDown} 
          filteredItems={filteredItems}
          setSort={setSort}
        />
      </div>
      {/* 
      <div className="search container m-auto px-2 pt-10 pb-10">
        <input
          onChange={handleChange}
          type="text"
          className="searchTerm"
          placeholder="Search..."
        />
      </div>

      <div>
        <select
        onChange = {handleDropDown}
        placeholder="Select"
        />
      </div> */}

      <div className="container m-auto px-2 pb-20">
        <div className="column-div">
          {filteredItems.map((resource) => (
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

        <Pagination
          paginate={paginate}
          array={resourcesArray}
          postsPerPage={postsPerPage}
        />
      </div>

      <OtherResourcesForm
        paginate={paginate}
        resourcesArray={filteredItems}
        postsPerPage={postsPerPage}
        setResourcesArray={setResourcesArray}
      />
    </PageTransition>
  );
}

export default OtherResourcesPage;
