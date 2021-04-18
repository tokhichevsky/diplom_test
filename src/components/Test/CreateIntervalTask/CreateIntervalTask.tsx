import {CreateIntervalTaskProps} from "./CreateIntervalTask.model";
import CSS from "./CreateIntervalTask.module.scss";
import Instruction from "../Instruction/Instruction";
import CreateIntervalButton from "../CreateIntervalButton/CreateIntervalButton";
import {useRef} from "react";
import {secondsToTimeString} from "../../../utils";

const CreateIntervalTask = (props: CreateIntervalTaskProps) => {
  const isStartedRef = useRef(false);

  const intervalButtonClickHandler = () => {
    if (!isStartedRef.current) {
      props.onStart && props.onStart();
      isStartedRef.current = true;
    }
  };

  const intervalButtonCompleteHandler = (timeInterval: [start: number, end: number]) => {
    props.onComplete && props.onComplete((timeInterval[1] - timeInterval[0]) / 1000);
  };
  return (
    <div className={CSS.CreateIntervalTask}>
      <Instruction className={CSS.CreateIntervalTask__instruction}>
        Создайте интервал в <b>{props.time.toString()}</b> сек. {props.time >= 60 && ` / (${secondsToTimeString(props.time)})`}
      </Instruction>
      <CreateIntervalButton
        className={CSS.CreateIntervalTask__intervalButton}
        onClick={intervalButtonClickHandler}
        onComplete={intervalButtonCompleteHandler}
      />
    </div>
  );
};

export default CreateIntervalTask;
