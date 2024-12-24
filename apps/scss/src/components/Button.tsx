import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import s from "./button.module.scss";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button {...props} className={s.button}>
      {props.children}
    </button>
  );
};

export default Button;
