import { useNavigate } from "react-router-dom";
import { useFav } from "./Hooks/useFav"
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { globalData } = useContext(ContextGlobal);
  const navigate = useNavigate();
  const {isFav, setIsFav} = useFav({id});
  return (
    <div className="card" style={{ backgroundColor: globalData.darkTheme ? "#242425" : ""}} >
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className="card-info" onClick={() => {navigate(`/dentist/${id}`)}}>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <p>id:{id}</p>
      </div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button 
        className="favButton" 
        onClick={() => {!isFav ? setIsFav({type: "SET_FAV", payload: id}) : setIsFav({type: "REMOVE_FAV", payload: id})}}
      >
        {!isFav ? "Add fav" : "Delete Fav"}
      </button>
    </div>
  );
};

export default Card;
