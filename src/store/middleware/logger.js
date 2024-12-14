// custom logging middleware function
export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};
