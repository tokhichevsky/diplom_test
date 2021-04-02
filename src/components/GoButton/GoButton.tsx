import {GoButtonProps} from "./GoButton.model";
import Button from "../UI/Button/Button";
import {useDispatch} from "react-redux";
import {setScreenByType} from "../../store/screen/screen.actions";

const GoButton = (props:GoButtonProps) => {
  const {to, onClick, ...buttonProps} = props;
  const dispatch = useDispatch()

  const clickHandler = () => {
    onClick && onClick()
    dispatch(setScreenByType(to))
  }

  return (
    <Button {...buttonProps} onClick={clickHandler}>{props.children}</Button>
  )
}

export default GoButton;
