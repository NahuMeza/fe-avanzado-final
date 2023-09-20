import { useForm } from "./Hooks/useForm"
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {handleSubmit, nameValid, emailValid, error} = useForm();

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          style={{ border: !nameValid && "1px solid red" }}
          type="text" 
          id="name"
          name="name"
          placeholder="Name"
        />
        <label htmlFor="email">Email</label>
        <input 
          style={{ border: !emailValid && "1px solid red" }} 
          type="email" 
          id="email" 
          name="email"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
        {error && <p>{error}</p>}
    </div>
  );
};

export default Form;
