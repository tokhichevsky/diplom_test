import React from "react";
import CSS from "./Footer.module.scss"
import classnames from "classnames";

const Footer = (props: {className?: string}) => {
  return (
    <footer className={classnames(CSS.Footer, props.className)} />
  )
}

export default Footer;
