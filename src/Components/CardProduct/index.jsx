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
        <button onClick={() => handleAddCart(data)}>
          Adicionar ao Carrinho
        </button>
      </li>
    </Container>
  );
}
export default CardProduct;
