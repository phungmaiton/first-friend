import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import PopularGrammar from "./PopularGrammar";
import PopularVideos from "./PopularVideos";
import PopularBooks from "./PopularBooks";

function Home({ grammarArray, setGrammarArray, videoArray, setVideoArray, booksArray, setBooksArray }) {
  const topThreeGrammar = grammarArray
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const topThreeVideos = videoArray
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const topThreeBooks = booksArray
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="저희 첫친구입니다."
        subTitle="Your 첫친구 (first friend) in your Korean learning journey!"
        background="https://media.cntraveller.com/photos/612f8458d3abe8f886f19321/16:9/w_2560%2Cc_limit/South%2520Korea_GettyImages-1200320719.jpg"
      />
      <div className="color-background-section">
        <PopularBooks
          topThreeBooks={topThreeBooks}
          booksArray={booksArray}
          setBooksArray={setBooksArray}
        />
      </div>
      <div className="color-background-section">
        <PopularGrammar
          topThreeGrammar={topThreeGrammar}
          grammarArray={grammarArray}
          setGrammarArray={setGrammarArray}
        />
      </div>
      <div className="color-background-section">
        <PopularVideos
          topThreeVideos={topThreeVideos}
          videoArray={videoArray}
          setVideoArray={setVideoArray}
        />
      </div>
    </div>
  );
}

export default Home;
