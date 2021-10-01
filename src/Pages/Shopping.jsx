import AllProducts from "../Components/AllProducts";
import Navbar from "../Components/Navbar";
import { ContainerShopping } from "./pages";
function Shopping() {
  return (
    <>
      <Navbar />
      <ContainerShopping>
        <AllProducts />
      </ContainerShopping>
    </>
  );
}
export default Shopping;
