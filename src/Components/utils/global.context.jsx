import { createContext } from "react";
import { useInfo } from "../Hooks/useInfo";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const {gralApiCall, globalData, setGlobalData} = useInfo();

  return (
    <ContextGlobal.Provider value={{globalData, gralApiCall, setGlobalData}}>
      {children}
    </ContextGlobal.Provider>
  );
};
