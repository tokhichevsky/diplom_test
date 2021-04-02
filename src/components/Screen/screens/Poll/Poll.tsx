import PollQuestion from "./PollQuestion/PollQuestion";
import {useCallback, useState} from "react";
import CSS from "./Poll.module.scss";
import Navigation from "../../../UI/Navigation/Navigation";
import {useDispatch} from "react-redux";
import {setPoll} from "../../../../store/user/user.actions";
import {ScreenTypes} from "../../../../models/Screen.model";
import {questions} from "../../../../models/Poll.model";
import GoButton from "../../../GoButton/GoButton";

const Poll = () => {
  const [pollState, setPollState] = useState({});
  const dispatch = useDispatch();

  const answerChangeHandler = useCallback((name: string, value: boolean) => {
    setPollState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const completed = Object.values(pollState).length === questions.length

  const buttonEndClickHandler = () => {
    dispatch(setPoll(pollState))
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
        <GoButton
          disabled={!completed}
          onClick={buttonEndClickHandler}
          to={ScreenTypes.PollFinish}
        >
          Закончить
        </GoButton>
      </Navigation>
    </div>
  );
};

export default Poll;
