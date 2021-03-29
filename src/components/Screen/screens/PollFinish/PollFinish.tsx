import {useDispatch, useSelector} from "react-redux";
import {selectPoll} from "../../../../store/user/user.selectors";
import {calculatePerceptionChannel, getResultsStringArray} from "./PollFinish.model";
import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";

const PollFinish = () => {
  const poll = useSelector(selectPoll);
  const results = calculatePerceptionChannel(poll);
  const textArray = getResultsStringArray(results);
  const dispatch = useDispatch();

  const buttonEndClickHandler = () => {
    dispatch(setScreenByType(ScreenTypes.ChooseTest));
  }
  return (
    <>
      <h2>Результаты</h2>
      <CenterText>
        {textArray.map((text, index) => (
          <p>{text}</p>
        ))}
      </CenterText>
      <Navigation>
        <div />
        <Button
          onClick={buttonEndClickHandler}
        >
          Закончить
        </Button>
      </Navigation>
    </>
  );
};

export default PollFinish;
