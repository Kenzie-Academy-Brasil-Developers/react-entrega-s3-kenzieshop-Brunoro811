import styled from "styled-components";
export const Carrinho = styled.div`
  width: 100%;
  max-width: 250px;
  min-height: 200px;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px 0px #000000;
  border-radius: 0px 0px 5px 5px;
  padding: 10px;
  margin: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ul {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid dimgray;
    margin-bottom: 5px;
  }
  .iconProductCard {
    width: 50px;
  }
`;
export const Close = styled.button`
  width: 100%;
  max-width: 150px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: #9c1420;
  color: #ffffff;
  border-radius: 3px;
  border: none;
`;
