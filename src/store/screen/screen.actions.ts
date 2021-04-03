import {ScreenElement, ScreenTypes} from "../../models/Screen.model";
import {ScreenAction} from "./screen.store";
import {ScreenMap} from "../../components/Screen/ScreenMap";

export const setScreen = (nextScreen: ScreenElement) => {
  return {
    type: ScreenAction.SET_SCREEN,
    payload: nextScreen,
  };
};

export const setScreenByType = (screenType: ScreenTypes) => setScreen(ScreenMap.get(screenType));


export const setFinishScreen = () => ({
  type: ScreenAction.SET_SCREEN,
  payload: {
    token: ScreenTypes.Finish,
  },
});


export const getBack = () => ({type: ScreenAction.GET_BACK});
