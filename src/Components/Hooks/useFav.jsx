import { useContext, useReducer } from "react";
import { ContextGlobal } from "../utils/global.context";
import { useDentist } from "./useDentist";

  export const useFav = ({id}) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const {favsDentist, setFavsDentist} = useContext(ContextGlobal);
    const {dentist} = useDentist({id});
    const dispatch = (state, action) => {
      switch (action.type) {
        case "SET_FAV":
          setFavsDentist([...favsDentist, dentist]);
          localStorage.setItem("fav", JSON.stringify([...favsDentist, dentist]));
          return true;
        case "REMOVE_FAV":
          setFavsDentist(favsDentist.filter((dentist) => dentist.id !== id));
          localStorage.setItem("fav", JSON.stringify(favsDentist.filter((dentist) => dentist.id !== id)));
          return false;
        default:
          return state;
      }
    };
    const [isFav, setIsFav] = useReducer(dispatch, favsDentist.some((dentist) => dentist.id === id));
    return {isFav, setIsFav};
  };