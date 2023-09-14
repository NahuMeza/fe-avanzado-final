import { createContext, useState } from "react";
import { useInfo } from "../Hooks/useInfo";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const {gralApiCall, globalData, setGlobalData} = useInfo();
  const [favsDentist, setFavsDentist] = useState(localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []);


  return (
    <ContextGlobal.Provider value={{globalData, gralApiCall, setGlobalData, favsDentist, setFavsDentist }}>
      {children}
    </ContextGlobal.Provider>
  );
};
