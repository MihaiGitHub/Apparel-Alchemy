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
export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares,
});
