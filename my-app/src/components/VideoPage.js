import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import VideoSection from "./VideoSection";
import Pagination from "./Pagination";
import VideoForm from "./VideoForm";

function VideoPage() {
  const [videoArray, setVideoArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((resp) => resp.json())
      .then((videos) => setVideoArray(videos));
  }, [listeningVideos]);

  const listeningVideos = videoArray.filter(
    (video) => video.category === "listening"
  );

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
