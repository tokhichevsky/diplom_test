import CSS from "./Instruction.module.scss";
import {InstructionProps} from "./Instruction.model";

const Instruction = (props: InstructionProps) => {
  return (
    <div className={CSS.Instruction}>
      {props.children}
    </div>
  )
}

export default Instruction;
