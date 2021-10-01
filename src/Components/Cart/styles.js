import styled from "styled-components";
export const Carrinho = styled.div`
  width: 100%;
  max-width: 250px;
  min-height: 200px;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px 0px #000000;
  padding: 10px;
  margin: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ul {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid dimgray;
  }
  .iconProductCard {
    width: 50px;
  }
`;
export const Close = styled.button`
  border: 1px solid red;
  border-radius: 30px;
  background: transparent;
  color: red;
  font-size: 15px;
  margin-left: auto;
`;
