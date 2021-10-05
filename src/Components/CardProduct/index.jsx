import { useState } from "react";
import Button from "../Button";
import { Container } from "./styles";
function CardProduct({ name, price, image, data, handleAddCart }) {
  const [preco] = useState(price.toFixed(2).toString().replace(".", ","));
  return (
    <Container>
      <li>
        <img src={`${image}`} alt={name} />
      </li>
      <li>
        <strong>{name}</strong>
      </li>
      <li>R${preco}</li>
      <li>
        <Button
          callback={handleAddCart}
          param={data}
          value={"Adicionar ao carrinho"}
        />
      </li>
    </Container>
  );
}
export default CardProduct;
