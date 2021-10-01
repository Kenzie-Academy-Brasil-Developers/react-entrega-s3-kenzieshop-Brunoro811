import Button from "../Button";
import { Container } from "./styles";
function CardProduct({ name, price, image, data, handleAddCart }) {
  return (
    <Container>
      <li>
        <img src={`${image}`} alt={name} />
      </li>
      <li>{name}</li>
      <li>R${price}</li>
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
