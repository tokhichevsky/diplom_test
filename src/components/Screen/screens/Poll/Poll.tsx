import PollQuestion from "./PollQuestion/PollQuestion";
import {useCallback, useState} from "react";
import CSS from "./Poll.module.scss";
import Button from "../../../UI/Button/Button";
import Navigation from "../../../UI/Navigation/Navigation";
import {useDispatch} from "react-redux";
import {setPoll} from "../../../../store/user/user.actions";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";
import {questions} from "../../../../models/Poll.model";

const Poll = () => {
  const [pollState, setPollState] = useState({});
  const dispatch = useDispatch();

  const answerChangeHandler = useCallback((name: string, value: boolean) => {
    setPollState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const completed = Object.values(pollState).reduce((completed, value) => completed && typeof value === "boolean", true)

  const buttonEndClickHandler = () => {
    dispatch(setPoll(pollState))
    dispatch(setScreenByType(ScreenTypes.PollFinish));
  }

  // const buttonTestClickHandler = () => {
  //   dispatch(setPoll(pollState))
  //   // dispatch(setScreenByType(ScreenTypes.Poll))
  // }
  //
  // const isTestCompleted = selectTestIsCompleted;

  return (
    <div className={CSS.Poll}>
      {questions.map((question, index) => {
        const name = `question_${index}`;
        return (<PollQuestion
          className={CSS.Poll__question}
          key={name}
          question={question}
          onChange={answerChangeHandler.bind(null, name)}
          value={pollState[name]}
          name={name}
        />);
      })}
      <Navigation>
        <div />
        <Button
          disabled={!completed}
          onClick={buttonEndClickHandler}
        >
          Закончить
        </Button>
      </Navigation>
    </div>
  );
};

export default Poll;
