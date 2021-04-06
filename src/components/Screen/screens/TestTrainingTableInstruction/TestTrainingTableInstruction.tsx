import CheckTable from "../../../Test/CheckTable/CheckTable";
import {ExampleTable1, ExampleTable2} from "./TestTrainingTableInstruction.model";
import Navigation from "../../../UI/Navigation/Navigation";
import GoButton from "../../../GoButton/GoButton";
import {ScreenTypes} from "../../../../models/Screen.model";

const TestTrainingTableInstruction = () => {
  return (
    <>
      <h2>Немного информации о таблицах</h2>
      <p>Чтобы убедиться, что Вы не считаете время, мы попросим Вас выполнять дополнительные задачи во время прохождения
        всего эксперимента.</p>

      <p>На Вашем экране будут появляться таблицы 4×6 и соответствующие инструкции о том, на какую клетку таблицы
        необходимо нажать. Таблицы и инструкции к ним будут меняться каждый раз после нажатия на ячейку.</p>

      <p>Одна из таблиц может выглядеть так:</p>
      <CheckTable data={[ExampleTable1]} disabled showCorrectAnswer/>
      <p>Или так:</p>
      <CheckTable data={[ExampleTable2]} disabled showCorrectAnswer/>
      <p>Будьте внимательны. При большом количестве неправильных ответов, нам придется исключить Ваши данные из
        эксперимента.</p>
      <Navigation>
        <div />
        <GoButton to={ScreenTypes.TestStage1}>Начать эксперимент</GoButton>
      </Navigation>
    </>
  );
};

export default TestTrainingTableInstruction;
