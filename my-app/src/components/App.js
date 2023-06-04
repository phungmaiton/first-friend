import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GrammarPage from "./GrammarPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grammar" element={<GrammarPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
