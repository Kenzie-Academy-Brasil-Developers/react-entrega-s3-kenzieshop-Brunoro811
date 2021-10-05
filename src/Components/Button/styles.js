import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  max-width: 300px;
  min-height: 30px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${(props) => (props.isSegundary ? `#9c1420` : `#2b282c`)};
  color: #ffffff;
  border-radius: 3px;
  border: none;
`;
