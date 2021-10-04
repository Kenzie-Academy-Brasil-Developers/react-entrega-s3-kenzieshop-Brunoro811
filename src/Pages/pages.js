import styled from "styled-components";
export const ContainerShopping = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
export const ContainerHome = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;
