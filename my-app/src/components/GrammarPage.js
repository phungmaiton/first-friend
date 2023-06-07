import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import GrammarItem from "./GrammarItem";
import Banner from "./Banner";
import Pagination from "./Pagination";
import GrammarForm from "./GrammarForm";
import Footer from "./Footer";

function GrammarPage({ grammarArray, setGrammarArray }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = grammarArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="Grammar"
        subTitle="Learn Some Grammar"
        background="https://a.cdn-hotels.com/gdcs/production125/d653/a01517ea-0ec0-4639-b862-33922c62f04a.jpg"
      />

      <div className="container m-auto px-2 pt-20 pb-20">
        <div className="grid grid-cols-1 px-8 sm:grid-cols-2 gap-8 lg:grid-cols-3 gap-10 pb-5 ">
          {currentPosts.map((grammar) => (
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
          array={grammarArray}
          postsPerPage={postsPerPage}
        />
      </div>
      <GrammarForm array={grammarArray} setArray={setGrammarArray} />
      <Footer />
    </div>
  );
}

export default GrammarPage;
