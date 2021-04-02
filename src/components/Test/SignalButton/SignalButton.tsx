import Button from "../../UI/Button/Button";
import {playSound} from "../../../models/Test.model";

const SignalButton = () => {
  const buttonClickHandler = () => {
    playSound();
  }
  return (
    <Button onClick={buttonClickHandler}>♫ Сигнал</Button>
  )
}

export default SignalButton;
