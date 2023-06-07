import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GrammarPage from "./GrammarPage";
import BooksPage from "./BooksPage";
import VideoPage from "./VideoPage";
import OtherResourcesPage from "./OtherResourcesPage"
import { useState, useEffect } from "react";

function App() {
  const [grammarArray, setGrammarArray] = useState([]);
  const [videoArray, setVideoArray] = useState([]);
  const [booksArray, setBooksArray] = useState([]);
  const [linksArray, setLinksArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/grammar")
      .then((resp) => resp.json())
      .then((grammar) => setGrammarArray(grammar));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((resp) => resp.json())
      .then((videos) => setVideoArray(videos));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((resp) => resp.json())
      .then((books) => setBooksArray(books));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/other")
      .then((resp) => resp.json())
      .then((links) => setBooksArray(links));
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
                videoArray={videoArray}
                setVideoArray={setVideoArray}
              />
            }
          />
          <Route 
            path="/books" 
            element={
              <BooksPage 
                booksArray={booksArray}
                setBooksArray={setBooksArray}
              />
            } 
          />
          <Route
            path="/grammar"
            element={
              <GrammarPage
                grammarArray={grammarArray}
                setGrammarArray={setGrammarArray}
              />
            }
          />
          <Route
            path="/videos"
            element={
              <VideoPage
                videoArray={videoArray}
                setVideoArray={setVideoArray}
              />
            }
          />
          <Route 
            path = "/other"
            element={
              <OtherResourcesPage
                linksArray={linksArray}
                setLinksArray={setLinksArray}
              ></OtherResourcesPage>}
              />
              
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
