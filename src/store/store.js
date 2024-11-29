import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// runs before the action hits the reducer
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// undefined is an optional second parameter
export const store = createStore(rootReducer, undefined, composedEnhancers);
