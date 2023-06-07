import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
      <Card sx={{ maxWidth: 468, minHeight: 320 }}>
        <CardMedia>
          <iframe
            width="100%"
            height="220"
            align="center"
            src={videoUrl}
            allowFullScreen
            title={name}
          />
        </CardMedia>
        <CardContent sx={{ minHeight: 121 }}>
          <div className="likes">
            <a className="like-button" onClick={handleClick}>
              {isLiked ? "♥" : "♡"}
            </a>
            Likes: {likes}
          </div>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            lineHeight="1.2em"
            fontSize="14pt"
          >
            {name.length > 80 ? name.substring(0, 60) + "..." : name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default VideoItem;
