import React, { useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { DriversContext } from "../components/contexts/drivers.context";

import DriversList from "../components/DriversList";

function DriversListPage() {
  const { drivers, fetchDrivers, deleteDriver, loading, error } = useContext(DriversContext);

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  const deleteHandler = (id) => {
    deleteDriver(id);
  };

  let callStatusComponent = null;

  if (loading) {
    callStatusComponent = <CircularProgress color="secondary" />;
  } else if (error) {
    callStatusComponent = <p>{error}: Loading from localStorage</p>;
  } else if (drivers.length === 0) {
    callStatusComponent = <p>No cars to display</p>;
  }

  return (
    <>
      <Typography variant="h2" component="h2" mb="0.5em">
        Race Sign-Up
      </Typography>
      <Typography paragraph={true}>
        Add your details to take part in the race of a lifetime!
      </Typography>
      {callStatusComponent}
      <DriversList drivers={drivers} deleteHandler={deleteHandler} />
    </>
  );
}

export default DriversListPage;
