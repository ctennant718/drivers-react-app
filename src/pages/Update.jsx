import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DogForm from "../components/forms/DogForm";

function Update() {
  const { id } = useParams();
  // get car and handler to form
  return (
    <>
      <Typography variant="h2" component="h1">
        Update a Dog
      </Typography>
      <DogForm />
    </>
  );
}

export default Update;
