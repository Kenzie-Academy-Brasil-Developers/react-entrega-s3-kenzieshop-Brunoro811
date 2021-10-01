import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  max-width: 150px;
  min-height: 30px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${(props) => (props.isSegundary ? `#9c1420` : `#215f97`)};
  color: #ffffff;
  border-radius: 3px;
  border: none;
`;
