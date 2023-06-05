import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import GrammarItem from "./GrammarItem";
import Banner from "./Banner";
import Pagination from "./Pagination";
import GrammarForm from "./GrammarForm";

function GrammarPage() {
  const [grammarArray, setGrammarArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = grammarArray.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    fetch("http://localhost:3000/grammar")
      .then((resp) => resp.json())
      .then((grammar) => setGrammarArray(grammar));
  }, []);

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

      <div className="container m-auto px-2 mt-20 mb-20">
        <div className="grid grid-cols-3 gap-3">
          {currentPosts.map((grammar) => (
            <GrammarItem
              key={grammar.id}
              title={grammar.name}
              image={grammar.image}
              description={grammar.description}
              link={grammar.link}
              likes={grammar.likes}
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
    </div>
  );
}

export default GrammarPage;
