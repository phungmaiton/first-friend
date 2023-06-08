import React, { useState } from "react";
import Banner from "./Banner";
import Pagination from "./Pagination";
import OtherResourcesItem from "./OtherResourcesItem";
import OtherResourcesForm from "./OtherResourcesForm";
import PageTransition from "./PageTransition";

function OtherResourcesPage({ linksArray, setLinksArray }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = linksArray.slice(indexOfFirstPost, indexOfLastPost);
  const [searchTerm, setSearchTerm] = useState("");

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const filteredItems = currentPosts.filter((link) => {
    return (
      link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <PageTransition>
      <Banner
        pageTitle="Other Resources"
        subTitle="Elevate your Korean language skills with various resources."
        background="https://a.cdn-hotels.com/gdcs/production81/d60/e414d9a4-df1b-4e19-976f-b83e8a1b2c8d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
      />

      <div className="search container m-auto px-2 pt-10 pb-10">
        <input
          onChange={handleChange}
          type="text"
          className="searchTerm"
          placeholder="Search..."
        />
      </div>

      <div className="container m-auto px-2 pb-20">
        <div className="column-div">
          {filteredItems.map((link) => (
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

        <Pagination
          paginate={paginate}
          array={linksArray}
          postsPerPage={postsPerPage}
        />
      </div>

      <OtherResourcesForm
        paginate={paginate}
        linksArray={linksArray}
        postsPerPage={postsPerPage}
        setLinksArray={setLinksArray}
      />
    </PageTransition>
  );
}

export default OtherResourcesPage;
