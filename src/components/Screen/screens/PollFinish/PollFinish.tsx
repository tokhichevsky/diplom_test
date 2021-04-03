import {useSelector} from "react-redux";
import {selectPoll} from "../../../../store/user/user.selectors";
import {calculatePerceptionChannel, getPerceptionChannel} from "./PollFinish.model";
import CenterText from "../../../UI/CenterText/CenterText";
import Navigation from "../../../UI/Navigation/Navigation";
import {ScreenTypes} from "../../../../models/Screen.model";
import GoButton from "../../../GoButton/GoButton";
import {NameByPerceptionChannelType} from "../../../../models/Poll.model";
import PerceptionChannelDescription from "./PerceptionChannelDescription";
import PerceptionChannelScore from "./PerceptionChannelScore";

const PollFinish = () => {
  const poll = useSelector(selectPoll);
  const results = calculatePerceptionChannel(poll);
  const perceptionChannel = getPerceptionChannel(results);

  return (
    <>
      <h2>Результаты</h2>
      <h3>Поздравляем, Вы — {NameByPerceptionChannelType[perceptionChannel]}</h3>
      <CenterText>
        {PerceptionChannelDescription[perceptionChannel]}
      </CenterText>
      <CenterText>
        <PerceptionChannelScore results={results} />
      </CenterText>
      <Navigation>
        <div />
        <GoButton to={ScreenTypes.ChooseTest}>
          Закончить
        </GoButton>
      </Navigation>
    </>
  );
};

export default PollFinish;
