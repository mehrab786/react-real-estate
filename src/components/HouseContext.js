import React, {useState, useContext, useEffect, createContext} from 'react';
 
import {housesData} from '../data' ;

export const HouseContext= createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses]= useState(housesData);
  const [country, setCountry]= useState('Location ()');
  const [countries, setCountries]= useState([]);
  const [property, setProperty]= useState('Property type (any)');
  const [properties, setProperties]= useState([]);
  const [price, setPrice]= useState('Price range(any)');
  const [loading, setLoading]= useState(false);



  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
