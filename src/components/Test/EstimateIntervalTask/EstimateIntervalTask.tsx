import EstimateIntervalButton from "../EstimateIntervalButton/EstimateIntervalButton";
import TimeInputWindow from "../TimeInputWindow/TimeInputWindow";
import {EstimateIntervalTaskProps} from "./EstimateIntervalTask.model";
import CSS from "./EstimateIntervalTask.module.scss";
import {useState} from "react";
import Instruction from "../Instruction/Instruction";

const EstimateIntervalTask = (props: EstimateIntervalTaskProps) => {
  const [isListeningCompleted, setIsListeningCompleted] = useState(false);
  const [isListeningStarted, setIsListeningStarted] = useState(false);

  const intervalListeningCompleteHandler = () => {
    setIsListeningCompleted(true);
    props.onListeningEnd && props.onListeningEnd();
  }

  const intervalListeningStartHandler = () => {
    props.onStart && props.onStart();
    setIsListeningStarted(true);
  }

  return (
    <div className={CSS.EstimateIntervalTask}>
      <Instruction className={CSS.EstimateIntervalTask__instruction}>
        {isListeningCompleted && "Введите длину интервала в окно ниже."}
        {!isListeningCompleted && isListeningStarted && "Ожидайте звука окончания интервала."}
        {!isListeningStarted && "Прослушайте интервал."}
      </Instruction>
      <EstimateIntervalButton
        onStart={intervalListeningStartHandler}
        onComplete={intervalListeningCompleteHandler}
        time={props.interval}
        className={CSS.EstimateIntervalTask__intervalButton}
      />
      {isListeningCompleted &&
      <TimeInputWindow className={CSS.EstimateIntervalTask__inputWindow} onComplete={props.onComplete}/>
      }
    </div>
  )
}

export default EstimateIntervalTask;
