import {USER_STORE_KEY, UserAction} from "store/user/user.store";

export const saveToLocalStorage = store => next => action => {
  const dispatchedAction = next(action);

  if (Object.values(UserAction).includes(dispatchedAction.type)) {
    localStorage.setItem(USER_STORE_KEY, JSON.stringify(store.getState().user));
  }

  return dispatchedAction;
};
