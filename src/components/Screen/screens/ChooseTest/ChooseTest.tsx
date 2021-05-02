import {postExperimentRequest} from "api";
import {AxiosError} from "axios";
import Instruction from "components/Test/Instruction/Instruction";
import Button from "components/UI/Button/Button";
import {ScreenTypes} from "models/Screen.model";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {
  selectPoll,
  selectPollIsCompleted,
  selectTest,
  selectTestIsCompleted,
  selectUserId
} from "store/user/user.selectors";
import GoButton from "../../../GoButton/GoButton";
import Navigation from "../../../UI/Navigation/Navigation";

const ChooseTest = () => {
  const [error, setError] = useState<AxiosError>(null);
  const isTestCompleted = useSelector(selectTestIsCompleted);
  const isPollCompleted = useSelector(selectPollIsCompleted);
  const test = useSelector(selectTest);
  const poll = useSelector(selectPoll);
  const id = useSelector(selectUserId);

  const finishButtonClickHandler = () => {
    postExperimentRequest({id, test, poll})
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <>
      <Navigation>
        <GoButton disabled={isTestCompleted} to={ScreenTypes.TestInfo1}>Начать прохождение эксперимента</GoButton>
        <GoButton disabled={isPollCompleted} to={ScreenTypes.Poll}>Определить мой тип восприятия</GoButton>
      </Navigation>
      {error && (
        <Instruction>
          <p>Произошла ошибка при сохранении данных</p>
          <Button onClick={finishButtonClickHandler}>Попробовать снова</Button>
        </Instruction>
      )}
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
