import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { useEffect } from 'react';

import { GlobalStyle } from './components/GlobalStyle';


const AppContext = React.createContext();

const API = "https://69e66d91ce4e908a155f8215.mockapi.io/services";
const initialState = {
  name: "",
  Image:null,
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomepage = () => {
    dispatch({
      type: "UPDATE_HOMEPAGE",
      payload: {
        name: "DK TECHNOLOGIES",
        Image: "/hero.svg",
      },
    });
  };

  const updateAboutpage = () => {
    dispatch({
      type: "UPDATE_ABOUTPAGE",
      payload: {
        name: "DHIRAJ KUSHWAHA",
        Image: "/about1.svg",
      },
    });
  };
  // GET API DATA
    const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log("API Data:",data);
        dispatch({
          type: "GET_SERVICES",
          payload: data, // Assuming the API response has a 'products' field
        });
    }
       catch (error) {
      console.log(error);
    }
};
    
    

  //call the api
 useEffect(() => {
   getServices(API);
 

 }, []);
  

  return (
    <AppContext.Provider value={{ ...state, updateHomepage, updateAboutpage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };