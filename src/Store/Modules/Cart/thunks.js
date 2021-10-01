import { AddProduct, RemoveProduct } from "./actions";

export const ClearCartThunk = () => {
  return (dispatch, getState) => {
    const updateProduct = {
      productsCart: [],
      status: true,
    };
    localStorage.setItem("cart", JSON.stringify(updateProduct));
    dispatch(AddProduct(updateProduct));
  };
};

export const SeachThunk = (backupCart) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updateProduct = {
      ...cart,
      ...backupCart,
    };
    localStorage.setItem("cart", JSON.stringify(updateProduct));
    dispatch(AddProduct(updateProduct));
  };
};

export const addProductThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updateProduct = {
      ...cart,
      productsCart: [...cart.productsCart, product],
      status: true,
    };
    localStorage.setItem("cart", JSON.stringify(updateProduct));
    dispatch(AddProduct(updateProduct));
  };
};

export const removeProductThunk = (products) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    const updateProduct = {
      ...cart,
      productsCart: [...products],
      status: true,
    };
    localStorage.setItem("cart", JSON.stringify(updateProduct));
    dispatch(RemoveProduct(updateProduct));
  };
};
