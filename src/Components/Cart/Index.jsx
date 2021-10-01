import { Carrinho, Close } from "./styles";
function Cart({ handleRemoveCart, handleEmptyCart }) {
  const { productsCart } = JSON.parse(localStorage.getItem("cart") || []);
  return (
    <Carrinho>
      {productsCart[0] &&
        productsCart.map((element, indice) => (
          <ul>
            <li>
              <img
                className="iconProductCard"
                src={`${element.image}`}
                alt={element.name}
              />
            </li>
            <li>{element.name}</li>
            <li>{element.price}</li>
            <li>
              <Close onClick={() => handleRemoveCart(indice)}>x</Close>
            </li>
          </ul>
        ))}
      <button onClick={handleEmptyCart}>Esvaziar carrinho</button>
    </Carrinho>
  );
}
export default Cart;
