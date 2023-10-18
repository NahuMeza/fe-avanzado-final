
import Card from "../Components/Card";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const {gralApiCall, globalData} = useContext(ContextGlobal);
  
  useEffect(() => {
    !globalData.error ? (!globalData.data && gralApiCall()) :  gralApiCall()
  },[]);

  const dataMap = globalData.data ? 
    globalData.data.map((dentist) => {
      return <Card 
        key={dentist.id} 
        name={dentist.name} 
        id={dentist.id} 
        username={dentist.username}
      /> 
    }) : <h1>Loading...</h1>;

  return (
    <main className="home">
      <h1>Home</h1>
      <div className="card-grid">
        { !globalData.error ? dataMap : <h1>Something went wrong!...</h1>}
      </div>
    </main>
  );
};

export default Home;
