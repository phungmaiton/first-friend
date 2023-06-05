import React from "react";
import VideoItem from "./VideoItem";

function VideoSection({ sectionTitle, filteredArray }) {
  return (
    <div className="container m-auto px-2 mt-10 mb-10">
      <h2>{sectionTitle}</h2>
      <div className="grid grid-cols-3 gap-3">
        {filteredArray.map((video) => (
          <VideoItem
            key={video.id}
            name={video.name}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
