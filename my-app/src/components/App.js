import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GrammarPage from "./GrammarPage";
import BooksPage from "./BooksPage";
import VideoPage from "./VideoPage";
import { useState, useEffect } from "react";

function App() {
  const [grammarArray, setGrammarArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/grammar")
      .then((resp) => resp.json())
      .then((grammar) => setGrammarArray(grammar));
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                grammarArray={grammarArray}
                setGrammarArray={setGrammarArray}
              />
            }
          />
          <Route path="/books" element={<BooksPage />} />
          <Route
            path="/grammar"
            element={
              <GrammarPage
                grammarArray={grammarArray}
                setGrammarArray={setGrammarArray}
              />
            }
          />
          <Route path="/videos" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
