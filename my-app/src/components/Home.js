import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="저희 첫친구입니다."
        subTitle="Your 첫친구 (first friend) in your Korean learning journey!"
        background="https://media.cntraveller.com/photos/612f8458d3abe8f886f19321/16:9/w_2560%2Cc_limit/South%2520Korea_GettyImages-1200320719.jpg"
      />
    </div>
  );
}

export default Home;
