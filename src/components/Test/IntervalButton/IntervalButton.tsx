import RoundButton from "../../UI/RoundButton/RoundButton";
import {useState} from "react";
import {IntervalButtonProps, playBeepSound} from "./IntervalButton.model";

const IntervalButton = (props: IntervalButtonProps) => {
  // const [isStarted, showIsStarted] = useState(false);
  const [intervalBounds, setIntervalBounds] = useState({start: null, end: null});
  const buttonClickHandler = () => {
    setIntervalBounds(prevState => {
      playBeepSound()
      const newState = {...prevState};
      if (newState.start === null) newState.start = Date.now();
      else if (newState.end === null) {
        newState.end = Date.now();
        props.onChange && props.onChange(Object.values(newState) as [number, number])
      }
      return newState;
    })

  }

  return (
    <RoundButton
      onClick={buttonClickHandler}
      disabled={intervalBounds.end !== null}
    >
      {!intervalBounds.start ? "Начать" : "Завершить"}
    </RoundButton>
  )
}

export default IntervalButton;
