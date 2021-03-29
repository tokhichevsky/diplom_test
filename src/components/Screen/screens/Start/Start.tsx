import React from "react";
import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";
import {useDispatch} from "react-redux";


const Start = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(setScreenByType(ScreenTypes.SignUp));
  };

  return (
    <>
      <CenterText>
        <p>Добрый день!</p>
        <p>Спасибо, что согласились участвовать в нашем эксперименте.</p>
        <p>
          Участие в данном эксперименте является добровольным. Вы можете остановить его в любой момент и закрыть
          вкладку сайта. Однако в таком случае Ваши данные не войдут в конечную выборку.
        </p>
        <p>
          Мы просим Вас проходить основную часть эксперимента в наушниках. Пожалуйста, убедитесь, что они имеются у Вас
          в данный момент прежде, чем приступить.
        </p>
      </CenterText>
      <Navigation>
        <div/>
        <Button onClick={onButtonClick}>Понятно</Button>
      </Navigation>
    </>
  );
};

export default Start;
