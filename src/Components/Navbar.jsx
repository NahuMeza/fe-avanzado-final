//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <NavLink to="/" > Home </NavLink>
      <NavLink to="/favs" > Favs </NavLink>
      <NavLink to="/contact" > Contact </NavLink>
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
