import styled from "styled-components";
export const Carrinho = styled.div`
  width: 100%;
  max-width: 250px;
  min-height: 150px;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px 0px #000000;
  border-radius: 0px 0px 5px 5px;
  padding: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 600px) {
    margin: 0px auto;
  }
  ul {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid dimgray;
    margin-bottom: 5px;
    transition: 0.5s;
    li {
      /* text-align: center; */
      font-size: 0.8rem;
    }

    li ::nth-last-child(n) {
      justify-content: flex-end;
    }
  }
  .iconProductCard {
    width: 50px;
  }
  p {
    width: 100%;
    text-align: end;
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
