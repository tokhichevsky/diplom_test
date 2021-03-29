import React from "react";
import CSS from "./Navigation.module.scss";

const Navigation = (props) => {
  return (
    <nav className={CSS.Navigation}>
      {props.children}
    </nav>
  )
}

export default Navigation;
