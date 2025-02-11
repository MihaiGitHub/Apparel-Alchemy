import { AnyAction } from "redux";

// a type we implement to extend all the different action creator functions with an
// ability to match the received action by the type that the action creator is associated to
// AC = action creator; that returns back AnyAction
// type: ReturnType<AC>["type"]; = get the ReturnType (the action itself) and from this value get the type from the type property and set it to this "type:"
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

// receives an action creator and creates a new matchable type out of that action creator
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

// type takes in some generic T and some generic P
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// we know the first argument is a string
// returns a type of ActionWithPayload
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

// overload same function
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
