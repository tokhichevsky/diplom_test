import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {saveToLocalStorage} from "store/middlewares";
import {SCREEN_STORE_KEY} from "./screen/screen.store";
import {screenReducer} from "./screen/screen.reducer";
import {USER_STORE_KEY} from "./user/user.store";
import {userReducer} from "./user/user.reducer";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  [SCREEN_STORE_KEY]: screenReducer,
  [USER_STORE_KEY]: userReducer
})


// const devTools = process.env.NODE_ENV === "development"
//   // @ts-ignore
//   ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   : undefined;
export const store = createStore(appReducer, composeEnhancers(applyMiddleware(saveToLocalStorage)));
