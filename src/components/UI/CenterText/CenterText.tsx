import React from "react";
import CSS from "./CenterText.module.scss";
import classnames from "classnames";

const CenterText = (props: React.ComponentProps<any>) => {
  return (
    <div className={classnames(CSS.CenterText, props.className)}>
      {props.children}
    </div>
  )
}

export default CenterText;
