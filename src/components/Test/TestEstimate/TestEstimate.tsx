import CheckTable from "../CheckTable/CheckTable";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTableIndexes} from "../../../store/user/user.actions";
import EstimateIntervalTask from "../EstimateIntervalTask/EstimateIntervalTask";
import {TestEstimateProps} from "./TestEstimate.model";
import {selectTableIndexes} from "../../../store/user/user.selectors";
import tables from "../../../models/tables";

const TestEstimate = (props: TestEstimateProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [tablesScore, setTablesScore] = useState({correct: 0, wrong: 0})
  const dispatch = useDispatch();
  const currentTableIndex = useSelector(selectTableIndexes).tableIndex;

  const cellClickHandler = (isValid, tableIndex, taskIndex) => {
    dispatch(setTableIndexes(tableIndex, taskIndex));
    const scoreName = isValid ? "correct" : "wrong";
    setTablesScore(prevState => ({
      ...prevState,
      [scoreName]: prevState[scoreName] + 1
    }))
  };
  const taskStartHandler = () => {
    setIsStarted(true);
  }

  const taskCompleteHandler = (time) => {
    setIsEnded(true)
    props.onComplete({tablesScore, time})

  }

  const listeningEndHandler = () => {
    setIsEnded(true)
  }

  return (
    <div>
      <EstimateIntervalTask
        interval={props.interval}
        onStart={taskStartHandler}
        onComplete={taskCompleteHandler}
        onListeningEnd={listeningEndHandler}
      />
      {isStarted && !props.hideTables &&
      <CheckTable data={tables} onCellClick={cellClickHandler} startTableIndex={currentTableIndex} disabled={isEnded}/>
      }
    </div>
  )
}

export default TestEstimate;
