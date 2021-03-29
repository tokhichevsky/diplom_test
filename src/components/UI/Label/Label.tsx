import {HTMLProps} from "react";
import classnames from "classnames";
import CSS from "./Label.module.scss";

const Label = (props: HTMLProps<HTMLLabelElement>) => {
  return (<label {...props} className={classnames(CSS.Label, props.className)}>{props.children}</label>)
}

export default Label;
