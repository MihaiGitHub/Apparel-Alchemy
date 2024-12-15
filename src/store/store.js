import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { loggerMiddleware } from "./middleware/logger";
// redux thunk allows actions to be passed as functions
import { thunk } from "redux-thunk";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], // values of which reducer you DON'T want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// runs before the action hits the reducer ONLY if the env is not production and keeps the middleware only if in dev
const middleWares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
  thunk,
].filter(Boolean);

// if we are in dev environment and if these dev tools exist OTHERWISE just use the compose that we have from Redux
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// undefined is an optional second parameter
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
