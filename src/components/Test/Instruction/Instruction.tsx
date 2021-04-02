import CSS from "./Instruction.module.scss";
import {InstructionProps} from "./Instruction.model";
import classnames from "classnames";

const Instruction = (props: InstructionProps) => {
  return (
    <div className={classnames(CSS.Instruction, props.className)}>
      {props.children}
    </div>
  )
}

export default Instruction;
