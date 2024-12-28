// includes 3 middleware by default (redux-thunk, )
import { configureStore } from "@reduxjs/toolkit";
// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// pass our own middleware so we don't have access to redux-thunk in this case
// only include the logger if we are in development mode
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// if you don't include a middleware property then it will include the default middleware
// that it ships with (redux-thunk etc)
export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares,
});

// export const persistor = persistStore(store);
