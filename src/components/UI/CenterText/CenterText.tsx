import React from "react";
import CSS from "./CenterText.module.scss";


const CenterText = (props: React.ComponentProps<any>) => {
  return (
    <div className={CSS.CenterText}>
      {props.children}
    </div>
  )
}

export default CenterText;
