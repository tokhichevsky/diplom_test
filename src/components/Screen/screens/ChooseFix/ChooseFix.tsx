import GoButton from "components/GoButton/GoButton";
import Navigation from "components/UI/Navigation/Navigation";
import {ScreenTypes} from "models/Screen.model";
import {externalId} from "settings";

const ChooseFix = () => {
  if (!externalId) {
    throw new Error("Invalid external ID")
  }

  return (
    <>
      <h2>Выберите этап, который хотите исправить:</h2>
      <Navigation>
        {/*<GoButton to={ScreenTypes.Poll}>Опрос</GoButton>*/}
        <GoButton to={ScreenTypes.TestStage1}>Эксперимент: Этап 1</GoButton>
        <GoButton to={ScreenTypes.TestEnableHeadphone}>Эксперимент: Этап 2</GoButton>
        <GoButton to={ScreenTypes.TestStage3}>Эксперимент: Этап 3</GoButton>
      </Navigation>
    </>
  );
};

export default ChooseFix;
