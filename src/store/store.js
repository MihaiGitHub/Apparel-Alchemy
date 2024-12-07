import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// custom logging middleware function
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

// runs before the action hits the reducer
const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// undefined is an optional second parameter
export const store = createStore(rootReducer, undefined, composedEnhancers);
