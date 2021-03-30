import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import {useDispatch} from "react-redux";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";

const TestTrainingInfo = () => {
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(setScreenByType(ScreenTypes.TestTrainingCreate));
  }
  return (
    <>
      <CenterText>
        <p>Давайте потренируемся!</p>

        <p>Сейчас Вы сможете попробовать оценить и воссоздать по одному интервалу.</p>

        <p>Обращаем Ваше внимание на то, что эти интервалы не будут отображаться в собранных данных и нужны лишь для
          демонстрации предстоящих задач.</p>
      </CenterText>
      <Navigation>
        <div />
        <Button onClick={buttonClickHandler}>Попробовать</Button>
      </Navigation>
    </>
  );
};

export default TestTrainingInfo;
