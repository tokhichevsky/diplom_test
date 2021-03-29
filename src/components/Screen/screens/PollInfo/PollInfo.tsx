import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import React from "react";
import {useDispatch} from "react-redux";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";

const PollInfo = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(setScreenByType(ScreenTypes.ChooseTest));
  };
  return (
    <>
      <CenterText>
        <p>Помимо прохождения основного эксперимента мы просим Вас пройти небольшой тест на определение Вашего
          доминирующего типа восприятия. Тест состоит из 48 простых вопросов. По завершении теста Вам будет показаны
          результаты, а также краткое описание Вашего типа. </p>
        <p>Вы можете пройти данный тест как до, так и после основной части эксперимента. Однако, без его прохождения мы
          не
          сможем учесть Ваши экспериментальные данные в нашем исследовании. </p>
      </CenterText>
      <Navigation>
        <div/>
        <Button onClick={onButtonClick}>Понятно</Button>
      </Navigation>
    </>
  );
};

export default PollInfo;
