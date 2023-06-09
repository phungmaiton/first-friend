import React from "react";
import VideoItem from "./VideoItem";

function VideoSection({
  sectionTitle,
  filteredArray,
  setVideoArray,
  videoArray,
}) {
  return (
    <div className="container m-auto px-2 pt-10 pb-5">
      <h2 className="video-divider">
        <span className="video-divider-textbox">{sectionTitle}</span>
      </h2>
      <div className="column-div">
        {filteredArray.map((video) => (
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

export default VideoSection;
