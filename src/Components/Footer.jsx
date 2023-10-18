import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

const Footer = () => {
  const { globalData } = useContext(ContextGlobal);
  return (
    <footer className={`${globalData.darkTheme ? "dark" : ""}`}>
      <p>Powered by </p>
      <img src="./images/DM.png" alt="DM-logo" />
    </footer>
  );
};

export default Footer;
