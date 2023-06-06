import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function VideoItem({
  name,
  videoUrl,
  likes,
  videoArray,
  setVideoArray,
  video,
  id,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    const updatedLikes = isLiked ? likes - 1 : likes + 1;
    setIsLiked(!isLiked);

    const updateObj = {
      likes: updatedLikes,
    };
    fetch(`http://localhost:3000/videos/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((resp) => resp.json())
      .then((updatedVideo) => {
        const newVideoArray = videoArray.map((video) =>
          video.id === id ? updatedVideo : video
        );
        setVideoArray(newVideoArray);
      });
  };

  return (
    <div>
      <Card sx={{ maxWidth: 370 }}>
        <CardMedia>
          <iframe
            width="370"
            height="200"
            align="center"
            src={videoUrl}
            allowFullScreen
            title={name}
          />
        </CardMedia>
        <CardContent sx={{ minHeight: 100 }}>
          <div className="likes">
            <a className="like-button" onClick={handleClick}>
              {isLiked ? "♥" : "♡"}
            </a>
            Likes: {likes}
          </div>

          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default VideoItem;
