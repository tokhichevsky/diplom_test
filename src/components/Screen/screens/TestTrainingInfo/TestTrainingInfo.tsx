import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import {ScreenTypes} from "../../../../models/Screen.model";
import GoButton from "../../../GoButton/GoButton";

const TestTrainingInfo = () => {
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
        <GoButton to={ScreenTypes.TestTrainingTableInstruction}>Попробовать</GoButton>
      </Navigation>
    </>
  );
};

export default TestTrainingInfo;
