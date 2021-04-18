import Input from "../../UI/Input/Input";
import CSS from "./TimeInputWindow.module.scss";
import {TimeInputWindowProps} from "./TimeInputWindow.model";
import classnames from "classnames";
import Button from "../../UI/Button/Button";
import {ChangeEvent, useState} from "react";
import {secondsToTimeString} from "../../../utils";

const TimeInputWindow = (props: TimeInputWindowProps) => {
  const [time, setTime] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const saveButtonClickHandler = () => {
    props.onComplete && props.onComplete(Number(time));
    setIsAnswered(true);
  };

  return (
    <div className={classnames(CSS.TimeInputWindow, {[CSS.TimeInputWindow_filled]: isAnswered}, props.className)}>
      <p><b>Сколько длился указанный промежуток времени?</b></p>
      <div className={CSS.TimeInputWindow__field}>
        <span
          className={classnames(CSS.TimeInputWindow__completedIcon, {[CSS.TimeInputWindow__completedIcon_show]: isAnswered})}
        >
          ✔
        </span>
        <Input
          type="number"
          value={time}
          className={CSS.TimeInputWindow__input}
          onChange={inputChangeHandler}
          min="0"
        />
        секунд{" / "}
        <b>({secondsToTimeString(Number(time))})</b>
      </div>
      <Button disabled={!time} onClick={saveButtonClickHandler}>Ответить</Button>
    </div>
  );
};

export default TimeInputWindow;
