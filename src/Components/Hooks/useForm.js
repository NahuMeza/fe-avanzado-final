import { useState } from "react";
import Swal from "sweetalert2";

export const useForm = () => {
      const errorStr = {
    name: "Name must be at least 5 characters long",
    email: "Email must be a valid email",
  }
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [error, setError] = useState(false);

  function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const name = e.target.name.value;
    const email = e.target.email.value;

    if(name.length < 5){
      setNameValid(false);
      setError(errorStr.name);
      return;
    }
    if(!validarEmail(email)){
      setEmailValid(false);
      setError(errorStr.email);
      return;
    }
    setNameValid(true);
    setEmailValid(true);
    setError(false);
    Swal.fire({
        title: "Perfect!",
        text: "The form was sent successfully",
        icon: "success",
        background: "#000",
        color: "#fff"
    });
  }

    return {handleSubmit, nameValid, emailValid, error};
}