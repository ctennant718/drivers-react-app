import React, { createContext, useState, useCallback, useContext } from "react";

export const DogsContext = createContext({
  fetchDogs: () => [],
  addDog: () => {},
  updateDog: () => {},
  deleteDog: () => {},
  loaded: false,
  loading: false,
  error: null,
  cars: [],
});

export const CarsProvider = ({ children }) => {
  const [dogs, setDogs] = useState(() => {
    return JSON.parse(localStorage.getItem("dogs")) || [];
  });
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  
};