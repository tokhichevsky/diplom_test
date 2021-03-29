import IntervalButton from "./IntervalButton/IntervalButton";
import RoundButton from "../UI/RoundButton/RoundButton";
import {metronom} from "../../models/Test.model";
import {Metronom} from "../../models/Metronom";

const Test = () => {
  const onClick = (d) => {
    console.log(d);
  };
  const onClick2 = () => {
    if (metronom.status !== Metronom.Status.Started) metronom.start();
    else metronom.stop();
  };
  return (
    <>
      <IntervalButton onChange={onClick}/>
      <RoundButton onClick={onClick2}>Test Metronom</RoundButton>
    </>
  );
};

export default Test;
