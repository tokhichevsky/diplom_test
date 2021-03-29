import React from "react";
import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import Button from "../../../UI/Button/Button";


const Warning = () => {
  // const dispatch = useDispatch();

  const onButtonClick = () => {
    // dispatch(setScreenByType(ScreenTypes.StartWarning));
  };

  // const onBackButtonClick = () => {
  //   dispatch(getBack())
  // }

  return (
    <>
      <CenterText>
        <p>Участие в данном эксперименте является добровольным. </p>
        <p>Вы можете остановить его в любой момент и покинуть комнату.</p>
        <p>Однако в таком случае ваши данные не войдут в конечную выборку.</p>
      </CenterText>
      <Navigation>
        <div />
        {/*<Button onClick={onBackButtonClick}>Назад</Button>*/}
        <Button onClick={onButtonClick}>Начать тестирование</Button>
      </Navigation>
    </>
  );
};

export default Warning;
