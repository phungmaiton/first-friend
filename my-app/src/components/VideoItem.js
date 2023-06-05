import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function VideoItem({ name, videoUrl, likes }) {
  return (
    <div>
      <Card sx={{ maxWidth: 370, marginBottom: "20px" }}>
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
        <CardContent sx={{ minHeight: 150 }}>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default VideoItem;
