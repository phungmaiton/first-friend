import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GrammarItem({ image, title, description, link }) {
  // const itemClass = [
  //   "flex",
  //   "justify-center",
  //   "items-center",
  //   "bg-white",
  //   "shadow-lg",
  //   "hover:shadow-xl",
  //   "p-5",
  //   "text-gray",
  //   "cursor-pointer",
  // ];
  return (
    <div>
      <Card sx={{ maxWidth: 370, minHeight: 400, marginBottom: "20px" }}>
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
        <CardContent sx={{ minHeight: 150 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default GrammarItem;
