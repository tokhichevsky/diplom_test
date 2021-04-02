import {metronom, tables} from "../../models/Test.model";
import {TestCreateProps} from "./TestCreate.model";
import CheckTable from "./CheckTable/CheckTable";
import {useDispatch, useSelector} from "react-redux";
import {setTableIndex} from "../../store/user/user.actions";
import {selectTableIndex} from "../../store/user/user.selectors";
import CreateIntervalTask from "./CreateIntervalTask/CreateIntervalTask";
import {useState} from "react";

const TestCreate = (props: TestCreateProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [tablesScore, setTablesScore] = useState({correct: 0, wrong: 0})
  const dispatch = useDispatch();
  const currentTableIndex = useSelector(selectTableIndex);

  const cellClickHandler = (isValid, tableIndex) => {
    dispatch(setTableIndex(tableIndex));
    const scoreName = isValid ? "correct" : "wrong";
    setTablesScore(prevState => ({
      ...prevState,
      [scoreName]: prevState[scoreName] + 1
    }))
  };

  const completeTaskHandler = (time) => {
    props.useMetronom && metronom.stop();
    const data = {
      tablesScore,
      time
    }
    props.onComplete && props.onComplete(data)
    setIsEnded(true)
  };

  const startTaskHandler = () => {
    setIsStarted(true);
    props.useMetronom && metronom.start()
  };

  return (
    <div>
      <CreateIntervalTask time={10} onStart={startTaskHandler} onComplete={completeTaskHandler}/>
      {isStarted &&
      <CheckTable data={tables} onCellClick={cellClickHandler} startTableIndex={currentTableIndex} disabled={isEnded}/>
      }
    </div>
  );
};

export default TestCreate;
