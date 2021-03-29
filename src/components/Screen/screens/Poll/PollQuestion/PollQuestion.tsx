import {PollQuestionProps} from "./PollQuestion.model";
import CSS from "./PollQuestion.module.scss";
import RadioButton from "../../../../UI/RadioButton/RadioButton";
import classnames from "classnames";

const PollQuestion = (props: PollQuestionProps) => {
  return (
    <div className={classnames(CSS.PollQuestion, props.className)}>
      <div className={CSS.PollQuestion__text}>{props.question.text}</div>
      <div className={classnames(CSS.PollQuestion__answer, {[CSS.PollQuestion__answer_chosen]: typeof props.value === "boolean"})}>
        <RadioButton
          id="yes"
          name={props.name}
          text="Да"
          value={props.value === true}
          onChange={props.onChange.bind(null, true)}
        />
        <RadioButton
          id="no"
          name={props.name}
          text="Нет"
          value={props.value === false}
          onChange={props.onChange.bind(null, false)}
        />
      </div>
    </div>
  );
};

export default PollQuestion;
