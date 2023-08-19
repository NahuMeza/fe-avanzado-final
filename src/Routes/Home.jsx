// import Card from "../Components/Card";
import axios from "axios";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const [dentistData, setDentistData] = useState([]);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {setDentistData(response.data);})
  },[])
  
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentistData.map((dentist) => {
          return <Card 
            key={dentist.id} 
            name={dentist.name} 
            email={dentist.email} 
            id={dentist.id} 
            username={dentist.username}
          />
          })}
      </div>
    </main>
  );
};

export default Home;
