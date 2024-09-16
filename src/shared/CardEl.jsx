import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CardEl({ title, slug, coverPhoto, author }) {
  return (
    <Card sx={{ boxShadow: "rgb(0,0,0,0.1 ) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          title={
            <Typography component={"p"} variant="p" color={"text.secondray"}>
              {author.name}
            </Typography>
          }
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
        />
      )}

      <CardMedia
        component={"img"}
        height={"194"}
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component={"h1"}
          variant="h6"
          color={"text.primary"}
          fontWeight={"600"}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 10 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEl;
