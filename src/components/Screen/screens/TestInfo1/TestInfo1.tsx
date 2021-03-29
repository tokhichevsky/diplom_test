import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import {useDispatch} from "react-redux";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";

const TestInfo1 = () => {
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(setScreenByType(ScreenTypes.TestInfo2));
  }
  return (
    <>
      <CenterText>
        <p>Начиная с этого момента нам потребуется все Ваше внимание. Пожалуйста, уделите данное время лишь прохождению
          эксперимента.</p>

        <p>Мы просим Вас убрать со стола все средства подсчета времени (такие как часы, телефон, плеер или любое другое
          устройство). Использование любого из этих устройств не только подпортит данные нашего эксперимента, но и будет
          является абсолютно бессмысленным относительно Вашей выгоды от участия.</p>

        <p>Пожалуйста, выключите звук и любые уведомления на всех своих устройствах прежде чем убрать их. Любое
          уведомление отвлечет Вас. Данная просьба лишь еще раз подчеркивает, насколько нам важно Ваше внимание в это
          время.</p>
      </CenterText>
      <Navigation>
        <div />
        <Button onClick={buttonClickHandler}>
          Понятно
        </Button>
      </Navigation>
    </>
  );
};

export default TestInfo1;
