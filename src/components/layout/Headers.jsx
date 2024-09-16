import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Headers() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            وبلاگ کدایستا
          </Typography>

          <BookIcon sx={{ marginLeft: "auto" }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Headers;
