import React from "react";
import Typography from "@mui/material/Typography";
import DriversForm from "../components/forms/DriversForm";

function Add() {
  return (
    <>
      <Typography variant="h2" component="h1">
        Add a Driver
      </Typography>
      <DriversForm />
    </>
  );
}

export default Add;
