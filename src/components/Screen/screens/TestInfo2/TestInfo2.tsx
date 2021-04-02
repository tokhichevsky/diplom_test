import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import {ScreenTypes} from "../../../../models/Screen.model";
import GoButton from "../../../GoButton/GoButton";

const TestInfo2 = () => {
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
        <GoButton to={ScreenTypes.TestExample}>
          Понятно
        </GoButton>
      </Navigation>
    </>
  );
};

export default TestInfo2;
