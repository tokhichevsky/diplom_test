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

export const setTest = (stage: string | number, test: { [name: string]: {} }) => {
  return {
    type: UserAction.SET_TEST,
    payload: {[`stage_${stage}`]: test},
  };
};

export const setUserId = (id: number) => {
  return {
    type: UserAction.SET_USER_ID,
    payload: id
  }
}

export const setTableIndexes = (tableIndex: number, taskIndex: number = 0) => {
  return {
    type: UserAction.SET_TABLE_INDEX,
    payload: {tableIndex, taskIndex}
  };
};
