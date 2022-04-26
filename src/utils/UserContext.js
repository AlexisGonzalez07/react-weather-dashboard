import React, {createContext, useContext, useState} from 'react';

export const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext)

const CityProvider = ({children}) => {
    const [cities, setCities] = useState({
        currentcity: '',
        pastCities: [],
        placeholder: ''
    });

    // Function to fetch API

    // Function to add pastCities array

    // Function to deal with placeholder Text

return (
<SearchContext.Provider value={{cities, fetchCity, addHistory}}
    )
}