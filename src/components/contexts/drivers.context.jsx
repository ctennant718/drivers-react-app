import React, { createContext, useState, useCallback, useContext } from "react";
import { DRIVERS_ENDPOINT, STORAGE_KEY } from "../../settings";
import { UIContext } from "./UI.context";

export const DriversContext = createContext({
  fetchDrivers: () => [],
  addDriver: () => {},
  updateDriver: () => {},
  deleteDriver: () => {},
  loaded: false,
  loading: false,
  error: null,
  drivers: [],
});

export const DriversProvider = ({ children }) => {
  const { showMessage } = useContext(UIContext);
  const [drivers, setDrivers] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  });
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchDrivers = useCallback(async () => {
    if (loading || loaded || error) {
      return;
    }
    setLoading(true);
    try {
      console.log(`Fetching from ${DRIVERS_ENDPOINT}.`);
      const response = await fetch(DRIVERS_ENDPOINT);
      if (!response.ok) {
        throw response;
      }
      const data = await response.json();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setDrivers(data);
    } catch (err) {
      console.log("Error", err);
      setError(`Failed to load drivers`);
    } finally {
      setLoaded(true);
      setLoading(false);
    }
  }, [error, loaded, loading, setError, setDrivers, setLoaded, setLoading]);

  const addDriver = useCallback(
    async (formData) => {
      console.log("About to add", formData);
      try {
        const response = await fetch(DRIVERS_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.status !== 201) {
          throw response;
        }
        const savedDriver = await response.json();
        console.log("Got data", savedDriver);
        const newDrivers = [...drivers, savedDriver];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newDrivers));
        setDrivers(newDrivers);
        showMessage({
          type: "success",
          string: `Congratulations! You're in the race!`,
        });
      } catch (err) {
        console.log(err);
        showMessage({
          type: "error",
          string: `Oh no! There was an error adding your driver details.`,
        });
      }
    },
    [drivers, setDrivers, showMessage],
  );

  const updateDriver = useCallback(
    async (id, formData) => {
      console.log("updating", id, formData);
      let updatedDriver = null;
      const index = drivers.findIndex((driver) => driver._id === id);
      console.log(index);
      if (index === -1) throw new Error(`Driver with index ${id} not found`);
      const oldDriver = drivers[index];
      console.log("oldDriver", oldDriver);

      const updates = {};

      for (const key of Object.keys(oldDriver)) {
        if (key === "_id") continue;
        if (oldDriver[key] !== formData[key]) {
          updates[key] = formData[key];
        }
      }

      try {
        const response = await fetch(`${DRIVERS_ENDPOINT}${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updates),
        });

        if (response.status !== 200) {
          throw response;
        }

        updatedDriver = {
          ...oldDriver,
          ...formData,
        };
        console.log("updatedDriver", updatedDriver);
        const updatedDrivers = [
          ...drivers.slice(0, index),
          updatedDriver,
          ...drivers.slice(index + 1),
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDrivers));
        setDrivers(updatedDrivers);
        showMessage({
          type: "success",
          string: `Driver's details successfully updated.`,
        });
      } catch (err) {
        console.log(err);
        showMessage({
          type: "error",
          string: `Oh no! There was an error updating your driver details.`,
        });
      }
    },
    [drivers, setDrivers, showMessage],
  );

  const deleteDriver = useCallback(
    async (id) => {
      let deletedDriver = null;
      try {
        const response = await fetch(`${DRIVERS_ENDPOINT}${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status !== 204) {
          throw response;
        }
        const index = drivers.findIndex((driver) => driver._id === id);
        deletedDriver = drivers[index];
        const updatedDrivers = [
          ...drivers.slice(0, index),
          ...drivers.slice(index + 1),
        ];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDrivers));
        setDrivers(updatedDrivers);
        console.log(`Deleted ${deletedDriver.firstname}`);
        showMessage({
          type: "info",
          string: `Driver deleted. Maybe next time?`,
        });
      } catch (err) {
        console.log(err);
        showMessage({
          type: "error",
          string: `Oh no! There was an error deleting ${deletedDriver.firstname}`,
        });
      }
    },
    [drivers, setDrivers, showMessage],
  );

  return (
    <DriversContext.Provider
      value={{
        drivers,
        loading,
        error,
        fetchDrivers,
        addDriver,
        updateDriver,
        deleteDriver,
      }}
    >
      {children}
    </DriversContext.Provider>
  );
};
