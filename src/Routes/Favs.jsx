//import Card from "../Components/Card";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext, useEffect } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {globalData, gralApiCall} = useContext(ContextGlobal);
  const {favIds} = useContext(ContextGlobal);

  useEffect(() => {
    !globalData.error ? (!globalData.data && gralApiCall()) :  gralApiCall()
  },[]);
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {globalData.data && (globalData.data.filter((dentist) => favIds.includes(dentist.id))).map((dentist) => {
          return <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        })}
      </div>
    </>
  );
};

export default Favs;
