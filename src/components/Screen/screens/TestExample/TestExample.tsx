import Instruction from "../../../Test/Instruction/Instruction";
import CreateIntervalButton from "../../../Test/CreateIntervalButton/CreateIntervalButton";
import CenterText from "../../../UI/CenterText/CenterText";
import SignalButton from "../../../Test/SignalButton/SignalButton";
import TimeInputWindow from "../../../Test/TimeInputWindow/TimeInputWindow";
import Navigation from "../../../UI/Navigation/Navigation";
import {ScreenTypes} from "../../../../models/Screen.model";
import GoButton from "../../../GoButton/GoButton";

const TestExample = () => {
  return (
    <>
      <h2>Создание интервалов</h2>
      <p>Инструкция к этому заданию будет выглядеть так: </p>
      <Instruction>
        Создайте интервал в <b>23</b> секунды
      </Instruction>
      <p>Чтобы начать и закончить временной промежуток, нажмите на кнопку в правом верхнем углу экрана. Она будет
        выглядеть так: </p>
      <CenterText><CreateIntervalButton/></CenterText>
      <h2>Оценка интервала</h2>
      <p>В этой части мы просим вас оценить интервал, ограниченный двумя звуковыми сигналами.</p>
      <p>Нажмите на кнопку <b>Сигнал</b>, чтобы прослушать его сейчас. </p>
      <CenterText>
        <SignalButton/>
      </CenterText>
      <p>После второго сигнала (конец промежутка) Вы увидите окно, в котором сможете указать, сколько длился указанный
        промежуток времени по Вашему восприятию.</p>
      <CenterText>
        <TimeInputWindow/>
      </CenterText>
      <Navigation>
        <div />
        <GoButton to={ScreenTypes.TestTrainingInfo}>Понятно</GoButton>
      </Navigation>
    </>
  );
};

export default TestExample;
