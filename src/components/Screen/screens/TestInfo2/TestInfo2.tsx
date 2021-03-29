import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import {useDispatch} from "react-redux";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";

const TestInfo2 = () => {
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(setScreenByType(ScreenTypes.TestExample));
  };
  return (
    <>
      <CenterText>
        <p>Эксперимент проходит в три этапа.</p>

        <p>Первый этап будет проходить в тишине. Он нужен для определения Вашего индивидуального восприятия времени.
          Второй и третий этапы будут сопровождены определенными звуками. По результатом этих этапов мы сможем оценить
          влияние звука на Ваше восприятие времени.</p>

        <p>Каждый этап будет состоять из двух частей: создание временных интервалов и оценка временных интервалов.</p>
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

export default TestInfo2;
