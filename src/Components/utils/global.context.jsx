import { createContext, useReducer } from "react";

const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const reducer = (state, action) =>{
    switch (action.type) {
      case "SET_THEME":
        return {...state, theme: action.payload}
      case "SET_DATA":
        return {...state, data: action.payload}
      default:
        return state
    }
  }
  const [globalData, setGlobalData] = useReducer(reducer, initialState)
  
  return (
    <ContextGlobal.Provider value={{globalData, setGlobalData}}>
      {children}
    </ContextGlobal.Provider>
  );
};
