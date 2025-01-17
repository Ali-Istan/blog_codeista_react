import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";

function Authors() {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgb(0,0,0,0.1 ) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar
                src={author.avatar.url}
                sx={{ width: 50, height: 50, marginLeft: 2 }}
              />
              <Typography component={"p"} variant="p" color={"text.secondray"}>
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
