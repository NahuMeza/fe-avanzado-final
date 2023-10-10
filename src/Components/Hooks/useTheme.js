import { ContextGlobal } from "../utils/global.context"
import { useContext } from "react";


export const useTheme = () => {
    const { setGlobalData, globalData } = useContext(ContextGlobal);
    const changeTheme = () => {
        setGlobalData({type:"SET_THEME", payload: !globalData.darkTheme });
    };
    return{changeTheme}
}