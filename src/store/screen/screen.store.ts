import {ScreenElement} from "models/Screen.model";

export const SCREEN_STORE_KEY = "screen"

export const ScreenAction = {
  SET_SCREEN: "SCREEN/SET_SCREEN",
  GET_BACK: "SCREEN/GET_BACK"
}

export interface ScreenState {
  screen: ScreenElement[]
}
