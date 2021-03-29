import {createSelector} from "reselect";
import {USER_STORE_KEY, UserState} from "./user.store";

const selectUserStore = (state): UserState => state[USER_STORE_KEY];

export const selectPoll = createSelector(
  selectUserStore,
  (store) => store.poll,
);

export const selectInfo = createSelector(
  selectUserStore,
  (store) => store.info,
);

export const selectPollIsCompleted = createSelector(
  selectPoll,
  (poll) => !!Object.keys(poll).length
)

export const selectInfoIsCompleted = createSelector(
  selectInfo,
  (info) => !!Object.keys(info).length
)

export const selectTestIsCompleted = true
