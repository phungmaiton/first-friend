import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import ReactPaginate from "react-paginate";

function VideoPage() {
  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="Videos"
        subTitle="Watch Some Videos"
        background="https://www.worldatlas.com/r/w768/upload/7f/2c/f0/seoul.jpg"
      />
    </div>
  );
}

export default VideoPage;
