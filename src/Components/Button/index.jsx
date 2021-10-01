import { ContainerButton } from "./styles";
function Button({ value, callback, param, isSegundary = false }) {
  return (
    <ContainerButton isSegundary={isSegundary} onClick={() => callback(param)}>
      {value}
    </ContainerButton>
  );
}
export default Button;
