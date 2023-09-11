import { createContext } from "react";
import { useInfo } from "../Hooks/useInfo";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const {gralApiCall, globalData, setGlobalData} = useInfo();
  const favIds = JSON.parse(localStorage.getItem("fav")) || [];


  return (
    <ContextGlobal.Provider value={{globalData, gralApiCall, setGlobalData, favIds}}>
      {children}
    </ContextGlobal.Provider>
  );
};
