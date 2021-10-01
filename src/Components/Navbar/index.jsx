import { Link } from "react-router-dom";
import { Nav } from "./styles";
function Navbar() {
  return (
    <Nav>
      <li>
        <Link to="/">Início</Link>
      </li>
      <li>
        <Link to="/Shopping">Produtos</Link>
      </li>
      <li>
        <Link to="/Cart">Carinho</Link>
      </li>
      <li>
        <Link to="/Login">Entrar</Link>
      </li>
    </Nav>
  );
}
export default Navbar;
