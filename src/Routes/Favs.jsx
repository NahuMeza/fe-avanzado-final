//import Card from "../Components/Card";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favsDentist, globalData} = useContext(ContextGlobal);

  
  return (
    <div className={`${globalData.darkTheme ? "dark" : ""}`} style={{height:"100%"}}>
      <h1>Dentists Favs</h1>
        {favsDentist.length == 0 && <h2>No hay dentistas favoritos...</h2>}
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favsDentist.length != 0 && 
          favsDentist.map((dentist) => <Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username}  />) 
        }
      </div>
    </div>
  );
};

export default Favs;
