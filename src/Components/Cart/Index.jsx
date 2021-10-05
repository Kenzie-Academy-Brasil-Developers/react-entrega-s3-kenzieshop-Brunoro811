import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button";
import { Carrinho, Close } from "./styles";
function Cart({ handleRemoveCart, handleEmptyCart }) {
  const { productsCart } = JSON.parse(localStorage.getItem("cart") || []);
  const [total, setTotal] = useState(
    productsCart
      .reduce((acc, value) => acc + value.price, 0)
      .toFixed(2)
      .toString()
      .replace(".", ",")
  );
  useEffect(() => {
    setTotal(
      productsCart
        .reduce((acc, value) => acc + value.price, 0)
        .toFixed(2)
        .toString()
        .replace(".", ",")
    );
  }, [productsCart]);
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
            <li ky={element.price}>
              R${element.price.toFixed(2).toString().replace(".", ",")}
            </li>
            <li>
              <Close onClick={() => handleRemoveCart(indice)}>x</Close>
            </li>
          </ul>
        ))}
      <p>
        <span>Total R$ </span>
        {total}
      </p>
      <Button
        callback={handleEmptyCart}
        isSegundary
        value={"Esvaziar carrinho"}
      />
    </Carrinho>
  );
}
export default Cart;
