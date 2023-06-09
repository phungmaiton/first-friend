import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import GrammarPage from "./GrammarPage";
import BooksPage from "./BooksPage";
import VideoPage from "./VideoPage";
import OtherResourcesPage from "./OtherResourcesPage";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  const [grammarArray, setGrammarArray] = useState([]);
  const [videoArray, setVideoArray] = useState([]);
  const [booksArray, setBooksArray] = useState([]);
  const [resourcesArray, setResourcesArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("default");

  const location = useLocation();

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
    fetch("http://localhost:3000/resources")
      .then((resp) => resp.json())
      .then((resources) => setResourcesArray(resources));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <AnimatePresence initial={false} />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home
              booksArray={booksArray}
              setBooksArray={setBooksArray}
              grammarArray={grammarArray}
              setGrammarArray={setGrammarArray}
              videoArray={videoArray}
              setVideoArray={setVideoArray}
              resourcesArray={resourcesArray}
              setResourcesArray={setResourcesArray}
            />
          }
        />
        <Route
          path="/books"
          element={
            <BooksPage
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              booksArray={booksArray}
              setBooksArray={setBooksArray}
              sort={sort}
              setSort={setSort}
            />
          }
        />
        <Route
          path="/grammar"
          element={
            <GrammarPage
              searchTerm={searchTerm}
              grammarArray={grammarArray}
              setGrammarArray={setGrammarArray}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path="/videos"
          element={
            <VideoPage videoArray={videoArray} setVideoArray={setVideoArray} />
          }
        />
        <Route
          path="/resources"
          element={
            <OtherResourcesPage
              resourcesArray={resourcesArray}
              setResourcesArray={setResourcesArray}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sort={sort}
              setSort={setSort}
            />
          }
        />
      </Routes>
      {/* <SearchSort setSearchTerm={setSearchTerm} /> */}
      <AnimatePresence />
      <Footer />
    </div>
  );
}

export default App;
