import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DriversForm from "../components/forms/DriversForm";
import { DriversContext } from "../components/contexts/drivers.context";

function Update() {
  const { id } = useParams();
  const { drivers, updateDriver } = useContext(DriversContext);

  const driver = drivers.find(({ _id }) => id === _id);

  return (
    <>
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        Update a Driver
      </Typography>
      <Typography paragraph={true} sx={{ mb: 3 }}>
        You can update a driver's details using the fields below:
      </Typography>
      <DriversForm driver={driver} submitHandler={updateDriver} />
    </>
  );
}

export default Update;
