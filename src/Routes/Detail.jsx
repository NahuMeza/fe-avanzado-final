//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [Dentist, setDentist] = useState(null);
  const { globalData } = useContext(ContextGlobal);
  
  useEffect(() => {
    // fetch a un user en especifico
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {setDentist(response.data)})
        .catch((error) => {console.log(error.response)})
  },[id]);

  return (
    <div className={`detail-container ${globalData.darkTheme ? "dark" : ""}`} style={{height:"100%"}}>
      <h1>Detail Dentist id </h1>
      <div className={`detail`}>
        {Dentist && (
          <>
            <h3>{Dentist.name}</h3>
            <h4>{Dentist.username}</h4>
            <div>
              <p><span style={{fontWeight: "700"}}>id:</span> {Dentist.id}</p>
              <p><span style={{fontWeight: "700"}}>email: </span> {Dentist.email}</p>
              <p><span style={{fontWeight: "700"}}>phone:</span> {Dentist.phone}</p>
              <p><span style={{fontWeight: "700"}}>website:</span> {Dentist.website}</p>
            </div>
          </>
        )}
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </div>
  );
};

export default Detail;
