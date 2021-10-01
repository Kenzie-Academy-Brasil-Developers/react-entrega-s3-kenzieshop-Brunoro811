import styled from "styled-components";
export const Nav = styled.ul`
  width: 100vw;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px #000000;
  margin-bottom: 1px;
  li {
    display: inline-flex;
    padding: 7px;
    a {
      color: #061750;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
