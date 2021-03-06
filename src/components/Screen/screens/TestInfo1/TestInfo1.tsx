import Instruction from "components/Test/Instruction/Instruction";
import {ScreenTypes} from "models/Screen.model";
import GoButton from "../../../GoButton/GoButton";
import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";

const TestInfo1 = () => {
  return (
    <>
      <CenterText>
        <p>Начиная с этого момента нам потребуется все Ваше внимание. Пожалуйста, уделите данное время лишь прохождению
          эксперимента.</p>

        <p>Мы просим Вас убрать со стола все средства подсчета времени (такие как часы, телефон, плеер или любое другое
          устройство). Использование любого из этих устройств не только подпортит данные нашего эксперимента, но и будет
          является абсолютно бессмысленным относительно Вашей выгоды от участия.</p>

        <Instruction>
          <b>Мы бы хотели еще раз поставить акцент на то, что Вам НЕ (!!!) нужно считать время, даже про себя.
            Исследование посвящено процессу ВОСПРИЯТИЯ времени, а не способности концентрироваться на счете.</b>
        </Instruction>

        <p>Пожалуйста, выключите звук и любые уведомления на всех своих устройствах прежде чем убрать их. Любое
          уведомление отвлечет Вас. Данная просьба лишь еще раз подчеркивает, насколько нам важно Ваше внимание в это
          время.</p>
      </CenterText>
      <Navigation>
        <div/>
        <GoButton to={ScreenTypes.TestInfo2}>
          Понятно
        </GoButton>
      </Navigation>
    </>
  );
};

export default TestInfo1;
