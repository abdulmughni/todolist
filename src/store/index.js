import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
};

export { initStore };
