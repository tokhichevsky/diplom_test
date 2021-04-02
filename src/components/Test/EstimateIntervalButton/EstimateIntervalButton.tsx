import {playSound} from "../../../models/Test.model";
import Button from "../../UI/Button/Button";
import {EstimateIntervalButtonProps} from "./EstimateIntervalButton.model";
import {useState} from "react";

const EstimateIntervalButton = (props: EstimateIntervalButtonProps) => {
  const [isListened, setIsListened] = useState(false);
  const buttonClickHandler = () => {
    if (!isListened) {
      setIsListened(true);
      playSound();
      setTimeout(() => {
        playSound();
        props.onComplete && props.onComplete();
      }, props.time * 1000);
      props.onStart && props.onStart();
    }
  };
  return (
    <Button className={props.className} onClick={buttonClickHandler} disabled={isListened}>♫ Прослушать интервал</Button>
  );
};

export default EstimateIntervalButton;
