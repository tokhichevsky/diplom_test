import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";
import React from "react";
import {useDispatch} from "react-redux";
import {setScreenByType} from "../../../../store/screen/screen.actions";
import {ScreenTypes} from "../../../../models/Screen.model";

const ChooseTest = () => {
  const dispatch = useDispatch();

  const buttonEndClickHandler = () => {
    dispatch(setScreenByType(ScreenTypes.Finish))
  }

  const buttonTestClickHandler = () => {
    dispatch(setScreenByType(ScreenTypes.TestInfo1))
  }

  const buttonPollClickHandler = () => {
    dispatch(setScreenByType(ScreenTypes.Poll))
  }
  return (
    <>
      <Navigation>
        <Button onClick={buttonTestClickHandler}>Начать прохождение эксперимента</Button>
        <Button onClick={buttonPollClickHandler}>Определить мой тип восприятия</Button>
      </Navigation>
      <Navigation>
        <div />
        <Button onClick={buttonEndClickHandler}>Понятно</Button>
      </Navigation>
    </>
  )
}

export default ChooseTest;
