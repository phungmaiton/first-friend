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
  }, []);

  const listeningVideos = videoArray.filter(
    (video) => video.category === "listening"
  );

  const currentListeningVideos = listeningVideos.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const entertainmentVideos = videoArray.filter(
    (video) => video.category === "entertainment"
  );

  const currentEntertainmentVideos = entertainmentVideos.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const motivationVideos = videoArray.filter(
    (video) => video.category === "motivation"
  );
  
  const currentMotivationVideos = motivationVideos.slice(
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
      <div className="container m-auto px-2 mt-20 mb-20">
      <VideoSection
        sectionTitle="Listening Videos"
        filteredArray={currentListeningVideos}
      />
      <Pagination
        paginate={paginate}
        array={listeningVideos}
        postsPerPage={postsPerPage}
      />
      <VideoSection
        sectionTitle="Motivational Videos"
        filteredArray={currentMotivationVideos}
      />
      <Pagination
        paginate={paginate}
        array={motivationVideos}
        postsPerPage={postsPerPage}
      />
      <VideoSection
        sectionTitle="Entertainment Videos"
        filteredArray={currentEntertainmentVideos}
      />
      <Pagination
        paginate={paginate}
        array={entertainmentVideos}
        postsPerPage={postsPerPage}
      />
      </div>
      <VideoForm array={videoArray} setArray={setVideoArray} />
    </div>
  );
}

export default VideoPage;
