import {AxiosPromise} from "axios";
import {ScreenTypes} from "models/Screen.model";
import {ButtonProps} from "../UI/Button/Button.model";

export interface GoButtonProps extends ButtonProps {
  to: ScreenTypes,
  onClick?: () => void | AxiosPromise;
}
