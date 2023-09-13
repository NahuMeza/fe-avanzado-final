import { useContext, useReducer } from "react";
import { ContextGlobal } from "../utils/global.context";

  export const useFav = ({id}) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const {favIds} = useContext(ContextGlobal);
    const dispatch = (state, action) => {
      switch (action.type) {
        case "SET_FAV":
          favIds.push(action.payload);
          localStorage.setItem("fav", JSON.stringify(favIds));
          return true;
        case "REMOVE_FAV":
          favIds.splice(favIds.indexOf(action.payload), 1);
          localStorage.setItem("fav", JSON.stringify(favIds));
          return false;
        default:
          return state;
      }
    };
    const [isFav, setIsFav] = useReducer(dispatch, favIds.includes(id));
    return {isFav, setIsFav};
  };