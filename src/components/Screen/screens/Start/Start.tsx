import React from "react";
import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import {ScreenTypes} from "../../../../models/Screen.model";
import GoButton from "../../../GoButton/GoButton";
import Instruction from "../../../Test/Instruction/Instruction";
import detectedBrowser from "../../../../browser";


const Start = () => {
  const isNotSupport = detectedBrowser.name === "safari";
  const isMobile = detectedBrowser.mobile;
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
        <Instruction>
          <b>Внимание! Заключительной страницей сайта является страница со словами благодарности и обратной связью.
            Обращаем Ваше внимание на то,что Ваши данные запишутся в базу только в том случае, если вы дойдете до этой
            страницы.</b>
        </Instruction>
        {isNotSupport &&
        <>
          <br/>
          <Instruction>
            Данный браузер ({detectedBrowser.name} {detectedBrowser.version}) не поддерживается!
          </Instruction>
          <br/>
        </>
        }

        {isMobile &&
        <Instruction>
          Данный эксперимент необходимо проходить на настольном компьютере!
        </Instruction>
        }
      </CenterText>
      <Navigation>
        <div/>
        <GoButton to={ScreenTypes.SignUp} disabled={isMobile || isNotSupport}>Понятно</GoButton>
      </Navigation>
    </>
  );
}
;

export default Start;
