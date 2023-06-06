import React from "react";
import VideoItem from "./VideoItem";

function PopularVideos({ topThreeVideos, videoArray, setVideoArray }) {
  return (
    <div className="container m-auto px-2 mt-20 mb-20">
      <div className="grid grid-cols-3 gap-3">
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
