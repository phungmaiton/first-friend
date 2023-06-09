import React from "react";
import { useState } from "react";
import GrammarItem from "./GrammarItem";
import Banner from "./Banner";
import Pagination from "./Pagination";
import GrammarForm from "./GrammarForm";
import PageTransition from "./PageTransition";
import SearchSort from "./SearchSort";

function GrammarPage({
  grammarArray,
  setGrammarArray,
  searchTerm,
  setSearchTerm,
  sort,
  setSort,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const filteredItems = grammarArray
    .filter((grammar) => {
      return (
        grammar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        grammar.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sort === "name") {
        return a.name.localeCompare(b.name);
      } else if (sort === "likes") {
        return b.likes - a.likes;
      } else if (sort === "id") {
        return a.id - b.id;
      }
    });

  const currentPosts = () => {
    if (searchTerm == "" && sort == "default") {
      return grammarArray.slice(indexOfFirstPost, indexOfLastPost);
    } else {
      return filteredItems.slice(indexOfFirstPost, indexOfLastPost);
    }
  };

  return (
    <PageTransition>
      <Banner
        pageTitle="Grammar"
        subTitle="Build your Korean language knowledge."
        background="https://a.cdn-hotels.com/gdcs/production125/d653/a01517ea-0ec0-4639-b862-33922c62f04a.jpg"
      />

      <div>
        <SearchSort setSearchTerm={setSearchTerm} setSort={setSort} />
      </div>

      {/* <div className="search container m-auto px-2 pt-10 pb-10">
        <input
          onChange={handleChange}
          type="text"
          className="searchTerm"
          placeholder="Search..."
        />
      </div> */}

      <div className="container m-auto px-2 pb-20">
        <div className="column-div">
          {currentPosts().map((grammar) => (
            <GrammarItem
              grammar={grammar}
              key={grammar.id}
              id={grammar.id}
              title={grammar.name}
              image={grammar.image}
              description={grammar.description}
              link={grammar.link}
              likes={grammar.likes}
              setGrammarArray={setGrammarArray}
              grammarArray={grammarArray}
            />
          ))}
        </div>
        <Pagination
          paginate={paginate}
          array={filteredItems}
          postsPerPage={postsPerPage}
        />
      </div>
      <GrammarForm array={grammarArray} setArray={setGrammarArray} />
    </PageTransition>
  );
}

export default GrammarPage;
