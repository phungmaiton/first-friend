import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
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
    const updatedLikes = isLiked ? likes - 1 : likes + 1;
    setIsLiked(!isLiked);

    const updateObj = {
      likes: updatedLikes,
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
      <Card
        sx={{
          maxWidth: 370,
          minHeight: 410,
          marginBottom: "20px",
        }}
      >
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
        <div className="card-content">
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
            fontSize="15pt"
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
              : description.substring(0, 120) + "..."}
          </Typography>
        </div>
        <div className="card-action">
          <a href={link} target="_blank">
            <button className="learn-more">Learn More</button>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default GrammarItem;
