import {HTMLProps} from "react";
import CSS from "./Input.module.scss";
import classnames from "classnames";

const Input = (props: HTMLProps<HTMLInputElement>) => {
  return <input
    {...props}
    className={classnames(CSS.Input, props.className, {[CSS.Input_filled]: !!props.value})}
  />
}

export default Input;
