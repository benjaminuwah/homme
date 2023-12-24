import { ButtonField } from "./ButtonStyle"

const Button = ({ children, variant }) => {
  return <ButtonField variant={variant}> {children} </ButtonField>;
}

export default Button;