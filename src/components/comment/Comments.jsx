import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import Loader from "../../shared/Loader";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  //   const { slug } = useParams();
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgb(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 1,
        py: 1,
        mt: 9,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component={"p"}
          variant="h6"
          color={"primary"}
          fontWeight={700}
        >
          کامنت ها
        </Typography>
        {data.comments.map((i) => (
          <Grid
            item
            xs={12}
            key={i.id}
            m={2}
            p={2}
            border={"1px silver solid "}
            borderRadius={1}
          >
            <Box
              component={"div"}
              display={"flex"}
              alignItems={"center"}
              mb={3}
            >
              <Avatar>{i.name[0]}</Avatar>
              <Typography
                component={"span"}
                variant="p"
                fontWeight={700}
                mr={1}
              >
                {i.name}
              </Typography>
            </Box>
            <Typography component={"p"} variant="p">
              {i.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comments;
