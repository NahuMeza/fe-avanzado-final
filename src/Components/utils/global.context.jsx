import { createContext} from "react";
import { useInfo } from "../Hooks/useInfo";


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const {gralApiCall, globalData, setGlobalData} = useInfo();

  return (
    <ContextGlobal.Provider value={{globalData, gralApiCall, setGlobalData}}>
      {children}
    </ContextGlobal.Provider>
  );
};
