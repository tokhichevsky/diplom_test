import {combineReducers, createStore} from "redux";
import {SCREEN_STORE_KEY} from "./screen/screen.store";
import {screenReducer} from "./screen/screen.reducer";
import {USER_STORE_KEY} from "./user/user.store";
import {userReducer} from "./user/user.reducer";

// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  [SCREEN_STORE_KEY]: screenReducer,
  [USER_STORE_KEY]: userReducer
})

export const store = createStore(appReducer);
