import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../../shared/CardEl";
import Loader from "../../shared/Loader";

function Blogs() {
  const { loading, error, data } = useQuery(GET_BLOG_INFO);

  if (loading) return <Loader />;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post}></CardEl>
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
