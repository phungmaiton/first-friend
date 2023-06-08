import React from "react";
import VideoItem from "./VideoItem";

function PopularVideos({ topThreeVideos, videoArray, setVideoArray }) {
  return (
    <div className="main-div">
      <h2 className="home-divider">
        <span className="home-divider-textbox">Popular Videos</span>
      </h2>
      <div className="column-div">
        {topThreeVideos.map((video) => (
          <VideoItem
            key={video.id}
            name={video.name}
            videoUrl={video.videoUrl}
            videoArray={videoArray}
            setVideoArray={setVideoArray}
            id={video.id}
            video={video}
            likes={video.likes}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularVideos;
