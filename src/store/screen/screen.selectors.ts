import { createSelector } from 'reselect';
import {SCREEN_STORE_KEY, ScreenState} from "./screen.store";

const selectScreenStore = (state): ScreenState => state[SCREEN_STORE_KEY];

export const selectScreens = createSelector(
  selectScreenStore,
  (store) => store.screen,
);

export const selectCurrentScreen = createSelector(
  selectScreens,
  (screens) => {
    const index = Math.max(screens.length - 1, 0);
    return screens[index];
  },
);
