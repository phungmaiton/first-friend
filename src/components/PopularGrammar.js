import React from "react";
import GrammarItem from "./GrammarItem";
import BarLoader from "react-spinners/BarLoader";

function PopularGrammar({
  topThreeGrammar,
  grammarArray,
  setGrammarArray,
  isLoading,
}) {
  return (
    <div className="main-div">
      <h2 className="home-divider">
        <span className="home-divider-textbox">Popular Grammar</span>
      </h2>
      <div className="column-div">
        {isLoading ? (
          <BarLoader color="#778ac6" />
        ) : (
          topThreeGrammar.map((grammar) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default PopularGrammar;
