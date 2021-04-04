import {defaultProps, TaskNames, TestProps} from "./Test.model";
import {useState} from "react";
import TestEstimate from "./TestEstimate/TestEstimate";
import TestCreate from "./TestCreate/TestCreate";
import Navigation from "../UI/Navigation/Navigation";
import Button from "../UI/Button/Button";
import {useDispatch} from "react-redux";
import {setScreenByType} from "../../store/screen/screen.actions";
import {StageResult, TaskTypes, TestResult} from "../../models/Test.model";
import {setTest} from "../../store/user/user.actions";

const Test = (props: TestProps) => {
  const [results, setResults] = useState<Partial<StageResult>>({});
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState<number>(0);
  const [currentTaskType, setCurrentTaskType] = useState<TaskTypes>(TaskTypes.Estimate);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const dispatch = useDispatch();
  const isTasksEnded = currentIntervalIndex === (props.intervals.length - 1) && currentTaskType === TaskTypes.Create;
  const currentInterval = props.intervals[currentIntervalIndex];

  const taskCompleteHandler = (taskType: TaskTypes, data: TestResult) => {
    setResults(prevState => ({
      ...prevState,
      [currentInterval]: {
        ...prevState[currentInterval],
        [currentTaskType]: data,
      }
    }));
    setIsTaskCompleted(true);
  };

  const nextTaskButtonClickHandler = () => {
    if (!isTasksEnded) {
      if (currentTaskType === TaskTypes.Create) {
        setCurrentIntervalIndex(prevState => prevState + 1);
      }
      setCurrentTaskType(prevState => prevState === TaskTypes.Estimate ? TaskTypes.Create : TaskTypes.Estimate);
      setIsTaskCompleted(false);
    } else {
      dispatch(setTest(props.stage, results))
      dispatch(setScreenByType(props.nextScreen));
    }
  };

  return (
    <>
      <div>
        <h2>{TaskNames[currentTaskType]} №{currentIntervalIndex + 1}</h2>
        {currentTaskType === TaskTypes.Estimate
          ?
          <TestEstimate
            key={`estimate_test_${currentIntervalIndex}`}
            interval={currentInterval}
            metronom={props.metronom}
            onComplete={taskCompleteHandler.bind(null, TaskTypes.Estimate)}
          />
          :
          <TestCreate
            key={`create_test_${currentIntervalIndex}`}
            interval={currentInterval}
            metronom={props.metronom}
            onComplete={taskCompleteHandler.bind(null, TaskTypes.Create)}
          />
        }
      </div>
      <Navigation>
        <div/>
        <Button
          disabled={!isTaskCompleted}
          onClick={nextTaskButtonClickHandler}
        >
          {!isTasksEnded
            ? "Продолжить"
            : props.isTraining
              ? "Закончить тренировку и начать тест"
              : `Закончить этап №${props.stage}`}
        </Button>
      </Navigation>
    </>
  );
};

Test.defaultProps = defaultProps;

export default Test;
