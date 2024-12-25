import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3001/";

const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}cities`);
        const data = await response.json();
        setCities(data);
      } catch {
        alert("There is an error fetxching the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  async function getCity(id) {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch {
      alert("There is an error fetxching the data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("Context is used outside of Provider");
  return context;
}

export { CityProvider, useCities };
