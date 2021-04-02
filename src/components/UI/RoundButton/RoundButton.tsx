import React from "react";
import classnames from "classnames";
import CSS from "./RoundButton.module.scss";
import {RoundButtonProps} from "./RoundButton.model";


const RoundButton = (props: RoundButtonProps) => {
  return (
    <button
      className={classnames(CSS.RoundButton, props.className)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default RoundButton;
