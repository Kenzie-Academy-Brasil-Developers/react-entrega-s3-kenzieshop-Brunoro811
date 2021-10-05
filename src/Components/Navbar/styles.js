import styled from "styled-components";
export const Nav = styled.ul`
  width: 100vw;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px #000000;
  margin-bottom: 1px;
  li ::nth-child(1) {
    float: left;
  }
  li h3 {
    font-size: 25px;
  }
  li h3 span {
    color: #e27800;
  }
  li {
    display: inline-flex;
    padding: 7px;
    justify-content: center;
    line-height: 25px;
    a {
      color: #2b282c;
      font-weight: bold;
      :hover {
        text-decoration: underline;
        color: #e27800;
      }
    }
  }
`;
