import RoundButton from "../../UI/RoundButton/RoundButton";
import {useCallback, useState} from "react";
import {CreateIntervalButtonProps} from "./CreateIntervalButton.model";
import {playSound} from "../../../models/Test.model";

const CreateIntervalButton = (props: CreateIntervalButtonProps) => {
  const [intervalBounds, setIntervalBounds] = useState({start: null, end: null});
  const buttonClickHandler = useCallback(() => {
    const currentTime = Date.now();
    playSound();
    setIntervalBounds(prevState => {
      const newState = {...prevState};
      if (newState.start === null) newState.start = currentTime;
      else if (newState.end === null) {
        newState.end = currentTime;
        props.onComplete && props.onComplete(Object.values(newState) as [number, number]);
      }
      return newState;
    });
    props.onClick && props.onClick();
  }, [props]);

  return (
    <RoundButton
      className={props.className}
      onClick={buttonClickHandler}
      disabled={intervalBounds.end !== null}
    >
      {!intervalBounds.start ? "Начать" : "Завершить"}
    </RoundButton>
  );
};

export default CreateIntervalButton;
