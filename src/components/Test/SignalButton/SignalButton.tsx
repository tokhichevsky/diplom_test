import Button from "../../UI/Button/Button";
import {metronom} from "../../../models/Test.model";

const SignalButton = () => {
  const buttonClickHandler = () => {
    metronom.playClickSound();
  }
  return (
    <Button onClick={buttonClickHandler}>♫ Сигнал</Button>
  )
}

export default SignalButton;
