import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import Banner from "./Banner";
import VideoSection from "./VideoSection";
import Pagination from "./Pagination";
import VideoForm from "./VideoForm";
import Footer from "./Footer";

function VideoPage({ videoArray, setVideoArray }) {
  const [postsPerPage] = useState(3);

  //Listening Pagination
  const [currentListeningPage, setCurrentListeningPage] = useState(1);
  const indexOfLastPostListening = currentListeningPage * postsPerPage;
  const indexOfFirstPostListening = indexOfLastPostListening - postsPerPage;

  const paginateListening = ({ selected }) => {
    setCurrentListeningPage(selected + 1);
  };

  const listeningVideos = videoArray.filter(
    (video) => video.category === "listening"
  );

  const currentListeningVideos = listeningVideos.slice(
    indexOfFirstPostListening,
    indexOfLastPostListening
  );

  //Motivational Pagination
  const [currentMotivationalPage, setCurrentMotivationalPage] = useState(1);
  const indexOfLastPostMotivational = currentMotivationalPage * postsPerPage;
  const indexOfFirstPostMotivational =
    indexOfLastPostMotivational - postsPerPage;

  const paginateMotivational = ({ selected }) => {
    setCurrentMotivationalPage(selected + 1);
  };

  const motivationVideos = videoArray.filter(
    (video) => video.category === "motivation"
  );

  const currentMotivationVideos = motivationVideos.slice(
    indexOfFirstPostMotivational,
    indexOfLastPostMotivational
  );

  //Entertainment Pagination
  const [currentEntertainmentPage, setCurrentEntertainmentPage] = useState(1);
  const indexOfLastPostEntertainment = currentEntertainmentPage * postsPerPage;
  const indexOfFirstPostEntertainment =
    indexOfLastPostEntertainment - postsPerPage;

  const paginateEntertainment = ({ selected }) => {
    setCurrentEntertainmentPage(selected + 1);
  };

  const entertainmentVideos = videoArray.filter(
    (video) => video.category === "entertainment"
  );

  const currentEntertainmentVideos = entertainmentVideos.slice(
    indexOfFirstPostEntertainment,
    indexOfLastPostEntertainment
  );

  return (
    <div>
      <NavBar />
      <Banner
        pageTitle="Videos"
        subTitle="Watch Some Videos"
        background="https://www.gsma.com/newsroom/wp-content/uploads//Korean-Mobile-IoT.jpg"
      />
      <div className="container m-auto px-2 mt-10 mb-20">
        <VideoSection
          sectionTitle="Listening Videos"
          filteredArray={currentListeningVideos}
          videoArray={videoArray}
          setVideoArray={setVideoArray}
        />
        <Pagination
          paginate={paginateListening}
          array={listeningVideos}
          postsPerPage={postsPerPage}
        />
        <VideoSection
          sectionTitle="Motivational Videos"
          filteredArray={currentMotivationVideos}
        />
        <Pagination
          paginate={paginateMotivational}
          array={motivationVideos}
          postsPerPage={postsPerPage}
        />
        <VideoSection
          sectionTitle="Entertainment Videos"
          filteredArray={currentEntertainmentVideos}
        />
        <Pagination
          paginate={paginateEntertainment}
          array={entertainmentVideos}
          postsPerPage={postsPerPage}
        />
      </div>
      <VideoForm array={videoArray} setArray={setVideoArray} />
      <Footer />
    </div>
  );
}

export default VideoPage;
