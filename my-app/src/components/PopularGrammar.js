import React from "react";
import GrammarItem from "./GrammarItem";

function PopularGrammar({ topThreeGrammar, grammarArray, setGrammarArray }) {
  return (
    <div className="container m-auto px-2 mt-20 mb-20">
      <div className="grid grid-cols-3 gap-3">
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
