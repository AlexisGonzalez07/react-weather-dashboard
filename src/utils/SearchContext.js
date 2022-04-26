import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export default function CityProvider({ children }) {
  const [cities, setCities] = useState({
    currentcity: "",
    pastCities: [],
    placeholder: "",
  });

  // Update the state, push to city array, change placeholder
  const updateCity = (city) => {
    const newArray = cities.pastCities.push(city);
    // check if city exits in array, if it does, only change city state, else, add to history array
    cities.pastCities.includes(city)
      ? setCities({ currentcity: city, pastCities: cities.pastCities })
      : setCities({ currentcity: city, pastCities: newArray });
    fetchCity(cities.currentcity);
  };
  // Function to fetch API
  const fetchCity = (cities) => {};

  // Function to add pastCities array

  // Function to deal with placeholder Text

  return (
    <SearchContext.Provider value={{ cities, fetchCity }}>
      {children}
    </SearchContext.Provider>
  );
}
