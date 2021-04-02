import {TestCreateProps} from "./TestCreate.model";
import CheckTable from "../CheckTable/CheckTable";
import {useDispatch, useSelector} from "react-redux";
import {setTableIndexes} from "../../../store/user/user.actions";
import {selectTableIndexes} from "../../../store/user/user.selectors";
import CreateIntervalTask from "../CreateIntervalTask/CreateIntervalTask";
import {useState} from "react";
import useMetronom from "../../../models/Metronom.hook";
import tables from "../../../models/tables";

const TestCreate = (props: TestCreateProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [tablesScore, setTablesScore] = useState({correct: 0, wrong: 0})
  const dispatch = useDispatch();
  const metronom = useMetronom(props.metronom);
  const {tableIndex: currentTableIndex, taskIndex: currentTaskIndex} = useSelector(selectTableIndexes);

  const cellClickHandler = (isValid, tableIndex, taskIndex) => {
    dispatch(setTableIndexes(tableIndex, taskIndex));
    const scoreName = isValid ? "correct" : "wrong";
    setTablesScore(prevState => ({
      ...prevState,
      [scoreName]: prevState[scoreName] + 1
    }))
  };

  const completeTaskHandler = (time) => {
    metronom.stop();
    const data = {
      tablesScore,
      time
    }
    props.onComplete && props.onComplete(data)
    setIsEnded(true)
  };

  const startTaskHandler = () => {
    setIsStarted(true);
    metronom.start()
  };

  return (
    <div>
      <CreateIntervalTask time={props.interval} onStart={startTaskHandler} onComplete={completeTaskHandler}/>
      {isStarted &&
      <CheckTable
        data={tables}
        onCellClick={cellClickHandler}
        startTableIndex={currentTableIndex}
        startTaskIndex={currentTaskIndex}
        disabled={isEnded}
      />
      }
    </div>
  );
};

export default TestCreate;
