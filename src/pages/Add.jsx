import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import DriversForm from "../components/forms/DriversForm";
import { DriversContext } from "../components/contexts/drivers.context";

function Add() {
  const { addDriver } = useContext(DriversContext);
  return (
    <>
      <Typography variant="h2" component="h1">
        Add a Driver
      </Typography>
      <DriversForm submitHandler={addDriver} />
    </>
  );
}

export default Add;
