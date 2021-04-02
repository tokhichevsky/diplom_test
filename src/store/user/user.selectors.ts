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

export const selectTest = createSelector(
  selectUserStore,
  (store) => store.test,
);

export const selectPollIsCompleted = createSelector(
  selectPoll,
  (poll) => !!Object.keys(poll).length
);

export const selectInfoIsCompleted = createSelector(
  selectInfo,
  (info) => !!Object.keys(info).length
);

export const selectTestIsCompleted = createSelector(
  selectTest,
  (test) => !!Object.keys(test).length
);

export const selectTableIndexes = createSelector(
  selectUserStore,
  (store) => store.table
);

export const selectUserId = createSelector(
  selectUserStore,
  (store) => store.id
);

export const selectIsEvenUser = createSelector(
  selectUserId,
  (id) => id % 2 === 0
);


