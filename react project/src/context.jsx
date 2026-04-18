import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
const AppContext = React.createContext();

const initialState = {
  name: "",
  Image: "",
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
        name: "ABOUT US",
        Image: "/about.svg",
      },
    });
  };

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