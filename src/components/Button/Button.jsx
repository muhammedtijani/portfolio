import { ButtonBack, ButtonFront } from "./ButtonStyles";

const Button = (props) => {
  return (
    <ButtonBack alt={props.alt}>
      {props.children}
      <ButtonFront>{props.children}</ButtonFront>
    </ButtonBack>
  );
};

export default Button;
