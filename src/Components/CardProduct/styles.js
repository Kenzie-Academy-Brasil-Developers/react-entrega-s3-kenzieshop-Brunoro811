import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  max-width: 170px;
  height: 220px;
  padding: 10px;
  border: 1px solid #cfcad1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  li {
    padding: 2px 0px;
  }
  li img {
    width: 100%;
    max-width: 120px;
  }
`;
