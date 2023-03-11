import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DriversForm from "../components/forms/DriversForm";

function Update() {
  const { id } = useParams();
  // get car and handler to form
  return (
    <>
      <Typography variant="h2" component="h1">
        Update a Driver
      </Typography>
      <DriversForm />
    </>
  );
}

export default Update;
