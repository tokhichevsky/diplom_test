import {UserAction, UserState} from "./user.store";

export const initialState: UserState = {
  info: {},
  poll: {},
  test: {},
  table: {
    tableIndex: 0,
    taskIndex: 0
  }
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

    case UserAction.SET_TEST: {
      return {
        ...state,
        test: {
          ...state.test,
          ...action.payload
        },
      };
    }

    case UserAction.SET_TABLE_INDEX: {
      return {
        ...state,
        table: action.payload,
      };
    }

    case UserAction.SET_USER_ID: {
      return {
        ...state,
        id: action.payload,
      };
    }

    default:
      return state;
  }
}
