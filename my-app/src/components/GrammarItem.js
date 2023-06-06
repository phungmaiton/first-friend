import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function GrammarItem({
  image,
  title,
  description,
  link,
  likes,
  id,
  setGrammarArray,
  grammarArray,
  grammar,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  function handleDescClick() {
    setShowFullDescription((showFullDescription) => !showFullDescription);
  }
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    const updateObj = {
      likes: grammar.likes + 1,
    };
    fetch(`http://localhost:3000/grammar/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((resp) => resp.json())
      .then((updatedGrammar) => {
        const newGrammarArray = grammarArray.map((grammar) =>
          grammar.id === id ? updatedGrammar : grammar
        );
        setGrammarArray(newGrammarArray);
      });
  };
  return (
    <div>
      <Card sx={{ maxWidth: 370, minHeight: 410, marginBottom: "20px" }}>
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
        <CardContent sx={{ minHeight: 180 }}>
          <Typography variant="body2" color="text.secondary" textAlign="right">
            Likes: {likes}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            lineHeight="1.2em"
            fontSize="17pt"
          >
            {title}
          </Typography>
          <Typography
            onClick={handleDescClick}
            style={{ cursor: "pointer" }}
            variant="body2"
            color="text.secondary"
            sx={{ minHeight: 10 }}
          >
            {showFullDescription
              ? description
              : description.substring(0, 150) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={link} target="_blank">
            <button class="learn-more">Learn More</button>
          </a>
          <button
            class={isLiked ? "disabled like-button" : "like-button"}
            onClick={handleClick}
            disabled={isLiked}
          >
            {isLiked ? "Liked" : "Like ❤️"}
          </button>
        </CardActions>
      </Card>
    </div>
  );
}

export default GrammarItem;
