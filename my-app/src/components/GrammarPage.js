import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import GrammarItem from "./GrammarItem";
import Banner from "./Banner";

function GrammarPage() {
  const [grammarArray, setGrammarArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/grammar")
      .then((resp) => resp.json())
      .then((grammar) => setGrammarArray(grammar));
  }, []);
  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="Grammar"
        subTitle="Learn Some Grammar"
        background="https://a.cdn-hotels.com/gdcs/production125/d653/a01517ea-0ec0-4639-b862-33922c62f04a.jpg"
      />
      <div className="container m-auto px-2 mt-10">
        <div className="grid grid-cols-3 gap-3">
          {grammarArray.map((grammar) => (
            <GrammarItem
              key={grammar.id}
              title={grammar.name}
              image={grammar.image}
              description={grammar.description.substring(0, 100)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GrammarPage;
