import {UserAction, UserState} from "./user.store";

export const initialState: UserState = {
  info: {},
  poll: {}
};

export function userReducer(state: UserState = initialState, action): UserState {
  switch (action.type) {
    case UserAction.SET_POLL: {
      return {
        ...state,
        poll: action.payload,
      };
    }

    case UserAction.SET_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }

    default:
      return state;
  }
}
