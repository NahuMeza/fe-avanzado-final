//import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext, useEffect } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {globalData, gralApiCall} = useContext(ContextGlobal);

  useEffect(() => {
    !globalData.error ? (!globalData.data && gralApiCall()) :  gralApiCall()
  },[]);
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {globalData.theme === "" ? <h1>Light</h1> : <h1>Dark</h1>}
      </div>
    </>
  );
};

export default Favs;
