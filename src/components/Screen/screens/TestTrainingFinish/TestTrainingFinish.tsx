import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import GoButton from "../../../GoButton/GoButton";
import {ScreenTypes} from "../../../../models/Screen.model";

const TestTrainingFinish = () => {
  return (
    <>
      <CenterText>
        Вы молодец! Отлично справились с тренировкой!
      </CenterText>
      <Navigation>
        <div/>
        <GoButton to={ScreenTypes.TestTrainingTableInstruction}>Перейти к эксперименту</GoButton>
      </Navigation>
    </>
  );
};

export default TestTrainingFinish;
