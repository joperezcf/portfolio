import React from "react";
import "./Body.css";
import Grid from "@mui/material/Grid";

function Body() {
  return (
    <Grid container spacing={2}>
      <Grid className="panel" item xs={4} md={4}></Grid>
      <Grid className="body" item xs={8} md={8}></Grid>
    </Grid>
  );
}

export default Body;
