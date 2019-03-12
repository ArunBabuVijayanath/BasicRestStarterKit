//middle layer is updated before store is updated
//first param is reducer and second is initial state and 3rd one is middilewares
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import mediaReducer from "./reducers/mediaReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
  combineReducers({
    mediaReducer,
    userReducer
  }),
  {},
  applyMiddleware(createLogger(), thunk, promise)
);
