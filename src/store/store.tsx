import { legacy_createStore as createStore, combineReducers } from "redux";
import profile from "./profile";
import login from "./login";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const rootReducer = combineReducers({
  profile,
  login,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
