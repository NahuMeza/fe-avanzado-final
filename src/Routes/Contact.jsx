import Form from "../Components/Form";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { globalData } = useContext(ContextGlobal);
  return (
    <div className={`contact ${globalData.darkTheme ? "dark" : ""}`} style={{height:"100%"}}>
      <div>
        <h2>Want to know more?</h2>
        <p>Send us your information and we will contact you</p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
