import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';


const AppContext = React.createContext();

const API =
const initialState = {
  name: "",
  Image: null,
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
        dispatch({
          type: "GET_SERVICES",
          payload: data})
        }
      
       catch (error) {
      console.log(error);
    }
};

  //call the api
 useLayoutEffect(() => {
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