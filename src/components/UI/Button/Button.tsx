import React from "react";
import {ButtonProps} from "./Button.model";
import classnames from "classnames";
import CSS from "./Button.module.scss";


const Button = (props: ButtonProps) => {
  return (
    <button className={classnames(CSS.Button, props.className)} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  )
}

export default Button;
