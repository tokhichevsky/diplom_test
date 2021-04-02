import {ScreenTypes} from "models/Screen.model";
import {ScreenAction, ScreenState} from "./screen.store";
import {ScreenMap} from "../../components/Screen/ScreenMap";

const debugPage = new URLSearchParams(window.location.search).get("debug")
console.log(debugPage, ScreenTypes[debugPage])
export const initialState: ScreenState = {
  screen: [
    ScreenMap.get((debugPage && ScreenTypes[debugPage]) || ScreenTypes.Start)
  ],
};

export function screenReducer(state: ScreenState = initialState, action): ScreenState {
  switch (action.type) {
    case ScreenAction.SET_SCREEN: {
      const newScreens = [...state.screen];
      newScreens.push(action.payload);
      console.log(newScreens)
      return {
        ...state,
        screen: newScreens,
      };
    }

    case ScreenAction.GET_BACK: {
      return {
        ...state,
        screen: state.screen.slice(0, -1),
      };
    }

    default:
      return state;
  }
}
