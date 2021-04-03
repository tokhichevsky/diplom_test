import Navigation from "../../../UI/Navigation/Navigation";
import React from "react";
import {ScreenTypes} from "../../../../models/Screen.model";
import GoButton from "../../../GoButton/GoButton";
import {
  selectPoll,
  selectPollIsCompleted,
  selectTest,
  selectTestIsCompleted, selectUserId
} from "../../../../store/user/user.selectors";
import {useSelector} from "react-redux";
import {postExperimentRequest} from "../../../../api";

const ChooseTest = () => {
  const isTestCompleted = useSelector(selectTestIsCompleted);
  const isPollCompleted = useSelector(selectPollIsCompleted);
  const test = useSelector(selectTest);
  const poll = useSelector(selectPoll);
  const id = useSelector(selectUserId);

  const finishButtonClickHandler = () => {
    postExperimentRequest({id, test, poll});
  }
  return (
    <>
      <Navigation>
        <GoButton disabled={isTestCompleted} to={ScreenTypes.TestInfo1}>Начать прохождение эксперимента</GoButton>
        <GoButton disabled={isPollCompleted} to={ScreenTypes.Poll}>Определить мой тип восприятия</GoButton>
      </Navigation>
      <Navigation>
        <div/>
        <GoButton
          disabled={!isTestCompleted || !isPollCompleted}
          onClick={finishButtonClickHandler}
          to={ScreenTypes.Finish}
        >
          Завершить эксперимент
        </GoButton>
      </Navigation>
    </>
  );
};

export default ChooseTest;
