import {useCallback, useReducer} from "react";
import axios from "axios";

export const useInfo = () =>{
    const initialState = {theme: "", data: [], error:false};

    const gralApiCall = useCallback(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {setGlobalData({type: "SET_DATA", payload: response.data})})
        .catch((error) => {setGlobalData({type: "SET_ERROR", payload: error})})
    },[]);

    const reducer = (state, action) =>{
        switch (action.type) {
            case "SET_THEME":
                return {...state, theme: action.payload};
            case "SET_DATA":
                return {...state, data: action.payload, error: false};
            case "SET_ERROR":
                return {...state, error: action.payload};
            default:
                return state;
        }
    }

    const [globalData, setGlobalData] = useReducer(reducer, initialState);

    return {gralApiCall, globalData, setGlobalData};
}