import React, { useState } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Pagination from "./Pagination";
import OtherResourcesItem from "./OtherResourcesItem";
import OtherResourcesForm from "./OtherResourcesForm";
import Footer from "./Footer";

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
    <div>
      <NavBar />
      <Banner
        pageTitle="Other Resources"
        subTitle="Find Some Tips and Tricks"
        background="https://a.cdn-hotels.com/gdcs/production125/d653/a01517ea-0ec0-4639-b862-33922c62f04a.jpg"
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
        <div className="grid grid-cols-1 px-8 sm:grid-cols-2 gap-8 lg:grid-cols-3 gap-10 ">
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
      <Footer />
    </div>
  );
}

export default OtherResourcesPage;
