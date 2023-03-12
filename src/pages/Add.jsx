import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DriversForm from "../components/forms/DriversForm";
import { DriversContext } from "../components/contexts/drivers.context";

function Add() {
  const { addDriver } = useContext(DriversContext);
  const navigate = useNavigate();

  const submitHandler = (data) => {
    addDriver(data);
    navigate("/");
  };
  return (
    <>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        Add a Driver
      </Typography>
      <Typography paragraph={true} sx={{ mb: 3 }}>
        You can add a driver's details using the fields below:
      </Typography>
      <DriversForm submitHandler={submitHandler} />
    </>
  );
}

export default Add;
