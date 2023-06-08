import React from "react";
import Banner from "./Banner";
import PopularGrammar from "./PopularGrammar";
import PopularVideos from "./PopularVideos";
import PopularBooks from "./PopularBooks";
import PopularResources from "./PopularResources";
import PageTransition from "./PageTransition";

function Home({
  grammarArray,
  setGrammarArray,
  videoArray,
  setVideoArray,
  booksArray,
  setBooksArray,

  resourcesArray,
  setResourcesArray


}) {
  const topThreeGrammar = grammarArray
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const topThreeVideos = videoArray
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const topThreeBooks = booksArray
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const topThreeResources = resourcesArray
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <PageTransition>
      <Banner
        pageTitle="저희는 첫친구라고 합니다."
        subTitle="Your 첫친구 (first friend) in your Korean learning journey!"
        background="https://media.cntraveller.com/photos/612f8458d3abe8f886f19321/16:9/w_2560%2Cc_limit/South%2520Korea_GettyImages-1200320719.jpg"
      />
      <div className="container m-auto px-2 mt-10 mb-20">
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

        <div className="color-background-section">
          <PopularResources
            topThreeResources={topThreeResources}
            resourcesArray={resourcesArray}
            setResourcesArray={setResourcesArray}
          />
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;
