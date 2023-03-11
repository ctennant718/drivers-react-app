import React, { useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { DriversContext } from "../components/contexts/drivers.context";
import { UIContext } from "../components/contexts/UI.context";

import DriversList from "../components/DriversList";

function DriversListPage() {
  const { drivers, fetchDrivers, deleteDriver } = useContext(DriversContext);
  const { showMessage } = useContext(UIContext);

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  const deleteHandler = (id) => {
    deleteDriver(id);
  };

  return (
    <>
      <Typography variant="h2" component="h2" mb="0.5em">
        Drivers
      </Typography>
      <Typography paragraph={true}>
        Add your entry to take part in the race of a lifetime!
      </Typography>
      <DriversList drivers={drivers} deleteHandler={deleteHandler} />
    </>
  );
}

export default DriversListPage;
