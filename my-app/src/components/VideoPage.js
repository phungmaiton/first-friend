import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import VideoSection from "./VideoSection";
import Pagination from "./Pagination";
import VideoForm from "./VideoForm";

function VideoPage({ videoArray, setVideoArray }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const listeningVideos = videoArray.filter(
    (video) => video.category === "listening"
  );

  console.log(videoArray);
  const currentListeningVideos = listeningVideos.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="Videos"
        subTitle="Watch Some Videos"
        background="https://www.worldatlas.com/r/w768/upload/7f/2c/f0/seoul.jpg"
      />
      <VideoSection
        sectionTitle="Listening Videos"
        filteredArray={currentListeningVideos}
        videoArray={videoArray}
        setVideoArray={setVideoArray}
      />
      <Pagination
        paginate={paginate}
        array={listeningVideos}
        postsPerPage={postsPerPage}
      />
      <VideoForm array={videoArray} setArray={setVideoArray} />
    </div>
  );
}

export default VideoPage;
