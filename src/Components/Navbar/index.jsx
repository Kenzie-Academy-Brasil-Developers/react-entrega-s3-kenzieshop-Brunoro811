import { Link } from "react-router-dom";
import { Nav } from "./styles";
function Navbar() {
  return (
    <Nav>
      <li>
        <h3>
          <span>Shopp</span>ing
        </h3>
      </li>
      <li>
        <Link to="/">Produtos</Link>
      </li>
      <li>
        <Link to="/">Entrar</Link>
      </li>
    </Nav>
  );
}
export default Navbar;
