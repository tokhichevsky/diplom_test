import {patchExperimentRequest} from "api";
import {ScreenTypes} from "models/Screen.model";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {externalId} from "settings";
import useMetronom from "models/Metronom.hook";
import {StageResult, TaskTypes, TestResult} from "models/Test.model";
import {setScreenByType} from "store/screen/screen.actions";
import {setTest} from "store/user/user.actions";
import Button from "../UI/Button/Button";
import Navigation from "../UI/Navigation/Navigation";
import {defaultProps, TaskNames, TestProps} from "./Test.model";
import TestCreate from "./TestCreate/TestCreate";
import TestEstimate from "./TestEstimate/TestEstimate";

const Test = (props: TestProps) => {
  const [results, setResults] = useState<Partial<StageResult>>({});
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState<number>(0);
  const [currentTaskType, setCurrentTaskType] = useState<TaskTypes>(TaskTypes.Estimate);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const dispatch = useDispatch();
  const metronom = useMetronom(props.metronom);
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

  const nextTaskButtonClickHandler = async () => {
    if (!isTasksEnded) {
      if (currentTaskType === TaskTypes.Create) {
        setCurrentIntervalIndex(prevState => prevState + 1);
      }
      setCurrentTaskType(prevState => prevState === TaskTypes.Estimate ? TaskTypes.Create : TaskTypes.Estimate);
      setIsTaskCompleted(false);
    } else {
      try {
        const dispatchedTestUpdate = dispatch(setTest(props.stage, results));
        if (externalId) {
          await patchExperimentRequest({id: externalId, test: dispatchedTestUpdate.payload});
          dispatch(setScreenByType(ScreenTypes.ChooseFix))
        } else {
          dispatch(setScreenByType(props.nextScreen));
        }
      } catch (error) {
        throw error;
      }
    }
  };

  useEffect(() => {
    metronom.start();

    return () => metronom.stop();
  }, []);

  return (
    <>
      <div>
        <h2>{TaskNames[currentTaskType]}</h2>
        {currentTaskType === TaskTypes.Estimate
          ?
          <TestEstimate
            key={`estimate_test_${currentIntervalIndex}`}
            interval={currentInterval}
            onComplete={taskCompleteHandler.bind(null, TaskTypes.Estimate)}
            hideTables={props.hideTables}
          />
          :
          <TestCreate
            key={`create_test_${currentIntervalIndex}`}
            interval={currentInterval}
            onComplete={taskCompleteHandler.bind(null, TaskTypes.Create)}
            hideTables={props.hideTables}
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
              ? "Закончить тренировку"
              : `Закончить этап №${props.stage}`}
        </Button>
      </Navigation>
    </>
  );
};

Test.defaultProps = defaultProps;

export default Test;
