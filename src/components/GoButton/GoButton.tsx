import {AxiosPromise} from "axios";
import {useDispatch} from "react-redux";
import {setScreenByType} from "store/screen/screen.actions";
import Button from "../UI/Button/Button";
import {GoButtonProps} from "./GoButton.model";

const GoButton = (props: GoButtonProps) => {
  const {to, onClick, ...buttonProps} = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    const promise: AxiosPromise | null | void = onClick ? onClick() : null;
    if (promise instanceof Promise) {
      promise.then(() => {
        dispatch(setScreenByType(to));
      });
    } else {
      dispatch(setScreenByType(to));
    }
  };

  return (
    <Button {...buttonProps} onClick={clickHandler}>{props.children}</Button>
  );
};

export default GoButton;
