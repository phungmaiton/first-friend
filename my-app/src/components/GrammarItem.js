import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function GrammarItem({ image, title, description, link }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  function handleDescClick() {
    setShowFullDescription((showFullDescription) => !showFullDescription);
  }

  return (
    <div>
      <Card sx={{ maxWidth: 370, minHeight: 410, marginBottom: "20px" }}>
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
        <CardContent sx={{ minHeight: 150 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            onClick={handleDescClick}
            style={{ cursor: "pointer" }}
            variant="body2"
            color="text.secondary"
          >
            {showFullDescription
              ? description
              : description.substring(0, 100) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{ color: "#D8766D" }}
            href={link}
            target="_blank"
            size="small"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default GrammarItem;
