import Navigation from "../../../UI/Navigation/Navigation";
import React from "react";
import {ScreenTypes} from "../../../../models/Screen.model";
import GoButton from "../../../GoButton/GoButton";
import {selectPollIsCompleted, selectTestIsCompleted} from "../../../../store/user/user.selectors";
import {useSelector} from "react-redux";

const ChooseTest = () => {
  const isTestCompleted = useSelector(selectTestIsCompleted);
  const isPollCompleted = useSelector(selectPollIsCompleted);
  return (
    <>
      <Navigation>
        <GoButton disabled={isTestCompleted} to={ScreenTypes.TestInfo1}>Начать прохождение эксперимента</GoButton>
        <GoButton disabled={isPollCompleted} to={ScreenTypes.Poll}>Определить мой тип восприятия</GoButton>
      </Navigation>
      <Navigation>
        <div/>
        <GoButton
          disabled={!isTestCompleted || isPollCompleted}
          to={ScreenTypes.Finish}
        >
          Завершить эксперимент
        </GoButton>
      </Navigation>
    </>
  );
};

export default ChooseTest;
