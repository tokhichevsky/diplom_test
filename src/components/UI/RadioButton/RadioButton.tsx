import {RadioButtonProps} from "./RadioButton.model";
import CSS from "./RadioButton.module.scss";
import classnames from "classnames";

const RadioButton = (props: RadioButtonProps) => {
  const id = `${props.name}_${props.id}`;
  return (
    <>
      <input
        className={CSS.RadioButton__input}
        checked={props.value}
        type="radio"
        id={id}
        onChange={props.onChange}
      />
      <label className={classnames(CSS.RadioButton__label, props.className)} htmlFor={id}>{props.text}</label>
    </>
  );
};

export default RadioButton;
