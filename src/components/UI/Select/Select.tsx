import {SelectProps} from "./Select.model";
import CSS from "./Select.module.scss";
import classnames from "classnames";

const Select = (props: SelectProps) => {
  const {options, ...selectProps} = props;
  return (
    <select {...selectProps} className={classnames(CSS.Select, CSS.Select_filled)} >
      {options.map((option, index) => (
        <option key={`${props.name || "select"}_option_${index}`} value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};

export default Select;
