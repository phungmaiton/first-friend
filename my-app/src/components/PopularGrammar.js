import React from "react";
import GrammarItem from "./GrammarItem";

function PopularGrammar({ topThreeGrammar, grammarArray, setGrammarArray }) {
  return (
    <div className="container m-auto px-2 pt-10">
      <h2 className="home-divider">
        <span className="home-divider-textbox">Popular Grammar</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 gap-10">
        {topThreeGrammar.map((grammar) => (
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
    </div>
  );
}

export default PopularGrammar;
