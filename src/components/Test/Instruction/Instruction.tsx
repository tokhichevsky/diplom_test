import CSS from "./Instruction.module.scss";
import {InstructionProps} from "./Instruction.model";
import classnames from "classnames";
import React from "react";

const Instruction = (props: InstructionProps) => {
  const highlight = (children: InstructionProps["children"]) => {
    console.log(props);
    if (props.highlight) {
      return React.Children.map(children, (child) => {
        if (typeof child === "string") {
          let newChild = child;
          props.highlight.forEach((text) => {
            newChild = newChild.replaceAll(
              new RegExp(`([^А-Яа-яё])${text}([^А-Яа-яё])`, "gim"),
              `$1<b>${text[0].toUpperCase()}${text.slice(1)}</b>$2`
            );
          });
          return <span dangerouslySetInnerHTML={{__html: newChild}}/>;
        }
        return child;
      });
    }
    return children;
  };

  return (
    <div className={classnames(CSS.Instruction, props.className)}>
      {highlight(props.children)}
    </div>
  );
};

export default Instruction;
