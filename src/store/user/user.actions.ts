import {UserAction} from "./user.store";

export const setInfo = (info: { [name: string]: string }) => {
  return {
    type: UserAction.SET_INFO,
    payload: info,
  };
};

export const setPoll = (poll: { [name: string]: boolean }) => {
  return {
    type: UserAction.SET_POLL,
    payload: poll,
  };
};
