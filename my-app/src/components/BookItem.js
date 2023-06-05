import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BookItem({ image, title, description, purchaseUrl }) {
    const [showFullDescription, setShowFullDescription] = useState(false)
    function handleDescClick() {
        setShowFullDescription((showFullDescription) => !showFullDescription)
    }

    return (
        <div>
            <Card sx={{ maxWidth: 370, minHeight: 400, marginBottom: "20px" }}>
                <CardMedia sx={{ height: 250 }} image={image} />
                <CardContent sx={{ minHeight: 150 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography onClick={handleDescClick} style={{cursor:'pointer'}} variant="body2" color="text.secondary">
                        {showFullDescription ? description : description.substring(0, 100) + "..."}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={purchaseUrl} target="_blank" size="small">Buy Now</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default BookItem;