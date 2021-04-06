import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import GoButton from "../../../GoButton/GoButton";
import {ScreenTypes} from "../../../../models/Screen.model";

const TestEnableHeadphone = () => {
  return (
    <>
      <CenterText>
        Напоминаем Вам, что второй и третий этапы необходимо проходить наушниках. Пожалуйста, подключите свои наушники и
        наденьте их перед тем,как нажать кнопку Продолжить.
      </CenterText>
      <Navigation>
        <div/>
        <GoButton to={ScreenTypes.TestStage2}>Продолжить</GoButton>
      </Navigation>
    </>
  );
};

export default TestEnableHeadphone;
