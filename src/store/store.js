// includes 3 middleware by default (redux-thunk, )
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// pass our own middleware so we don't have access to redux-thunk in this case
// only include the logger if we are in development mode
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// if you don't include a middleware property then it will include the default middleware
// that it ships with (redux-thunk etc)
// BUT if you want to include your middleware and their middleware you need to pass a function
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false // don't serialize or check any of the values coming into the store (solves non serializable error)
  }).concat(middleWares), // include all default middlewares and our custom middleware
});
