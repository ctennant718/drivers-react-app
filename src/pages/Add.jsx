import React from "react";
import Typography from "@mui/material/Typography";
import DogForm from "../components/forms/DogForm";

function Add() {
  return (
    <>
      <Typography variant="h2" component="h1">
        Add a Dog
      </Typography>
      <DogForm />
    </>
  );
}

export default Add;
