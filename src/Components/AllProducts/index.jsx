import { Container } from "./styles";

import { useSelector, useDispatch } from "react-redux";

import CardProduct from "../CardProduct";
import {
  addProductThunk,
  removeProductThunk,
  SeachThunk,
  ClearCartThunk,
} from "../../Store/Modules/Cart/thunks";
import Cart from "../Cart/Index";
import { useEffect } from "react";

function AllProducts() {
  const products = [
    {
      id: 0,
      name: "Echo Dot",
      price: 279.0,
      image: "https://i.imgur.com/DezCY.png",
    },
    {
      id: 1,
      name: "Kindle Paperwhite",
      price: 499.0,
      image: "https://i.imgur.com/DezCY.png",
    },
  ];

  const { productsCart, status } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleAddCart = (data) => {
    dispatch(addProductThunk(data));
  };
  const handleRemoveCart = (idCart) => {
    const data = productsCart.filter((element, indice) => indice !== idCart);
    dispatch(removeProductThunk(data));
  };
  const handleEmptyCart = () => {
    localStorage.clear();
    dispatch(ClearCartThunk());
  };
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      dispatch(SeachThunk(cart));
    }
  }, []);
  return (
    <>
      <Container>
        {products[0] &&
          products.map((element, indice) => (
            <CardProduct
              key={indice}
              image={element.image}
              name={element.name}
              price={element.price}
              data={element}
              handleAddCart={handleAddCart}
            />
          ))}
      </Container>
      {status && (
        <Cart
          handleRemoveCart={handleRemoveCart}
          handleEmptyCart={handleEmptyCart}
        />
      )}
    </>
  );
}
export default AllProducts;
