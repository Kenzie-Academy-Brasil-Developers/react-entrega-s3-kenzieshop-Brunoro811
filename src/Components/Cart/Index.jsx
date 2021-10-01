import Button from "../Button";
import { Carrinho, Close } from "./styles";
function Cart({ handleRemoveCart, handleEmptyCart }) {
  const { productsCart } = JSON.parse(localStorage.getItem("cart") || []);
  return (
    <Carrinho>
      {productsCart[0] &&
        productsCart.map((element, indice) => (
          <ul key={indice}>
            <li key={element.img}>
              <img
                className="iconProductCard"
                src={`${element.image}`}
                alt={element.name}
              />
            </li>
            <li key={element.name}>{element.name}</li>
            <li ky={element.price}>{element.price}</li>
            <li>
              <Close onClick={() => handleRemoveCart(indice)}>x</Close>
            </li>
          </ul>
        ))}
      <Button
        callback={handleEmptyCart}
        isSegundary
        value={"Esvaziar carrinho"}
      />
    </Carrinho>
  );
}
export default Cart;
